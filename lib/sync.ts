/**
 * Optional Supabase cross-device sync for progress data.
 * Users remain anonymous unless they opt in to create an account.
 * Email capture is a byproduct of account creation, NEVER required to access content.
 */

import { createClient } from '@supabase/supabase-js'
import { getProgress, saveProgress, type ProgressState } from './progress'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface SyncUser {
  id: string
  email: string
}

export async function getCurrentUser(): Promise<SyncUser | null> {
  const { data } = await supabase.auth.getUser()
  if (!data.user) return null
  return { id: data.user.id, email: data.user.email! }
}

export async function signUp(email: string, password: string): Promise<{ error: string | null }> {
  const { error } = await supabase.auth.signUp({ email, password })
  if (error) return { error: error.message }

  // After signup, push local progress to cloud
  await pushProgressToCloud()
  return { error: null }
}

export async function signIn(email: string, password: string): Promise<{ error: string | null }> {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return { error: error.message }

  // After sign-in, merge cloud progress into local (cloud wins on XP, merge lessons)
  await pullProgressFromCloud()
  return { error: null }
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut()
}

export async function pushProgressToCloud(): Promise<void> {
  const user = await getCurrentUser()
  if (!user) return

  const state = getProgress()
  const { error } = await supabase
    .from('user_progress')
    .upsert(
      {
        user_id: user.id,
        progress_json: state,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    )

  if (error) console.error('[sync] push failed:', error.message)
}

export async function pullProgressFromCloud(): Promise<void> {
  const user = await getCurrentUser()
  if (!user) return

  const { data, error } = await supabase
    .from('user_progress')
    .select('progress_json')
    .eq('user_id', user.id)
    .single()

  if (error || !data) return

  const cloudState = data.progress_json as ProgressState
  const localState = getProgress()

  // Merge: take higher XP, union completed lessons, union badges
  const merged: ProgressState = {
    ...localState,
    xp: Math.max(localState.xp, cloudState.xp),
    streak: Math.max(localState.streak, cloudState.streak),
    streakLastDate: localState.streakLastDate ?? cloudState.streakLastDate,
    lastVisited: localState.lastVisited ?? cloudState.lastVisited,
    badges: Array.from(new Set([...localState.badges, ...cloudState.badges])),
    modules: mergeModules(localState.modules, cloudState.modules),
  }

  saveProgress(merged)
}

function mergeModules(
  local: ProgressState['modules'],
  cloud: ProgressState['modules']
): ProgressState['modules'] {
  const merged = { ...local }
  for (const [moduleId, cloudMod] of Object.entries(cloud)) {
    if (!merged[moduleId]) {
      merged[moduleId] = cloudMod
    } else {
      // Union lessons
      const mergedLessons = { ...merged[moduleId].lessons }
      for (const [lessonId, cloudLesson] of Object.entries(cloudMod.lessons)) {
        if (cloudLesson.completed && !mergedLessons[lessonId]?.completed) {
          mergedLessons[lessonId] = cloudLesson
        }
      }
      merged[moduleId] = {
        completed: merged[moduleId].completed || cloudMod.completed,
        completedAt: merged[moduleId].completedAt ?? cloudMod.completedAt,
        lessons: mergedLessons,
      }
    }
  }
  return merged
}

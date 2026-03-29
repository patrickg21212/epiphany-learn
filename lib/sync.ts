/**
 * Firebase cross-device sync for progress data.
 * Users remain anonymous unless they opt in to create an account.
 * Email capture is a byproduct of account creation, NEVER required to access content.
 */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "./firebase"
import { getProgress, saveProgress, type ProgressState } from "./progress"

export interface SyncUser {
  id: string
  email: string
}

export async function getCurrentUser(): Promise<SyncUser | null> {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      if (user?.email) {
        resolve({ id: user.uid, email: user.email })
      } else {
        resolve(null)
      }
    })
  })
}

export async function signUp(email: string, password: string): Promise<{ error: string | null }> {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    await pushProgressToCloud()
    return { error: null }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Signup failed"
    // Clean up Firebase error messages
    if (message.includes("auth/email-already-in-use")) return { error: "An account with this email already exists. Try signing in." }
    if (message.includes("auth/weak-password")) return { error: "Password must be at least 6 characters." }
    if (message.includes("auth/invalid-email")) return { error: "Please enter a valid email address." }
    return { error: message }
  }
}

export async function signIn(email: string, password: string): Promise<{ error: string | null }> {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    await pullProgressFromCloud()
    return { error: null }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Sign in failed"
    if (message.includes("auth/invalid-credential") || message.includes("auth/wrong-password")) return { error: "Incorrect email or password." }
    if (message.includes("auth/user-not-found")) return { error: "No account found with this email." }
    if (message.includes("auth/too-many-requests")) return { error: "Too many attempts. Please wait a moment and try again." }
    return { error: message }
  }
}

export async function signOut(): Promise<void> {
  await firebaseSignOut(auth)
}

export async function pushProgressToCloud(): Promise<void> {
  const user = auth.currentUser
  if (!user) return

  const state = getProgress()
  try {
    await setDoc(doc(db, "user_progress", user.uid), {
      progress_json: JSON.parse(JSON.stringify(state)),
      updated_at: new Date().toISOString(),
    })
  } catch (err) {
    console.error("[sync] push failed:", err)
  }
}

export async function pullProgressFromCloud(): Promise<void> {
  const user = auth.currentUser
  if (!user) return

  try {
    const snap = await getDoc(doc(db, "user_progress", user.uid))
    if (!snap.exists()) {
      // First sign-in on this device — push local progress up
      await pushProgressToCloud()
      return
    }

    const cloudState = snap.data().progress_json as ProgressState
    const localState = getProgress()

    const merged: ProgressState = {
      ...localState,
      xp: Math.max(localState.xp, cloudState.xp ?? 0),
      streak: Math.max(localState.streak, cloudState.streak ?? 0),
      streakLastDate: localState.streakLastDate ?? cloudState.streakLastDate,
      lastVisited: localState.lastVisited ?? cloudState.lastVisited,
      badges: Array.from(new Set([...(localState.badges ?? []), ...(cloudState.badges ?? [])])),
      unlockedRewards: Array.from(new Set([...(localState.unlockedRewards ?? []), ...(cloudState.unlockedRewards ?? [])])),
      modules: mergeModules(localState.modules, cloudState.modules ?? {}),
    }

    saveProgress(merged)
  } catch (err) {
    console.error("[sync] pull failed:", err)
  }
}

function mergeModules(
  local: ProgressState["modules"],
  cloud: ProgressState["modules"]
): ProgressState["modules"] {
  const merged = { ...local }
  for (const [moduleId, cloudMod] of Object.entries(cloud)) {
    if (!merged[moduleId]) {
      merged[moduleId] = cloudMod
    } else {
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

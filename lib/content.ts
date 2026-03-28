/**
 * Content loading utilities for MDX lessons and module metadata
 * Reads from /content/module-X/ directory structure
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface LessonMeta {
  id: string
  moduleId: string
  slug: string
  title: string
  subtitle: string
  estimatedMinutes: number
  xpReward: number
}

export interface ModuleMeta {
  id: string
  title: string
  subtitle: string
  description: string
  estimatedMinutes: number
  xpReward: number
  badgeId: string
  lessons: Array<{
    id: string
    slug: string
    title: string
    subtitle: string
    estimatedMinutes: number
    xpReward: number
  }>
}

export interface Lesson extends LessonMeta {
  content: string
}

export function getAllModules(): ModuleMeta[] {
  const moduleIds = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => {
      if (!f.startsWith('module-')) return false
      // Skip directories without index.json (work in progress)
      const indexPath = path.join(CONTENT_DIR, f, 'index.json')
      return fs.existsSync(indexPath)
    })
    .sort()

  return moduleIds.map((moduleId) => {
    const indexPath = path.join(CONTENT_DIR, moduleId, 'index.json')
    const raw = fs.readFileSync(indexPath, 'utf-8')
    return JSON.parse(raw) as ModuleMeta
  })
}

export function getModule(moduleId: string): ModuleMeta | null {
  const indexPath = path.join(CONTENT_DIR, moduleId, 'index.json')
  if (!fs.existsSync(indexPath)) return null
  return JSON.parse(fs.readFileSync(indexPath, 'utf-8')) as ModuleMeta
}

export function getLesson(moduleId: string, slug: string): Lesson | null {
  const moduleDir = path.join(CONTENT_DIR, moduleId)
  if (!fs.existsSync(moduleDir)) return null

  const files = fs.readdirSync(moduleDir).filter((f) => f.endsWith('.mdx'))
  const file = files.find((f) => f.includes(slug))
  if (!file) return null

  const raw = fs.readFileSync(path.join(moduleDir, file), 'utf-8')
  const { data, content } = matter(raw)

  return {
    ...(data as LessonMeta),
    content,
  }
}

export function getLessonFilename(moduleId: string, slug: string): string | null {
  const moduleDir = path.join(CONTENT_DIR, moduleId)
  if (!fs.existsSync(moduleDir)) return null
  const files = fs.readdirSync(moduleDir).filter((f) => f.endsWith('.mdx'))
  return files.find((f) => f.includes(slug)) ?? null
}

export function getAllLessonSlugs(): Array<{ moduleId: string; slug: string }> {
  const modules = getAllModules()
  return modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({
      moduleId: mod.id,
      slug: lesson.slug,
    }))
  )
}

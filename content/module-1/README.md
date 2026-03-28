# Module 1: What AI Actually Is

4 lessons, ~30 min total, 200 XP.

## Files
- `index.json` — Module metadata, lesson list, XP/badge config
- `lesson-1-ai-vs-hype.mdx` — AI vs. the Hype Machine (7 min, 50 XP)
- `lesson-2-ai-vs-automation.mdx` — AI vs. Automation (6 min, 50 XP)
- `lesson-3-how-llms-work.mdx` — How LLMs Work (8 min, 50 XP)
- `lesson-4-ai-in-daily-life.mdx` — AI Is Already Everywhere (6 min, 50 XP)

## Interactive Components Used

Byte needs to implement these MDX components:

### `<Quiz>`
Multi-choice quiz with instant feedback.
```tsx
<Quiz
  id="unique-id"
  questions={[{
    id: "q1",
    text: "Question text",
    options: [{ id: "a", text: "Option" }, ...],
    correctId: "a",
    explanation: "Why this is correct"
  }]}
/>
```

### `<RevealCard>`
Click-to-reveal card (like a flashcard flip).
```tsx
<RevealCard
  id="unique-id"
  label="Label shown before reveal"
  reveal="Content shown after click"
/>
```

### `<DragDrop>`
Sort items into categories by dragging.
```tsx
<DragDrop
  id="unique-id"
  instruction="Sort these items..."
  categories={["Category A", "Category B"]}
  items={[{
    id: "item-1",
    text: "Item text",
    correctCategory: "Category A"
  }]}
/>
```

### `<LessonComplete>`
Lesson completion CTA with XP reward and next lesson link.
```tsx
<LessonComplete
  lessonId="lesson-1"
  nextLessonSlug="ai-vs-automation"
  xpReward={50}
/>
```

### `<ModuleComplete>`
Module completion summary with full XP reward and next module link.
```tsx
<ModuleComplete
  moduleId="module-1"
  nextModuleSlug="module-2"
  xpReward={200}
/>
```

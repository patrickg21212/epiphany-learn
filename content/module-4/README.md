# Module 4: Security, Privacy, and Trust

4 lessons, ~32 min total, 200 XP.

## Files
- `index.json` — Module metadata, lesson list, XP/badge config
- `lesson-1-prompt-injection.mdx` — Prompt Injection: The Attack You've Never Heard Of (8 min, 50 XP)
- `lesson-2-your-data-and-ai.mdx` — Where Does Your Data Go? (8 min, 50 XP)
- `lesson-3-vendor-lock-in.mdx` — Vendor Lock-In: The Invisible Trap (8 min, 50 XP)
- `lesson-4-evaluating-ai-tools.mdx` — How to Evaluate Any AI Tool (8 min, 50 XP)

## Content Notes

This is the **trust-builder module** — honest, no fear-mongering, practical. The tone throughout should be:
- Direct and honest about real risks
- Not alarmist or paranoid
- Empowering rather than scary
- Actionable: every lesson ends with something the reader can DO

## Lesson Summaries

### Lesson 1: Prompt Injection
Covers what prompt injection is (the AI equivalent of SQL injection), direct vs. indirect injection, real-world examples, and practical mitigation steps. Uses `RevealCard` for the 3 risk types and `Quiz` with 3 questions.

### Lesson 2: Your Data and AI
Covers what happens to prompts when you send them to hosted AI, what each major vendor (OpenAI, Anthropic, Google) actually does with data, practical rules for what to and not to send, and when to upgrade to paid tiers. Uses `RevealCard` for vendor comparison and `Quiz` with 3 questions.

### Lesson 3: Vendor Lock-In
Covers the 5 forms of AI lock-in (data, workflow, format, fine-tuning, ecosystem), warning signs, practical protection strategies, and the role of open-source models. Uses `RevealCard` for each lock-in type and `Quiz` with 3 questions.

### Lesson 4: Evaluating AI Tools
The capstone lesson — a 10-question evaluation checklist, red flags vs. green flags (DragDrop interactive), risk-matching heuristic by data sensitivity, and a final gut-check framework. Uses `RevealCard` for checklist items, `DragDrop` for flags sorting, and `Quiz` with 3 questions.

## Interactive Components Used

All components listed in Module 1 README. This module uses:
- `<RevealCard>` (all lessons)
- `<Quiz>` (all lessons, 2-3 questions each)
- `<DragDrop>` (lesson 4 only)
- `<LessonComplete>` (lessons 1-3)
- `<ModuleComplete>` (lesson 4)

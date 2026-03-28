# Ralph Brief — Epiphany Learn: Production-Ready Polish

## MISSION
Take Epiphany Learn from "good foundation" to **production-ready**. The dark Kahoot-inspired design system is in place. Now make every page feel like a premium gamified learning app — not a dev prototype. Ship quality.

## CURRENT STATE (What's Already Done — Don't Redo)
- Dark theme (#050505 base) applied across all pages
- Kahoot accent color system (red, blue, gold, green, cyan, magenta, orange) in CSS vars + Tailwind
- Module-specific accent colors working (blue, cyan, green, orange, magenta, gold)
- Quiz component has Kahoot-style colored answer blocks with shapes (▲◆●■)
- RevealCard has 3D flip animation
- Brand fonts (League Spartan + Poppins) loaded via @font-face
- Design tokens in `lib/design-tokens.ts` and `lib/module-colors.ts`
- Glass morphism CSS classes defined (.card-glass, .card-glow)
- Build passes with 0 errors (38 static pages)
- Content is rewritten for everyday audience (3rd grade level)

## PHASE 1: CLEANUP (Do First)

### 1A. Delete Orphaned Old Module-4 Files
These are old SMB-focused lessons replaced by new everyday-audience content. Delete them:
```
content/module-4/lesson-1-prompt-injection.mdx
content/module-4/lesson-2-your-data-and-ai.mdx
content/module-4/lesson-3-vendor-lock-in.mdx
content/module-4/lesson-4-evaluating-ai-tools.mdx
```
Keep these (the NEW ones):
```
content/module-4/lesson-1-what-happens-to-what-you-type.mdx
content/module-4/lesson-2-spotting-ai-fakes.mdx
content/module-4/lesson-3-when-not-to-trust-ai.mdx
content/module-4/lesson-4-teaching-your-family-about-ai.mdx
```

### 1B. Verify Build After Cleanup
Run `npx next build` — must pass with 0 errors. If deleting files breaks routes, fix the content.ts or index.json to match.

## PHASE 2: VISUAL POLISH (Main Work)

### 2A. Homepage Hero — Make It Alive
Current: static gradient background, decent but flat.
Target: subtle animated gradient that shifts between brand colors.

Add a CSS animation to the hero background:
```css
@keyframes hero-gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```
Apply to the hero section with a large `background-size` (200% 200%) and `animation: hero-gradient-shift 15s ease infinite`. Use brand colors: deep blue → cyan → back. Subtle, not distracting.

Also: add a subtle floating particle/dot effect behind the hero using CSS (animated pseudo-elements) or a small JS component. Think: faint glowing orbs floating slowly. Keep it lightweight.

### 2B. Module Cards — Glass Morphism + Glow-on-Hover
Current: basic cards with scale-up on hover.
Target: glass morphism cards that glow with their module's accent color on hover.

For each module card on both `/modules` and `/` (homepage):
- Apply `backdrop-filter: blur(12px) saturate(180%)` (glass effect)
- Background: `rgba(255,255,255,0.03)` (already close)
- On hover: add `box-shadow: 0 0 30px 0 [module-glow-color]` where glow color comes from module's color theme
- On hover: border transitions to module's accent color
- Transition: `all 0.3s cubic-bezier(0.22, 1, 0.36, 1)`

The glow should use the module's specific accent color (blue for module 1, cyan for 2, etc.). The `getModuleColor()` function already provides a `glow` property for each module.

### 2C. Dashboard — Per-Module Colored Progress Bars
In `DashboardClient.tsx`, the module progress section should show each module with its own accent-colored progress bar, not all the same color. Use `getModuleColor(moduleId)` to get the color and apply it to both the progress bar fill and a subtle glow.

### 2D. Section Dividers — Gradient Lines
MDX `<hr>` elements should render as gradient lines, not basic gray borders.
In `globals.css` or the MDX prose styling, style `hr` as:
```css
hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--module-color, #1368CE), transparent);
  margin: 2.5rem 0;
  opacity: 0.4;
}
```

### 2E. RevealCards — Premium Collectible Feel
Current: functional flip animation with glass background.
Enhance:
- Front face: add a subtle shimmer/shine animation on the `?` icon (pulsing glow)
- Back face: brighter accent-colored border (use `--module-color` variable)
- Add a subtle gradient overlay on the back face: `linear-gradient(135deg, var(--module-bg-light), transparent)`
- The "Tap to reveal" text should have a subtle pulse animation

### 2F. Quiz Component — Feedback Polish
Current: Kahoot-style colored blocks work.
Enhance:
- When correct answer selected + submitted: the correct option should pulse green briefly, add a small checkmark with scale animation
- When wrong answer selected + submitted: the selected option should shake (CSS keyframe animation) and flash red
- Score display at the bottom should use gold (#FFA602) with a glow
- "Try Again" button should have accent styling

### 2G. Blockquotes — Key Takeaway Styling
Every lesson ends with a "Key Takeaway" blockquote. Style these prominently:
```css
blockquote {
  border-left: 4px solid var(--module-color, #1368CE);
  background: var(--module-bg-light, rgba(19,104,206,0.06));
  border-radius: 0 1rem 1rem 0;
  padding: 1.5rem 2rem;
  font-size: 1.125rem;
  color: var(--text-primary);
  box-shadow: inset 4px 0 12px -4px var(--module-glow, rgba(19,104,206,0.3));
}
```

### 2H. Prose Typography on Lesson Pages
Make sure the MDX prose content is well-spaced and readable:
- Paragraphs: `line-height: 1.8`, `margin-bottom: 1.5rem`, color `#F0EFEB` at 85% opacity
- H2 headings: `font-family: League Spartan`, `color: #F0EFEB`, bottom margin `1rem`, top margin `3rem`
- H3 headings: smaller, slightly muted
- Strong/bold text: `color: #F0EFEB` (full opacity, not muted)
- Links: use `--module-color` as the link color with underline
- Lists: proper spacing, custom bullet color using module accent

### 2I. Entrance Animations
Add staggered fade-up animations to lesson content sections. Each major block (heading + following paragraphs + interactive component) should animate in as the user scrolls.

Use CSS `@keyframes fade-in-up` with `animation-delay` based on child index, or use Intersection Observer for scroll-triggered animations. Keep it simple and performant.

## PHASE 3: MOBILE RESPONSIVENESS

### 3A. Test at Mobile Viewport
Using Playwright, resize to 375x812 (iPhone) and screenshot EVERY key page:
- `/` (homepage)
- `/modules` (listing)
- `/modules/module-1` (detail)
- `/modules/module-1/ai-vs-hype` (lesson)
- `/dashboard`

### 3B. Fix Mobile Issues
Common things to check:
- Hero text doesn't overflow on small screens
- Module cards stack properly
- Quiz answer blocks are tappable (min 48px touch target)
- RevealCards work on tap (not just hover)
- Navigation breadcrumbs truncate gracefully
- Dashboard stats cards stack on mobile
- All text is readable (min 16px body text on mobile)
- No horizontal scrolling

## PHASE 4: QA & BUILD

### 4A. Console Error Cleanup
Navigate to every page via Playwright and check browser console for errors:
```js
// After navigating, evaluate:
document.querySelectorAll('script[type="module"]') // check all scripts loaded
console.error // check for React errors
```
Fix any console errors or warnings.

### 4B. Interactive Component Testing
On a lesson page with all component types (try `/modules/module-1/ai-vs-hype`):
1. Click a RevealCard — verify it flips
2. Click Quiz answers — verify selection highlights
3. Submit Quiz — verify feedback shows
4. If DragDrop exists on the page, verify items are visible

### 4C. Navigation Flow
Test the full user flow:
1. Homepage → "Start Learning Free" → Module listing
2. Module listing → Click Module 1 → Module detail
3. Module detail → Click first lesson → Lesson page
4. Lesson page → Complete lesson → Next lesson navigation works
5. Dashboard accessible from nav

### 4D. Final Build
Run `npx next build` — must pass with 0 errors and 0 warnings about missing pages.

### 4E. Final Screenshot Verification
Take full-page screenshots of all key pages at DESKTOP (1440x900) and MOBILE (375x812):
- Homepage (desktop + mobile)
- Module listing (desktop + mobile)
- Lesson page with interactive components (desktop + mobile)
- Dashboard (desktop + mobile)

## DEV SERVER
The dev server should be running at `http://localhost:3000`. If not:
```bash
cd /root/clawd/epiphany-learn && rm -rf .next && npx next dev -p 3000 -H 0.0.0.0 &
```
Wait 10 seconds after starting before navigating.

Use Playwright to navigate to `http://localhost:3000` (NOT 127.0.0.1 — use localhost).

## RULES
1. **DO NOT change lesson text content** — the words in MDX files are final
2. **DO NOT change frontmatter** in MDX files
3. **DO NOT add heavy npm dependencies** — Framer Motion + Tailwind + CSS can do everything
4. **DO NOT break the build** — run `npx next build` after any significant change
5. **DO change CSS, component JSX/TSX, Tailwind classes, and page layouts** — that's the job
6. **DO use the existing design token system** — `lib/design-tokens.ts`, `lib/module-colors.ts`, CSS variables
7. **DO test every change visually** with Playwright screenshots

## QUALITY BAR
- Every page is dark (#050505 base) with bright accents popping
- Module cards glow with their accent color on hover
- Quiz answers look like Kahoot (colored blocks, shapes, immediate feedback)
- RevealCards feel like collectible items with premium flip animation
- Section dividers are gradient lines, not plain rules
- Blockquotes (Key Takeaways) are visually prominent with accent-colored left border
- All text is readable (cream on dark, proper contrast)
- Mobile works perfectly (no overflow, tappable targets, stacked layouts)
- Zero console errors
- Build passes
- A non-technical person would screenshot this and share it

## STATUS REPORTING
At the end of EVERY response:
```
---RALPH_STATUS---
STATUS: IN_PROGRESS | COMPLETE | BLOCKED
PHASE: 1 | 2 | 3 | 4
TASKS_COMPLETED_THIS_LOOP: <number>
FILES_MODIFIED_THIS_LOOP: <number>
EXIT_SIGNAL: false | true
SUMMARY: <one line>
---END_RALPH_STATUS---
```
Set EXIT_SIGNAL to `true` only when ALL four phases are complete and final screenshots verify quality.

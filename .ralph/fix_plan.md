# Epiphany Learn — Visual Overhaul Fix Plan

## Phase 1: Foundation
- [ ] Ensure dev server running on port 3000
- [ ] Create module color theme map (6 colors for 6 modules)
- [ ] Apply module colors to module hero pages
- [ ] Apply module colors to module listing cards
- [ ] Create 6 SVG module icons in /public/illustrations/
- [ ] Create hero-landing.svg for homepage
- [ ] Create 6 badge SVGs in /public/badges/

## Phase 2: Lesson Visual Components
- [ ] Create animated section divider component (replace plain hr)
- [ ] Create Tip callout box MDX component
- [ ] Create Warning callout box MDX component
- [ ] Create Example callout box MDX component
- [ ] Register callout components in MDX component mapping
- [ ] Create StatHighlight animated counter component
- [ ] Style blockquote/key takeaway blocks with module colors + animation
- [ ] Add callout boxes to at least 3 lessons as examples

## Phase 3: Page-Level Visual Polish
- [ ] Homepage hero — animated gradient or particle effect
- [ ] Module pages — entrance animations, module-themed heroes
- [ ] Lesson pages — staggered content entrance animation
- [ ] Interactive components (RevealCard, Quiz) — hover states + micro-animations
- [ ] Progress bar — module-colored

## Phase 4: Visual Verification
- [ ] Screenshot homepage and verify visual quality
- [ ] Screenshot modules listing and verify
- [ ] Screenshot module-1 detail page and verify
- [ ] Screenshot module-1/ai-vs-hype lesson and verify
- [ ] Screenshot module-3/customer-service-chatbots lesson and verify
- [ ] Screenshot dashboard and verify
- [ ] Final build verification: `npx next build` passes clean

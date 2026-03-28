# Ralph Agent Configuration — Epiphany Learn

## Build Instructions

```bash
cd /root/clawd/epiphany-learn && npx next build
```

## Dev Server

```bash
cd /root/clawd/epiphany-learn && npx next dev -p 3000 -H 0.0.0.0
```

## Test Instructions

```bash
# Visual verification via Playwright screenshots
# Ralph uses Playwright MCP to navigate and screenshot pages
```

## Notes
- Next.js 14.2 with App Router
- MDX content in /content/module-*/
- Tailwind CSS 3.4 for styling
- Framer Motion available for animations
- Dev server must be running on port 3000 before taking screenshots
- Always verify changes don't break the build

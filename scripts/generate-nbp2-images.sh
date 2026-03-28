#!/usr/bin/env bash
# Generate NBP2 images for Epiphany Learn — 13 key visual areas
# Uses Gemini 3 Pro Image (Nano Banana Pro 2) via uv run
set -euo pipefail

SCRIPT="/root/clawd/skills/nano-banana-pro/scripts/generate_image.py"
OUTDIR="/root/clawd/epiphany-learn/public/images/generated"
export GEMINI_API_KEY="$(grep GEMINI_API_KEY /root/clawd/clawd-relay/.env | cut -d= -f2)"

mkdir -p "$OUTDIR"

# System prompt prefix for consistent style
STYLE="Modern, clean, editorial-quality digital illustration. Dark background (#050505 to #1a1a2e gradient). Vibrant accent colors matching Kahoot palette (red #E21B3C, blue #1368CE, gold #FFA602, green #26890C, purple #46178F). Slightly futuristic, approachable, NOT corporate stock photo. Think Dribbble meets tech education. No text or words in the image. 16:9 aspect ratio."

generate() {
  local name="$1"
  local prompt="$2"
  local outfile="$OUTDIR/${name}.png"

  if [ -f "$outfile" ]; then
    echo "SKIP: $name (already exists)"
    return 0
  fi

  echo "GENERATING: $name..."
  uv run "$SCRIPT" \
    --prompt "$STYLE $prompt" \
    --filename "$outfile" \
    --aspect-ratio "16:9" \
    --resolution "1K" 2>&1 | tail -2
  echo "DONE: $name"
  echo "---"
}

# ═══════════════════════════════════════════════════════
# TIER 1: First Impressions (10 images)
# ═══════════════════════════════════════════════════════

generate "hero-landing" \
  "A diverse group of 4-5 people of different ages and ethnicities confidently interacting with glowing AI interfaces on tablets, phones and laptops. They look empowered and curious, not intimidated. Soft blue and gold light emanates from their screens, illuminating their faces. Wide cinematic composition with depth of field."

generate "module-1-cover" \
  "A giant glowing brain made of interconnected neural network nodes and circuits, floating above an open hand. The brain pulses with blue and gold energy. Some nodes show tiny icons: a chat bubble, a lightbulb, a gear. Dark space background with subtle star-like particles. Represents 'What AI Actually Is'."

generate "module-2-cover" \
  "A person sitting at a desk having a conversation with a large glowing AI assistant represented as an abstract luminous orb with a friendly face outline. Speech bubbles flow between them, some glowing bright, some dim. The scene feels warm and collaborative. Represents 'Talking to AI'."

generate "module-3-cover" \
  "A modern workspace where AI handles mundane tasks: emails flying into sorted folders, a calendar organizing itself, documents being summarized into bullet points. All happening automatically while a person watches with coffee in hand, looking relaxed. Represents 'AI at Work'."

generate "module-4-cover" \
  "A translucent digital shield with a lock icon protecting a person's silhouette. Data particles (represented as small glowing dots) bounce off the shield. Behind the shield, the person looks calm and protected. Some red warning particles are being deflected. Represents 'Safety and Privacy'."

generate "module-5-cover" \
  "A person examining AI products on glowing holographic displays like a discerning shopper. Some products have green checkmarks, others have red warning flags. A magnifying glass highlights fine print on one product. Smart, analytical mood. Represents 'Buying AI Tools'."

generate "module-6-cover" \
  "A person building something with glowing blocks that assemble into a working AI system. It's like digital Lego — some pieces snap together perfectly, others don't fit and float away. The partially-built system emits warm gold light. Represents 'Your First AI Project'."

generate "module-7-cover" \
  "A person standing calmly in the eye of a storm made of swirling AI headlines, news articles, and dramatic predictions. The headlines are red and alarming but the person has a clear blue calm aura around them. They hold a glowing book of knowledge. Represents 'AI Anxiety Is Normal'."

generate "modules-list-hero" \
  "An abstract learning pathway: 7 glowing stepping stones floating in dark space, each a different color (blue, teal, green, orange, pink, gold, red), leading upward like a staircase. Each stone has a tiny thematic icon on it. A small figure stands at the beginning looking up at the path. Represents a learning journey."

generate "dashboard-welcome" \
  "A celebration scene: a person standing on a podium with arms raised, surrounded by floating achievement badges, XP numbers, and streak flames. Confetti particles in Kahoot colors (red, blue, gold, green). Trophy nearby. Triumphant but warm, not over-the-top. Represents learning achievement."

# ═══════════════════════════════════════════════════════
# TIER 1B: Module 7 Case Studies (3 images)
# ═══════════════════════════════════════════════════════

generate "m7-case-mcdonalds" \
  "A drive-thru ordering screen showing garbled, nonsensical food items and confused order totals. The screen glows an ominous red-orange. A car waits at the window. Through the drive-thru window, a frustrated employee looks at their own screen in confusion. Represents the McDonald's AI ordering failure."

generate "m7-case-aircanada" \
  "A laptop screen showing a customer service chatbot conversation. The chatbot's response shows a made-up refund policy with official-looking but completely fabricated terms. A red 'FABRICATED' stamp overlays part of the screen. A confused customer sits at the laptop. Represents the Air Canada chatbot inventing policies."

generate "m7-case-lawyer" \
  "A legal brief document on a desk with several case citations highlighted in red, each marked with a 'DOES NOT EXIST' label. A gavel sits nearby. The document has an AI assistant icon in the corner showing where it was generated. Serious, sobering mood. Represents lawyers citing fake AI-generated cases."

echo ""
echo "═══════════════════════════════════════════════"
echo "ALL 13 IMAGES GENERATED"
echo "Output directory: $OUTDIR"
echo "═══════════════════════════════════════════════"
ls -la "$OUTDIR"/*.png 2>/dev/null | wc -l
echo "images total"

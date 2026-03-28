#!/usr/bin/env bash
# Batch 2: Lesson intro + hero moment images for Epiphany Learn
# Same global style as Batch 1 for visual consistency
set -euo pipefail

SCRIPT="/root/clawd/skills/nano-banana-pro/scripts/generate_image.py"
OUTDIR="/root/clawd/epiphany-learn/public/images/generated"
export GEMINI_API_KEY="$(grep GEMINI_API_KEY /root/clawd/clawd-relay/.env | cut -d= -f2)"

mkdir -p "$OUTDIR"

# EXACT same style prefix as Batch 1 — locks in visual consistency
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
  if uv run "$SCRIPT" \
    --prompt "$STYLE $prompt" \
    --filename "$outfile" \
    --aspect-ratio "16:9" \
    --resolution "1K" 2>&1 | tail -2; then
    echo "DONE: $name"
  else
    echo "FAILED: $name (will retry later)"
  fi
  echo "---"
  sleep 2
}

echo "═══════════════════════════════════════════════"
echo "BATCH 2: LESSON INTROS + HERO MOMENTS (36 images)"
echo "═══════════════════════════════════════════════"

# ═══ MODULE 1 LESSON INTROS ═══════════════════════════
generate "m1l1-intro" \
  "A calm person sitting in a peaceful reading chair, surrounded by a swirling tornado of dramatic floating news headlines and glowing screens — but they are centered and undisturbed in the middle of the chaos. Blue and gold light emanates from their calm center. Represents cutting through AI hype."

generate "m1l2-intro" \
  "A split scene: on the left, a simple mechanical dishwasher with gears and conveyor belts doing repetitive work (automation). On the right, a creative chef with glowing AI-enhanced tools making artistic decisions about a complex dish. The two sides are divided by a glowing line. Represents AI vs automation."

generate "m1l3-intro" \
  "A person typing on a laptop, and from the screen, thousands of tiny glowing word fragments cascade outward in a beautiful pattern — like a word-prediction waterfall. Each fragment connects to the next with subtle light threads, showing the chain of prediction. Represents how language models work."

generate "m1l4-intro" \
  "An everyday living room scene where ordinary objects subtly glow with AI: a smartphone on the couch, a smart speaker on the shelf, a TV showing recommendations, a GPS map on a tablet, a music playlist auto-curating. Each object has a soft blue-gold aura. Represents AI already in daily life."

# ═══ MODULE 2 LESSON INTROS ═══════════════════════════
generate "m2l1-intro" \
  "A warm, inviting scene of a person at a desk with a glowing chat interface open on their screen. The AI assistant is represented as a friendly luminous presence on the screen. The person looks engaged and curious, leaning forward. Soft ambient lighting. Represents a first conversation with AI."

generate "m2l2-intro" \
  "Split scene: left side shows a blurry, vague blueprint with question marks and confused arrows (bad prompt). Right side shows a crisp, detailed architectural blueprint with precise measurements and clear labels (good prompt). A glowing transformation arrow connects them. Represents asking better questions."

generate "m2l3-intro" \
  "A confident-looking person standing at a crossroads, pointing firmly down a path — but the path they're pointing to leads to a dead end visible in the background. A subtle glow of correct information shines from the other path. Represents AI confidently being wrong."

generate "m2l4-intro" \
  "A person relaxed in a comfortable chair with coffee, smiling, while around them multiple floating holographic screens show AI handling tasks: sorting emails, planning meals, booking travel, drafting messages. The screens glow with warm gold and blue light. Represents AI for everyday tasks."

generate "m2l5-intro" \
  "Three illuminated pathways diverging from a central point: one path glows blue with an AI brain icon, one glows green with a search/Google magnifying glass, one glows gold with a human silhouette. Each path has a different texture and feel. A person stands at the fork deciding. Represents choosing the right tool."

# ═══ MODULE 3 LESSON INTROS ═══════════════════════════
generate "m3l1-intro" \
  "A person standing in front of a massive wall of floating email envelopes — hundreds of them, glowing in different colors for priority. Most are dim (unimportant), but two glow bright gold (urgent). The person looks overwhelmed. Represents inbox overload before AI help."

generate "m3l2-intro" \
  "Five phones in a circle showing different calendar apps, all with conflicting schedules and availability. Red X marks and green checkmarks flash between them. In the center, a small AI assistant tries to find the one overlapping time slot, glowing with concentration. Represents scheduling chaos."

generate "m3l3-intro" \
  "A learner sitting with a glowing AI tutor displayed on a large screen. The AI tutor shows a complex concept being broken down into simple, colorful building blocks. The learner has a lightbulb moment — visible as a warm glow above their head. Represents AI-assisted learning."

generate "m3l4-intro" \
  "A desk with a towering stack of boring paperwork, tax forms, insurance documents, and dense contracts. The person slumps in their chair avoiding it. A small AI assistant on their screen offers to help, represented by a glowing hand reaching toward the paper stack. Represents tedious tasks."

# ═══ MODULE 4 LESSON INTROS ═══════════════════════════
generate "m4l1-intro" \
  "A keyboard with glowing data particles streaming upward from the keys like a river of light, flowing into a large mysterious cloud structure above. The particles contain tiny icons representing personal information — location pins, messages, photos. Represents data flowing from your inputs."

generate "m4l2-intro" \
  "Two identical portraits side by side in ornate frames — one is a real photograph, the other is an AI-generated deepfake. They look nearly identical but subtle uncanny differences exist: slightly wrong ear shape, odd reflection in eyes. A magnifying glass hovers between them. Represents spotting AI fakes."

generate "m4l3-intro" \
  "Three professionals standing side by side — a doctor with stethoscope, a lawyer with briefcase, and a financial advisor with charts — each glowing with warm human expertise. Behind them, an AI screen shows the same information but with subtle errors highlighted in red. Represents knowing when human judgment matters."

generate "m4l4-intro" \
  "A multi-generational family gathered around a large tablet on a kitchen table. Grandparent, parent, teenager, and young child all looking at the screen together with engaged expressions. Warm lighting, comfortable home setting. The tablet shows a friendly AI interface. Represents teaching family about AI."

# ═══ MODULE 5 LESSON INTROS ═══════════════════════════
generate "m5l1-intro" \
  "A fork in a road: the left path is simple, clean, and well-lit with basic gear/automation icons along it. The right path is complex, winding, and glowing with AI neural network patterns. A businessperson stands at the fork with a thoughtful expression, evaluating both options. Represents choosing between AI and automation."

generate "m5l2-intro" \
  "A dazzling sales presentation on the left side — polished, glowing, perfect demo with impressive charts. On the right side, the same product in reality — messy data, error messages, frustrated users, tangled integrations. A curtain is being pulled back between the two sides. Represents vendor pitch vs reality."

generate "m5l3-intro" \
  "A sharp-eyed buyer with a glowing clipboard examining an AI product critically. The product is displayed like a hologram, and the buyer's clipboard reveals hidden details — fine print, missing features, true costs — that glow red as they're uncovered. Represents asking hard questions before buying."

generate "m5l4-intro" \
  "A balance scale: on one side, a stack of price tags and subscription bills growing taller. On the other side, custom-built blocks and tools being assembled. The scale tips back and forth, undecided. Dollar signs and building blocks float around it. Represents pricing models and build vs buy decisions."

# ═══ MODULE 6 LESSON INTROS ═══════════════════════════
generate "m6l1-intro" \
  "A person standing at a starting line, about to take their first step onto a glowing path. Behind them are 5 completed module checkpoints glowing with achievement. Ahead, a small project takes shape — represented by luminous building blocks assembling themselves. Represents starting your first AI experiment."

generate "m6l2-intro" \
  "A 7-day calendar floating in space, each day showing a small glowing scene of a different AI experiment: Day 1 writing an email, Day 2 summarizing a document, Day 3 planning a meeting, etc. The days progress from dim to bright as the week advances. Represents a week-long AI trial."

generate "m6l3-intro" \
  "A person sitting at a desk looking thoughtfully at a screen showing before/after comparison data. Charts and graphs display improvement metrics. Some metrics glow green (worked), some yellow (partial), some red (didn't help). The person has a reflective, analytical expression. Represents evaluating AI results."

generate "m6l4-intro" \
  "A person standing atop a mountain of completed glowing modules, arms raised in achievement. Below them, the entire learning journey is visible as a winding illuminated path with 7 major waypoints. A sunrise breaks over the horizon, casting golden light. A graduation cap floats nearby. Represents course completion and AI literacy."

# ═══ MODULE 7 LESSON INTROS ═══════════════════════════
generate "m7l1-intro" \
  "Workers at office desks looking upward with worried expressions as giant AI-related headlines loom overhead like storm clouds. The headlines glow ominous red. But directly above the workers, a small clearing of blue sky and calm light breaks through. Represents real AI anxiety with hope of understanding."

generate "m7l2-intro" \
  "A massive cracked and broken digital dashboard showing a huge 85 percent failure rate. The dashboard sparks and glitches. Below it, scattered fragments of failed AI projects — broken gears, disconnected cables, abandoned code screens. A single person examines the wreckage calmly. Represents why AI projects fail."

generate "m7l3-intro" \
  "A frustrated person holding a phone, staring at a chatbot conversation that has gone in circles — represented by the chat bubbles literally forming a loop/spiral pattern on screen. The person's expression is exasperated but relatable. Represents what AI is bad at, especially customer service."

# ═══ HERO MOMENT IMAGES ═══════════════════════════════
generate "hero-deepfake-scam" \
  "An elderly person on a phone with a worried expression. From the phone, a ghostly AI-generated voice waveform emerges — it looks like their grandchild's voice pattern but with subtle digital distortion and red warning markers. The scene is emotional and tense. Represents AI voice cloning scams."

generate "hero-inbox-transform" \
  "Split scene: left side shows a chaotic inbox with hundreds of unorganized emails in a messy pile. Right side shows the same inbox perfectly sorted into clean color-coded folders with only 3 important emails highlighted. A magical transformation effect connects the two sides. Represents AI inbox management."

generate "hero-hallucination" \
  "An AI screen confidently displaying a fabricated fact — the information looks polished and authoritative but has subtle red cracks and glitch artifacts running through it, revealing it's not real. A person looks at the screen trusting it completely, unaware. Represents AI hallucination danger."

generate "hero-graduation" \
  "A person standing on an illuminated podium surrounded by all 7 module icons arranged in a circle like a crown. Beams of light shoot upward from each module. Confetti particles in Kahoot colors (red, blue, gold, green) rain down. The person holds a glowing AI Literacy certificate. Triumphant and empowering."

generate "hero-generation-gap" \
  "Two people side by side: a younger person on the left looking at AI tools with curiosity and a slight smile, and an older person on the right looking at the same tools with skepticism and folded arms. Between them, a bridge of understanding starts to form with warm golden light. Represents generational AI attitudes."

generate "hero-human-vs-bot" \
  "Split scene: left side shows a warm human customer service agent shaking hands with a happy customer, glowing with warmth and connection. Right side shows a cold robotic chatbot interface with a frustrated customer, the screen glitching. The contrast is stark but not mean. Represents human vs AI service."

generate "hero-bill-of-rights" \
  "A person standing tall and confident, holding a glowing scroll that reads as a bill of rights (no actual text, just glowing lines suggesting a document). Around them, data particles respect their boundary — bouncing off an invisible shield. Empowering, strong, self-assured. Represents AI rights and control."

generate "hero-family-dinner" \
  "A warm family dinner scene: four generations around a table with food, but also a tablet showing something AI-related. Everyone is engaged in conversation — pointing at the screen, discussing, some nodding, some questioning. Warm golden lighting, comfortable home. Represents family AI conversations."

echo ""
echo "═══════════════════════════════════════════════"
echo "BATCH 2 COMPLETE"
echo "═══════════════════════════════════════════════"
ls "$OUTDIR"/*.png 2>/dev/null | wc -l
echo "total images in generated folder"

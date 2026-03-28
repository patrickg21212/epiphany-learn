/**
 * Module 7 — "Fears, Failures & Your Rights"
 * Animated SVG illustrations for every section of every lesson.
 *
 * Kahoot palette: #E21B3C (red — primary for M7), #1368CE (blue),
 *                 #FFA602 (gold), #26890C (green), #46178F (purple)
 */

// ─── LESSON 1: Fear & Job Displacement ──────────────────────────────────

/**
 * m7-fear-stats — Bar chart showing anxiety levels, animated bars growing
 */
export function M7FearStats({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Chart axes */}
      <line x1="35" y1="130" x2="180" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="35" y1="130" x2="35" y2="25" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* Y-axis labels */}
      <text x="28" y="130" textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="5">0%</text>
      <text x="28" y="80" textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="5">50%</text>
      <text x="28" y="30" textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="5">100%</text>

      {/* Bar 1 — Very Anxious (72%) */}
      <rect x="45" y="130" width="22" height="0" rx="3" fill="#E21B3C" opacity="0.6">
        <animate attributeName="height" values="0;72;72" dur="1.5s" fill="freeze" />
        <animate attributeName="y" values="130;58;58" dur="1.5s" fill="freeze" />
      </rect>
      <text x="56" y="145" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.5">Very</text>

      {/* Bar 2 — Somewhat (58%) */}
      <rect x="77" y="130" width="22" height="0" rx="3" fill="#FFA602" opacity="0.5">
        <animate attributeName="height" values="0;58;58" dur="1.5s" begin="0.3s" fill="freeze" />
        <animate attributeName="y" values="130;72;72" dur="1.5s" begin="0.3s" fill="freeze" />
      </rect>
      <text x="88" y="145" textAnchor="middle" fill="#FFA602" fontSize="5" opacity="0.5">Some</text>

      {/* Bar 3 — Slightly (35%) */}
      <rect x="109" y="130" width="22" height="0" rx="3" fill="#1368CE" opacity="0.5">
        <animate attributeName="height" values="0;35;35" dur="1.5s" begin="0.6s" fill="freeze" />
        <animate attributeName="y" values="130;95;95" dur="1.5s" begin="0.6s" fill="freeze" />
      </rect>
      <text x="120" y="145" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.5">Slight</text>

      {/* Bar 4 — Not At All (15%) */}
      <rect x="141" y="130" width="22" height="0" rx="3" fill="#26890C" opacity="0.5">
        <animate attributeName="height" values="0;15;15" dur="1.5s" begin="0.9s" fill="freeze" />
        <animate attributeName="y" values="130;115;115" dur="1.5s" begin="0.9s" fill="freeze" />
      </rect>
      <text x="152" y="145" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.5">None</text>

      {/* Title */}
      <text x="100" y="18" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="bold" opacity="0.5">AI ANXIETY LEVELS</text>

      {/* Sparkles */}
      <circle cx="15" cy="20" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="25" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="12" cy="145" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-job-displacement — Person at desk with robot shadow, but robot is helping
 */
export function M7JobDisplacement({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Desk */}
      <rect x="40" y="100" width="80" height="6" rx="2" fill="#46178F" opacity="0.3" />
      <rect x="50" y="106" width="8" height="25" rx="2" fill="#46178F" opacity="0.2" />
      <rect x="102" y="106" width="8" height="25" rx="2" fill="#46178F" opacity="0.2" />

      {/* Person sitting at desk */}
      <circle cx="80" cy="65" r="12" fill="#1368CE" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
      <rect x="72" y="78" width="16" height="22" rx="5" fill="#1368CE" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      {/* Arms on desk */}
      <line x1="72" y1="85" x2="55" y2="98" stroke="#1368CE" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <line x1="88" y1="85" x2="105" y2="98" stroke="#1368CE" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

      {/* Monitor on desk */}
      <rect x="60" y="82" width="20" height="16" rx="2" fill="#0d0d1a" stroke="#1368CE" strokeWidth="1" opacity="0.4" />

      {/* Robot helper behind — friendly not scary */}
      <g transform="translate(145, 60)">
        {/* Friendly glow */}
        <circle cx="0" cy="0" r="30" fill="#26890C" opacity="0.06">
          <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Robot head */}
        <rect x="-14" y="-18" width="28" height="24" rx="6" fill="#26890C" stroke="#26890C" strokeWidth="1.5" opacity="0.4" />
        {/* Eyes — happy */}
        <circle cx="-5" cy="-8" r="3" fill="#26890C" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="5" cy="-8" r="3" fill="#26890C" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Smile */}
        <path d="M-6 0 Q0 6 6 0" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
        {/* Antenna */}
        <line x1="0" y1="-18" x2="0" y2="-26" stroke="#26890C" strokeWidth="1" opacity="0.3" />
        <circle cx="0" cy="-28" r="3" fill="#26890C" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
        </circle>
        {/* Helping arm reaching to person */}
        <path d="M-14 5 Q-35 10 -50 30" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" strokeDasharray="3 2">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Collaboration sparkle between them */}
      <circle cx="115" cy="80" r="4" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="15" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="188" cy="140" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="145" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-generation-gap — Side-by-side faces with different thought bubbles about AI
 */
export function M7GenerationGap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#46178F" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Dividing line */}
      <line x1="100" y1="20" x2="100" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Young person — left */}
      <g transform="translate(50, 85)">
        <circle cx="0" cy="0" r="16" fill="#1368CE" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
        {/* Happy eyes */}
        <circle cx="-4" cy="-3" r="2" fill="#1368CE" opacity="0.5" />
        <circle cx="4" cy="-3" r="2" fill="#1368CE" opacity="0.5" />
        {/* Smile */}
        <path d="M-5 3 Q0 8 5 3" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.4" />
      </g>
      {/* Thought bubble — excited about AI */}
      <g transform="translate(50, 30)">
        <rect x="-25" y="-12" width="50" height="24" rx="12" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <text x="0" y="3" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="bold" opacity="0.6">EXCITING!</text>
        {/* Bubble connector */}
        <circle cx="0" cy="18" r="2" fill="#26890C" opacity="0.2" />
        <circle cx="0" cy="24" r="1.5" fill="#26890C" opacity="0.15" />
      </g>
      <text x="50" y="118" textAnchor="middle" fill="#1368CE" fontSize="6" opacity="0.4">Gen Z</text>

      {/* Older person — right */}
      <g transform="translate(150, 85)">
        <circle cx="0" cy="0" r="16" fill="#FFA602" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
        {/* Worried eyes */}
        <circle cx="-4" cy="-3" r="2" fill="#FFA602" opacity="0.5" />
        <circle cx="4" cy="-3" r="2" fill="#FFA602" opacity="0.5" />
        {/* Worried mouth */}
        <path d="M-5 5 Q0 2 5 5" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.4" />
      </g>
      {/* Thought bubble — worried about AI */}
      <g transform="translate(150, 30)">
        <rect x="-25" y="-12" width="50" height="24" rx="12" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        </rect>
        <text x="0" y="3" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.6">WORRIED</text>
        {/* Bubble connector */}
        <circle cx="0" cy="18" r="2" fill="#E21B3C" opacity="0.2" />
        <circle cx="0" cy="24" r="1.5" fill="#E21B3C" opacity="0.15" />
      </g>
      <text x="150" y="118" textAnchor="middle" fill="#FFA602" fontSize="6" opacity="0.4">Boomer</text>

      {/* VS badge */}
      <circle cx="100" cy="85" r="10" fill="#46178F" opacity="0.15" />
      <text x="100" y="89" textAnchor="middle" fill="#46178F" fontSize="8" fontWeight="bold" opacity="0.5">VS</text>

      {/* Sparkles */}
      <circle cx="15" cy="15" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="25" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="140" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-expert-vs-public — Split gauge showing 56% vs 17% gap
 */
export function M7ExpertVsPublic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Left gauge — Experts (56%) */}
      <g transform="translate(60, 75)">
        {/* Gauge background arc */}
        <path d="M-35 0 A35 35 0 0 1 35 0" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round" />
        {/* Gauge fill — 56% of half-circle */}
        <path d="M-35 0 A35 35 0 0 1 10 -33" fill="none" stroke="#26890C" strokeWidth="8" strokeLinecap="round" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </path>
        {/* Center text */}
        <text x="0" y="-5" textAnchor="middle" fill="#26890C" fontSize="14" fontWeight="bold" opacity="0.6">56%</text>
        <text x="0" y="8" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.4">optimistic</text>
      </g>
      <text x="60" y="105" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="bold" opacity="0.4">EXPERTS</text>

      {/* Right gauge — Public (17%) */}
      <g transform="translate(140, 75)">
        {/* Gauge background arc */}
        <path d="M-35 0 A35 35 0 0 1 35 0" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round" />
        {/* Gauge fill — 17% of half-circle */}
        <path d="M-35 0 A35 35 0 0 1 -25 -25" fill="none" stroke="#E21B3C" strokeWidth="8" strokeLinecap="round" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
        {/* Center text */}
        <text x="0" y="-5" textAnchor="middle" fill="#E21B3C" fontSize="14" fontWeight="bold" opacity="0.6">17%</text>
        <text x="0" y="8" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.4">optimistic</text>
      </g>
      <text x="140" y="105" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.4">PUBLIC</text>

      {/* Gap arrow between */}
      <line x1="88" y1="65" x2="112" y2="65" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" markerEnd="url(#arrowM7)" />
      <text x="100" y="58" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="bold" opacity="0.5">GAP</text>

      {/* Title */}
      <text x="100" y="20" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="bold" opacity="0.5">PERCEPTION GAP</text>

      {/* Sparkles */}
      <circle cx="15" cy="30" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="35" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="140" r="2" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-training-solution — Person reading book, lightbulb turning on
 */
export function M7TrainingSolution({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Person */}
      <g transform="translate(85, 95)">
        {/* Head */}
        <circle cx="0" cy="-30" r="14" fill="#1368CE" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
        {/* Eyes looking at book */}
        <circle cx="-4" cy="-33" r="1.5" fill="#1368CE" opacity="0.5" />
        <circle cx="4" cy="-33" r="1.5" fill="#1368CE" opacity="0.5" />
        {/* Body */}
        <rect x="-10" y="-15" width="20" height="25" rx="5" fill="#1368CE" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
        {/* Arms holding book */}
        <line x1="-10" y1="-8" x2="-22" y2="-2" stroke="#1368CE" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <line x1="10" y1="-8" x2="22" y2="-2" stroke="#1368CE" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      </g>

      {/* Open book */}
      <g transform="translate(85, 90)">
        {/* Left page */}
        <path d="M-5 0 L-25 -5 L-25 15 L-5 20Z" fill="#FFA602" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        {/* Right page */}
        <path d="M5 0 L25 -5 L25 15 L5 20Z" fill="#FFA602" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        {/* Text lines on pages */}
        <line x1="-22" y1="2" x2="-8" y2="5" stroke="#FFA602" strokeWidth="0.5" opacity="0.2" />
        <line x1="-22" y1="6" x2="-10" y2="9" stroke="#FFA602" strokeWidth="0.5" opacity="0.2" />
        <line x1="8" y1="5" x2="22" y2="2" stroke="#FFA602" strokeWidth="0.5" opacity="0.2" />
        <line x1="8" y1="9" x2="22" y2="6" stroke="#FFA602" strokeWidth="0.5" opacity="0.2" />
      </g>

      {/* Lightbulb above head — turning on */}
      <g transform="translate(85, 25)">
        <ellipse cx="0" cy="0" rx="12" ry="14" fill="#FFA602" opacity="0.08">
          <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="0" cy="0" rx="12" ry="14" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <rect x="-5" y="14" width="10" height="5" rx="2" fill="#FFA602" opacity="0.3" />
        {/* Filament */}
        <path d="M-3 -2 Q0 -8 3 -2" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Light rays */}
        <line x1="0" y1="-18" x2="0" y2="-24" stroke="#FFA602" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="-14" y1="-8" x2="-20" y2="-12" stroke="#FFA602" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </line>
        <line x1="14" y1="-8" x2="20" y2="-12" stroke="#FFA602" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Sparkles */}
      <circle cx="20" cy="15" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="30" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="145" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-real-vs-hype — Scale/balance with "fear" outweighing "facts"
 */
export function M7RealVsHype({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Scale base/pillar */}
      <rect x="95" y="120" width="10" height="25" rx="3" fill="#46178F" opacity="0.3" />
      <rect x="80" y="140" width="40" height="6" rx="3" fill="#46178F" opacity="0.2" />

      {/* Scale beam — tilted, fear side heavier */}
      <line x1="35" y1="75" x2="165" y2="55" stroke="#FFA602" strokeWidth="2.5" strokeLinecap="round" opacity="0.4">
        <animate attributeName="y1" values="75;78;75" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="55;52;55" dur="3s" repeatCount="indefinite" />
      </line>
      {/* Fulcrum triangle */}
      <polygon points="93,118 100,105 107,118" fill="#46178F" opacity="0.3" />

      {/* Left pan — FEAR (heavier, lower) */}
      <g>
        <path d="M20 75 Q35 85 50 75" fill="none" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="d" values="M20 75 Q35 85 50 75;M20 78 Q35 88 50 78;M20 75 Q35 85 50 75" dur="3s" repeatCount="indefinite" />
        </path>
        <line x1="20" y1="75" x2="35" y2="60" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="75" x2="35" y2="60" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
        {/* Fear weight block */}
        <rect x="25" y="62" width="20" height="12" rx="3" fill="#E21B3C" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.35;0.2" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <text x="35" y="72" textAnchor="middle" fill="#E21B3C" fontSize="5" fontWeight="bold" opacity="0.6">FEAR</text>
      </g>

      {/* Right pan — FACTS (lighter, higher) */}
      <g>
        <path d="M150 55 Q165 65 180 55" fill="none" stroke="#26890C" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="d" values="M150 55 Q165 65 180 55;M150 52 Q165 62 180 52;M150 55 Q165 65 180 55" dur="3s" repeatCount="indefinite" />
        </path>
        <line x1="150" y1="55" x2="165" y2="40" stroke="#26890C" strokeWidth="1" opacity="0.3" />
        <line x1="180" y1="55" x2="165" y2="40" stroke="#26890C" strokeWidth="1" opacity="0.3" />
        {/* Facts weight block — smaller */}
        <rect x="158" y="44" width="14" height="10" rx="3" fill="#26890C" stroke="#26890C" strokeWidth="1" opacity="0.3" />
        <text x="165" y="52" textAnchor="middle" fill="#26890C" fontSize="4" fontWeight="bold" opacity="0.6">FACTS</text>
      </g>

      {/* Label */}
      <text x="100" y="18" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.5">FEAR vs REALITY</text>

      {/* Sparkles */}
      <circle cx="12" cy="25" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="90" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="152" r="2" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-quick-check-1 — Quiz clipboard
 */
export function M7QuickCheck1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Clipboard body */}
      <rect x="60" y="30" width="80" height="105" rx="6" fill="#E21B3C" fillOpacity="0.08" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4" />
      {/* Clipboard clip */}
      <rect x="85" y="22" width="30" height="14" rx="4" fill="#E21B3C" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />

      {/* Question lines */}
      <rect x="72" y="50" width="40" height="4" rx="2" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </rect>

      {/* Option A */}
      <circle cx="78" cy="68" r="4" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="66" width="35" height="4" rx="2" fill="#1368CE" opacity="0.2" />

      {/* Option B */}
      <circle cx="78" cy="82" r="4" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="80" width="40" height="4" rx="2" fill="#26890C" opacity="0.2" />

      {/* Option C */}
      <circle cx="78" cy="96" r="4" stroke="#46178F" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="94" width="30" height="4" rx="2" fill="#46178F" opacity="0.2" />

      {/* Checkmark appearing on B */}
      <path d="M75 82 L78 85 L82 78" stroke="#26890C" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Floating question marks */}
      <text x="150" y="45" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.3">
        ?
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2s" repeatCount="indefinite" />
      </text>
      <text x="45" y="60" fill="#E21B3C" fontSize="12" fontWeight="bold" opacity="0.2">
        ?
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </text>

      {/* Sparkles */}
      <circle cx="30" cy="25" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="130" r="1" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="30" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-key-takeaway-1 — Key/lightbulb
 */
export function M7KeyTakeaway1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="80" ry="65" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Large key shape */}
      <circle cx="70" cy="70" r="22" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="70" r="12" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      {/* Key shaft */}
      <rect x="90" y="66" width="60" height="8" rx="4" fill="#FFA602" fillOpacity="0.2" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      {/* Key teeth */}
      <rect x="130" y="74" width="6" height="10" rx="2" fill="#FFA602" opacity="0.3" />
      <rect x="140" y="74" width="6" height="8" rx="2" fill="#FFA602" opacity="0.3" />

      {/* Lightbulb inside key ring */}
      <ellipse cx="70" cy="67" rx="7" ry="8" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <path d="M67 60 Q70 55 73 60" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Label floating above */}
      <rect x="40" y="25" width="120" height="22" rx="11" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="40" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="bold" opacity="0.6">KEY TAKEAWAY</text>

      {/* Glowing aura */}
      <circle cx="70" cy="70" r="30" fill="none" stroke="#FFA602" strokeWidth="0.5" opacity="0.15">
        <animate attributeName="r" values="28;34;28" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="30" cy="40" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="50" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="130" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="120" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Bottom accent line */}
      <rect x="60" y="110" width="80" height="2" rx="1" fill="#E21B3C" opacity="0.1">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

// ─── LESSON 2: Why AI Projects Fail ─────────────────────────────────────

/**
 * m7-failure-rate — Broken/cracked pie chart showing 85%
 */
export function M7FailureRate({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Pie chart circle — full */}
      <circle cx="100" cy="78" r="45" fill="#E21B3C" fillOpacity="0.08" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

      {/* 85% failure slice — large arc */}
      <circle cx="100" cy="78" r="45" fill="none" stroke="#E21B3C" strokeWidth="8" strokeDasharray="240 283" strokeDashoffset="0" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* 15% success slice */}
      <circle cx="100" cy="78" r="45" fill="none" stroke="#26890C" strokeWidth="8" strokeDasharray="42 283" strokeDashoffset="-240" strokeLinecap="round" opacity="0.4" />

      {/* Crack lines across the pie */}
      <path d="M85 50 L95 70 L88 90 L100 110" stroke="#E21B3C" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M110 55 L105 68 L115 85" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </path>

      {/* Center text */}
      <text x="100" y="75" textAnchor="middle" fill="#E21B3C" fontSize="18" fontWeight="bold" opacity="0.6">85%</text>
      <text x="100" y="88" textAnchor="middle" fill="#E21B3C" fontSize="6" opacity="0.4">FAIL</text>

      {/* Title */}
      <text x="100" y="18" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="bold" opacity="0.5">AI PROJECT FAILURE RATE</text>

      {/* Sparkles */}
      <circle cx="18" cy="25" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="30" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-hype-reality — Two paths diverging: shiny promise vs rocky reality
 */
export function M7HypeReality({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Starting point */}
      <circle cx="100" cy="130" r="8" fill="#46178F" stroke="#46178F" strokeWidth="1.5" opacity="0.4" />
      <text x="100" y="133" textAnchor="middle" fill="#46178F" fontSize="5" fontWeight="bold" opacity="0.5">START</text>

      {/* Left path — Shiny promise (golden road) */}
      <path d="M92 125 Q60 100 40 60 Q30 40 35 25" stroke="#FFA602" strokeWidth="3" fill="none" opacity="0.3" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
      </path>
      {/* Sparkle stars along golden path */}
      <circle cx="60" cy="95" r="3" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="45" cy="65" r="2.5" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <text x="30" y="20" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="bold" opacity="0.5">HYPE</text>

      {/* Right path — Rocky reality (rough terrain) */}
      <path d="M108 125 Q130 110 135 95 Q140 80 150 75 Q155 65 145 55 Q140 45 155 35 Q160 25 165 20" stroke="#E21B3C" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" strokeDasharray="4 2">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </path>
      {/* Warning triangles along rocky path */}
      <polygon points="138,90 141,85 144,90" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </polygon>
      <polygon points="148,60 151,55 154,60" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </polygon>
      <text x="170" y="20" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.5">REALITY</text>

      {/* Sparkles */}
      <circle cx="10" cy="15" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="145" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="10" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-seven-causes — Numbered list with warning triangles, animated one by one
 */
export function M7SevenCauses({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Warning triangles with numbers — staggered appearance */}
      {[
        { x: 35, y: 30, color: "#E21B3C", delay: "0s", num: "1" },
        { x: 70, y: 30, color: "#FFA602", delay: "0.4s", num: "2" },
        { x: 105, y: 30, color: "#1368CE", delay: "0.8s", num: "3" },
        { x: 140, y: 30, color: "#26890C", delay: "1.2s", num: "4" },
        { x: 52, y: 65, color: "#46178F", delay: "1.6s", num: "5" },
        { x: 87, y: 65, color: "#E21B3C", delay: "2s", num: "6" },
        { x: 122, y: 65, color: "#FFA602", delay: "2.4s", num: "7" },
      ].map((item, i) => (
        <g key={i} opacity="0">
          <animate attributeName="opacity" values="0;0.8;0.8" dur="0.5s" begin={item.delay} fill="freeze" />
          {/* Triangle */}
          <polygon
            points={`${item.x},${item.y} ${item.x - 12},${item.y + 22} ${item.x + 12},${item.y + 22}`}
            fill={item.color}
            fillOpacity="0.12"
            stroke={item.color}
            strokeWidth="1.5"
            opacity="0.5"
          />
          {/* Exclamation */}
          <line x1={item.x} y1={item.y + 8} x2={item.x} y2={item.y + 15} stroke={item.color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <circle cx={item.x} cy={item.y + 19} r="1" fill={item.color} opacity="0.5" />
          {/* Number */}
          <text x={item.x} y={item.y - 4} textAnchor="middle" fill={item.color} fontSize="8" fontWeight="bold" opacity="0.6">{item.num}</text>
        </g>
      ))}

      {/* Label lines */}
      <rect x="35" y="100" width="130" height="3" rx="1.5" fill="#E21B3C" opacity="0.15">
        <animate attributeName="width" values="0;130;130" dur="3s" fill="freeze" />
      </rect>
      <rect x="45" y="110" width="110" height="3" rx="1.5" fill="#FFA602" opacity="0.1">
        <animate attributeName="width" values="0;110;110" dur="3s" begin="0.5s" fill="freeze" />
      </rect>
      <rect x="55" y="120" width="90" height="3" rx="1.5" fill="#1368CE" opacity="0.1">
        <animate attributeName="width" values="0;90;90" dur="3s" begin="1s" fill="freeze" />
      </rect>

      {/* Title */}
      <text x="100" y="150" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.4">7 REASONS AI FAILS</text>

      {/* Sparkles */}
      <circle cx="175" cy="20" r="2" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="145" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-mcdonalds-fail — Drive-thru window with confused speech bubbles
 */
export function M7McdonaldsFail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Drive-thru building shape */}
      <rect x="50" y="50" width="100" height="70" rx="4" fill="#1a1a2e" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      {/* Window */}
      <rect x="70" y="60" width="40" height="30" rx="3" fill="#0d0d1a" stroke="#FFA602" strokeWidth="1" opacity="0.5" />
      {/* Menu board */}
      <rect x="120" y="55" width="25" height="35" rx="2" fill="#0d0d1a" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      {/* Menu lines */}
      <rect x="123" y="60" width="18" height="2" rx="1" fill="#1368CE" opacity="0.2" />
      <rect x="123" y="66" width="15" height="2" rx="1" fill="#1368CE" opacity="0.15" />
      <rect x="123" y="72" width="17" height="2" rx="1" fill="#1368CE" opacity="0.15" />

      {/* Speaker/AI in window */}
      <circle cx="90" cy="75" r="8" fill="#E21B3C" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="90" y="78" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.5">AI</text>

      {/* Confused speech bubbles from AI */}
      <g opacity="0.5">
        <rect x="30" y="25" width="55" height="20" rx="10" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <text x="57" y="38" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.5">400 McNuggets?</text>
        {/* Bubble tail */}
        <polygon points="70,45 75,48 65,48" fill="#E21B3C" opacity="0.1" />
      </g>

      {/* Second confused bubble */}
      <g opacity="0.4">
        <rect x="110" y="20" width="60" height="18" rx="9" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" begin="1s" repeatCount="indefinite" />
        </rect>
        <text x="140" y="32" textAnchor="middle" fill="#FFA602" fontSize="5" opacity="0.5">Add ice cream?!</text>
      </g>

      {/* Car outline */}
      <g transform="translate(55, 130)">
        <path d="M-15 -5 L-10 -15 L20 -15 L25 -5Z" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
        <rect x="-18" y="-5" width="46" height="10" rx="3" fill="#1a1a2e" stroke="#1368CE" strokeWidth="0.8" opacity="0.3" />
        <circle cx="-8" cy="6" r="4" fill="#333" stroke="#1368CE" strokeWidth="0.5" opacity="0.3" />
        <circle cx="18" cy="6" r="4" fill="#333" stroke="#1368CE" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="15" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="188" cy="140" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-air-canada — Chatbot making up a document/policy
 */
export function M7AirCanada({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Chat window */}
      <rect x="45" y="25" width="110" height="95" rx="8" fill="#0d0d1a" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
      {/* Title bar */}
      <rect x="45" y="25" width="110" height="16" rx="8" fill="#1368CE" opacity="0.15" />
      <text x="100" y="36" textAnchor="middle" fill="#1368CE" fontSize="5" fontWeight="bold" opacity="0.5">AI CHATBOT</text>

      {/* Bot message — the hallucinated policy */}
      <rect x="52" y="48" width="70" height="22" rx="6" fill="#1368CE" stroke="#1368CE" strokeWidth="0.8" opacity="0.2" />
      <rect x="57" y="53" width="40" height="3" rx="1.5" fill="#1368CE" opacity="0.2" />
      <rect x="57" y="59" width="50" height="3" rx="1.5" fill="#1368CE" opacity="0.15" />
      <rect x="57" y="65" width="35" height="2" rx="1" fill="#1368CE" opacity="0.1" />

      {/* Fake document icon floating out */}
      <g transform="translate(130, 65)">
        <rect x="-10" y="-12" width="20" height="24" rx="2" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
        </rect>
        {/* Document lines */}
        <line x1="-6" y1="-6" x2="6" y2="-6" stroke="#FFA602" strokeWidth="0.5" opacity="0.3" />
        <line x1="-6" y1="-2" x2="4" y2="-2" stroke="#FFA602" strokeWidth="0.5" opacity="0.3" />
        <line x1="-6" y1="2" x2="5" y2="2" stroke="#FFA602" strokeWidth="0.5" opacity="0.3" />
        {/* Red X stamp — FAKE */}
        <line x1="-5" y1="6" x2="5" y2="16" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="5" y1="6" x2="-5" y2="16" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </line>
      </g>

      {/* User message — confused */}
      <rect x="80" y="78" width="65" height="16" rx="6" fill="#46178F" stroke="#46178F" strokeWidth="0.8" opacity="0.2" />
      <rect x="85" y="84" width="45" height="3" rx="1.5" fill="#46178F" opacity="0.15" />

      {/* Warning badge */}
      <g transform="translate(100, 135)">
        <polygon points="0,-10 -10,8 10,8" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </polygon>
        <text x="0" y="5" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.5">!</text>
      </g>

      {/* Sparkles */}
      <circle cx="20" cy="20" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="25" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-lawyer-case — Legal document with red "FAKE" stamp
 */
export function M7LawyerCase({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#46178F" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Legal document */}
      <rect x="55" y="20" width="90" height="115" rx="4" fill="#0d0d1a" stroke="#46178F" strokeWidth="1.5" opacity="0.4" />
      {/* Document header */}
      <rect x="70" y="28" width="60" height="6" rx="3" fill="#46178F" opacity="0.2" />
      {/* Document lines */}
      <rect x="63" y="42" width="74" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="63" y="50" width="70" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="63" y="58" width="74" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="63" y="66" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="63" y="74" width="72" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="63" y="82" width="65" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="63" y="90" width="74" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />

      {/* Case citations — highlighted (the fake ones) */}
      <rect x="63" y="100" width="50" height="3" rx="1.5" fill="#FFA602" opacity="0.2" />
      <rect x="63" y="108" width="45" height="3" rx="1.5" fill="#FFA602" opacity="0.15" />
      <rect x="63" y="116" width="55" height="3" rx="1.5" fill="#FFA602" opacity="0.2" />

      {/* Big red FAKE stamp — rotated */}
      <g transform="translate(100, 80) rotate(-15)">
        <rect x="-30" y="-12" width="60" height="24" rx="3" fill="none" stroke="#E21B3C" strokeWidth="3" opacity="0.4">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <text x="0" y="6" textAnchor="middle" fill="#E21B3C" fontSize="14" fontWeight="bold" opacity="0.5">
          FAKE
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
        </text>
      </g>

      {/* Gavel icon top-right */}
      <g transform="translate(165, 35)">
        <rect x="-3" y="-12" width="6" height="18" rx="2" fill="#46178F" opacity="0.3" transform="rotate(30 0 0)" />
        <rect x="-8" y="4" width="16" height="8" rx="3" fill="#46178F" opacity="0.2" />
      </g>

      {/* Sparkles */}
      <circle cx="25" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="145" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-adoption-gap — Two bars: 8.8% (real) vs 55% (marketing claim)
 */
export function M7AdoptionGap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Title */}
      <text x="100" y="20" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.5">ADOPTION: CLAIM vs REALITY</text>

      {/* Marketing claim bar — 55% */}
      <text x="30" y="52" fill="#FFA602" fontSize="5" opacity="0.4">Marketing</text>
      <rect x="30" y="55" width="0" height="20" rx="4" fill="#FFA602" opacity="0.3">
        <animate attributeName="width" values="0;132;132" dur="1.5s" fill="freeze" />
      </rect>
      <text x="30" y="100" fill="#FFA602" fontSize="10" fontWeight="bold" opacity="0">
        55%
        <animate attributeName="opacity" values="0;0.6;0.6" dur="0.5s" begin="1.5s" fill="freeze" />
      </text>

      {/* Real adoption bar — 8.8% */}
      <text x="30" y="92" fill="#26890C" fontSize="5" opacity="0.4">Reality</text>
      <rect x="30" y="95" width="0" height="20" rx="4" fill="#26890C" opacity="0.4">
        <animate attributeName="width" values="0;21;21" dur="1.5s" begin="0.5s" fill="freeze" />
      </rect>
      <text x="30" y="140" fill="#26890C" fontSize="10" fontWeight="bold" opacity="0">
        8.8%
        <animate attributeName="opacity" values="0;0.6;0.6" dur="0.5s" begin="2s" fill="freeze" />
      </text>

      {/* Gap indicator */}
      <line x1="165" y1="65" x2="165" y2="105" stroke="#E21B3C" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 2">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </line>
      <text x="175" y="88" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.4">6x</text>

      {/* Sparkles */}
      <circle cx="185" cy="20" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="145" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-quick-check-2 — Quiz clipboard
 */
export function M7QuickCheck2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Clipboard body */}
      <rect x="60" y="30" width="80" height="105" rx="6" fill="#FFA602" fillOpacity="0.08" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      {/* Clipboard clip */}
      <rect x="85" y="22" width="30" height="14" rx="4" fill="#FFA602" stroke="#FFA602" strokeWidth="1" opacity="0.3" />

      {/* Question lines */}
      <rect x="72" y="50" width="45" height="4" rx="2" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </rect>

      {/* Option A */}
      <circle cx="78" cy="68" r="4" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="66" width="38" height="4" rx="2" fill="#1368CE" opacity="0.2" />

      {/* Option B */}
      <circle cx="78" cy="82" r="4" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="80" width="42" height="4" rx="2" fill="#E21B3C" opacity="0.2" />

      {/* Option C */}
      <circle cx="78" cy="96" r="4" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="94" width="35" height="4" rx="2" fill="#26890C" opacity="0.2" />

      {/* Checkmark appearing on A */}
      <path d="M75 68 L78 71 L82 64" stroke="#1368CE" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Floating question marks */}
      <text x="148" y="50" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.3">
        ?
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Sparkles */}
      <circle cx="35" cy="20" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="168" cy="135" r="1" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="140" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-key-takeaway-2 — Key/lightbulb
 */
export function M7KeyTakeaway2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="80" ry="65" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Large key shape */}
      <circle cx="70" cy="70" r="22" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="70" r="12" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      {/* Key shaft */}
      <rect x="90" y="66" width="60" height="8" rx="4" fill="#FFA602" fillOpacity="0.2" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      {/* Key teeth */}
      <rect x="130" y="74" width="6" height="10" rx="2" fill="#FFA602" opacity="0.3" />
      <rect x="140" y="74" width="6" height="8" rx="2" fill="#FFA602" opacity="0.3" />

      {/* Lightbulb inside key ring */}
      <ellipse cx="70" cy="67" rx="7" ry="8" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <path d="M67 60 Q70 55 73 60" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Label */}
      <rect x="40" y="25" width="120" height="22" rx="11" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="40" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.6">KEY TAKEAWAY</text>

      {/* Glowing aura */}
      <circle cx="70" cy="70" r="30" fill="none" stroke="#FFA602" strokeWidth="0.5" opacity="0.15">
        <animate attributeName="r" values="28;34;28" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="30" cy="40" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="50" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="130" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="120" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Bottom accent line */}
      <rect x="60" y="110" width="80" height="2" rx="1" fill="#FFA602" opacity="0.1">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

// ─── LESSON 3: What AI Is Bad At ────────────────────────────────────────

/**
 * m7-prefer-humans — Human handshake beating robot hand, with 90% badge
 */
export function M7PreferHumans({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Human hand — left */}
      <g transform="translate(65, 80)">
        {/* Arm */}
        <rect x="-35" y="-5" width="35" height="12" rx="6" fill="#1368CE" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
        {/* Hand */}
        <ellipse cx="5" cy="0" rx="12" ry="10" fill="#1368CE" stroke="#1368CE" strokeWidth="1" opacity="0.4" />
        {/* Warm glow */}
        <circle cx="5" cy="0" r="18" fill="#1368CE" opacity="0.05">
          <animate attributeName="opacity" values="0.03;0.08;0.03" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Robot hand — right */}
      <g transform="translate(135, 80)">
        {/* Arm */}
        <rect x="0" y="-5" width="35" height="12" rx="6" fill="#E21B3C" stroke="#E21B3C" strokeWidth="1" opacity="0.25" />
        {/* Mechanical hand — joints visible */}
        <ellipse cx="-5" cy="0" rx="12" ry="10" fill="#E21B3C" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
        <circle cx="-8" cy="-3" r="2" fill="#E21B3C" opacity="0.2" />
        <circle cx="-2" cy="-3" r="2" fill="#E21B3C" opacity="0.2" />
        <circle cx="-5" cy="3" r="2" fill="#E21B3C" opacity="0.2" />
      </g>

      {/* Handshake connection point */}
      <circle cx="100" cy="80" r="6" fill="#26890C" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* 90% badge — top */}
      <circle cx="100" cy="35" r="22" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="33" textAnchor="middle" fill="#26890C" fontSize="12" fontWeight="bold" opacity="0.6">90%</text>
      <text x="100" y="43" textAnchor="middle" fill="#26890C" fontSize="4.5" opacity="0.4">prefer humans</text>

      {/* VS label */}
      <text x="100" y="110" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="bold" opacity="0.4">HUMAN vs AI</text>

      {/* Check on human side */}
      <path d="M50 115 L55 120 L65 110" stroke="#26890C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* X on robot side */}
      <line x1="130" y1="110" x2="140" y2="120" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <line x1="140" y1="110" x2="130" y2="120" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

      {/* Sparkles */}
      <circle cx="15" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="140" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="145" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-chatbot-hell — Circular arrows loop with frustrated face
 */
export function M7ChatbotHell({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Circular loop arrows */}
      <g transform="translate(100, 75)">
        {/* Top arc */}
        <path d="M-35 -5 A38 38 0 0 1 35 -5" fill="none" stroke="#E21B3C" strokeWidth="2.5" strokeLinecap="round" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite" />
        </path>
        {/* Arrow heads */}
        <polygon points="33,-10 38,-2 28,-2" fill="#E21B3C" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite" />
        </polygon>

        {/* Bottom arc */}
        <path d="M35 5 A38 38 0 0 1 -35 5" fill="none" stroke="#FFA602" strokeWidth="2.5" strokeLinecap="round" opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite" />
        </path>
        <polygon points="-33,10 -38,2 -28,2" fill="#FFA602" opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Frustrated face in center */}
      <circle cx="100" cy="75" r="18" fill="#E21B3C" fillOpacity="0.08" stroke="#E21B3C" strokeWidth="1.5" opacity="0.3" />
      {/* Angry/frustrated eyes */}
      <line x1="91" y1="68" x2="96" y2="71" stroke="#E21B3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="109" y1="68" x2="104" y2="71" stroke="#E21B3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="94" cy="73" r="2" fill="#E21B3C" opacity="0.4" />
      <circle cx="106" cy="73" r="2" fill="#E21B3C" opacity="0.4" />
      {/* Frown */}
      <path d="M93 82 Q100 77 107 82" stroke="#E21B3C" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Chat bubble fragments — going in circles */}
      <rect x="140" y="40" width="25" height="12" rx="6" fill="#1368CE" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="35" y="100" width="22" height="10" rx="5" fill="#46178F" opacity="0.12">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </rect>

      {/* Label */}
      <text x="100" y="125" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.4">CHATBOT LOOP</text>

      {/* Sparkles */}
      <circle cx="18" cy="18" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="140" r="2" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-nps-gap — Two thermometers: human (high/green) vs chatbot (low/red)
 */
export function M7NpsGap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Left thermometer — Human (high, green) */}
      <g transform="translate(65, 25)">
        {/* Tube */}
        <rect x="-6" y="0" width="12" height="90" rx="6" fill="rgba(255,255,255,0.05)" stroke="#26890C" strokeWidth="1.5" opacity="0.3" />
        {/* Mercury — high fill */}
        <rect x="-4" y="10" width="8" height="0" rx="4" fill="#26890C" opacity="0.4">
          <animate attributeName="height" values="0;78;78" dur="2s" fill="freeze" />
          <animate attributeName="y" values="88;10;10" dur="2s" fill="freeze" />
        </rect>
        {/* Bulb */}
        <circle cx="0" cy="95" r="10" fill="#26890C" stroke="#26890C" strokeWidth="1.5" opacity="0.3" />
        {/* Label */}
        <text x="0" y="120" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="bold" opacity="0.5">HUMAN</text>
        {/* Score */}
        <text x="18" y="20" fill="#26890C" fontSize="8" fontWeight="bold" opacity="0.5">+72</text>
      </g>

      {/* Right thermometer — Chatbot (low, red) */}
      <g transform="translate(135, 25)">
        {/* Tube */}
        <rect x="-6" y="0" width="12" height="90" rx="6" fill="rgba(255,255,255,0.05)" stroke="#E21B3C" strokeWidth="1.5" opacity="0.3" />
        {/* Mercury — low fill */}
        <rect x="-4" y="88" width="8" height="0" rx="4" fill="#E21B3C" opacity="0.4">
          <animate attributeName="height" values="0;20;20" dur="2s" begin="0.5s" fill="freeze" />
          <animate attributeName="y" values="88;68;68" dur="2s" begin="0.5s" fill="freeze" />
        </rect>
        {/* Bulb */}
        <circle cx="0" cy="95" r="10" fill="#E21B3C" stroke="#E21B3C" strokeWidth="1.5" opacity="0.3" />
        {/* Label */}
        <text x="0" y="120" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.5">CHATBOT</text>
        {/* Score */}
        <text x="18" y="75" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.5">-20</text>
      </g>

      {/* NPS label */}
      <text x="100" y="15" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.5">NPS SCORE</text>

      {/* Sparkles */}
      <circle cx="20" cy="15" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="20" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="148" r="2" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-hallucination-cost — Dollar bills flying away with "$67.4B" text
 */
export function M7HallucinationCost({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Central cost number */}
      <text x="100" y="70" textAnchor="middle" fill="#E21B3C" fontSize="22" fontWeight="bold" opacity="0.5">$67.4B</text>
      <text x="100" y="85" textAnchor="middle" fill="#E21B3C" fontSize="6" opacity="0.4">lost to hallucinations</text>

      {/* Flying dollar bills */}
      <g>
        {/* Bill 1 — top left */}
        <rect x="30" y="30" width="20" height="12" rx="2" fill="#26890C" stroke="#26890C" strokeWidth="0.8" opacity="0.3">
          <animateTransform attributeName="transform" type="translate" values="0,0;-15,-20" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="40" y="39" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.3">
          $
          <animateTransform attributeName="transform" type="translate" values="0,0;-15,-20" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="3s" repeatCount="indefinite" />
        </text>
      </g>

      <g>
        {/* Bill 2 — top right */}
        <rect x="150" y="25" width="20" height="12" rx="2" fill="#26890C" stroke="#26890C" strokeWidth="0.8" opacity="0.3">
          <animateTransform attributeName="transform" type="translate" values="0,0;15,-18" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
        </rect>
      </g>

      <g>
        {/* Bill 3 — left mid */}
        <rect x="20" y="70" width="18" height="10" rx="2" fill="#26890C" stroke="#26890C" strokeWidth="0.8" opacity="0.3">
          <animateTransform attributeName="transform" type="translate" values="0,0;-20,-10" dur="2.8s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="2.8s" begin="1s" repeatCount="indefinite" />
        </rect>
      </g>

      <g>
        {/* Bill 4 — right mid */}
        <rect x="160" y="65" width="18" height="10" rx="2" fill="#26890C" stroke="#26890C" strokeWidth="0.8" opacity="0.3">
          <animateTransform attributeName="transform" type="translate" values="0,0;18,-8" dur="3.2s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="3.2s" begin="0.8s" repeatCount="indefinite" />
        </rect>
      </g>

      <g>
        {/* Bill 5 — bottom */}
        <rect x="85" y="100" width="22" height="12" rx="2" fill="#26890C" stroke="#26890C" strokeWidth="0.8" opacity="0.3">
          <animateTransform attributeName="transform" type="translate" values="0,0;-5,20" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Warning badge */}
      <g transform="translate(100, 130)">
        <polygon points="0,-8 -8,6 8,6" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
        </polygon>
        <text x="0" y="4" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.4">!</text>
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="15" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="145" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-cant-detect — Magnifying glass failing to distinguish real vs AI text
 */
export function M7CantDetect({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#46178F" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Two text blocks side by side */}
      {/* Left — "Real" text */}
      <rect x="20" y="50" width="65" height="60" rx="4" fill="#0d0d1a" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <text x="52" y="45" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.4">HUMAN</text>
      <rect x="28" y="58" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="28" y="65" width="42" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="28" y="72" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="28" y="79" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="28" y="86" width="45" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="28" y="93" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />

      {/* Right — "AI" text */}
      <rect x="115" y="50" width="65" height="60" rx="4" fill="#0d0d1a" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      <text x="147" y="45" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.4">AI</text>
      <rect x="123" y="58" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="123" y="65" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="123" y="72" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="123" y="79" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="123" y="86" width="46" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="123" y="93" width="42" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />

      {/* ? between them */}
      <text x="100" y="85" textAnchor="middle" fill="#FFA602" fontSize="18" fontWeight="bold" opacity="0.4">
        ?
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Magnifying glass — scanning */}
      <g>
        <circle cx="100" cy="80" r="25" stroke="#46178F" strokeWidth="2" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <line x1="118" y1="98" x2="135" y2="115" stroke="#46178F" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
        {/* X inside lens — can't detect */}
        <line x1="92" y1="72" x2="108" y2="88" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="108" y1="72" x2="92" y2="88" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Label */}
      <text x="100" y="140" textAnchor="middle" fill="#46178F" fontSize="6" fontWeight="bold" opacity="0.4">CAN&apos;T TELL THE DIFFERENCE</text>

      {/* Sparkles */}
      <circle cx="10" cy="20" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="25" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="148" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-customer-service — Phone with frustrated user vs smiling human agent
 */
export function M7CustomerService({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Left side — Phone with frustrated user + chatbot */}
      <g transform="translate(55, 75)">
        {/* Phone */}
        <rect x="-18" y="-35" width="36" height="60" rx="6" fill="#1a1a2e" stroke="#E21B3C" strokeWidth="1.2" opacity="0.4" />
        <rect x="-14" y="-28" width="28" height="45" rx="3" fill="#0d0d1a" />
        {/* Chat messages */}
        <rect x="-10" y="-22" width="18" height="6" rx="3" fill="#E21B3C" opacity="0.15" />
        <rect x="-4" y="-12" width="16" height="6" rx="3" fill="#E21B3C" opacity="0.12" />
        <rect x="-10" y="-2" width="20" height="6" rx="3" fill="#E21B3C" opacity="0.15" />
        {/* Frustrated emoji at bottom */}
        <circle cx="0" cy="12" r="5" fill="#E21B3C" opacity="0.15" />
        <text x="0" y="15" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.4">{">.<"}</text>
      </g>
      <text x="55" y="125" textAnchor="middle" fill="#E21B3C" fontSize="5" fontWeight="bold" opacity="0.4">AI CHAT</text>

      {/* Arrow pointing right */}
      <line x1="85" y1="75" x2="110" y2="75" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      <polygon points="108,71 115,75 108,79" fill="#FFA602" opacity="0.3" />

      {/* Right side — Human agent with headset */}
      <g transform="translate(145, 65)">
        {/* Head */}
        <circle cx="0" cy="0" r="16" fill="#26890C" stroke="#26890C" strokeWidth="1.5" opacity="0.4" />
        {/* Headset */}
        <path d="M-16 -2 Q-18 -15 0 -18 Q18 -15 16 -2" fill="none" stroke="#26890C" strokeWidth="2" opacity="0.3" />
        <circle cx="-16" cy="0" r="4" fill="#26890C" opacity="0.2" />
        {/* Mic */}
        <line x1="-16" y1="4" x2="-12" y2="10" stroke="#26890C" strokeWidth="1.5" opacity="0.3" />
        <circle cx="-12" cy="12" r="2" fill="#26890C" opacity="0.2" />
        {/* Happy eyes */}
        <circle cx="-4" cy="-2" r="2" fill="#26890C" opacity="0.5" />
        <circle cx="4" cy="-2" r="2" fill="#26890C" opacity="0.5" />
        {/* Smile */}
        <path d="M-5 5 Q0 10 5 5" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
        {/* Warm glow */}
        <circle cx="0" cy="0" r="24" fill="#26890C" opacity="0.04">
          <animate attributeName="opacity" values="0.02;0.08;0.02" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      <text x="145" y="125" textAnchor="middle" fill="#26890C" fontSize="5" fontWeight="bold" opacity="0.4">HUMAN</text>

      {/* Happy emoji on human side */}
      <text x="145" y="100" textAnchor="middle" fill="#26890C" fontSize="8" opacity="0.4">
        :)
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Sparkles */}
      <circle cx="15" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="188" cy="140" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="148" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-quick-check-3 — Quiz clipboard
 */
export function M7QuickCheck3({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Clipboard body */}
      <rect x="60" y="30" width="80" height="105" rx="6" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
      {/* Clipboard clip */}
      <rect x="85" y="22" width="30" height="14" rx="4" fill="#1368CE" stroke="#1368CE" strokeWidth="1" opacity="0.3" />

      {/* Question lines */}
      <rect x="72" y="50" width="42" height="4" rx="2" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </rect>

      {/* Option A */}
      <circle cx="78" cy="68" r="4" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="66" width="36" height="4" rx="2" fill="#26890C" opacity="0.2" />

      {/* Option B */}
      <circle cx="78" cy="82" r="4" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="80" width="40" height="4" rx="2" fill="#E21B3C" opacity="0.2" />

      {/* Option C */}
      <circle cx="78" cy="96" r="4" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="94" width="32" height="4" rx="2" fill="#1368CE" opacity="0.2" />

      {/* Checkmark appearing on C */}
      <path d="M75 96 L78 99 L82 92" stroke="#1368CE" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Floating question marks */}
      <text x="148" y="48" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.3">
        ?
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Sparkles */}
      <circle cx="32" cy="22" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="132" r="1" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="38" cy="142" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-key-takeaway-3 — Key/lightbulb
 */
export function M7KeyTakeaway3({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="80" ry="65" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Large key shape */}
      <circle cx="70" cy="70" r="22" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="70" r="12" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      {/* Key shaft */}
      <rect x="90" y="66" width="60" height="8" rx="4" fill="#FFA602" fillOpacity="0.2" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      {/* Key teeth */}
      <rect x="130" y="74" width="6" height="10" rx="2" fill="#FFA602" opacity="0.3" />
      <rect x="140" y="74" width="6" height="8" rx="2" fill="#FFA602" opacity="0.3" />

      {/* Lightbulb inside key ring */}
      <ellipse cx="70" cy="67" rx="7" ry="8" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <path d="M67 60 Q70 55 73 60" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Label */}
      <rect x="40" y="25" width="120" height="22" rx="11" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="40" textAnchor="middle" fill="#1368CE" fontSize="7" fontWeight="bold" opacity="0.6">KEY TAKEAWAY</text>

      {/* Glowing aura */}
      <circle cx="70" cy="70" r="30" fill="none" stroke="#FFA602" strokeWidth="0.5" opacity="0.15">
        <animate attributeName="r" values="28;34;28" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="30" cy="40" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="50" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="130" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="120" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Bottom accent line */}
      <rect x="60" y="110" width="80" height="2" rx="1" fill="#1368CE" opacity="0.1">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

// ─── LESSON 4: AI Bill of Rights ────────────────────────────────────────

/**
 * m7-privacy-shield — Shield with lock icon, data particles bouncing off
 */
export function M7PrivacyShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Shield shape */}
      <path d="M100 20 L140 40 L140 85 Q140 115 100 135 Q60 115 60 85 L60 40Z" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Lock icon in center */}
      <g transform="translate(100, 72)">
        {/* Lock body */}
        <rect x="-10" y="-2" width="20" height="16" rx="3" fill="#1368CE" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
        {/* Lock shackle */}
        <path d="M-6 -2 L-6 -10 Q-6 -18 0 -18 Q6 -18 6 -10 L6 -2" fill="none" stroke="#1368CE" strokeWidth="2" opacity="0.4" />
        {/* Keyhole */}
        <circle cx="0" cy="6" r="3" fill="#1368CE" opacity="0.3" />
        <rect x="-1.5" y="6" width="3" height="5" rx="1" fill="#1368CE" opacity="0.3" />
      </g>

      {/* Data particles bouncing off shield */}
      <circle cx="45" cy="50" r="3" fill="#E21B3C" opacity="0.4">
        <animateMotion path="M0,0 L15,10 L5,5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="55" r="2.5" fill="#FFA602" opacity="0.3">
        <animateMotion path="M0,0 L-15,8 L-5,3" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="100" r="2" fill="#46178F" opacity="0.3">
        <animateMotion path="M0,0 L12,-5 L4,-2" dur="2.2s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="95" r="2.5" fill="#E21B3C" opacity="0.3">
        <animateMotion path="M0,0 L-12,-3 L-4,-1" dur="2.8s" begin="0.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.8s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="18" cy="15" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="20" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="140" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-bias-scale — Tilted justice scale with binary code on one side
 */
export function M7BiasScale({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#46178F" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Scale pillar */}
      <rect x="97" y="40" width="6" height="85" rx="3" fill="#46178F" opacity="0.3" />
      <rect x="85" y="125" width="30" height="6" rx="3" fill="#46178F" opacity="0.2" />

      {/* Scale beam — tilted (biased) */}
      <line x1="30" y1="55" x2="170" y2="40" stroke="#FFA602" strokeWidth="2.5" strokeLinecap="round" opacity="0.4">
        <animate attributeName="y1" values="55;58;55" dur="4s" repeatCount="indefinite" />
        <animate attributeName="y2" values="40;37;40" dur="4s" repeatCount="indefinite" />
      </line>

      {/* Left pan — heavier (binary code / data bias) */}
      <path d="M15 55 Q30 70 45 55" fill="none" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4" />
      <line x1="15" y1="55" x2="30" y2="42" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      <line x1="45" y1="55" x2="30" y2="42" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      {/* Binary code text */}
      <text x="30" y="50" textAnchor="middle" fill="#E21B3C" fontSize="4" opacity="0.4">
        10110
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </text>
      <text x="30" y="58" textAnchor="middle" fill="#E21B3C" fontSize="4" opacity="0.3">01001</text>

      {/* Right pan — lighter (fairness) */}
      <path d="M155 40 Q170 52 185 40" fill="none" stroke="#26890C" strokeWidth="1.5" opacity="0.4" />
      <line x1="155" y1="40" x2="170" y2="28" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <line x1="185" y1="40" x2="170" y2="28" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      {/* Feather/fairness icon */}
      <text x="170" y="38" textAnchor="middle" fill="#26890C" fontSize="6" opacity="0.4">FAIR</text>

      {/* Warning — BIASED label */}
      <rect x="65" y="95" width="70" height="18" rx="9" fill="#E21B3C" fillOpacity="0.08" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="108" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="bold" opacity="0.5">BIASED?</text>

      {/* Sparkles */}
      <circle cx="10" cy="20" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="80" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="148" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-transparency — Black box opening up to reveal gears inside
 */
export function M7Transparency({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Black box — opening */}
      {/* Box body */}
      <rect x="55" y="55" width="90" height="65" rx="4" fill="#1a1a2e" stroke="#46178F" strokeWidth="1.5" opacity="0.5" />

      {/* Box lid — opening upward */}
      <g>
        <rect x="52" y="30" width="96" height="25" rx="4" fill="#1a1a2e" stroke="#46178F" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="y" values="55;30;30" dur="3s" fill="freeze" />
          <animate attributeName="opacity" values="0.5;0.4;0.4" dur="3s" fill="freeze" />
        </rect>
        <text x="100" y="47" textAnchor="middle" fill="#46178F" fontSize="6" fontWeight="bold" opacity="0.4">BLACK BOX</text>
      </g>

      {/* Gears inside — revealed */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0.6;0.6" dur="3s" fill="freeze" />

        {/* Gear 1 */}
        <circle cx="80" cy="80" r="12" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" values="0 80 80;360 80 80" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="80" r="5" fill="#FFA602" opacity="0.2" />
        {/* Gear teeth */}
        <g opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" values="0 80 80;360 80 80" dur="4s" repeatCount="indefinite" />
          <rect x="77" y="65" width="6" height="5" rx="1" fill="#FFA602" />
          <rect x="77" y="90" width="6" height="5" rx="1" fill="#FFA602" />
          <rect x="65" y="77" width="5" height="6" rx="1" fill="#FFA602" />
          <rect x="90" y="77" width="5" height="6" rx="1" fill="#FFA602" />
        </g>

        {/* Gear 2 — interlocked */}
        <circle cx="115" cy="90" r="10" stroke="#1368CE" strokeWidth="1.5" fill="none" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" values="360 115 90;0 115 90" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="90" r="4" fill="#1368CE" opacity="0.2" />
        <g opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" values="360 115 90;0 115 90" dur="4s" repeatCount="indefinite" />
          <rect x="112" y="78" width="6" height="4" rx="1" fill="#1368CE" />
          <rect x="112" y="98" width="6" height="4" rx="1" fill="#1368CE" />
          <rect x="103" y="87" width="4" height="6" rx="1" fill="#1368CE" />
          <rect x="123" y="87" width="4" height="6" rx="1" fill="#1368CE" />
        </g>

        {/* Connecting lines */}
        <line x1="80" y1="68" x2="80" y2="62" stroke="#FFA602" strokeWidth="0.5" opacity="0.3" />
        <line x1="115" y1="80" x2="115" y2="62" stroke="#1368CE" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* Light rays from opened box */}
      <line x1="100" y1="55" x2="100" y2="28" stroke="#FFA602" strokeWidth="0.8" opacity="0">
        <animate attributeName="opacity" values="0;0.3;0.3" dur="3s" fill="freeze" />
      </line>
      <line x1="80" y1="55" x2="70" y2="30" stroke="#FFA602" strokeWidth="0.8" opacity="0">
        <animate attributeName="opacity" values="0;0.2;0.2" dur="3s" fill="freeze" />
      </line>
      <line x1="120" y1="55" x2="130" y2="30" stroke="#FFA602" strokeWidth="0.8" opacity="0">
        <animate attributeName="opacity" values="0;0.2;0.2" dur="3s" fill="freeze" />
      </line>

      {/* Sparkles */}
      <circle cx="20" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="25" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-your-rights — Scroll/document with checkmarks and stars
 */
export function M7YourRights({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Scroll document */}
      {/* Main body */}
      <rect x="55" y="25" width="90" height="110" rx="3" fill="#0d0d1a" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      {/* Top roll */}
      <ellipse cx="100" cy="25" rx="48" ry="6" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
      {/* Bottom roll */}
      <ellipse cx="100" cy="135" rx="48" ry="6" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.3" />

      {/* Title */}
      <text x="100" y="45" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.5">YOUR RIGHTS</text>

      {/* Checkmark items */}
      {[
        { y: 60, color: "#26890C", delay: "0s" },
        { y: 75, color: "#1368CE", delay: "0.3s" },
        { y: 90, color: "#46178F", delay: "0.6s" },
        { y: 105, color: "#E21B3C", delay: "0.9s" },
        { y: 120, color: "#26890C", delay: "1.2s" },
      ].map((item, i) => (
        <g key={i} opacity="0">
          <animate attributeName="opacity" values="0;0.8;0.8" dur="0.5s" begin={item.delay} fill="freeze" />
          {/* Checkmark */}
          <path d={`M65 ${item.y} L69 ${item.y + 4} L75 ${item.y - 3}`} stroke={item.color} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
          {/* Text line */}
          <rect x="80" y={item.y - 2} width="55" height="4" rx="2" fill={item.color} opacity="0.15" />
        </g>
      ))}

      {/* Stars decorating the scroll */}
      <polygon points="48,40 50,36 52,40 48,40" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </polygon>
      <polygon points="148,40 150,36 152,40 148,40" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </polygon>
      <polygon points="48,120 50,116 52,120 48,120" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
      </polygon>

      {/* Sparkles */}
      <circle cx="20" cy="15" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="20" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-healthcare-ai — Medical cross with caution symbol
 */
export function M7HealthcareAi({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Medical cross */}
      <g transform="translate(100, 70)">
        {/* Vertical bar */}
        <rect x="-12" y="-35" width="24" height="70" rx="4" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4" />
        {/* Horizontal bar */}
        <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4" />

        {/* Pulsing center */}
        <circle cx="0" cy="0" r="8" fill="#E21B3C" opacity="0.1">
          <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Caution triangle overlay */}
      <g transform="translate(100, 70)">
        <polygon points="0,-22 -18,12 18,12" fill="none" stroke="#FFA602" strokeWidth="2" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        </polygon>
        <text x="0" y="8" textAnchor="middle" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.4">!</text>
      </g>

      {/* AI text badge */}
      <rect x="130" y="25" width="30" height="16" rx="8" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      <text x="145" y="36" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="bold" opacity="0.5">AI</text>

      {/* Label */}
      <text x="100" y="130" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.4">HEALTHCARE + AI = CAUTION</text>

      {/* Sparkles */}
      <circle cx="20" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="140" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-take-control — Hand grabbing/holding a glowing orb
 */
export function M7TakeControl({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Glowing orb */}
      <circle cx="100" cy="65" r="25" fill="#1368CE" opacity="0.06">
        <animate attributeName="r" values="23;28;23" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="65" r="18" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      {/* Inner glow */}
      <circle cx="100" cy="65" r="8" fill="#1368CE" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Hand/fingers wrapping around orb */}
      <g transform="translate(100, 80)">
        {/* Palm */}
        <path d="M-20 5 Q-25 -5 -18 -12 Q-10 -18 0 -20" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />
        <path d="M20 5 Q25 -5 18 -12 Q10 -18 0 -20" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />
        {/* Fingers */}
        <path d="M-20 5 Q-22 15 -15 22" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.25" strokeLinecap="round" />
        <path d="M20 5 Q22 15 15 22" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.25" strokeLinecap="round" />
        <path d="M-15 22 Q-5 28 5 28 Q15 28 15 22" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
      </g>

      {/* Power rays from orb */}
      <line x1="100" y1="38" x2="100" y2="28" stroke="#1368CE" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="78" y1="50" x2="68" y2="42" stroke="#1368CE" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <line x1="122" y1="50" x2="132" y2="42" stroke="#1368CE" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </line>

      {/* Label */}
      <text x="100" y="130" textAnchor="middle" fill="#1368CE" fontSize="7" fontWeight="bold" opacity="0.4">TAKE CONTROL</text>

      {/* Sparkles */}
      <circle cx="20" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="25" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="140" r="2" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-demand-better — Megaphone with speech lines
 */
export function M7DemandBetter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Megaphone */}
      <g transform="translate(55, 75)">
        {/* Handle */}
        <rect x="-25" y="-5" width="20" height="10" rx="3" fill="#E21B3C" opacity="0.2" />
        {/* Body */}
        <path d="M-5 -12 L45 -30 L45 30 L-5 12Z" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4" />
        {/* Bell */}
        <ellipse cx="45" cy="0" rx="8" ry="32" fill="#E21B3C" fillOpacity="0.08" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      </g>

      {/* Speech/sound lines emanating */}
      <line x1="110" y1="55" x2="140" y2="40" stroke="#FFA602" strokeWidth="2" strokeLinecap="round" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;10,-5" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="112" y1="70" x2="150" y2="65" stroke="#1368CE" strokeWidth="2.5" strokeLinecap="round" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;12,0" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <line x1="112" y1="85" x2="145" y2="90" stroke="#26890C" strokeWidth="2" strokeLinecap="round" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.6s" begin="0.6s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;10,3" dur="1.6s" begin="0.6s" repeatCount="indefinite" />
      </line>
      <line x1="108" y1="98" x2="135" y2="110" stroke="#46178F" strokeWidth="1.5" strokeLinecap="round" opacity="0.25">
        <animate attributeName="opacity" values="0.1;0.35;0.1" dur="2s" begin="0.9s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;8,5" dur="2s" begin="0.9s" repeatCount="indefinite" />
      </line>

      {/* "DEMAND BETTER" text floating */}
      <rect x="120" y="55" width="70" height="16" rx="8" fill="#E21B3C" fillOpacity="0.08" stroke="#E21B3C" strokeWidth="1" opacity="0">
        <animate attributeName="opacity" values="0;0.3;0" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="155" y="67" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0">
        DEMAND BETTER
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </text>

      {/* Sparkles */}
      <circle cx="15" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="30" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="145" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-quick-check-4 — Quiz clipboard
 */
export function M7QuickCheck4({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Clipboard body */}
      <rect x="60" y="30" width="80" height="105" rx="6" fill="#46178F" fillOpacity="0.08" stroke="#46178F" strokeWidth="1.5" opacity="0.4" />
      {/* Clipboard clip */}
      <rect x="85" y="22" width="30" height="14" rx="4" fill="#46178F" stroke="#46178F" strokeWidth="1" opacity="0.3" />

      {/* Question lines */}
      <rect x="72" y="50" width="48" height="4" rx="2" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </rect>

      {/* Option A */}
      <circle cx="78" cy="68" r="4" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="66" width="34" height="4" rx="2" fill="#1368CE" opacity="0.2" />

      {/* Option B */}
      <circle cx="78" cy="82" r="4" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="80" width="38" height="4" rx="2" fill="#26890C" opacity="0.2" />

      {/* Option C */}
      <circle cx="78" cy="96" r="4" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="86" y="94" width="30" height="4" rx="2" fill="#E21B3C" opacity="0.2" />

      {/* Checkmark appearing on B */}
      <path d="M75 82 L78 85 L82 78" stroke="#26890C" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Floating question marks */}
      <text x="150" y="45" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.3">
        ?
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Sparkles */}
      <circle cx="30" cy="20" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="172" cy="130" r="1" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="38" cy="138" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m7-key-takeaway-4 — Key/lightbulb
 */
export function M7KeyTakeaway4({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="80" ry="65" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Large key shape */}
      <circle cx="70" cy="70" r="22" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="70" r="12" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      {/* Key shaft */}
      <rect x="90" y="66" width="60" height="8" rx="4" fill="#FFA602" fillOpacity="0.2" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      {/* Key teeth */}
      <rect x="130" y="74" width="6" height="10" rx="2" fill="#FFA602" opacity="0.3" />
      <rect x="140" y="74" width="6" height="8" rx="2" fill="#FFA602" opacity="0.3" />

      {/* Shield inside key ring (rights theme) */}
      <path d="M70 58 L78 62 L78 72 Q78 78 70 82 Q62 78 62 72 L62 62Z" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </path>
      {/* Checkmark in shield */}
      <path d="M66 70 L69 73 L74 66" stroke="#26890C" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Label */}
      <rect x="40" y="25" width="120" height="22" rx="11" fill="#46178F" fillOpacity="0.1" stroke="#46178F" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="40" textAnchor="middle" fill="#46178F" fontSize="7" fontWeight="bold" opacity="0.6">KEY TAKEAWAY</text>

      {/* Glowing aura */}
      <circle cx="70" cy="70" r="30" fill="none" stroke="#FFA602" strokeWidth="0.5" opacity="0.15">
        <animate attributeName="r" values="28;34;28" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="30" cy="40" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="50" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="130" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="120" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Bottom accent line */}
      <rect x="60" y="110" width="80" height="2" rx="1" fill="#46178F" opacity="0.1">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

/**
 * m7-module-complete — Trophy/graduation cap with shield
 */
export function M7ModuleComplete({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background celebration glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#FFA602" opacity="0.06">
        <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Trophy */}
      {/* Cup body */}
      <path d="M70 45 L70 80 Q70 100 100 105 Q130 100 130 80 L130 45Z" fill="#FFA602" fillOpacity="0.15" stroke="#FFA602" strokeWidth="2" opacity="0.4" />
      {/* Left handle */}
      <path d="M70 55 Q55 55 55 68 Q55 80 70 80" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      {/* Right handle */}
      <path d="M130 55 Q145 55 145 68 Q145 80 130 80" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      {/* Base */}
      <rect x="88" y="105" width="24" height="6" rx="2" fill="#FFA602" opacity="0.2" />
      <rect x="80" y="110" width="40" height="5" rx="2.5" fill="#FFA602" opacity="0.25" />

      {/* Shield on trophy */}
      <path d="M100 55 L115 62 L115 78 Q115 88 100 92 Q85 88 85 78 L85 62Z" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1.5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      {/* Checkmark in shield */}
      <path d="M92 74 L98 80 L110 66" stroke="#26890C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Confetti particles */}
      <rect x="30" y="20" width="6" height="3" rx="1" fill="#E21B3C" opacity="0.5" transform="rotate(30 33 21)">
        <animateTransform attributeName="transform" type="translate" values="0,0;5,15" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="55" y="15" width="5" height="3" rx="1" fill="#1368CE" opacity="0.5" transform="rotate(-20 57 16)">
        <animateTransform attributeName="transform" type="translate" values="0,0;-3,18" dur="2.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.3s" repeatCount="indefinite" />
      </rect>
      <rect x="140" y="18" width="5" height="3" rx="1" fill="#26890C" opacity="0.5" transform="rotate(15 142 19)">
        <animateTransform attributeName="transform" type="translate" values="0,0;4,16" dur="2.1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.1s" repeatCount="indefinite" />
      </rect>
      <rect x="165" y="22" width="6" height="3" rx="1" fill="#46178F" opacity="0.5" transform="rotate(-35 168 23)">
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,14" dur="1.9s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="1.9s" repeatCount="indefinite" />
      </rect>
      <circle cx="45" cy="25" r="2.5" fill="#FFA602" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0;3,20" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="12" r="2" fill="#E21B3C" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0;-4,22" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <rect x="95" y="10" width="4" height="4" rx="1" fill="#FFA602" opacity="0.5" transform="rotate(45 97 12)">
        <animateTransform attributeName="transform" type="translate" values="0,0;1,20" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
      </rect>

      {/* MODULE 7 COMPLETE label */}
      <rect x="40" y="125" width="120" height="20" rx="10" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="138" textAnchor="middle" fill="#26890C" fontSize="7" fontWeight="bold" opacity="0.6">MODULE 7 COMPLETE!</text>

      {/* Sparkles */}
      <circle cx="18" cy="60" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="65" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="130" r="1" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="1.5" fill="#46178F">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * Module 3 — "AI in Your Everyday Life"
 * Animated SVG illustrations for every section of every lesson.
 *
 * Kahoot palette: #E21B3C (red), #1368CE (blue), #FFA602 (gold),
 *                 #26890C (green), #00C9B7 (cyan), #FF3EA5 (magenta)
 */

// ─── INTRO ILLUSTRATIONS ───────────────────────────────────────────────

/**
 * m3-intro-email — AI That Handles Your Inbox intro
 * Overflowing inbox being sorted by an AI wand into organized folders.
 */
export function M3IntroEmail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Overflowing inbox — left side */}
      <g transform="translate(55, 65)">
        <rect x="-30" y="-25" width="60" height="50" rx="4" fill="#1a1a2e" stroke="#E21B3C" strokeWidth="1" opacity="0.5" />
        {/* Stacked emails overflowing */}
        <rect x="-25" y="-35" width="50" height="10" rx="2" fill="#E21B3C" opacity="0.2" transform="rotate(-5 0 -30)">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="-23" y="-28" width="46" height="10" rx="2" fill="#E21B3C" opacity="0.18" transform="rotate(3 0 -23)" />
        <rect x="-25" y="-20" width="50" height="8" rx="2" fill="#E21B3C" opacity="0.15" />
        <rect x="-25" y="-10" width="50" height="8" rx="2" fill="#E21B3C" opacity="0.12" />
        <rect x="-25" y="0" width="50" height="8" rx="2" fill="#E21B3C" opacity="0.1" />
        <rect x="-25" y="10" width="50" height="8" rx="2" fill="#E21B3C" opacity="0.08" />
        <text x="0" y="-42" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="bold" opacity="0.4">63</text>
      </g>

      {/* Arrow — sorting */}
      <path d="M90 65 Q110 55 125 65" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="3 2">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Organized output — right side */}
      <g transform="translate(150, 50)">
        <rect x="-20" y="-10" width="40" height="14" rx="3" fill="#26890C" opacity="0.2" stroke="#26890C" strokeWidth="0.8" strokeOpacity="0.3" />
        <rect x="-15" y="-6" width="25" height="3" rx="1" fill="#26890C" opacity="0.3" />
      </g>
      <g transform="translate(150, 75)">
        <rect x="-20" y="-10" width="40" height="14" rx="3" fill="#1368CE" opacity="0.2" stroke="#1368CE" strokeWidth="0.8" strokeOpacity="0.3" />
        <rect x="-15" y="-6" width="28" height="3" rx="1" fill="#1368CE" opacity="0.3" />
      </g>
      <g transform="translate(150, 100)">
        <rect x="-20" y="-10" width="40" height="14" rx="3" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="0.8" strokeOpacity="0.2" />
        <rect x="-15" y="-6" width="22" height="3" rx="1" fill="#FFA602" opacity="0.25" />
      </g>

      {/* AI wand/magic effect in the middle */}
      <g transform="translate(110, 55)">
        <path d="M-2 12 L2 -12" stroke="#FFA602" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="2" cy="-14" r="3" fill="#FFA602" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="20" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m3-intro-scheduling — AI That Manages Your Time intro
 * A calendar with clock hands spinning, time blocks organizing themselves.
 */
export function M3IntroScheduling({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Clock face */}
      <circle cx="75" cy="75" r="38" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1.5" opacity="0.5" />
      <circle cx="75" cy="75" r="35" fill="none" stroke="#1368CE" strokeWidth="0.5" opacity="0.2" />

      {/* Clock hour markers */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <line key={`tick-${i}`}
          x1={75 + 30 * Math.cos(deg * Math.PI / 180)}
          y1={75 + 30 * Math.sin(deg * Math.PI / 180)}
          x2={75 + 33 * Math.cos(deg * Math.PI / 180)}
          y2={75 + 33 * Math.sin(deg * Math.PI / 180)}
          stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      ))}

      {/* Clock hands */}
      <line x1="75" y1="75" x2="75" y2="50" stroke="#FFA602" strokeWidth="2" strokeLinecap="round" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0 75 75" to="360 75 75" dur="10s" repeatCount="indefinite" />
      </line>
      <line x1="75" y1="75" x2="90" y2="75" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0 75 75" to="360 75 75" dur="60s" repeatCount="indefinite" />
      </line>
      <circle cx="75" cy="75" r="2.5" fill="#FFA602" opacity="0.5" />

      {/* Calendar grid — right side */}
      <g transform="translate(148, 55)">
        <rect x="-28" y="-30" width="56" height="65" rx="4" fill="#1a1a2e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        {/* Grid lines */}
        <line x1="-25" y1="-15" x2="25" y2="-15" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <line x1="-25" y1="0" x2="25" y2="0" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <line x1="-25" y1="15" x2="25" y2="15" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        {/* Time blocks appearing */}
        <rect x="-22" y="-25" width="20" height="8" rx="2" fill="#26890C" opacity="0.2">
          <animate attributeName="opacity" values="0;0.3;0.3" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="-22" y="-12" width="15" height="8" rx="2" fill="#1368CE" opacity="0.2">
          <animate attributeName="opacity" values="0;0.3;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </rect>
        <rect x="2" y="3" width="22" height="8" rx="2" fill="#FFA602" opacity="0.2">
          <animate attributeName="opacity" values="0;0.3;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="-22" y="18" width="18" height="8" rx="2" fill="#FF3EA5" opacity="0.15">
          <animate attributeName="opacity" values="0;0.25;0.25" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Sparkles */}
      <circle cx="18" cy="18" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="140" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m3-intro-learning — AI That Helps You Learn and Create intro
 * An open book with a lightbulb and creative sparks.
 */
export function M3IntroLearning({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FF3EA5" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Open book */}
      <g transform="translate(100, 95)">
        <path d="M0 0 L-50 -10 L-50 -50 L0 -40 Z" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1" opacity="0.5" />
        <path d="M0 0 L50 -10 L50 -50 L0 -40 Z" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1" opacity="0.5" />
        {/* Text lines on left page */}
        <line x1="-42" y1="-40" x2="-10" y2="-35" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="-42" y1="-34" x2="-15" y2="-29" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="-42" y1="-28" x2="-12" y2="-23" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/* Text lines on right page */}
        <line x1="8" y1="-35" x2="42" y2="-40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="8" y1="-29" x2="42" y2="-34" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="8" y1="-23" x2="42" y2="-28" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      </g>

      {/* Lightbulb above book */}
      <g transform="translate(100, 30)">
        <circle cx="0" cy="0" r="16" fill="#FFA602" opacity="0.08">
          <animate attributeName="r" values="14;20;14" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite" />
        </circle>
        <path d="M-8 5 Q-8 -10 0 -14 Q8 -10 8 5" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.5" />
        <line x1="-5" y1="8" x2="5" y2="8" stroke="#FFA602" strokeWidth="1" opacity="0.4" />
        <line x1="-4" y1="11" x2="4" y2="11" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        {/* Filament glow */}
        <path d="M-2 0 Q0 -5 2 0" stroke="#FFA602" strokeWidth="0.8" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Creative sparks */}
      <g>
        <circle cx="60" cy="25" r="2" fill="#FF3EA5" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" />
          <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="22" r="2" fill="#00C9B7" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="r" values="1;3;1" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="12" r="1.5" fill="#1368CE" opacity="0">
          <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="125" cy="15" r="1.5" fill="#E21B3C" opacity="0">
          <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Sparkles */}
      <circle cx="20" cy="60" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="70" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m3-intro-boring — AI That Handles the Boring Stuff intro
 * A pile of tedious documents being swept away/cleared by AI.
 */
export function M3IntroBoring({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Pile of boring documents — left */}
      <g transform="translate(55, 80)">
        <rect x="-30" y="-30" width="45" height="55" rx="2" fill="#1a1a2e" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" transform="rotate(-8 0 0)" opacity="0.5" />
        <rect x="-28" y="-28" width="45" height="55" rx="2" fill="#1a1a2e" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" transform="rotate(3 0 0)" opacity="0.5" />
        <rect x="-25" y="-25" width="45" height="55" rx="2" fill="#1a1a2e" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" opacity="0.6" />
        {/* Boring text lines */}
        <rect x="-18" y="-18" width="30" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
        <rect x="-18" y="-12" width="25" height="2" rx="1" fill="rgba(255,255,255,0.06)" />
        <rect x="-18" y="-6" width="28" height="2" rx="1" fill="rgba(255,255,255,0.05)" />
        <rect x="-18" y="0" width="20" height="2" rx="1" fill="rgba(255,255,255,0.04)" />
        <rect x="-18" y="6" width="26" height="2" rx="1" fill="rgba(255,255,255,0.04)" />
        {/* ZZZ */}
        <text x="22" y="-30" fill="#FFA602" fontSize="8" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
          zzz
        </text>
      </g>

      {/* Sweeping arrow / AI magic */}
      <path d="M85 75 Q115 50 140 70" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="4 3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Clean output — right side */}
      <g transform="translate(155, 70)">
        <rect x="-22" y="-20" width="44" height="45" rx="4" fill="#1a1a2e" stroke="#26890C" strokeWidth="1" opacity="0.4" />
        {/* Clean summary lines */}
        <rect x="-16" y="-14" width="32" height="3" rx="1" fill="#26890C" opacity="0.3" />
        <rect x="-16" y="-7" width="28" height="3" rx="1" fill="#26890C" opacity="0.25" />
        <rect x="-16" y="0" width="30" height="3" rx="1" fill="#26890C" opacity="0.2" />
        {/* Checkmark */}
        <path d="M-8 14 L-2 20 L12 6" stroke="#26890C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Label */}
      <text x="100" y="148" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="6">tedious → done</text>

      {/* Sparkles */}
      <circle cx="18" cy="25" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="130" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* =============================================================
   LESSON 1 — AI That Handles Your Inbox
   ============================================================= */

/** m3-inbox-overload — Overflowing inbox with notification badges */
export function M3InboxOverloadIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#1368CE" opacity="0.06">
        <animate attributeName="opacity" values="0.04;0.08;0.04" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Main envelope */}
      <rect x="55" y="50" width="90" height="60" rx="6" fill="#1368CE" opacity="0.2" stroke="#1368CE" strokeWidth="1.5" />
      <path d="M55 56 L100 82 L145 56" stroke="#1368CE" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Stacked envelopes behind */}
      <rect x="48" y="44" width="90" height="60" rx="6" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="41" y="38" width="90" height="60" rx="6" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Notification badge — "63" */}
      <circle cx="148" cy="46" r="14" fill="#E21B3C" opacity="0.9">
        <animate attributeName="r" values="13;15;13" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="148" y="50" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">63</text>

      {/* Floating sparkles */}
      <circle cx="35" cy="35" r="2" fill="#FFA602">
        <animate attributeName="cy" values="35;30;35" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="45" r="1.5" fill="#00C9B7">
        <animate attributeName="cy" values="45;38;45" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="100" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="178" cy="110" r="2" fill="#26890C">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Stress lines */}
      <line x1="30" y1="60" x2="20" y2="55" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="30" y1="65" x2="18" y2="65" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.8s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

/** m3-ai-email-powers — AI wand sorting emails into categories */
export function M3AiEmailPowersIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#26890C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* AI sparkle wand */}
      <line x1="100" y1="30" x2="100" y2="75" stroke="#FFA602" strokeWidth="2" opacity="0.7" />
      <circle cx="100" cy="26" r="5" fill="#FFA602" opacity="0.8">
        <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
      </circle>
      {/* Sparkle rays */}
      <line x1="100" y1="18" x2="100" y2="14" stroke="#FFA602" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="108" y1="22" x2="112" y2="18" stroke="#FFA602" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.2s" repeatCount="indefinite" />
      </line>
      <line x1="92" y1="22" x2="88" y2="18" stroke="#FFA602" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.1s" repeatCount="indefinite" />
      </line>

      {/* Reply envelope — left */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-3,-2;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="25" y="85" width="44" height="32" rx="4" fill="#1368CE" opacity="0.2" stroke="#1368CE" strokeWidth="1" />
        <path d="M25 89 L47 105 L69 89" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.4" />
        <text x="47" y="125" textAnchor="middle" fontSize="7" fill="#1368CE" opacity="0.6">Reply</text>
      </g>

      {/* Summarize envelope — center */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2s" repeatCount="indefinite" />
        <rect x="78" y="85" width="44" height="32" rx="4" fill="#26890C" opacity="0.2" stroke="#26890C" strokeWidth="1" />
        <rect x="85" y="93" width="30" height="3" rx="1" fill="#26890C" opacity="0.3" />
        <rect x="85" y="99" width="24" height="3" rx="1" fill="#26890C" opacity="0.2" />
        <rect x="85" y="105" width="18" height="3" rx="1" fill="#26890C" opacity="0.15" />
        <text x="100" y="125" textAnchor="middle" fontSize="7" fill="#26890C" opacity="0.6">Summary</text>
      </g>

      {/* Sort envelope — right */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;3,-2;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="131" y="85" width="44" height="32" rx="4" fill="#FF3EA5" opacity="0.2" stroke="#FF3EA5" strokeWidth="1" />
        <circle cx="145" cy="98" r="3" fill="#E21B3C" opacity="0.3" />
        <circle cx="155" cy="98" r="3" fill="#FFA602" opacity="0.3" />
        <circle cx="165" cy="98" r="3" fill="#26890C" opacity="0.3" />
        <text x="153" y="125" textAnchor="middle" fontSize="7" fill="#FF3EA5" opacity="0.6">Sort</text>
      </g>

      {/* Connecting lines from wand to envelopes */}
      <path d="M97 75 Q60 80 47 85" stroke="#FFA602" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M100 75 L100 85" stroke="#FFA602" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.2s" repeatCount="indefinite" />
      </path>
      <path d="M103 75 Q140 80 153 85" stroke="#FFA602" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.4s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/** m3-try-it-email — Hand pasting email into AI chat */
export function M3TryItEmailIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#00C9B7" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Chat window */}
      <rect x="40" y="25" width="120" height="100" rx="8" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
      <rect x="40" y="25" width="120" height="16" rx="8" fill="#1368CE" opacity="0.15" />
      <circle cx="52" cy="33" r="3" fill="#E21B3C" opacity="0.5" />
      <circle cx="62" cy="33" r="3" fill="#FFA602" opacity="0.5" />
      <circle cx="72" cy="33" r="3" fill="#26890C" opacity="0.5" />

      {/* User message bubble */}
      <rect x="80" y="48" width="70" height="20" rx="8" fill="#1368CE" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="88" y="54" width="40" height="3" rx="1" fill="#1368CE" opacity="0.3" />
      <rect x="88" y="60" width="30" height="3" rx="1" fill="#1368CE" opacity="0.2" />

      {/* AI response bubble */}
      <rect x="50" y="74" width="75" height="24" rx="8" fill="#26890C" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="58" y="80" width="50" height="3" rx="1" fill="#26890C" opacity="0.25" />
      <rect x="58" y="86" width="40" height="3" rx="1" fill="#26890C" opacity="0.2" />
      <rect x="58" y="92" width="30" height="3" rx="1" fill="#26890C" opacity="0.15" />

      {/* Cursor blink */}
      <rect x="50" y="106" width="100" height="12" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="56" y="110" width="1" height="6" rx="0.5" fill="#FFA602" opacity="0.7">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* Floating paste icon */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2s" repeatCount="indefinite" />
        <rect x="15" y="50" width="18" height="22" rx="3" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.5" />
        <rect x="18" y="46" width="12" height="6" rx="2" fill="#FFA602" opacity="0.3" />
        <rect x="20" y="56" width="10" height="2" rx="1" fill="#FFA602" opacity="0.3" />
        <rect x="20" y="60" width="8" height="2" rx="1" fill="#FFA602" opacity="0.25" />
        <rect x="20" y="64" width="6" height="2" rx="1" fill="#FFA602" opacity="0.2" />
      </g>

      {/* Sparkles */}
      <circle cx="175" cy="55" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="120" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-before-after-inbox — Split-screen clock showing time saved */
export function M3BeforeAfterInboxIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="90" ry="65" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Divider line */}
      <line x1="100" y1="20" x2="100" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3" />

      {/* BEFORE — left: stressed clock */}
      <circle cx="55" cy="65" r="28" fill="none" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4" />
      <circle cx="55" cy="65" r="2" fill="#E21B3C" opacity="0.5" />
      {/* Clock hands — slow */}
      <line x1="55" y1="65" x2="55" y2="44" stroke="#E21B3C" strokeWidth="1.5" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0 55 65" to="360 55 65" dur="20s" repeatCount="indefinite" />
      </line>
      <line x1="55" y1="65" x2="68" y2="65" stroke="#E21B3C" strokeWidth="1" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0 55 65" to="360 55 65" dur="4s" repeatCount="indefinite" />
      </line>
      <text x="55" y="105" textAnchor="middle" fontSize="8" fill="#E21B3C" opacity="0.5">25 min</text>
      {/* Stress marks */}
      <line x1="28" y1="50" x2="22" y2="45" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="26" y1="60" x2="19" y2="58" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.8s" repeatCount="indefinite" />
      </line>
      <text x="55" y="118" textAnchor="middle" fontSize="7" fill="#E21B3C" opacity="0.4">BEFORE</text>

      {/* AFTER — right: happy clock */}
      <circle cx="145" cy="65" r="28" fill="none" stroke="#26890C" strokeWidth="1.5" opacity="0.4" />
      <circle cx="145" cy="65" r="2" fill="#26890C" opacity="0.5" />
      <line x1="145" y1="65" x2="145" y2="46" stroke="#26890C" strokeWidth="1.5" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0 145 65" to="360 145 65" dur="20s" repeatCount="indefinite" />
      </line>
      <line x1="145" y1="65" x2="157" y2="65" stroke="#26890C" strokeWidth="1" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0 145 65" to="360 145 65" dur="4s" repeatCount="indefinite" />
      </line>
      <text x="145" y="105" textAnchor="middle" fontSize="8" fill="#26890C" opacity="0.5">12 min</text>
      {/* Check mark */}
      <path d="M135 112 L142 119 L156 106" stroke="#26890C" strokeWidth="2" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>
      <text x="145" y="135" textAnchor="middle" fontSize="7" fill="#26890C" opacity="0.4">AFTER</text>

      {/* Arrow from before to after */}
      <path d="M80 130 Q100 140 120 130" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.3" markerEnd="url(#m3arr)" />
      <defs>
        <marker id="m3arr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <path d="M0 0 L6 2 L0 4" fill="#FFA602" opacity="0.4" />
        </marker>
      </defs>
    </svg>
  );
}

/** m3-inbox-quiz — Checkmark in a thought bubble */
export function M3InboxQuizIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="80" ry="60" fill="#FF3EA5" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Thought bubble */}
      <ellipse cx="100" cy="68" rx="48" ry="36" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />
      <circle cx="68" cy="108" r="6" fill="#1368CE" fillOpacity="0.06" stroke="#1368CE" strokeWidth="1" opacity="0.2" />
      <circle cx="56" cy="120" r="3.5" fill="#1368CE" fillOpacity="0.05" stroke="#1368CE" strokeWidth="1" opacity="0.15" />

      {/* Checkmark inside */}
      <path d="M82 68 L95 82 L120 54" stroke="#26890C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Question marks floating */}
      <text x="155" y="45" fontSize="14" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        ?
      </text>
      <text x="38" y="40" fontSize="10" fill="#FF3EA5" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
        ?
      </text>

      {/* Sparkles */}
      <circle cx="165" cy="100" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="70" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-inbox-takeaway — Envelope with glowing lightbulb */
export function M3InboxTakeawayIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Lightbulb */}
      <ellipse cx="100" cy="55" rx="18" ry="22" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="100" cy="55" rx="18" ry="22" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      <rect x="93" y="76" width="14" height="6" rx="2" fill="#FFA602" opacity="0.3" />
      <rect x="95" y="82" width="10" height="3" rx="1.5" fill="#FFA602" opacity="0.2" />

      {/* Filament */}
      <path d="M95 55 Q100 45 105 55" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
      </path>

      {/* Glow rays */}
      <line x1="100" y1="28" x2="100" y2="22" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="120" y1="38" x2="126" y2="33" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.7s" repeatCount="indefinite" />
      </line>
      <line x1="80" y1="38" x2="74" y2="33" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.6s" repeatCount="indefinite" />
      </line>
      <line x1="124" y1="55" x2="130" y2="55" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.8s" repeatCount="indefinite" />
      </line>
      <line x1="76" y1="55" x2="70" y2="55" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.4s" repeatCount="indefinite" />
      </line>

      {/* Small envelope below */}
      <rect x="80" y="100" width="40" height="28" rx="4" fill="#1368CE" fillOpacity="0.15" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      <path d="M80 104 L100 118 L120 104" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Sparkles */}
      <circle cx="40" cy="50" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="90" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="130" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


/* =============================================================
   LESSON 2 — AI That Manages Your Time
   ============================================================= */

/** m3-calendar-chaos — Chaotic overlapping calendar blocks */
export function M3CalendarChaosIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#E21B3C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Calendar grid */}
      <rect x="35" y="30" width="130" height="100" rx="6" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Header */}
      <rect x="35" y="30" width="130" height="18" rx="6" fill="#E21B3C" opacity="0.15" />

      {/* Overlapping event blocks — chaotic */}
      <rect x="42" y="55" width="50" height="16" rx="3" fill="#1368CE" opacity="0.3">
        <animateTransform attributeName="transform" type="translate" values="0,0;2,1;0,0" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="55" y="60" width="55" height="14" rx="3" fill="#E21B3C" opacity="0.25">
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,1;0,0" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="85" y="52" width="45" height="18" rx="3" fill="#FFA602" opacity="0.25">
        <animateTransform attributeName="transform" type="translate" values="0,0;1,-1;0,0" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <rect x="42" y="80" width="60" height="14" rx="3" fill="#26890C" opacity="0.25">
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,1;0,0" dur="3.2s" repeatCount="indefinite" />
      </rect>
      <rect x="70" y="85" width="50" height="12" rx="3" fill="#FF3EA5" opacity="0.2">
        <animateTransform attributeName="transform" type="translate" values="0,0;2,-1;0,0" dur="2.7s" repeatCount="indefinite" />
      </rect>
      <rect x="110" y="78" width="45" height="15" rx="3" fill="#00C9B7" opacity="0.2">
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,-1;0,0" dur="3.5s" repeatCount="indefinite" />
      </rect>

      {/* Conflict exclamation */}
      <circle cx="80" cy="65" r="8" fill="#E21B3C" opacity="0.7">
        <animate attributeName="r" values="7;9;7" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="80" y="69" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">!</text>

      {/* Sparkles */}
      <circle cx="20" cy="40" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="120" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-scheduling-tools — Smart calendar with AI gear icon */
export function M3SchedulingToolsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Clean calendar */}
      <rect x="45" y="30" width="110" height="90" rx="6" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.35" />
      <rect x="45" y="30" width="110" height="16" rx="6" fill="#1368CE" opacity="0.15" />

      {/* Neat event blocks */}
      <rect x="52" y="52" width="42" height="12" rx="3" fill="#26890C" opacity="0.3" />
      <rect x="52" y="68" width="42" height="12" rx="3" fill="#1368CE" opacity="0.25" />
      <rect x="52" y="84" width="42" height="12" rx="3" fill="#FFA602" opacity="0.25" />
      <rect x="100" y="52" width="42" height="12" rx="3" fill="#FF3EA5" opacity="0.2" />
      <rect x="100" y="68" width="42" height="12" rx="3" fill="#00C9B7" opacity="0.25" />

      {/* AI gear icon */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 160 120" to="360 160 120" dur="8s" repeatCount="indefinite" />
        <circle cx="160" cy="120" r="12" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.5" />
        <circle cx="160" cy="120" r="5" fill="#FFA602" opacity="0.3" />
        {/* Gear teeth */}
        <rect x="157" y="105" width="6" height="5" rx="1" fill="#FFA602" opacity="0.4" />
        <rect x="157" y="130" width="6" height="5" rx="1" fill="#FFA602" opacity="0.4" />
        <rect x="145" y="117" width="5" height="6" rx="1" fill="#FFA602" opacity="0.4" />
        <rect x="170" y="117" width="5" height="6" rx="1" fill="#FFA602" opacity="0.4" />
      </g>

      {/* Checkmarks on events */}
      <path d="M90 55 L93 59 L98 53" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M90 71 L93 75 L98 69" stroke="#1368CE" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Sparkles */}
      <circle cx="30" cy="50" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="40" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-protect-free-time — Shield protecting a leisure block */
export function M3ProtectFreeTimeIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#26890C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Shield shape */}
      <path d="M100 25 L135 40 L135 80 Q135 110 100 130 Q65 110 65 80 L65 40 Z" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.08;0.15;0.08" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Calendar block inside shield */}
      <rect x="82" y="55" width="36" height="22" rx="4" fill="#00C9B7" fillOpacity="0.3" stroke="#00C9B7" strokeWidth="1" opacity="0.4" />
      <text x="100" y="70" textAnchor="middle" fontSize="8" fill="#00C9B7" opacity="0.6">FREE</text>

      {/* Incoming events bouncing off */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-8,4;0,0" dur="2s" repeatCount="indefinite" />
        <rect x="140" y="50" width="30" height="10" rx="3" fill="#E21B3C" fillOpacity="0.2" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
        <line x1="146" y1="55" x2="164" y2="55" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;8,3;0,0" dur="2.3s" repeatCount="indefinite" />
        <rect x="30" y="65" width="28" height="10" rx="3" fill="#FFA602" fillOpacity="0.2" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        <line x1="36" y1="70" x2="52" y2="70" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-5,-5;0,0" dur="2.6s" repeatCount="indefinite" />
        <rect x="145" y="85" width="25" height="10" rx="3" fill="#FF3EA5" fillOpacity="0.2" stroke="#FF3EA5" strokeWidth="1" opacity="0.3" />
      </g>

      {/* Shield glow */}
      <path d="M100 25 L135 40 L135 80 Q135 110 100 130 Q65 110 65 80 L65 40 Z" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="20" cy="35" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="130" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-group-dinner — People icons connected by scheduling lines */
export function M3GroupDinnerIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Center: calendar/link icon */}
      <rect x="80" y="60" width="40" height="30" rx="6" fill="#26890C" fillOpacity="0.2" stroke="#26890C" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="2s" repeatCount="indefinite" />
      </rect>
      <path d="M88 75 L95 82 L112 68" stroke="#26890C" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Person 1 — top left */}
      <circle cx="45" cy="40" r="10" fill="#1368CE" fillOpacity="0.2" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      <circle cx="45" cy="36" r="4" fill="#1368CE" opacity="0.3" />
      <line x1="55" y1="42" x2="80" y2="65" stroke="#1368CE" strokeWidth="1" strokeDasharray="3 2" opacity="0.3">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
      </line>

      {/* Person 2 — top right */}
      <circle cx="155" cy="40" r="10" fill="#E21B3C" fillOpacity="0.2" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      <circle cx="155" cy="36" r="4" fill="#E21B3C" opacity="0.3" />
      <line x1="145" y1="42" x2="120" y2="65" stroke="#E21B3C" strokeWidth="1" strokeDasharray="3 2" opacity="0.3">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.2s" repeatCount="indefinite" />
      </line>

      {/* Person 3 — bottom left */}
      <circle cx="40" cy="115" r="10" fill="#FFA602" fillOpacity="0.2" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
      <circle cx="40" cy="111" r="4" fill="#FFA602" opacity="0.3" />
      <line x1="50" y1="112" x2="80" y2="90" stroke="#FFA602" strokeWidth="1" strokeDasharray="3 2" opacity="0.3">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.4s" repeatCount="indefinite" />
      </line>

      {/* Person 4 — bottom right */}
      <circle cx="160" cy="115" r="10" fill="#FF3EA5" fillOpacity="0.2" stroke="#FF3EA5" strokeWidth="1" opacity="0.3" />
      <circle cx="160" cy="111" r="4" fill="#FF3EA5" opacity="0.3" />
      <line x1="150" y1="112" x2="120" y2="90" stroke="#FF3EA5" strokeWidth="1" strokeDasharray="3 2" opacity="0.3">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.6s" repeatCount="indefinite" />
      </line>

      {/* Sparkles */}
      <circle cx="100" cy="20" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="145" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-scheduling-quiz — Clock with question mark */
export function M3SchedulingQuizIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="80" ry="60" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Clock face */}
      <circle cx="100" cy="72" r="35" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />
      <circle cx="100" cy="72" r="2" fill="#1368CE" opacity="0.4" />

      {/* Clock tick marks */}
      <line x1="100" y1="40" x2="100" y2="44" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      <line x1="100" y1="100" x2="100" y2="104" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      <line x1="68" y1="72" x2="72" y2="72" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      <line x1="128" y1="72" x2="132" y2="72" stroke="#1368CE" strokeWidth="1" opacity="0.3" />

      {/* Question mark inside clock */}
      <text x="100" y="80" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        ?
      </text>

      {/* Checkboxes */}
      <rect x="30" y="120" width="12" height="12" rx="2" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <path d="M33 126 L36 129 L40 124" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="50" y="122" width="30" height="3" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="94" y="120" width="12" height="12" rx="2" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <rect x="114" y="122" width="30" height="3" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="158" y="120" width="12" height="12" rx="2" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      <rect x="50" y="128" width="25" height="3" rx="1" fill="rgba(255,255,255,0.08)" />

      {/* Sparkles */}
      <circle cx="40" cy="40" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="50" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-scheduling-takeaway — Hourglass with protected time */
export function M3SchedulingTakeawayIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="60" fill="#00C9B7" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Hourglass */}
      <path d="M75 30 L125 30 L105 75 L125 120 L75 120 L95 75 Z" fill="#00C9B7" fillOpacity="0.08" stroke="#00C9B7" strokeWidth="1.5" opacity="0.35" />

      {/* Sand top */}
      <path d="M82 40 L118 40 L105 65 L95 65 Z" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Sand bottom (accumulating) */}
      <path d="M95 85 L105 85 L120 112 L80 112 Z" fill="#FFA602" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Sand stream */}
      <line x1="100" y1="68" x2="100" y2="82" stroke="#FFA602" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1s" repeatCount="indefinite" />
      </line>

      {/* Horizontal bars — top & bottom */}
      <rect x="70" y="27" width="60" height="4" rx="2" fill="#00C9B7" opacity="0.3" />
      <rect x="70" y="119" width="60" height="4" rx="2" fill="#00C9B7" opacity="0.3" />

      {/* Small heart in the sand */}
      <path d="M97 100 Q97 96 100 96 Q103 96 103 100 Q103 104 100 107 Q97 104 97 100" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="40" cy="50" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="90" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="130" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="35" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


/* =============================================================
   LESSON 3 — AI That Helps You Learn and Create
   ============================================================= */

/** m3-personal-tutor — Graduation cap with speech bubbles at different levels */
export function M3PersonalTutorIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* AI brain/head */}
      <circle cx="100" cy="55" r="25" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1.5" opacity="0.35" />

      {/* Brain circuit lines */}
      <path d="M88 48 Q92 42 100 42 Q108 42 112 48" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M85 55 Q90 50 95 55 Q100 50 105 55 Q110 50 115 55" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.25" />
      <circle cx="92" cy="50" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="108" cy="50" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="60" r="2" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Speech bubble — simple (left) */}
      <rect x="25" y="85" width="55" height="28" rx="8" fill="#26890C" fillOpacity="0.15" stroke="#26890C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.12;0.2;0.12" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <path d="M60 85 L65 78 L70 85" fill="#26890C" opacity="0.15" />
      <text x="52" y="101" textAnchor="middle" fontSize="7" fill="#26890C" opacity="0.5">ELI5</text>

      {/* Speech bubble — advanced (right) */}
      <rect x="120" y="85" width="55" height="28" rx="8" fill="#FFA602" fillOpacity="0.15" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.12;0.2;0.12" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <path d="M135 85 L130 78 L125 85" fill="#FFA602" opacity="0.15" />
      <text x="148" y="101" textAnchor="middle" fontSize="7" fill="#FFA602" opacity="0.5">Expert</text>

      {/* Connecting lines */}
      <path d="M85 72 Q65 80 55 85" stroke="#26890C" strokeWidth="1" strokeDasharray="3 2" opacity="0.25" />
      <path d="M115 72 Q135 80 145 85" stroke="#FFA602" strokeWidth="1" strokeDasharray="3 2" opacity="0.25" />

      {/* Sparkles */}
      <circle cx="15" cy="50" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="55" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="140" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-learn-anything — Grid of learning topics (cooking, language, repair, news) */
export function M3LearnAnythingIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* 2x2 grid of topic cards */}
      {/* Cooking — top left */}
      <rect x="25" y="25" width="70" height="48" rx="6" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.08;0.14;0.08" dur="2.5s" repeatCount="indefinite" />
      </rect>
      {/* Pan icon */}
      <circle cx="48" cy="42" r="8" fill="none" stroke="#E21B3C" strokeWidth="1.2" opacity="0.4" />
      <line x1="56" y1="42" x2="68" y2="42" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4" />
      {/* Steam */}
      <path d="M44 32 Q46 28 44 24" stroke="#E21B3C" strokeWidth="0.8" fill="none" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M50 32 Q52 28 50 24" stroke="#E21B3C" strokeWidth="0.8" fill="none" opacity="0.25">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.8s" repeatCount="indefinite" />
      </path>
      <text x="60" y="62" textAnchor="middle" fontSize="7" fill="#E21B3C" opacity="0.5">Cook</text>

      {/* Language — top right */}
      <rect x="105" y="25" width="70" height="48" rx="6" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.08;0.14;0.08" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <text x="128" y="46" textAnchor="middle" fontSize="10" fill="#1368CE" opacity="0.4">Aa</text>
      <text x="152" y="46" textAnchor="middle" fontSize="10" fill="#1368CE" opacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2s" repeatCount="indefinite" />
        Bb
      </text>
      <text x="140" y="62" textAnchor="middle" fontSize="7" fill="#1368CE" opacity="0.5">Language</text>

      {/* Repair — bottom left */}
      <rect x="25" y="83" width="70" height="48" rx="6" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.08;0.14;0.08" dur="3s" repeatCount="indefinite" />
      </rect>
      {/* Wrench icon */}
      <path d="M52 98 L62 108 M58 92 Q68 92 68 102 L58 92" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.4" />
      <text x="60" y="122" textAnchor="middle" fontSize="7" fill="#FFA602" opacity="0.5">Repair</text>

      {/* News — bottom right */}
      <rect x="105" y="83" width="70" height="48" rx="6" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.08;0.14;0.08" dur="2.6s" repeatCount="indefinite" />
      </rect>
      {/* Newspaper lines */}
      <rect x="115" y="93" width="50" height="3" rx="1" fill="#26890C" opacity="0.3" />
      <rect x="115" y="99" width="40" height="3" rx="1" fill="#26890C" opacity="0.2" />
      <rect x="115" y="105" width="45" height="3" rx="1" fill="#26890C" opacity="0.15" />
      <text x="140" y="122" textAnchor="middle" fontSize="7" fill="#26890C" opacity="0.5">News</text>

      {/* Sparkles */}
      <circle cx="100" cy="10" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="12" cy="80" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="80" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-creative-projects — Palette, pen, and music note floating */
export function M3CreativeProjectsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#FF3EA5" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Palette */}
      <ellipse cx="70" cy="70" rx="30" ry="24" fill="#FF3EA5" fillOpacity="0.1" stroke="#FF3EA5" strokeWidth="1.5" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="-5 70 70;5 70 70;-5 70 70" dur="4s" repeatCount="indefinite" />
      </ellipse>
      {/* Color dots on palette */}
      <circle cx="55" cy="62" r="4" fill="#E21B3C" opacity="0.4" />
      <circle cx="65" cy="56" r="4" fill="#FFA602" opacity="0.4" />
      <circle cx="77" cy="56" r="4" fill="#1368CE" opacity="0.4" />
      <circle cx="85" cy="62" r="4" fill="#26890C" opacity="0.4" />
      {/* Palette hole */}
      <circle cx="62" cy="75" r="5" fill="rgba(0,0,0,0.2)" />

      {/* Pen / writing tool */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,-3;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="130" y="40" width="6" height="40" rx="2" fill="#FFA602" fillOpacity="0.3" stroke="#FFA602" strokeWidth="1" opacity="0.4" />
        <path d="M130 80 L133 88 L136 80" fill="#FFA602" opacity="0.4" />
        <rect x="130" y="40" width="6" height="8" rx="2" fill="#FFA602" opacity="0.15" />
      </g>

      {/* Music note */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,3;0,0" dur="3s" repeatCount="indefinite" />
        <circle cx="155" cy="105" r="5" fill="#1368CE" fillOpacity="0.3" stroke="#1368CE" strokeWidth="1" opacity="0.4" />
        <line x1="160" y1="105" x2="160" y2="82" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
        <path d="M160 82 Q168 78 165 86" fill="#1368CE" opacity="0.3" />
      </g>

      {/* Stars / lightbulb sparkles */}
      <path d="M100 20 L102 26 L108 26 L103 30 L105 36 L100 32 L95 36 L97 30 L92 26 L98 26 Z" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite" additive="sum" />
      </path>

      {/* Sparkles */}
      <circle cx="30" cy="110" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="30" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="30" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-adjust-level — Slider/dial going from simple to expert */
export function M3AdjustLevelIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#00C9B7" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Slider track */}
      <rect x="30" y="72" width="140" height="6" rx="3" fill="rgba(255,255,255,0.1)" />

      {/* Gradient fill on track */}
      <defs>
        <linearGradient id="m3lvlGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#26890C" />
          <stop offset="50%" stopColor="#FFA602" />
          <stop offset="100%" stopColor="#E21B3C" />
        </linearGradient>
      </defs>
      <rect x="30" y="72" width="140" height="6" rx="3" fill="url(#m3lvlGrad)" opacity="0.25" />

      {/* Slider knob — animates left to right */}
      <circle cx="100" cy="75" r="10" fill="#FFA602" fillOpacity="0.5" stroke="#FFA602" strokeWidth="1.5" opacity="0.7">
        <animate attributeName="cx" values="50;150;50" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.6;0.4" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="75" r="4" fill="white" opacity="0.3">
        <animate attributeName="cx" values="50;150;50" dur="5s" repeatCount="indefinite" />
      </circle>

      {/* Labels */}
      <text x="35" y="55" fontSize="8" fill="#26890C" opacity="0.5">Age 8</text>
      <text x="85" y="55" fontSize="8" fill="#FFA602" opacity="0.5">Normal</text>
      <text x="145" y="55" fontSize="8" fill="#E21B3C" opacity="0.5">Expert</text>

      {/* Simple explanation bubble — top left */}
      <rect x="20" y="95" width="50" height="24" rx="6" fill="#26890C" fillOpacity="0.12" stroke="#26890C" strokeWidth="1" opacity="0.25">
        <animate attributeName="opacity" values="0.1;0.18;0.1" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="27" y="102" width="30" height="3" rx="1" fill="#26890C" opacity="0.2" />
      <rect x="27" y="108" width="20" height="3" rx="1" fill="#26890C" opacity="0.15" />

      {/* Complex explanation bubble — top right */}
      <rect x="130" y="95" width="50" height="24" rx="6" fill="#E21B3C" fillOpacity="0.12" stroke="#E21B3C" strokeWidth="1" opacity="0.25">
        <animate attributeName="opacity" values="0.1;0.18;0.1" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <rect x="137" y="102" width="36" height="2" rx="1" fill="#E21B3C" opacity="0.2" />
      <rect x="137" y="106" width="32" height="2" rx="1" fill="#E21B3C" opacity="0.18" />
      <rect x="137" y="110" width="28" height="2" rx="1" fill="#E21B3C" opacity="0.15" />

      {/* Sparkles */}
      <circle cx="15" cy="40" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="45" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="140" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-learning-quiz — Book with checkmark */
export function M3LearningQuizIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="80" ry="60" fill="#26890C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Open book */}
      <path d="M100 45 L100 120" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M100 45 Q70 40 40 48 L40 115 Q70 108 100 120" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      <path d="M100 45 Q130 40 160 48 L160 115 Q130 108 100 120" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="1" opacity="0.3" />

      {/* Text lines on left page */}
      <rect x="50" y="58" width="40" height="3" rx="1" fill="#1368CE" opacity="0.2" />
      <rect x="50" y="66" width="35" height="3" rx="1" fill="#1368CE" opacity="0.15" />
      <rect x="50" y="74" width="38" height="3" rx="1" fill="#1368CE" opacity="0.12" />
      <rect x="50" y="82" width="32" height="3" rx="1" fill="#1368CE" opacity="0.1" />

      {/* Checkmark on right page */}
      <path d="M118 68 L128 80 L148 58" stroke="#26890C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Question marks */}
      <text x="30" y="40" fontSize="12" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.5s" repeatCount="indefinite" />
        ?
      </text>
      <text x="168" y="38" fontSize="10" fill="#FF3EA5" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
        ?
      </text>

      {/* Sparkles */}
      <circle cx="20" cy="100" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="95" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-learning-takeaway — Infinite curiosity spiral */
export function M3LearningTakeawayIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="60" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Spiral — representing infinite learning */}
      <path d="M100 40 Q140 40 140 70 Q140 100 100 100 Q70 100 70 75 Q70 55 100 55 Q120 55 120 72 Q120 88 100 88 Q85 88 85 75 Q85 65 100 65" stroke="#1368CE" strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round">
        <animate attributeName="opacity" values="0.25;0.45;0.25" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Dots along spiral — pulsing */}
      <circle cx="100" cy="40" r="3" fill="#E21B3C" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="70" r="3" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="3" fill="#26890C" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="75" r="3" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="55" r="3" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.1s" repeatCount="indefinite" />
      </circle>

      {/* Lightbulb at center */}
      <circle cx="100" cy="73" r="6" fill="#FFA602" opacity="0.25">
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Tiny question marks floating up */}
      <text x="55" y="30" fontSize="9" fill="#FFA602" opacity="0.3">
        <animate attributeName="y" values="32;26;32" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite" />
        ?
      </text>
      <text x="145" y="120" fontSize="9" fill="#00C9B7" opacity="0.3">
        <animate attributeName="y" values="122;116;122" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.8s" repeatCount="indefinite" />
        ?
      </text>

      {/* Sparkles */}
      <circle cx="25" cy="55" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="50" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


/* =============================================================
   LESSON 4 — AI That Handles the Boring Stuff
   ============================================================= */

/** m3-summarize-docs — Long document being compressed into a short summary */
export function M3SummarizeDocsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Long document — left */}
      <rect x="25" y="20" width="55" height="120" rx="4" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      {/* Many text lines */}
      <rect x="32" y="30" width="40" height="3" rx="1" fill="#E21B3C" opacity="0.2" />
      <rect x="32" y="37" width="35" height="3" rx="1" fill="#E21B3C" opacity="0.18" />
      <rect x="32" y="44" width="38" height="3" rx="1" fill="#E21B3C" opacity="0.16" />
      <rect x="32" y="51" width="32" height="3" rx="1" fill="#E21B3C" opacity="0.14" />
      <rect x="32" y="58" width="40" height="3" rx="1" fill="#E21B3C" opacity="0.12" />
      <rect x="32" y="65" width="36" height="3" rx="1" fill="#E21B3C" opacity="0.1" />
      <rect x="32" y="72" width="38" height="3" rx="1" fill="#E21B3C" opacity="0.1" />
      <rect x="32" y="79" width="34" height="3" rx="1" fill="#E21B3C" opacity="0.08" />
      <rect x="32" y="86" width="40" height="3" rx="1" fill="#E21B3C" opacity="0.08" />
      <rect x="32" y="93" width="30" height="3" rx="1" fill="#E21B3C" opacity="0.06" />
      <rect x="32" y="100" width="38" height="3" rx="1" fill="#E21B3C" opacity="0.06" />
      <rect x="32" y="107" width="34" height="3" rx="1" fill="#E21B3C" opacity="0.05" />
      <rect x="32" y="114" width="40" height="3" rx="1" fill="#E21B3C" opacity="0.05" />
      <rect x="32" y="121" width="28" height="3" rx="1" fill="#E21B3C" opacity="0.04" />

      {/* Arrow — compression */}
      <path d="M88 80 L118 80" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" markerEnd="url(#m3sumArr)">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>
      <defs>
        <marker id="m3sumArr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <path d="M0 0 L6 2 L0 4" fill="#FFA602" opacity="0.5" />
        </marker>
      </defs>

      {/* AI sparkle on arrow */}
      <circle cx="103" cy="75" r="4" fill="#FFA602" opacity="0.4">
        <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Short summary — right */}
      <rect x="125" y="55" width="55" height="50" rx="4" fill="none" stroke="#26890C" strokeWidth="1.5" opacity="0.4" />
      <rect x="132" y="65" width="40" height="4" rx="1" fill="#26890C" opacity="0.3" />
      <rect x="132" y="73" width="35" height="4" rx="1" fill="#26890C" opacity="0.25" />
      <rect x="132" y="81" width="38" height="4" rx="1" fill="#26890C" opacity="0.2" />
      <rect x="132" y="89" width="30" height="4" rx="1" fill="#26890C" opacity="0.15" />

      {/* Sparkles */}
      <circle cx="15" cy="50" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="40" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-compare-products — Side-by-side comparison with scales */
export function M3CompareProductsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Balance scale base */}
      <rect x="95" y="115" width="10" height="25" rx="2" fill="#FFA602" opacity="0.2" />
      <rect x="80" y="138" width="40" height="4" rx="2" fill="#FFA602" opacity="0.25" />

      {/* Scale beam — tilts */}
      <line x1="40" y1="60" x2="160" y2="60" stroke="#FFA602" strokeWidth="2" opacity="0.35">
        <animateTransform attributeName="transform" type="rotate" values="-3 100 60;3 100 60;-3 100 60" dur="4s" repeatCount="indefinite" />
      </line>

      {/* Pivot */}
      <circle cx="100" cy="60" r="5" fill="#FFA602" opacity="0.3" />

      {/* Left pan with product A */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,3;0,-3;0,3" dur="4s" repeatCount="indefinite" />
        <path d="M25 65 L55 65 L50 90 L30 90 Z" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="60" x2="25" y2="65" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="60" x2="55" y2="65" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        {/* Product icon */}
        <rect x="33" y="72" width="14" height="10" rx="2" fill="#1368CE" opacity="0.3" />
        <text x="40" y="80" textAnchor="middle" fontSize="6" fill="#1368CE" opacity="0.5">A</text>
      </g>

      {/* Right pan with product B */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,-3;0,3;0,-3" dur="4s" repeatCount="indefinite" />
        <path d="M145 65 L175 65 L170 90 L150 90 Z" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
        <line x1="160" y1="60" x2="145" y2="65" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        <line x1="160" y1="60" x2="175" y2="65" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        {/* Product icon */}
        <rect x="153" y="72" width="14" height="10" rx="2" fill="#E21B3C" opacity="0.3" />
        <text x="160" y="80" textAnchor="middle" fontSize="6" fill="#E21B3C" opacity="0.5">B</text>
      </g>

      {/* VS label */}
      <text x="100" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFA602" opacity="0.4">VS</text>

      {/* Star rating hints */}
      <text x="40" y="105" textAnchor="middle" fontSize="8" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
        ★★★★
      </text>
      <text x="160" y="105" textAnchor="middle" fontSize="8" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.3s" repeatCount="indefinite" />
        ★★★
      </text>

      {/* Sparkles */}
      <circle cx="15" cy="35" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="30" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-confusing-paperwork — Document with magnifying glass and question marks becoming clear */
export function M3ConfusingPaperworkIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Document */}
      <rect x="55" y="20" width="90" height="120" rx="4" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* Confusing jargon lines — squiggly */}
      <path d="M65 38 Q72 34 79 38 Q86 42 93 38 Q100 34 107 38 Q114 42 121 38 Q128 34 135 38" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.25" />
      <path d="M65 50 Q72 46 79 50 Q86 54 93 50 Q100 46 107 50 Q114 54 121 50 Q128 46 135 50" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.2" />
      <path d="M65 62 Q72 58 79 62 Q86 66 93 62 Q100 58 107 62 Q114 66 121 62" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.15" />

      {/* Clear text lines below magnifier */}
      <rect x="65" y="80" width="60" height="4" rx="1" fill="#26890C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="65" y="90" width="50" height="4" rx="1" fill="#26890C" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2.3s" repeatCount="indefinite" />
      </rect>
      <rect x="65" y="100" width="55" height="4" rx="1" fill="#26890C" opacity="0.2">
        <animate attributeName="opacity" values="0.12;0.3;0.12" dur="2.5s" repeatCount="indefinite" />
      </rect>

      {/* Magnifying glass */}
      <circle cx="138" cy="65" r="18" fill="rgba(255,255,255,0.03)" stroke="#FFA602" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="r" values="17;19;17" dur="3s" repeatCount="indefinite" />
      </circle>
      <line x1="150" y1="78" x2="162" y2="92" stroke="#FFA602" strokeWidth="2" opacity="0.4" strokeLinecap="round" />

      {/* Clear text visible through magnifier */}
      <rect x="124" y="60" width="28" height="3" rx="1" fill="#26890C" opacity="0.4" />
      <rect x="124" y="66" width="22" height="3" rx="1" fill="#26890C" opacity="0.35" />

      {/* Question marks transforming to checkmarks */}
      <text x="35" y="45" fontSize="12" fill="#E21B3C" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" />
        ?
      </text>
      <path d="M30 95 L35 100 L42 90" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="20" cy="130" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="30" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-writing-letters — Pen writing on paper with a "send" glow */
export function M3WritingLettersIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#FF3EA5" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Paper */}
      <rect x="45" y="25" width="85" height="110" rx="4" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* Written lines — appearing */}
      <rect x="55" y="40" width="60" height="3" rx="1" fill="#1368CE" opacity="0.25">
        <animate attributeName="width" values="0;60;60" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="55" y="50" width="50" height="3" rx="1" fill="#1368CE" opacity="0.2">
        <animate attributeName="width" values="0;0;50" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="55" y="60" width="55" height="3" rx="1" fill="#1368CE" opacity="0.18">
        <animate attributeName="width" values="0;0;55" dur="4s" repeatCount="indefinite" />
      </rect>
      <rect x="55" y="70" width="45" height="3" rx="1" fill="#1368CE" opacity="0.15" />
      <rect x="55" y="80" width="58" height="3" rx="1" fill="#1368CE" opacity="0.12" />
      <rect x="55" y="90" width="42" height="3" rx="1" fill="#1368CE" opacity="0.1" />

      {/* Signature line */}
      <path d="M55 110 Q65 105 75 110 Q85 115 95 110" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.25" />

      {/* AI pen */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;40,20;60,30" dur="4s" repeatCount="indefinite" />
        <rect x="50" y="30" width="4" height="20" rx="1" fill="#FFA602" opacity="0.5" transform="rotate(-30 52 40)" />
        <path d="M47 48 L52 54 L55 46" fill="#FFA602" opacity="0.5" transform="rotate(-30 52 40)" />
      </g>

      {/* Send icon / paper plane */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;5,-5;0,0" dur="2.5s" repeatCount="indefinite" />
        <path d="M150 50 L170 40 L160 65 L155 55 Z" fill="#26890C" fillOpacity="0.25" stroke="#26890C" strokeWidth="1" opacity="0.4" />
        <line x1="155" y1="55" x2="170" y2="40" stroke="#26890C" strokeWidth="0.8" opacity="0.3" />
      </g>

      {/* Sparkles */}
      <circle cx="175" cy="80" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="60" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="120" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-boring-quiz — Clipboard with checkmark */
export function M3BoringQuizIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="80" ry="60" fill="#26890C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Clipboard */}
      <rect x="60" y="30" width="80" height="100" rx="6" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.35" />
      <rect x="80" y="24" width="40" height="12" rx="4" fill="#1368CE" fillOpacity="0.2" stroke="#1368CE" strokeWidth="1" opacity="0.3" />

      {/* Checklist items */}
      <rect x="72" y="50" width="10" height="10" rx="2" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.4" />
      <path d="M74 55 L77 58 L80 53" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>
      <rect x="88" y="52" width="40" height="3" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="72" y="68" width="10" height="10" rx="2" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.4" />
      <path d="M74 73 L77 76 L80 71" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.3s" repeatCount="indefinite" />
      </path>
      <rect x="88" y="70" width="35" height="3" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="72" y="86" width="10" height="10" rx="2" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
      <rect x="88" y="88" width="38" height="3" rx="1" fill="rgba(255,255,255,0.08)" />

      <rect x="72" y="104" width="10" height="10" rx="2" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
      <rect x="88" y="106" width="32" height="3" rx="1" fill="rgba(255,255,255,0.08)" />

      {/* Sparkles */}
      <circle cx="35" cy="45" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="55" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="130" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-stuff-piling-up — Stack of tasks with numbers 1-5 */
export function M3StuffPilingUpIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Stack of 5 task cards */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="50" y="18" width="100" height="22" rx="4" fill="#E21B3C" fillOpacity="0.12" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
        <circle cx="64" cy="29" r="7" fill="#E21B3C" opacity="0.2" />
        <text x="64" y="33" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E21B3C" opacity="0.5">1</text>
        <rect x="76" y="26" width="60" height="3" rx="1" fill="#E21B3C" opacity="0.15" />
      </g>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1.5;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="50" y="44" width="100" height="22" rx="4" fill="#FFA602" fillOpacity="0.12" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        <circle cx="64" cy="55" r="7" fill="#FFA602" opacity="0.2" />
        <text x="64" y="59" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FFA602" opacity="0.5">2</text>
        <rect x="76" y="52" width="55" height="3" rx="1" fill="#FFA602" opacity="0.15" />
      </g>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="3.2s" repeatCount="indefinite" />
        <rect x="50" y="70" width="100" height="22" rx="4" fill="#1368CE" fillOpacity="0.12" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
        <circle cx="64" cy="81" r="7" fill="#1368CE" opacity="0.2" />
        <text x="64" y="85" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1368CE" opacity="0.5">3</text>
        <rect x="76" y="78" width="50" height="3" rx="1" fill="#1368CE" opacity="0.15" />
      </g>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-0.5;0,0" dur="2.6s" repeatCount="indefinite" />
        <rect x="50" y="96" width="100" height="22" rx="4" fill="#26890C" fillOpacity="0.12" stroke="#26890C" strokeWidth="1" opacity="0.3" />
        <circle cx="64" cy="107" r="7" fill="#26890C" opacity="0.2" />
        <text x="64" y="111" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#26890C" opacity="0.5">4</text>
        <rect x="76" y="104" width="58" height="3" rx="1" fill="#26890C" opacity="0.15" />
      </g>

      <g>
        <rect x="50" y="122" width="100" height="22" rx="4" fill="#FF3EA5" fillOpacity="0.12" stroke="#FF3EA5" strokeWidth="1" opacity="0.3" />
        <circle cx="64" cy="133" r="7" fill="#FF3EA5" opacity="0.2" />
        <text x="64" y="137" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FF3EA5" opacity="0.5">5</text>
        <rect x="76" y="130" width="52" height="3" rx="1" fill="#FF3EA5" opacity="0.15" />
      </g>

      {/* Lightning bolt — "quick" */}
      <path d="M168 40 L160 65 L168 62 L158 88" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="30" cy="35" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="130" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m3-boring-takeaway — Broom sweeping away a pile with sparkle trail */
export function M3BoringTakeawayIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="85" ry="60" fill="#26890C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Pile of papers — fading away */}
      <rect x="120" y="80" width="25" height="18" rx="2" fill="#E21B3C" opacity="0.12" transform="rotate(8 132 89)">
        <animate attributeName="opacity" values="0.12;0.06;0.12" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="130" y="75" width="25" height="18" rx="2" fill="#FFA602" opacity="0.1" transform="rotate(-5 142 84)">
        <animate attributeName="opacity" values="0.1;0.04;0.1" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="140" y="82" width="25" height="18" rx="2" fill="#1368CE" opacity="0.08" transform="rotate(12 152 91)">
        <animate attributeName="opacity" values="0.08;0.03;0.08" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Broom */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="-10,0;10,0;-10,0" dur="2.5s" repeatCount="indefinite" />
        {/* Handle */}
        <line x1="80" y1="40" x2="100" y2="100" stroke="#FFA602" strokeWidth="2.5" opacity="0.4" strokeLinecap="round" />
        {/* Bristles */}
        <path d="M90 95 Q95 105 85 110 Q95 108 100 100 Q105 108 115 110 Q105 105 110 95" fill="#FFA602" opacity="0.25" />
      </g>

      {/* Sparkle trail */}
      <circle cx="70" cy="85" r="3" fill="#26890C" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="90" r="2.5" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.15;0.5;0.15" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="45" cy="95" r="2" fill="#FF3EA5" opacity="0.25">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Checkmark — clear! */}
      <path d="M35 55 L50 72 L75 40" stroke="#26890C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Text: "Clear" */}
      <text x="55" y="35" textAnchor="middle" fontSize="10" fill="#26890C" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        Clear!
      </text>

      {/* Extra sparkles */}
      <circle cx="170" cy="40" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="130" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

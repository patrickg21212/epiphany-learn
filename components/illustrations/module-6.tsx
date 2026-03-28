/**
 * Module 6: "Try It Yourself" — Animated SVG Illustrations
 *
 * Every h2 section of every lesson gets a unique, topic-specific animated SVG.
 * Uses Kahoot palette: #E21B3C (red), #1368CE (blue), #FFA602 (gold),
 *   #26890C (green), #00C9B7 (cyan), #FF3EA5 (magenta)
 * All animations use SMIL (<animate>, <animateTransform>).
 */

// ─── INTRO ILLUSTRATIONS ───────────────────────────────────────────────

/**
 * m6-intro-experiment — Pick Your First AI Experiment intro
 * A beaker/flask with bubbling ideas, a "START" button glowing.
 */
export function M6IntroExperiment({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Flask/beaker */}
      <g transform="translate(100, 80)">
        {/* Neck */}
        <rect x="-8" y="-50" width="16" height="20" rx="2" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
        {/* Body */}
        <path d="M-8,-30 L-28,15 Q-30,25 -20,28 L20,28 Q30,25 28,15 L8,-30" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1.5" opacity="0.5" />
        {/* Liquid */}
        <path d="M-22,10 L22,10 L20,25 Q18,28 -18,28 Z" fill="#1368CE" opacity="0.15">
          <animate attributeName="d" values="M-22,10 L22,10 L20,25 Q18,28 -18,28 Z;M-22,8 L22,12 L20,25 Q18,28 -18,28 Z;M-22,10 L22,10 L20,25 Q18,28 -18,28 Z" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Bubbles */}
        <circle cx="-5" cy="10" r="3" fill="#26890C" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="15;-20" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="5" cy="15" r="2" fill="#FFA602" opacity="0">
          <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="cy" values="18;-25" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="12" r="2.5" fill="#FF3EA5" opacity="0">
          <animate attributeName="opacity" values="0;0.4;0" dur="2.2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="cy" values="16;-22" dur="2.2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Idea sparks floating out of flask */}
      <circle cx="80" cy="22" r="3" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
        <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="120" cy="18" r="2.5" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.6;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="105" cy="15" r="2" fill="#E21B3C" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </circle>

      {/* START button */}
      <g transform="translate(100, 135)">
        <rect x="-25" y="-10" width="50" height="20" rx="10" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="1.5" strokeOpacity="0.4">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="0" y="4" textAnchor="middle" fill="#26890C" fontSize="8" fontWeight="bold" opacity="0.5">START</text>
      </g>

      {/* Sparkles */}
      <circle cx="25" cy="40" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="45" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m6-intro-week — Try It for a Week intro
 * A 7-day calendar strip with progress filling day by day.
 */
export function M6IntroWeek({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Week strip — 7 day boxes */}
      {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
        const x = 22 + i * 24;
        const colors = ["#E21B3C", "#FFA602", "#1368CE", "#26890C", "#FF3EA5", "#00C9B7", "#FFA602"];
        return (
          <g key={`day-${i}`}>
            <rect x={x} y="55" width="20" height="50" rx="4" fill="#1a1a2e" stroke={colors[i]} strokeWidth="1" opacity="0.4">
              <animate attributeName="opacity" values="0.3;0.5;0.3" dur={`${3 + i * 0.2}s`} repeatCount="indefinite" />
            </rect>
            {/* Day letter */}
            <text x={x + 10} y="68" textAnchor="middle" fill={colors[i]} fontSize="7" fontWeight="bold" opacity="0.5">{day}</text>
            {/* Progress fill from bottom */}
            <rect x={x + 2} y={105 - (i < 5 ? (i + 1) * 8 : 0)} width="16" height={i < 5 ? (i + 1) * 8 : 0} rx="2" fill={colors[i]} opacity="0.15">
              <animate attributeName="opacity" values="0;0.2;0.2" dur="4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </rect>
            {/* Checkmark for completed days */}
            {i < 3 && (
              <path d={`M${x + 4} 82 L${x + 8} 86 L${x + 15} 78`} stroke={colors[i]} strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round">
                <animate attributeName="opacity" values="0;0.5;0.5" dur="4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              </path>
            )}
          </g>
        );
      })}

      {/* Arrow showing progression */}
      <path d="M30,120 L170,120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" markerEnd="url(#weekArrow)" />

      {/* Label */}
      <text x="100" y="140" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6">one week, one experiment</text>

      {/* Sparkles */}
      <circle cx="15" cy="25" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="30" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="20" r="2" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m6-intro-measure — Did It Actually Help? intro
 * A thumbs up and thumbs down with a measuring scale between them.
 */
export function M6IntroMeasure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Thumbs up — left */}
      <g transform="translate(55, 65)">
        <rect x="-18" y="-5" width="12" height="28" rx="3" fill="#26890C" opacity="0.2" />
        <rect x="-4" y="-18" width="22" height="25" rx="4" fill="#26890C" opacity="0.15" />
        <path d="M-4,-18 L4,-28 L10,-18" fill="#26890C" opacity="0.2" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
      </g>

      {/* Thumbs down — right */}
      <g transform="translate(145, 65)">
        <rect x="-18" y="-23" width="12" height="28" rx="3" fill="#E21B3C" opacity="0.2" />
        <rect x="-4" y="-7" width="22" height="25" rx="4" fill="#E21B3C" opacity="0.15" />
        <path d="M-4,18 L4,28 L10,18" fill="#E21B3C" opacity="0.2" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </g>

      {/* Meter/gauge in center */}
      <g transform="translate(100, 75)">
        <circle cx="0" cy="0" r="25" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" strokeDasharray="78.5 78.5" transform="rotate(-90)" />
        {/* Green portion */}
        <circle cx="0" cy="0" r="25" fill="none" stroke="#26890C" strokeWidth="3" strokeDasharray="55 103" transform="rotate(-90)" opacity="0.4">
          <animate attributeName="strokeDasharray" values="0 157;55 103;55 103" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Needle */}
        <line x1="0" y1="0" x2="0" y2="-20" stroke="#FFA602" strokeWidth="2" strokeLinecap="round" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" values="-45 0 0;30 0 0;-45 0 0" dur="4s" repeatCount="indefinite" />
        </line>
        <circle cx="0" cy="0" r="3" fill="#FFA602" opacity="0.4" />
      </g>

      {/* Three questions */}
      <g>
        <text x="60" y="120" textAnchor="middle" fill="#FFA602" fontSize="12" opacity="0.2">?</text>
        <text x="100" y="125" textAnchor="middle" fill="#1368CE" fontSize="14" opacity="0.25">?</text>
        <text x="140" y="120" textAnchor="middle" fill="#FF3EA5" fontSize="12" opacity="0.2">?</text>
      </g>

      {/* Sparkles */}
      <circle cx="20" cy="25" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="30" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="2" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m6-intro-graduation — You're AI-Literate intro
 * A graduation cap with a glowing certificate and celebration confetti.
 */
export function M6IntroGraduation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Graduation cap */}
      <g transform="translate(100, 50)">
        <polygon points="0,-25 45,-10 0,5 -45,-10" fill="#1368CE" opacity="0.3" stroke="#1368CE" strokeWidth="1" strokeOpacity="0.4" />
        <rect x="-4" y="-10" width="8" height="15" rx="1" fill="#1368CE" opacity="0.2" />
        {/* Tassel */}
        <line x1="40" y1="-10" x2="45" y2="8" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
        <circle cx="45" cy="10" r="3" fill="#FFA602" opacity="0.3">
          <animate attributeName="cy" values="8;12;8" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Certificate below */}
      <g transform="translate(100, 100)">
        <rect x="-35" y="-15" width="70" height="30" rx="3" fill="#1a1a2e" stroke="#FFA602" strokeWidth="1" opacity="0.4" />
        <rect x="-28" y="-10" width="56" height="3" rx="1" fill="#FFA602" opacity="0.2" />
        <rect x="-22" y="-4" width="44" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
        <rect x="-25" y="1" width="50" height="2" rx="1" fill="rgba(255,255,255,0.06)" />
        {/* Gold seal */}
        <circle cx="22" cy="8" r="5" fill="#FFA602" opacity="0.2" stroke="#FFA602" strokeWidth="0.8" strokeOpacity="0.3">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Confetti particles */}
      <rect x="30" y="20" width="4" height="4" rx="1" fill="#E21B3C" opacity="0.4" transform="rotate(30 32 22)">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;5,20" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="60" y="15" width="3" height="5" rx="1" fill="#26890C" opacity="0.4" transform="rotate(-20 62 18)">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;-3,25" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      <rect x="140" y="18" width="4" height="3" rx="1" fill="#FF3EA5" opacity="0.4" transform="rotate(45 142 20)">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;3,22" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="165" y="22" width="3" height="4" rx="1" fill="#00C9B7" opacity="0.4" transform="rotate(-15 167 24)">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;-4,18" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
      </rect>
      <circle cx="85" cy="20" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="1.8s" begin="0.2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;2,15" dur="1.8s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="115" cy="16" r="1.5" fill="#1368CE" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.1s" begin="0.5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,20" dur="2.1s" begin="0.5s" repeatCount="indefinite" />
      </circle>

      {/* Corner sparkles */}
      <circle cx="15" cy="15" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="15" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="148" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="148" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   LESSON 1 — Pick Your First AI Experiment
   ═══════════════════════════════════════════════════ */

/** m6-sweet-spot — A bullseye target with a clock merging into it,
 *  representing the 30-minute low-risk sweet spot */
export function SweetSpotIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background sparkles */}
      <circle cx="25" cy="25" r="2" fill="#FFA602" opacity="0.6">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="35" r="1.5" fill="#00C9B7" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="130" r="2" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="35" cy="135" r="1.5" fill="#1368CE" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Target rings */}
      <circle cx="100" cy="80" r="52" fill="#1368CE" opacity="0.08">
        <animate attributeName="r" values="50;54;50" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="80" r="52" stroke="#1368CE" strokeWidth="1.5" opacity="0.25">
        <animate attributeName="r" values="50;54;50" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="80" r="36" fill="#FFA602" opacity="0.1" />
      <circle cx="100" cy="80" r="36" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      <circle cx="100" cy="80" r="20" fill="#26890C" opacity="0.12" />
      <circle cx="100" cy="80" r="20" stroke="#26890C" strokeWidth="1.5" opacity="0.35" />

      {/* Bullseye center — pulsing */}
      <circle cx="100" cy="80" r="8" fill="#26890C" opacity="0.7">
        <animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Clock icon overlaid on target */}
      <circle cx="100" cy="80" r="16" stroke="#FFA602" strokeWidth="2" opacity="0.8" fill="none">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <line x1="100" y1="80" x2="100" y2="70" stroke="#FFA602" strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="8s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="80" x2="107" y2="80" stroke="#FFA602" strokeWidth="1.5" strokeLinecap="round" opacity="0.9">
        <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="60s" repeatCount="indefinite" />
      </line>

      {/* "30 min" label */}
      <text x="100" y="120" textAnchor="middle" fill="#FFA602" fontSize="11" fontWeight="bold" opacity="0.7">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
        30 min
      </text>

      {/* Floating checkmark */}
      <g transform="translate(145, 50)">
        <circle r="10" fill="#26890C" opacity="0.2">
          <animate attributeName="r" values="9;12;9" dur="2s" repeatCount="indefinite" />
        </circle>
        <path d="M-4,0 L-1,3 L5,-3" stroke="#26890C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

/** m6-bad-experiment — A red warning sign with an overly complex tangled mess,
 *  representing experiments that are too complicated or high-stakes */
export function BadExperimentIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="20" cy="20" r="1.5" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Warning triangle */}
      <path d="M100 25 L145 105 L55 105 Z" fill="#E21B3C" opacity="0.1">
        <animate attributeName="opacity" values="0.08;0.15;0.08" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M100 25 L145 105 L55 105 Z" stroke="#E21B3C" strokeWidth="2" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Exclamation mark */}
      <line x1="100" y1="52" x2="100" y2="78" stroke="#E21B3C" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
      <circle cx="100" cy="90" r="2.5" fill="#E21B3C" opacity="0.7" />

      {/* Tangled complexity lines (bad experiment = too complex) */}
      <path d="M30 120 Q50 100 70 125 T110 115 T150 130 T175 110" stroke="#FF3EA5" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;14" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M25 135 Q60 108 80 140 T120 125 T170 140" stroke="#E21B3C" strokeWidth="1.5" fill="none" opacity="0.25" strokeDasharray="3 4">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* X marks */}
      <g transform="translate(45, 50)" opacity="0.4">
        <line x1="-5" y1="-5" x2="5" y2="5" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="-5" x2="-5" y2="5" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" />
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </g>
      <g transform="translate(155, 55)" opacity="0.4">
        <line x1="-5" y1="-5" x2="5" y2="5" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="-5" x2="-5" y2="5" stroke="#E21B3C" strokeWidth="2" strokeLinecap="round" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </g>

      {/* "TAX" and "LEGAL" labels floating — what to avoid */}
      <text x="40" y="42" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.35">TAX</text>
      <text x="148" y="42" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.35">LEGAL</text>
    </svg>
  );
}

/** m6-experiment-ideas — A grid of colorful idea cards fanning out,
 *  representing the categories of experiment ideas */
export function ExperimentIdeasIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="15" cy="15" r="1.5" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="25" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="145" r="1.5" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Card 1 — Home (blue) */}
      <g>
        <rect x="20" y="25" width="50" height="38" rx="6" fill="#1368CE" opacity="0.12" />
        <rect x="20" y="25" width="50" height="38" rx="6" stroke="#1368CE" strokeWidth="1.5" opacity="0.35" />
        {/* House icon */}
        <path d="M45 37 L35 45 L35 55 L42 55 L42 49 L48 49 L48 55 L55 55 L55 45 Z" stroke="#1368CE" strokeWidth="1.5" fill="none" opacity="0.5" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" repeatCount="indefinite" />
      </g>

      {/* Card 2 — Work (gold) */}
      <g>
        <rect x="75" y="18" width="50" height="38" rx="6" fill="#FFA602" opacity="0.12" />
        <rect x="75" y="18" width="50" height="38" rx="6" stroke="#FFA602" strokeWidth="1.5" opacity="0.35" />
        {/* Briefcase icon */}
        <rect x="90" y="32" width="20" height="15" rx="2" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M95 32 L95 28 L105 28 L105 32" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.5" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="3.5s" repeatCount="indefinite" />
      </g>

      {/* Card 3 — School (green) */}
      <g>
        <rect x="130" y="25" width="50" height="38" rx="6" fill="#26890C" opacity="0.12" />
        <rect x="130" y="25" width="50" height="38" rx="6" stroke="#26890C" strokeWidth="1.5" opacity="0.35" />
        {/* Book icon */}
        <path d="M145 35 L145 55 L165 55 L165 35 M155 35 L155 55" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.5" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2.8s" repeatCount="indefinite" />
      </g>

      {/* Card 4 — Creative (magenta) */}
      <g>
        <rect x="35" y="80" width="50" height="38" rx="6" fill="#FF3EA5" opacity="0.12" />
        <rect x="35" y="80" width="50" height="38" rx="6" stroke="#FF3EA5" strokeWidth="1.5" opacity="0.35" />
        {/* Star/spark icon */}
        <path d="M60 90 L62 96 L68 96 L63 100 L65 106 L60 102 L55 106 L57 100 L52 96 L58 96 Z" fill="#FF3EA5" opacity="0.4" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3.2s" repeatCount="indefinite" />
      </g>

      {/* Card 5 — Social (cyan) */}
      <g>
        <rect x="115" y="80" width="50" height="38" rx="6" fill="#00C9B7" opacity="0.12" />
        <rect x="115" y="80" width="50" height="38" rx="6" stroke="#00C9B7" strokeWidth="1.5" opacity="0.35" />
        {/* Chat bubble icon */}
        <path d="M130 90 L155 90 L155 104 L143 104 L140 110 L137 104 L130 104 Z" stroke="#00C9B7" strokeWidth="1.5" fill="none" opacity="0.5" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2.6s" repeatCount="indefinite" />
      </g>

      {/* Floating lightbulb in center */}
      <g transform="translate(100, 120)">
        <circle r="8" fill="#FFA602" opacity="0.15">
          <animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
        </circle>
        <path d="M-4,-6 L-4,0 Q-4,4 0,4 Q4,4 4,0 L4,-6 Q0,-12 -4,-6" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.6" />
        <line x1="-2" y1="6" x2="2" y2="6" stroke="#FFA602" strokeWidth="1" opacity="0.5" />
      </g>
    </svg>
  );
}

/** m6-three-questions — Three numbered question marks stacked,
 *  representing the decision filter for picking an experiment */
export function ThreeQuestionsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.5" fill="#00C9B7" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.8s" repeatCount="indefinite" />
      </circle>

      {/* Question 1 — blue circle with "1" */}
      <g>
        <circle cx="55" cy="45" r="22" fill="#1368CE" opacity="0.1">
          <animate attributeName="r" values="21;24;21" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="45" r="22" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
        <text x="55" y="42" textAnchor="middle" fill="#1368CE" fontSize="14" fontWeight="bold" opacity="0.7">1</text>
        <text x="55" y="55" textAnchor="middle" fill="#1368CE" fontSize="8" opacity="0.5">Real?</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" repeatCount="indefinite" />
      </g>

      {/* Question 2 — gold circle with "2" */}
      <g>
        <circle cx="100" cy="80" r="22" fill="#FFA602" opacity="0.1">
          <animate attributeName="r" values="21;24;21" dur="3.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="80" r="22" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
        <text x="100" y="77" textAnchor="middle" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.7">2</text>
        <text x="100" y="90" textAnchor="middle" fill="#FFA602" fontSize="8" opacity="0.5">30 min?</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3.3s" repeatCount="indefinite" />
      </g>

      {/* Question 3 — green circle with "3" */}
      <g>
        <circle cx="145" cy="115" r="22" fill="#26890C" opacity="0.1">
          <animate attributeName="r" values="21;24;21" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="145" cy="115" r="22" stroke="#26890C" strokeWidth="1.5" opacity="0.4" />
        <text x="145" y="112" textAnchor="middle" fill="#26890C" fontSize="14" fontWeight="bold" opacity="0.7">3</text>
        <text x="145" y="125" textAnchor="middle" fill="#26890C" fontSize="8" opacity="0.5">Okay?</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2.8s" repeatCount="indefinite" />
      </g>

      {/* Connecting arrows */}
      <path d="M75 55 Q85 65 88 68" stroke="#FFA602" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" fill="none">
        <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M118 92 Q128 100 133 103" stroke="#26890C" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" fill="none">
        <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Floating question marks */}
      <text x="30" y="105" fill="#FF3EA5" fontSize="16" fontWeight="bold" opacity="0.15">?</text>
      <text x="170" y="50" fill="#00C9B7" fontSize="16" fontWeight="bold" opacity="0.15">?</text>
    </svg>
  );
}

/** m6-quick-check-1 — A brain with a checkmark, quiz/self-test motif */
export function QuickCheck1Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="25" cy="20" r="1.5" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="140" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Brain shape */}
      <path d="M85 50 Q65 35 70 60 Q55 55 60 75 Q50 80 65 90 Q60 100 80 100 L100 100 Q120 100 120 90 Q135 85 130 75 Q140 70 130 60 Q140 45 115 50 Q110 35 95 40 Q85 35 85 50" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="1.5" />

      {/* Pulsing glow */}
      <circle cx="100" cy="75" r="25" fill="#1368CE" opacity="0.05">
        <animate attributeName="r" values="22;28;22" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Checkmark badge */}
      <g transform="translate(130, 55)">
        <circle r="14" fill="#26890C" opacity="0.15">
          <animate attributeName="r" values="13;16;13" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="12" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M-5,0 L-1,4 L6,-4" stroke="#26890C" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Question marks floating */}
      <text x="50" y="130" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        ?
      </text>
      <text x="140" y="130" fill="#FF3EA5" fontSize="14" fontWeight="bold" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2.5s" repeatCount="indefinite" />
        ?
      </text>
      <text x="95" y="140" fill="#00C9B7" fontSize="14" fontWeight="bold" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.8s" repeatCount="indefinite" />
        ?
      </text>
    </svg>
  );
}

/** m6-key-takeaway-1 — A rocket launching from a starting line,
 *  representing "just start, it doesn't have to be impressive" */
export function KeyTakeaway1Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="20" cy="30" r="2" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="25" r="1.5" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="140" r="2" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Starting line */}
      <line x1="30" y1="125" x2="170" y2="125" stroke="#1368CE" strokeWidth="2" opacity="0.25" strokeDasharray="8 4" />
      <text x="100" y="142" textAnchor="middle" fill="#1368CE" fontSize="9" fontWeight="bold" opacity="0.3">START</text>

      {/* Simple rocket */}
      <g transform="translate(100, 70)">
        <animateTransform attributeName="transform" type="translate" values="100,75;100,62;100,75" dur="3s" repeatCount="indefinite" />
        {/* Body */}
        <path d="M0,-30 Q-10,-15 -8,10 L8,10 Q10,-15 0,-30" fill="#E21B3C" opacity="0.3" stroke="#E21B3C" strokeWidth="1.5" />
        {/* Window */}
        <circle cy="-10" r="4" fill="#1368CE" opacity="0.3" stroke="#1368CE" strokeWidth="1" />
        {/* Fins */}
        <path d="M-8,5 L-15,15 L-8,10" fill="#FFA602" opacity="0.35" />
        <path d="M8,5 L15,15 L8,10" fill="#FFA602" opacity="0.35" />
        {/* Flame */}
        <path d="M-5,10 Q0,25 5,10" fill="#FFA602" opacity="0.5">
          <animate attributeName="d" values="M-5,10 Q0,25 5,10;M-5,10 Q0,30 5,10;M-5,10 Q0,25 5,10" dur="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="0.4s" repeatCount="indefinite" />
        </path>
        <path d="M-3,10 Q0,20 3,10" fill="#E21B3C" opacity="0.5">
          <animate attributeName="d" values="M-3,10 Q0,20 3,10;M-3,10 Q0,24 3,10;M-3,10 Q0,20 3,10" dur="0.3s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Trail particles */}
      <circle cx="100" cy="115" r="2" fill="#FFA602" opacity="0.2">
        <animate attributeName="cy" values="110;125;110" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="95" cy="118" r="1.5" fill="#E21B3C" opacity="0.15">
        <animate attributeName="cy" values="112;125;112" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


/* ═══════════════════════════════════════════════════
   LESSON 2 — Try It for a Week
   ═══════════════════════════════════════════════════ */

/** m6-day-by-day — A 7-day calendar strip with a rising curve,
 *  showing improvement from awkward to natural over a week */
export function DayByDayIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="15" cy="20" r="1.5" fill="#00C9B7" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="30" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* 7-day boxes */}
      {[1, 2, 3, 4, 5, 6, 7].map((d, i) => {
        const x = 18 + i * 24;
        const colors = ["#E21B3C", "#E21B3C", "#FFA602", "#FFA602", "#26890C", "#26890C", "#26890C"];
        const color = colors[i];
        return (
          <g key={d}>
            <rect x={x} y="25" width="20" height="24" rx="4" fill={color} opacity={0.08 + i * 0.02} stroke={color} strokeWidth="1" />
            <text x={x + 10} y="41" textAnchor="middle" fill={color} fontSize="10" fontWeight="bold" opacity={0.4 + i * 0.08}>{d}</text>
          </g>
        );
      })}

      {/* Rising improvement curve */}
      <path d="M28 115 Q50 112 65 105 Q80 98 100 85 Q120 72 140 58 Q155 48 178 35" stroke="#26890C" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Dots on the curve */}
      <circle cx="28" cy="115" r="3" fill="#E21B3C" opacity="0.5" />
      <circle cx="65" cy="105" r="3" fill="#E21B3C" opacity="0.5" />
      <circle cx="100" cy="85" r="3.5" fill="#FFA602" opacity="0.5" />
      <circle cx="140" cy="58" r="3.5" fill="#26890C" opacity="0.5" />
      <circle cx="178" cy="35" r="4" fill="#26890C" opacity="0.6">
        <animate attributeName="r" values="3.5;5;3.5" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Labels */}
      <text x="28" y="132" textAnchor="middle" fill="#E21B3C" fontSize="7" opacity="0.4">Awkward</text>
      <text x="178" y="28" textAnchor="middle" fill="#26890C" fontSize="7" opacity="0.5">Natural</text>

      {/* Arrow at end */}
      <path d="M173 37 L178 32 L180 40" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}

/** m6-experiment-log — A small notebook with three checkboxes,
 *  representing the simple logging system */
export function ExperimentLogIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="25" cy="25" r="2" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="135" r="1.5" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Notebook */}
      <rect x="50" y="20" width="100" height="120" rx="6" fill="#1368CE" opacity="0.06" stroke="#1368CE" strokeWidth="1.5" />

      {/* Spiral binding dots */}
      <circle cx="50" cy="35" r="2.5" fill="#1368CE" opacity="0.2" />
      <circle cx="50" cy="55" r="2.5" fill="#1368CE" opacity="0.2" />
      <circle cx="50" cy="75" r="2.5" fill="#1368CE" opacity="0.2" />
      <circle cx="50" cy="95" r="2.5" fill="#1368CE" opacity="0.2" />
      <circle cx="50" cy="115" r="2.5" fill="#1368CE" opacity="0.2" />

      {/* Lines */}
      <line x1="65" y1="45" x2="140" y2="45" stroke="#1368CE" strokeWidth="0.5" opacity="0.15" />
      <line x1="65" y1="65" x2="140" y2="65" stroke="#1368CE" strokeWidth="0.5" opacity="0.15" />
      <line x1="65" y1="85" x2="140" y2="85" stroke="#1368CE" strokeWidth="0.5" opacity="0.15" />
      <line x1="65" y1="105" x2="140" y2="105" stroke="#1368CE" strokeWidth="0.5" opacity="0.15" />

      {/* Log entry 1 — "What?" */}
      <rect x="65" y="34" width="10" height="10" rx="2" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M67 39 L69 41 L73 37" stroke="#FFA602" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0;0.6;0.6" dur="3s" repeatCount="indefinite" />
      </path>
      <text x="80" y="42" fill="#FFA602" fontSize="8" opacity="0.5">What?</text>

      {/* Log entry 2 — "Help?" */}
      <rect x="65" y="54" width="10" height="10" rx="2" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M67 59 L69 61 L73 57" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0;0;0.6;0.6" dur="4s" repeatCount="indefinite" />
      </path>
      <text x="80" y="62" fill="#26890C" fontSize="8" opacity="0.5">Help?</text>

      {/* Log entry 3 — "Next?" */}
      <rect x="65" y="74" width="10" height="10" rx="2" stroke="#00C9B7" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M67 79 L69 81 L73 77" stroke="#00C9B7" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0;0;0;0.6;0.6" dur="5s" repeatCount="indefinite" />
      </path>
      <text x="80" y="82" fill="#00C9B7" fontSize="8" opacity="0.5">Next?</text>

      {/* Pen */}
      <g transform="translate(135, 100) rotate(-30)">
        <rect x="-2" y="-20" width="4" height="25" rx="1" fill="#FF3EA5" opacity="0.3" />
        <path d="M-2,5 L0,10 L2,5" fill="#FF3EA5" opacity="0.4" />
        <animateTransform attributeName="transform" type="translate" values="135,100;137,98;135,100" dur="2s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}

/** m6-fix-it-toolkit — A wrench and screwdriver crossing over a chat bubble,
 *  representing tools for when AI output doesn't work */
export function FixItToolkitIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="20" cy="15" r="1.5" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="145" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Chat bubble background */}
      <path d="M40 30 L160 30 Q170 30 170 40 L170 100 Q170 110 160 110 L110 110 L100 125 L90 110 L40 110 Q30 110 30 100 L30 40 Q30 30 40 30" fill="#1368CE" opacity="0.06" stroke="#1368CE" strokeWidth="1.5" />

      {/* Wrench */}
      <g transform="translate(80, 70) rotate(-45)">
        <rect x="-3" y="-25" width="6" height="30" rx="2" fill="#FFA602" opacity="0.3" />
        <circle cy="-25" r="8" fill="none" stroke="#FFA602" strokeWidth="3" opacity="0.3" />
        <circle cy="-25" r="4" fill="#FFA602" opacity="0.1" />
        <animateTransform attributeName="transform" type="rotate" values="-45;-40;-45" dur="3s" repeatCount="indefinite" />
      </g>

      {/* Screwdriver */}
      <g transform="translate(120, 70) rotate(45)">
        <rect x="-2.5" y="-25" width="5" height="28" rx="1.5" fill="#26890C" opacity="0.3" />
        <path d="M-2.5,3 L0,12 L2.5,3" fill="#26890C" opacity="0.4" />
        <rect x="-4" y="-25" width="8" height="6" rx="1" fill="#26890C" opacity="0.2" />
        <animateTransform attributeName="transform" type="rotate" values="45;40;45" dur="3s" repeatCount="indefinite" />
      </g>

      {/* "Fix" badges */}
      <g transform="translate(60, 50)">
        <rect x="-15" y="-8" width="30" height="16" rx="8" fill="#E21B3C" opacity="0.15" stroke="#E21B3C" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.5">FIX</text>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
      </g>

      {/* Gear */}
      <g transform="translate(140, 50)">
        <circle r="8" fill="#00C9B7" opacity="0.1" stroke="#00C9B7" strokeWidth="1.5" />
        <circle r="4" fill="none" stroke="#00C9B7" strokeWidth="1" opacity="0.3" />
        <animateTransform attributeName="transform" type="rotate" from="0 140 50" to="360 140 50" dur="6s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}

/** m6-beginner-mistakes — A set of "oops" moments: wrong path signs,
 *  representing common beginner mistakes to avoid */
export function BeginnerMistakesIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="180" cy="20" r="1.5" fill="#00C9B7" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="140" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Signpost pole */}
      <line x1="100" y1="30" x2="100" y2="145" stroke="#1368CE" strokeWidth="3" opacity="0.25" />

      {/* Sign 1 — pointing left (wrong way) */}
      <g>
        <path d="M40 40 L95 40 L95 60 L40 60 L30 50 Z" fill="#E21B3C" opacity="0.1" stroke="#E21B3C" strokeWidth="1.5" />
        <text x="65" y="54" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.5">Accept</text>
        <line x1="42" y1="43" x2="52" y2="57" stroke="#E21B3C" strokeWidth="1.5" opacity="0.3" />
        <line x1="52" y1="43" x2="42" y2="57" stroke="#E21B3C" strokeWidth="1.5" opacity="0.3" />
        <animateTransform attributeName="transform" type="rotate" values="-2;2;-2" dur="4s" repeatCount="indefinite" />
      </g>

      {/* Sign 2 — pointing right (wrong way) */}
      <g>
        <path d="M105 70 L160 70 L170 80 L160 90 L105 90 Z" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="1.5" />
        <text x="135" y="84" textAnchor="middle" fill="#FFA602" fontSize="8" fontWeight="bold" opacity="0.5">Search</text>
        <animateTransform attributeName="transform" type="rotate" values="2;-2;2" dur="3.5s" repeatCount="indefinite" />
      </g>

      {/* Sign 3 — pointing left */}
      <g>
        <path d="M40 100 L95 100 L95 120 L40 120 L30 110 Z" fill="#FF3EA5" opacity="0.1" stroke="#FF3EA5" strokeWidth="1.5" />
        <text x="68" y="114" textAnchor="middle" fill="#FF3EA5" fontSize="8" fontWeight="bold" opacity="0.5">Give Up</text>
        <line x1="42" y1="103" x2="52" y2="117" stroke="#FF3EA5" strokeWidth="1.5" opacity="0.3" />
        <line x1="52" y1="103" x2="42" y2="117" stroke="#FF3EA5" strokeWidth="1.5" opacity="0.3" />
        <animateTransform attributeName="transform" type="rotate" values="-1;1;-1" dur="3s" repeatCount="indefinite" />
      </g>

      {/* Correct path arrow (subtle green) */}
      <path d="M100 145 L100 155" stroke="#26890C" strokeWidth="2" opacity="0.4" />
      <path d="M95 150 L100 158 L105 150" fill="#26890C" opacity="0.3" />
    </svg>
  );
}

/** m6-week-one-mission — A flag planted with "Week 1" and a path ahead,
 *  representing the mission to do the experiment for 7 days */
export function WeekOneMissionIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="15" cy="25" r="2" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="20" r="1.5" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="135" r="2" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Path/trail */}
      <path d="M30 130 Q60 120 80 105 Q100 90 120 85 Q145 78 170 60" stroke="#1368CE" strokeWidth="2" opacity="0.2" strokeDasharray="6 4" fill="none">
        <animate attributeName="stroke-dashoffset" values="0;20" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Flag pole */}
      <line x1="100" y1="25" x2="100" y2="100" stroke="#E21B3C" strokeWidth="2.5" opacity="0.4" />

      {/* Flag */}
      <path d="M102 25 L140 38 L102 52" fill="#E21B3C" opacity="0.25">
        <animate attributeName="d" values="M102 25 L140 38 L102 52;M102 25 L138 36 L102 52;M102 25 L140 38 L102 52" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M102 25 L140 38 L102 52" stroke="#E21B3C" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* "Week 1" text on flag */}
      <text x="118" y="42" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.6">WEEK 1</text>

      {/* Ground/base */}
      <ellipse cx="100" cy="102" rx="18" ry="5" fill="#26890C" opacity="0.15" />

      {/* Footstep dots along path */}
      <circle cx="55" cy="122" r="2" fill="#1368CE" opacity="0.2" />
      <circle cx="75" cy="112" r="2" fill="#1368CE" opacity="0.25" />
      <circle cx="90" cy="104" r="2" fill="#1368CE" opacity="0.3" />

      {/* Star at destination */}
      <g transform="translate(170, 55)">
        <path d="M0,-8 L2,-3 L7,-3 L3,1 L5,6 L0,3 L-5,6 L-3,1 L-7,-3 L-2,-3 Z" fill="#FFA602" opacity="0.4">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="scale" values="1;1.15;1" dur="2s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

/** m6-quick-check-2 — A clipboard with checkboxes, quiz motif for lesson 2 */
export function QuickCheck2Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="20" cy="30" r="1.5" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="130" r="2" fill="#26890C" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Clipboard */}
      <rect x="55" y="20" width="90" height="120" rx="6" fill="#1368CE" opacity="0.06" stroke="#1368CE" strokeWidth="1.5" />
      {/* Clip */}
      <rect x="80" y="14" width="40" height="14" rx="4" fill="#1368CE" opacity="0.15" stroke="#1368CE" strokeWidth="1.5" />

      {/* Check items */}
      <g>
        <rect x="70" y="45" width="12" height="12" rx="3" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M72 51 L75 54 L80 48" stroke="#26890C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0.6" dur="2.5s" repeatCount="indefinite" />
        </path>
        <rect x="88" y="48" width="45" height="4" rx="2" fill="#1368CE" opacity="0.12" />
      </g>

      <g>
        <rect x="70" y="70" width="12" height="12" rx="3" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M72 76 L75 79 L80 73" stroke="#FFA602" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0;0;0.6;0.6" dur="3.5s" repeatCount="indefinite" />
        </path>
        <rect x="88" y="73" width="40" height="4" rx="2" fill="#1368CE" opacity="0.12" />
      </g>

      <g>
        <rect x="70" y="95" width="12" height="12" rx="3" stroke="#00C9B7" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M72 101 L75 104 L80 98" stroke="#00C9B7" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0;0;0;0.6;0.6" dur="4.5s" repeatCount="indefinite" />
        </path>
        <rect x="88" y="98" width="35" height="4" rx="2" fill="#1368CE" opacity="0.12" />
      </g>

      {/* Pencil */}
      <g transform="translate(155, 85) rotate(-20)">
        <rect x="-2" y="-18" width="4" height="22" rx="1" fill="#FFA602" opacity="0.3" />
        <path d="M-2,4 L0,9 L2,4" fill="#FFA602" opacity="0.4" />
      </g>
    </svg>
  );
}

/** m6-key-takeaway-2 — A calendar showing 7 days with a rising confidence bar,
 *  "don't quit on day 1" message */
export function KeyTakeaway2Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="25" cy="15" r="1.5" fill="#00C9B7" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="145" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Mini calendar frame */}
      <rect x="30" y="25" width="140" height="80" rx="8" fill="#1368CE" opacity="0.05" stroke="#1368CE" strokeWidth="1.5" />
      <line x1="30" y1="45" x2="170" y2="45" stroke="#1368CE" strokeWidth="1" opacity="0.15" />

      {/* Day numbers */}
      {[1, 2, 3, 4, 5, 6, 7].map((d, i) => {
        const x = 42 + i * 18;
        return (
          <text key={d} x={x} y="39" textAnchor="middle" fill="#1368CE" fontSize="9" fontWeight="bold" opacity={0.3 + i * 0.07}>{d}</text>
        );
      })}

      {/* Confidence bars rising */}
      {[1, 2, 3, 4, 5, 6, 7].map((d, i) => {
        const x = 36 + i * 18;
        const h = 10 + i * 6;
        const y = 97 - h;
        const colors = ["#E21B3C", "#E21B3C", "#FFA602", "#FFA602", "#26890C", "#26890C", "#26890C"];
        return (
          <rect key={d} x={x} y={y} width="12" height={h} rx="2" fill={colors[i]} opacity={0.15 + i * 0.05}>
            <animate attributeName="height" values={`${h - 3};${h + 2};${h - 3}`} dur={2 + i * 0.2 + "s"} repeatCount="indefinite" />
          </rect>
        );
      })}

      {/* Trophy at end */}
      <g transform="translate(100, 130)">
        <path d="M-8,-5 L-8,5 Q0,12 8,5 L8,-5 Z" fill="#FFA602" opacity="0.25" stroke="#FFA602" strokeWidth="1.5" />
        <path d="M-12,-5 Q-15,0 -10,3" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.2" />
        <path d="M12,-5 Q15,0 10,3" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.2" />
        <rect x="-5" y="5" width="10" height="3" rx="1" fill="#FFA602" opacity="0.2" />
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}


/* ═══════════════════════════════════════════════════
   LESSON 3 — Did It Actually Help?
   ═══════════════════════════════════════════════════ */

/** m6-three-questions-matter — Three speech bubbles with question marks
 *  in time, quality, repeat colors */
export function ThreeQuestionsMatterIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="15" cy="30" r="2" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="1.5" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Bubble 1 — Time (blue) */}
      <g>
        <path d="M20 35 L80 35 Q90 35 90 45 L90 70 Q90 80 80 80 L55 80 L50 90 L45 80 L20 80 Q10 80 10 70 L10 45 Q10 35 20 35" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="1.5" />
        {/* Clock icon */}
        <circle cx="50" cy="55" r="10" stroke="#1368CE" strokeWidth="1.5" fill="none" opacity="0.4" />
        <line x1="50" y1="55" x2="50" y2="48" stroke="#1368CE" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="50" y1="55" x2="55" y2="55" stroke="#1368CE" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <text x="50" y="75" textAnchor="middle" fill="#1368CE" fontSize="7" opacity="0.4">Time?</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" repeatCount="indefinite" />
      </g>

      {/* Bubble 2 — Quality (gold) */}
      <g>
        <path d="M65 55 L135 55 Q145 55 145 65 L145 90 Q145 100 135 100 L110 100 L105 110 L100 100 L65 100 Q55 100 55 90 L55 65 Q55 55 65 55" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="1.5" />
        {/* Star icon */}
        <path d="M100 67 L102 73 L108 73 L103 77 L105 83 L100 79 L95 83 L97 77 L92 73 L98 73 Z" fill="#FFA602" opacity="0.35" />
        <text x="100" y="96" textAnchor="middle" fill="#FFA602" fontSize="7" opacity="0.4">Quality?</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3.5s" repeatCount="indefinite" />
      </g>

      {/* Bubble 3 — Again (green) */}
      <g>
        <path d="M120 80 L185 80 Q195 80 195 90 L195 115 Q195 125 185 125 L160 125 L155 135 L150 125 L120 125 Q110 125 110 115 L110 90 Q110 80 120 80" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="1.5" />
        {/* Repeat/loop icon */}
        <path d="M145 97 Q138 92 145 87 Q152 82 158 87" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M155 85 L158 87 L155 89" fill="#26890C" opacity="0.4" />
        <path d="M158 105 Q165 110 158 115 Q151 120 145 115" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M148 117 L145 115 L148 113" fill="#26890C" opacity="0.4" />
        <text x="152" y="120" textAnchor="middle" fill="#26890C" fontSize="7" opacity="0.4">Again?</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2.8s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}

/** m6-signs-worked — A glowing green thumbs-up with success indicators */
export function SignsWorkedIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="30" cy="20" r="2" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="25" r="1.5" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="140" r="1.5" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Glow behind */}
      <circle cx="100" cy="80" r="45" fill="#26890C" opacity="0.04">
        <animate attributeName="r" values="42;48;42" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Thumbs up */}
      <g transform="translate(100, 80)">
        <path d="M-5,8 L-5,-5 Q-5,-15 5,-20 L8,-20 L8,-8 Q2,-3 2,5 L15,5 L15,25 L-15,25 L-15,8 Z" fill="#26890C" opacity="0.2" stroke="#26890C" strokeWidth="2" />
        <animateTransform attributeName="transform" type="translate" values="100,82;100,76;100,82" dur="2.5s" repeatCount="indefinite" />
      </g>

      {/* Radiating success lines */}
      <line x1="65" y1="50" x2="55" y2="40" stroke="#26890C" strokeWidth="1.5" opacity="0.2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="40" x2="100" y2="28" stroke="#26890C" strokeWidth="1.5" opacity="0.2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.3s" repeatCount="indefinite" />
      </line>
      <line x1="135" y1="50" x2="145" y2="40" stroke="#26890C" strokeWidth="1.5" opacity="0.2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.6s" repeatCount="indefinite" />
      </line>

      {/* Checkmarks floating */}
      <g transform="translate(50, 115)">
        <path d="M-4,0 L-1,3 L5,-3" stroke="#26890C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        </path>
      </g>
      <g transform="translate(150, 115)">
        <path d="M-4,0 L-1,3 L5,-3" stroke="#26890C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Time saved badge */}
      <g transform="translate(155, 70)">
        <rect x="-18" y="-8" width="36" height="16" rx="8" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.5">SAVED</text>
      </g>
    </svg>
  );
}

/** m6-signs-didnt — A red/amber warning with honest "didn't work" indicators */
export function SignsDidntIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="20" cy="15" r="1.5" fill="#00C9B7" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="145" r="2" fill="#1368CE" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Amber/red glow */}
      <circle cx="100" cy="75" r="40" fill="#FFA602" opacity="0.04">
        <animate attributeName="r" values="38;44;38" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Thumbs down */}
      <g transform="translate(100, 75)">
        <path d="M-5,-8 L-5,5 Q-5,15 5,20 L8,20 L8,8 Q2,3 2,-5 L15,-5 L15,-25 L-15,-25 L-15,-8 Z" fill="#E21B3C" opacity="0.15" stroke="#E21B3C" strokeWidth="2" />
        <animateTransform attributeName="transform" type="translate" values="100,73;100,79;100,73" dur="2.5s" repeatCount="indefinite" />
      </g>

      {/* "Info" label — not failure, just data */}
      <g transform="translate(100, 125)">
        <rect x="-22" y="-9" width="44" height="18" rx="9" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="bold" opacity="0.5">INFO</text>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
      </g>

      {/* Question marks — signals, not defeat */}
      <text x="55" y="50" fill="#FFA602" fontSize="18" fontWeight="bold" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
        ?
      </text>
      <text x="140" y="50" fill="#FFA602" fontSize="18" fontWeight="bold" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2.5s" repeatCount="indefinite" />
        ?
      </text>

      {/* Arrow pointing to "try again" */}
      <path d="M60 130 Q40 125 30 110" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.2" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;14" dur="2s" repeatCount="indefinite" />
      </path>
      <text x="25" y="105" fill="#26890C" fontSize="7" opacity="0.3">Try again</text>
    </svg>
  );
}

/** m6-what-to-do-results — A fork in the road with three paths:
 *  expand (green), adjust (gold), new task (blue) */
export function WhatToDoResultsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="15" cy="20" r="1.5" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="140" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Starting path */}
      <line x1="100" y1="140" x2="100" y2="90" stroke="#1368CE" strokeWidth="2.5" opacity="0.2" />

      {/* Fork point */}
      <circle cx="100" cy="85" r="6" fill="#1368CE" opacity="0.15" stroke="#1368CE" strokeWidth="1.5" />

      {/* Path 1 — Worked → Expand (green, left) */}
      <path d="M94 82 Q60 60 40 35" stroke="#26890C" strokeWidth="2" opacity="0.3" fill="none" strokeDasharray="5 3">
        <animate attributeName="stroke-dashoffset" values="0;16" dur="3s" repeatCount="indefinite" />
      </path>
      <g transform="translate(35, 28)">
        <rect x="-22" y="-10" width="44" height="20" rx="10" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fill="#26890C" fontSize="8" fontWeight="bold" opacity="0.5">Expand</text>
      </g>

      {/* Path 2 — Partial → Adjust (gold, center) */}
      <path d="M100 79 Q100 55 100 30" stroke="#FFA602" strokeWidth="2" opacity="0.3" fill="none" strokeDasharray="5 3">
        <animate attributeName="stroke-dashoffset" values="0;16" dur="3.3s" repeatCount="indefinite" />
      </path>
      <g transform="translate(100, 22)">
        <rect x="-20" y="-10" width="40" height="20" rx="10" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fill="#FFA602" fontSize="8" fontWeight="bold" opacity="0.5">Adjust</text>
      </g>

      {/* Path 3 — Didn't → New (blue, right) */}
      <path d="M106 82 Q140 60 160 35" stroke="#1368CE" strokeWidth="2" opacity="0.3" fill="none" strokeDasharray="5 3">
        <animate attributeName="stroke-dashoffset" values="0;16" dur="2.8s" repeatCount="indefinite" />
      </path>
      <g transform="translate(165, 28)">
        <rect x="-22" y="-10" width="44" height="20" rx="10" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="bold" opacity="0.5">New Try</text>
      </g>

      {/* "Your results" label at bottom */}
      <text x="100" y="155" textAnchor="middle" fill="#1368CE" fontSize="8" opacity="0.3">Your Results</text>
    </svg>
  );
}

/** m6-quick-check-3 — A magnifying glass over a results chart */
export function QuickCheck3Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="25" cy="25" r="1.5" fill="#00C9B7" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="135" r="2" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Bar chart */}
      <rect x="50" y="85" width="18" height="40" rx="3" fill="#E21B3C" opacity="0.15" stroke="#E21B3C" strokeWidth="1" />
      <rect x="78" y="65" width="18" height="60" rx="3" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="1" />
      <rect x="106" y="50" width="18" height="75" rx="3" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="1" />
      <line x1="40" y1="125" x2="135" y2="125" stroke="#1368CE" strokeWidth="1" opacity="0.2" />

      {/* Magnifying glass */}
      <g>
        <circle cx="130" cy="55" r="22" fill="none" stroke="#1368CE" strokeWidth="2.5" opacity="0.35">
          <animate attributeName="r" values="21;24;21" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="55" r="18" fill="#1368CE" opacity="0.03" />
        <line x1="145" y1="72" x2="162" y2="92" stroke="#1368CE" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
        <animateTransform attributeName="transform" type="translate" values="0,0;-3,-2;0,0" dur="4s" repeatCount="indefinite" />
      </g>

      {/* Question marks */}
      <text x="60" y="145" fill="#FFA602" fontSize="12" fontWeight="bold" opacity="0.15">?</text>
      <text x="90" y="145" fill="#26890C" fontSize="12" fontWeight="bold" opacity="0.15">?</text>
      <text x="115" y="145" fill="#1368CE" fontSize="12" fontWeight="bold" opacity="0.15">?</text>
    </svg>
  );
}

/** m6-key-takeaway-3 — A compass pointing to "next step",
 *  representing evaluation guiding your direction */
export function KeyTakeaway3Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="20" cy="20" r="2" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="1.5" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Compass ring */}
      <circle cx="100" cy="80" r="45" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.2" />
      <circle cx="100" cy="80" r="48" fill="none" stroke="#1368CE" strokeWidth="0.5" opacity="0.1" />
      <circle cx="100" cy="80" r="42" fill="#1368CE" opacity="0.03" />

      {/* Cardinal directions */}
      <text x="100" y="42" textAnchor="middle" fill="#26890C" fontSize="10" fontWeight="bold" opacity="0.4">N</text>
      <text x="100" y="130" textAnchor="middle" fill="#1368CE" fontSize="9" opacity="0.25">S</text>
      <text x="50" y="84" textAnchor="middle" fill="#1368CE" fontSize="9" opacity="0.25">W</text>
      <text x="150" y="84" textAnchor="middle" fill="#1368CE" fontSize="9" opacity="0.25">E</text>

      {/* Compass needle */}
      <g>
        <path d="M100 50 L96 80 L104 80 Z" fill="#E21B3C" opacity="0.35" />
        <path d="M100 110 L96 80 L104 80 Z" fill="#1368CE" opacity="0.15" />
        <circle cx="100" cy="80" r="4" fill="#FFA602" opacity="0.4" stroke="#FFA602" strokeWidth="1" />
        <animateTransform attributeName="transform" type="rotate" values="-5 100 80;5 100 80;-5 100 80" dur="4s" repeatCount="indefinite" />
      </g>

      {/* "NEXT" label at north */}
      <text x="100" y="34" textAnchor="middle" fill="#26890C" fontSize="7" fontWeight="bold" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
        NEXT
      </text>
    </svg>
  );
}


/* ═══════════════════════════════════════════════════
   LESSON 4 — What's Next (You're Officially AI-Literate)
   ═══════════════════════════════════════════════════ */

/** m6-what-youve-learned — A brain with 6 numbered modules orbiting it,
 *  representing the full curriculum completed */
export function WhatYouveLearnedIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="15" cy="15" r="2" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="145" r="1.5" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Central brain glow */}
      <circle cx="100" cy="80" r="30" fill="#1368CE" opacity="0.05">
        <animate attributeName="r" values="28;33;28" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Simplified brain */}
      <path d="M88 58 Q72 48 76 65 Q62 62 66 78 Q56 82 70 90 Q65 98 82 98 L100 98 Q118 98 118 90 Q132 85 126 78 Q136 70 126 65 Q134 52 118 58 Q114 45 100 50 Q88 44 88 58" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />

      {/* 6 module circles orbiting */}
      {[
        { n: 1, cx: 55, cy: 35, color: "#E21B3C" },
        { n: 2, cx: 145, cy: 35, color: "#1368CE" },
        { n: 3, cx: 160, cy: 80, color: "#FFA602" },
        { n: 4, cx: 145, cy: 125, color: "#26890C" },
        { n: 5, cx: 55, cy: 125, color: "#00C9B7" },
        { n: 6, cx: 40, cy: 80, color: "#FF3EA5" },
      ].map(({ n, cx, cy, color }) => (
        <g key={n}>
          <circle cx={cx} cy={cy} r="12" fill={color} opacity="0.1" stroke={color} strokeWidth="1.5">
            <animate attributeName="r" values="11;13;11" dur={2 + n * 0.3 + "s"} repeatCount="indefinite" />
          </circle>
          <text x={cx} y={cy + 4} textAnchor="middle" fill={color} fontSize="10" fontWeight="bold" opacity="0.5">{n}</text>
        </g>
      ))}

      {/* Connecting orbit lines */}
      <circle cx="100" cy="80" r="55" fill="none" stroke="#1368CE" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;16" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m6-three-paths — Three diverging paths/roads, each with a different
 *  icon: casual user, power user, advocate */
export function ThreePathsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="15" cy="25" r="1.5" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="135" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Starting point */}
      <circle cx="100" cy="140" r="5" fill="#1368CE" opacity="0.2" stroke="#1368CE" strokeWidth="1.5" />
      <text x="100" y="155" textAnchor="middle" fill="#1368CE" fontSize="7" opacity="0.3">YOU</text>

      {/* Path 1 — Casual (left, blue) */}
      <path d="M95 135 Q60 100 35 55" stroke="#1368CE" strokeWidth="2" opacity="0.25" fill="none" strokeDasharray="5 3">
        <animate attributeName="stroke-dashoffset" values="0;16" dur="3s" repeatCount="indefinite" />
      </path>
      <g transform="translate(30, 40)">
        <circle r="16" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="1.5" />
        {/* Coffee cup icon — casual */}
        <rect x="-6" y="-5" width="12" height="10" rx="2" stroke="#1368CE" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M6,-2 Q10,-2 10,2 Q10,5 6,5" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M-3,-8 Q-3,-12 0,-12" stroke="#1368CE" strokeWidth="0.8" fill="none" opacity="0.2" />
        <path d="M1,-8 Q1,-13 4,-13" stroke="#1368CE" strokeWidth="0.8" fill="none" opacity="0.2" />
        <text x="0" y="23" textAnchor="middle" fill="#1368CE" fontSize="7" opacity="0.4">Casual</text>
      </g>

      {/* Path 2 — Power (center, gold) */}
      <path d="M100 135 Q100 90 100 50" stroke="#FFA602" strokeWidth="2" opacity="0.25" fill="none" strokeDasharray="5 3">
        <animate attributeName="stroke-dashoffset" values="0;16" dur="3.3s" repeatCount="indefinite" />
      </path>
      <g transform="translate(100, 32)">
        <circle r="16" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="1.5" />
        {/* Lightning bolt — power user */}
        <path d="M2,-10 L-4,-1 L1,-1 L-2,10 L6,0 L1,0 Z" fill="#FFA602" opacity="0.4" />
        <text x="0" y="23" textAnchor="middle" fill="#FFA602" fontSize="7" opacity="0.4">Power</text>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
      </g>

      {/* Path 3 — Advocate (right, green) */}
      <path d="M105 135 Q140 100 165 55" stroke="#26890C" strokeWidth="2" opacity="0.25" fill="none" strokeDasharray="5 3">
        <animate attributeName="stroke-dashoffset" values="0;16" dur="2.8s" repeatCount="indefinite" />
      </path>
      <g transform="translate(170, 40)">
        <circle r="16" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="1.5" />
        {/* Megaphone icon — advocate */}
        <path d="M-6,0 L-2,-6 L6,-4 L6,4 L-2,6 Z" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" />
        <rect x="-8" y="-3" width="4" height="6" rx="1" fill="#26890C" opacity="0.3" />
        <text x="0" y="23" textAnchor="middle" fill="#26890C" fontSize="7" opacity="0.4">Advocate</text>
      </g>
    </svg>
  );
}

/** m6-staying-current — A newspaper/feed being filtered through a funnel,
 *  "10 min/week" approach to staying current */
export function StayingCurrentIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="20" cy="15" r="1.5" fill="#00C9B7" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="145" r="2" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* News items flooding in from top */}
      <rect x="30" y="15" width="35" height="8" rx="3" fill="#E21B3C" opacity="0.12">
        <animate attributeName="y" values="10;20;10" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="70" y="10" width="30" height="8" rx="3" fill="#FFA602" opacity="0.1">
        <animate attributeName="y" values="8;18;8" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="105" y="18" width="28" height="8" rx="3" fill="#1368CE" opacity="0.12">
        <animate attributeName="y" values="15;22;15" dur="3.5s" repeatCount="indefinite" />
      </rect>
      <rect x="138" y="12" width="32" height="8" rx="3" fill="#FF3EA5" opacity="0.1">
        <animate attributeName="y" values="10;17;10" dur="2.8s" repeatCount="indefinite" />
      </rect>

      {/* Funnel shape */}
      <path d="M35 45 L165 45 L120 95 L80 95 Z" fill="#1368CE" opacity="0.05" stroke="#1368CE" strokeWidth="1.5" />

      {/* Filter lines inside funnel */}
      <line x1="55" y1="60" x2="145" y2="60" stroke="#1368CE" strokeWidth="0.5" opacity="0.15" />
      <line x1="65" y1="72" x2="135" y2="72" stroke="#1368CE" strokeWidth="0.5" opacity="0.15" />
      <line x1="75" y1="84" x2="125" y2="84" stroke="#1368CE" strokeWidth="0.5" opacity="0.15" />

      {/* Filtered output — one clean item */}
      <rect x="82" y="105" width="36" height="12" rx="4" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="1.5">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <path d="M88 111 L90 113 L95 108" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* "10 min" label */}
      <text x="100" y="138" textAnchor="middle" fill="#FFA602" fontSize="10" fontWeight="bold" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        10 min/wk
      </text>
    </svg>
  );
}

/** m6-one-thing-remember — A glowing diamond/gem with "TOOL ≠ MAGIC" etched,
 *  the core lesson crystallized */
export function OneThingRememberIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="25" cy="25" r="2" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="25" r="1.5" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="140" r="1.5" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="135" r="2" fill="#1368CE" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Pulsing glow */}
      <circle cx="100" cy="75" r="40" fill="#FFA602" opacity="0.03">
        <animate attributeName="r" values="38;45;38" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.02;0.06;0.02" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Diamond/gem shape */}
      <path d="M100 20 L60 55 L100 120 L140 55 Z" fill="#FFA602" opacity="0.08" />
      <path d="M100 20 L60 55 L100 120 L140 55 Z" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.35">
        <animate attributeName="opacity" values="0.25;0.45;0.25" dur="3s" repeatCount="indefinite" />
      </path>
      {/* Diamond facet lines */}
      <line x1="60" y1="55" x2="140" y2="55" stroke="#FFA602" strokeWidth="1" opacity="0.2" />
      <line x1="80" y1="20" x2="75" y2="55" stroke="#FFA602" strokeWidth="0.5" opacity="0.15" />
      <line x1="120" y1="20" x2="125" y2="55" stroke="#FFA602" strokeWidth="0.5" opacity="0.15" />

      {/* Text inside */}
      <text x="100" y="68" textAnchor="middle" fill="#FFA602" fontSize="9" fontWeight="bold" opacity="0.5">TOOL</text>
      <text x="100" y="80" textAnchor="middle" fill="#E21B3C" fontSize="11" fontWeight="bold" opacity="0.4">≠</text>
      <text x="100" y="92" textAnchor="middle" fill="#FF3EA5" fontSize="9" fontWeight="bold" opacity="0.5">MAGIC</text>

      {/* Light rays */}
      <line x1="100" y1="15" x2="100" y2="5" stroke="#FFA602" strokeWidth="1" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="55" y1="50" x2="45" y2="45" stroke="#FFA602" strokeWidth="1" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.3s" repeatCount="indefinite" />
      </line>
      <line x1="145" y1="50" x2="155" y2="45" stroke="#FFA602" strokeWidth="1" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.6s" repeatCount="indefinite" />
      </line>

      {/* Floating label */}
      <text x="100" y="142" textAnchor="middle" fill="#1368CE" fontSize="8" opacity="0.3">The one thing</text>
    </svg>
  );
}

/** m6-help-someone — Two people figures with a knowledge transfer arrow,
 *  "share what you know" */
export function HelpSomeoneIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Sparkles */}
      <circle cx="20" cy="20" r="1.5" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Person 1 — the learner (you), left side */}
      <g transform="translate(60, 75)">
        <circle cy="-20" r="12" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="1.5" />
        <path d="M-15,5 Q-15,-5 0,-8 Q15,-5 15,5 L15,25 L-15,25 Z" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="1.5" />
        {/* Lightbulb above head — they get it */}
        <g transform="translate(0, -40)">
          <circle r="6" fill="#FFA602" opacity="0.2">
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" />
          </circle>
          <path d="M-3,-4 Q0,-8 3,-4 L2,0 L-2,0 Z" fill="#FFA602" opacity="0.4" />
          <line x1="-1" y1="1" x2="1" y2="1" stroke="#FFA602" strokeWidth="0.8" opacity="0.3" />
        </g>
      </g>

      {/* Knowledge transfer arrow */}
      <path d="M85 70 Q100 60 115 70" stroke="#1368CE" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;14" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M112 66 L118 70 L112 74" fill="#1368CE" opacity="0.3" />

      {/* Small knowledge particles along arrow */}
      <circle cx="95" cy="64" r="2" fill="#FFA602" opacity="0.3">
        <animate attributeName="cx" values="90;110;90" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Person 2 — the one you help, right side */}
      <g transform="translate(140, 75)">
        <circle cy="-20" r="12" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="1.5" />
        <path d="M-15,5 Q-15,-5 0,-8 Q15,-5 15,5 L15,25 L-15,25 Z" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="1.5" />
        {/* Question mark above — they're learning */}
        <text x="0" y="-38" textAnchor="middle" fill="#1368CE" fontSize="14" fontWeight="bold" opacity="0.25">
          <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
          ?
        </text>
      </g>

      {/* Sharing heart */}
      <g transform="translate(100, 120)">
        <path d="M0,-4 Q-6,-10 -8,-4 Q-10,2 0,8 Q10,2 8,-4 Q6,-10 0,-4" fill="#E21B3C" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.5s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

/** m6-graduation — A graduation cap with confetti and a diploma,
 *  celebration of completing the course */
export function GraduationIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Confetti particles */}
      <rect x="30" y="20" width="4" height="8" rx="1" fill="#E21B3C" opacity="0.3" transform="rotate(20 32 24)">
        <animate attributeName="y" values="15;25;15" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="60" y="15" width="3" height="7" rx="1" fill="#FFA602" opacity="0.25" transform="rotate(-15 61 18)">
        <animate attributeName="y" values="12;22;12" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="140" y="18" width="4" height="7" rx="1" fill="#26890C" opacity="0.3" transform="rotate(30 142 21)">
        <animate attributeName="y" values="14;24;14" dur="2.2s" repeatCount="indefinite" />
      </rect>
      <rect x="165" y="22" width="3" height="6" rx="1" fill="#1368CE" opacity="0.25" transform="rotate(-25 166 25)">
        <animate attributeName="y" values="18;28;18" dur="1.8s" repeatCount="indefinite" />
      </rect>
      <circle cx="50" cy="30" r="2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="cy" values="25;35;25" dur="2.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="28" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="cy" values="24;34;24" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="20" r="1.5" fill="#FFA602" opacity="0.3">
        <animate attributeName="cy" values="16;26;16" dur="2.1s" repeatCount="indefinite" />
      </circle>

      {/* Graduation cap */}
      <g transform="translate(100, 65)">
        {/* Cap top — diamond shape */}
        <path d="M0,-20 L-40,-5 L0,10 L40,-5 Z" fill="#1368CE" opacity="0.2" stroke="#1368CE" strokeWidth="1.5" />
        {/* Cap brim */}
        <ellipse cx="0" cy="10" rx="30" ry="8" fill="#1368CE" opacity="0.08" />
        {/* Tassel */}
        <line x1="0" y1="-5" x2="30" y2="-5" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
        <circle cx="30" cy="-5" r="3" fill="#FFA602" opacity="0.4" />
        <line x1="30" y1="-2" x2="30" y2="10" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
        <line x1="28" y1="10" x2="32" y2="10" stroke="#FFA602" strokeWidth="1" opacity="0.3" />

        <animateTransform attributeName="transform" type="translate" values="100,67;100,62;100,67" dur="3s" repeatCount="indefinite" />
      </g>

      {/* Diploma scroll */}
      <g transform="translate(100, 120)">
        <rect x="-20" y="-8" width="40" height="16" rx="3" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="1.5" />
        <circle cx="-20" cy="0" r="4" fill="#FFA602" opacity="0.15" />
        <circle cx="20" cy="0" r="4" fill="#FFA602" opacity="0.15" />
        {/* Ribbon */}
        <path d="M-4,-4 L0,0 L4,-4" stroke="#E21B3C" strokeWidth="1.5" fill="none" opacity="0.3" />
      </g>

      {/* Stars */}
      <g transform="translate(40, 65)">
        <path d="M0,-5 L1.2,-1.8 L4.5,-1.8 L2,0.5 L3,4 L0,2 L-3,4 L-2,0.5 L-4.5,-1.8 L-1.2,-1.8 Z" fill="#FFA602" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        </path>
      </g>
      <g transform="translate(160, 70)">
        <path d="M0,-5 L1.2,-1.8 L4.5,-1.8 L2,0.5 L3,4 L0,2 L-3,4 L-2,0.5 L-4.5,-1.8 L-1.2,-1.8 Z" fill="#26890C" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

/** m6-key-takeaway-4 — A glowing horizon/sunrise with a person silhouette
 *  walking forward, "the journey continues" */
export function KeyTakeaway4Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Stars/sparkles in sky */}
      <circle cx="30" cy="20" r="1.5" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="15" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="18" r="1.5" fill="#FF3EA5" opacity="0.35">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="22" r="1" fill="#1368CE" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Sunrise glow */}
      <circle cx="100" cy="115" r="60" fill="#FFA602" opacity="0.04">
        <animate attributeName="r" values="55;65;55" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="115" r="40" fill="#FFA602" opacity="0.06">
        <animate attributeName="r" values="38;44;38" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Sun half-circle rising */}
      <path d="M55 115 A45 45 0 0 1 145 115" fill="#FFA602" opacity="0.12">
        <animate attributeName="opacity" values="0.08;0.18;0.08" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M55 115 A45 45 0 0 1 145 115" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.3" />

      {/* Sun rays */}
      <line x1="100" y1="65" x2="100" y2="55" stroke="#FFA602" strokeWidth="1.5" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="78" x2="62" y2="72" stroke="#FFA602" strokeWidth="1.5" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.3s" repeatCount="indefinite" />
      </line>
      <line x1="130" y1="78" x2="138" y2="72" stroke="#FFA602" strokeWidth="1.5" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.6s" repeatCount="indefinite" />
      </line>

      {/* Horizon line */}
      <line x1="10" y1="115" x2="190" y2="115" stroke="#1368CE" strokeWidth="1.5" opacity="0.15" />

      {/* Person silhouette walking forward */}
      <g transform="translate(100, 100)">
        {/* Head */}
        <circle cy="-22" r="5" fill="#1368CE" opacity="0.25" />
        {/* Body */}
        <line x1="0" y1="-17" x2="0" y2="-3" stroke="#1368CE" strokeWidth="2" opacity="0.25" />
        {/* Arms */}
        <line x1="0" y1="-12" x2="-7" y2="-6" stroke="#1368CE" strokeWidth="1.5" opacity="0.2" />
        <line x1="0" y1="-12" x2="7" y2="-6" stroke="#1368CE" strokeWidth="1.5" opacity="0.2" />
        {/* Legs */}
        <line x1="0" y1="-3" x2="-5" y2="8" stroke="#1368CE" strokeWidth="1.5" opacity="0.2" />
        <line x1="0" y1="-3" x2="5" y2="8" stroke="#1368CE" strokeWidth="1.5" opacity="0.2" />
        <animateTransform attributeName="transform" type="translate" values="98,100;102,100;98,100" dur="4s" repeatCount="indefinite" />
      </g>

      {/* Path ahead — footsteps */}
      <circle cx="115" cy="120" r="1" fill="#1368CE" opacity="0.15" />
      <circle cx="128" cy="122" r="1" fill="#1368CE" opacity="0.12" />
      <circle cx="142" cy="124" r="1" fill="#1368CE" opacity="0.09" />
      <circle cx="158" cy="125" r="1" fill="#1368CE" opacity="0.06" />

      {/* "Keep going" text */}
      <text x="100" y="148" textAnchor="middle" fill="#FFA602" fontSize="9" fontWeight="bold" opacity="0.35">
        <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite" />
        Keep going
      </text>
    </svg>
  );
}

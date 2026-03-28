/**
 * Module 5 — Evaluating AI Tools and Vendors
 * Animated SVG illustrations for every section of every lesson.
 *
 * Naming convention: m5-<kebab-section-name>
 * Palette: #E21B3C (red), #1368CE (blue), #FFA602 (gold), #26890C (green), #00C9B7 (cyan), #FF3EA5 (magenta)
 */

// ─── INTRO ILLUSTRATIONS ───────────────────────────────────────────────

/**
 * m5-intro-need — Do You Actually Need AI? intro
 * A decision scale: heavy AI price tag on one side, simple tool on the other.
 */
export function M5IntroNeed({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Scale beam */}
      <line x1="40" y1="70" x2="160" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" values="-3 100 70;3 100 70;-3 100 70" dur="4s" repeatCount="indefinite" />
      </line>
      {/* Fulcrum */}
      <polygon points="100,70 92,95 108,95" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Left pan — expensive AI */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-3 100 70;3 100 70;-3 100 70" dur="4s" repeatCount="indefinite" />
        <line x1="40" y1="70" x2="30" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <line x1="40" y1="70" x2="50" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <rect x="20" y="85" width="40" height="25" rx="4" fill="#E21B3C" opacity="0.15" stroke="#E21B3C" strokeWidth="1" strokeOpacity="0.3" />
        <text x="40" y="96" textAnchor="middle" fill="#E21B3C" fontSize="5" fontWeight="bold" opacity="0.5">$500/mo</text>
        <text x="40" y="104" textAnchor="middle" fill="#E21B3C" fontSize="4" opacity="0.3">AI TOOL</text>
      </g>

      {/* Right pan — simple automation */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-3 100 70;3 100 70;-3 100 70" dur="4s" repeatCount="indefinite" />
        <line x1="160" y1="70" x2="150" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <line x1="160" y1="70" x2="170" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <rect x="140" y="85" width="40" height="25" rx="4" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="1" strokeOpacity="0.3" />
        <text x="160" y="96" textAnchor="middle" fill="#26890C" fontSize="5" fontWeight="bold" opacity="0.5">$15/mo</text>
        <text x="160" y="104" textAnchor="middle" fill="#26890C" fontSize="4" opacity="0.3">SIMPLE</text>
      </g>

      {/* Question mark above */}
      <text x="100" y="40" textAnchor="middle" fill="#FFA602" fontSize="28" fontWeight="bold" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        ?
      </text>

      {/* Sparkles */}
      <circle cx="20" cy="20" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="25" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="145" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m5-intro-redflags — Red Flags in Vendor Pitches intro
 * Red flags literally popping up from a sales presentation screen.
 */
export function M5IntroRedflags({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Presentation screen */}
      <rect x="40" y="30" width="120" height="80" rx="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="45" y="35" width="110" height="70" rx="3" fill="#0d0d1a" />

      {/* Presentation content — bars chart */}
      <rect x="55" y="75" width="12" height="25" rx="2" fill="#26890C" opacity="0.2" />
      <rect x="72" y="65" width="12" height="35" rx="2" fill="#1368CE" opacity="0.2" />
      <rect x="89" y="55" width="12" height="45" rx="2" fill="#FFA602" opacity="0.2" />
      <rect x="106" y="42" width="12" height="58" rx="2" fill="#E21B3C" opacity="0.2" />
      <text x="100" y="45" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5">10,000% ROI</text>

      {/* Red flags popping up */}
      <g transform="translate(50, 42)">
        <line x1="0" y1="0" x2="0" y2="-18" stroke="#E21B3C" strokeWidth="1.2" opacity="0.5" />
        <polygon points="0,-18 14,-13 0,-8" fill="#E21B3C" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        </polygon>
      </g>
      <g transform="translate(100, 30)">
        <line x1="0" y1="0" x2="0" y2="-18" stroke="#E21B3C" strokeWidth="1.2" opacity="0.5" />
        <polygon points="0,-18 14,-13 0,-8" fill="#E21B3C" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </polygon>
      </g>
      <g transform="translate(148, 38)">
        <line x1="0" y1="0" x2="0" y2="-18" stroke="#E21B3C" strokeWidth="1.2" opacity="0.5" />
        <polygon points="0,-18 14,-13 0,-8" fill="#E21B3C" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Stand */}
      <line x1="100" y1="110" x2="100" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <line x1="80" y1="130" x2="120" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />

      {/* Sparkles */}
      <circle cx="20" cy="50" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m5-intro-buying — 12 Questions Before Buying intro
 * A checklist card with numbered items and a magnifying glass.
 */
export function M5IntroBuying({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Checklist card */}
      <rect x="50" y="15" width="100" height="130" rx="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* Title bar */}
      <rect x="55" y="20" width="90" height="16" rx="3" fill="#1368CE" opacity="0.1" />
      <text x="100" y="31" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="bold" opacity="0.5">12 QUESTIONS</text>

      {/* Checklist items */}
      {[44, 55, 66, 77, 88, 99, 110, 121].map((y, i) => (
        <g key={`item-${i}`}>
          <rect x="60" y={y} width="8" height="8" rx="2" fill="none" stroke={i < 4 ? "#26890C" : "rgba(255,255,255,0.15)"} strokeWidth="0.8" opacity={i < 4 ? 0.4 : 0.3} />
          {i < 4 && (
            <path d={`M${62} ${y + 5} L${64} ${y + 7} L${67} ${y + 2}`} stroke="#26890C" strokeWidth="1" fill="none" opacity="0.5">
              <animate attributeName="opacity" values="0;0.5;0.5" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </path>
          )}
          <rect x="73" y={y + 2} width={35 - (i % 3) * 5} height="3" rx="1" fill={i < 4 ? "#26890C" : "rgba(255,255,255,0.08)"} opacity={i < 4 ? 0.2 : 0.15} />
        </g>
      ))}

      {/* Magnifying glass overlay */}
      <g transform="translate(155, 50)">
        <circle cx="0" cy="0" r="18" fill="#FFA602" opacity="0.05" />
        <circle cx="0" cy="0" r="18" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <line x1="12" y1="12" x2="22" y2="22" stroke="#FFA602" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      </g>

      {/* Sparkles */}
      <circle cx="20" cy="25" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="145" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="140" r="2" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m5-intro-pricing — Pricing Models & Build vs Buy intro
 * Price tags, dollar signs, and a fork-in-road between BUILD and BUY.
 */
export function M5IntroPricing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Dollar signs floating */}
      <text x="30" y="40" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.15">
        <animate attributeName="opacity" values="0.08;0.2;0.08" dur="3s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3s" repeatCount="indefinite" />
        $
      </text>
      <text x="165" y="35" fill="#FFA602" fontSize="10" fontWeight="bold" opacity="0.12">
        <animate attributeName="opacity" values="0.06;0.18;0.06" dur="3s" begin="0.8s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" begin="0.8s" repeatCount="indefinite" />
        $
      </text>
      <text x="85" y="25" fill="#FFA602" fontSize="8" fontWeight="bold" opacity="0.1">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="3s" begin="1.5s" repeatCount="indefinite" />
        $
      </text>

      {/* Fork in road */}
      <path d="M100,45 L100,75" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
      <path d="M100,75 Q80,90 55,110" stroke="#1368CE" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
      <path d="M100,75 Q120,90 145,110" stroke="#E21B3C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />

      {/* BUY sign — left */}
      <rect x="30" y="110" width="50" height="24" rx="6" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="1" strokeOpacity="0.3" />
      <text x="55" y="125" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="bold" opacity="0.5">BUY</text>

      {/* BUILD sign — right */}
      <rect x="120" y="110" width="50" height="24" rx="6" fill="#E21B3C" opacity="0.1" stroke="#E21B3C" strokeWidth="1" strokeOpacity="0.3" />
      <text x="145" y="125" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.5">BUILD</text>

      {/* Price tag at fork */}
      <g transform="translate(100, 60)">
        <rect x="-14" y="-8" width="28" height="16" rx="3" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="-10" cy="0" r="2" fill="none" stroke="#FFA602" strokeWidth="0.8" opacity="0.3" />
        <text x="2" y="4" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.4">$?</text>
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="70" r="2" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="75" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   LESSON 1 — Do You Actually Need AI?
   ───────────────────────────────────────────── */

/** m5-core-distinction — Two contrasting gears: one mechanical (automation), one neural (AI) */
export function M5CoreDistinctionIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <defs>
        <filter id="m5cd-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="m5cd-glow-gold" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Left: Automation gear */}
      <g transform="translate(55, 80)">
        <circle r="28" fill="none" stroke="#FFA602" strokeWidth="2.5" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <animateTransform attributeName="transform" type="rotate" from="0 55 80" to="360 55 80" dur="12s" repeatCount="indefinite" additive="sum" />
        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="-4"
            y="-34"
            width="8"
            height="12"
            rx="2"
            fill="#FFA602"
            opacity="0.5"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle r="12" fill="#FFA602" opacity="0.15" />
        <circle r="6" fill="#FFA602" opacity="0.3" />
        {/* Label */}
        <text x="0" y="46" textAnchor="middle" fill="#FFA602" fontSize="8" fontWeight="600" opacity="0.7">AUTO</text>
      </g>

      {/* Right: AI brain */}
      <g transform="translate(145, 80)">
        {/* Pulsing outer ring */}
        <circle r="30" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.2">
          <animate attributeName="r" values="28;32;28" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
        {/* Neural network nodes */}
        {[
          { cx: 0, cy: -16 },
          { cx: -14, cy: -6 },
          { cx: 14, cy: -6 },
          { cx: -10, cy: 10 },
          { cx: 10, cy: 10 },
          { cx: 0, cy: 20 },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r="4" fill="#1368CE" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {/* Neural connections */}
        {[
          [0, -16, -14, -6], [0, -16, 14, -6],
          [-14, -6, -10, 10], [14, -6, 10, 10],
          [-10, 10, 0, 20], [10, 10, 0, 20],
          [-14, -6, 10, 10], [14, -6, -10, 10],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1368CE" strokeWidth="1" opacity="0.25">
            <animate attributeName="opacity" values="0.15;0.4;0.15" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
          </line>
        ))}
        {/* Label */}
        <text x="0" y="46" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="600" opacity="0.7">AI</text>
      </g>

      {/* Divider with "vs" */}
      <line x1="100" y1="50" x2="100" y2="110" stroke="rgba(240,239,235,0.12)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="100" y="44" textAnchor="middle" fill="rgba(240,239,235,0.3)" fontSize="9" fontWeight="600">vs</text>

      {/* Floating sparkles */}
      <circle cx="20" cy="30" r="1.5" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="25" r="1.2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
      </circle>
      <circle cx="100" cy="135" r="1" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" begin="1.2s" />
      </circle>
    </svg>
  );
}

/** m5-decision-framework — Flowchart diamond with branching paths */
export function M5DecisionFrameworkIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <defs>
        <filter id="m5df-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Decision diamond */}
      <g transform="translate(100, 50)">
        <rect x="-22" y="-22" width="44" height="44" rx="6" fill="#1368CE" opacity="0.15" transform="rotate(45)">
          <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="-22" y="-22" width="44" height="44" rx="6" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.5" transform="rotate(45)" />
        <text x="0" y="4" textAnchor="middle" fill="#1368CE" fontSize="10" fontWeight="700">?</text>
      </g>

      {/* Left branch — Automation */}
      <line x1="70" y1="50" x2="35" y2="110" stroke="#FFA602" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </line>
      <rect x="15" y="104" width="42" height="22" rx="6" fill="#FFA602" opacity="0.12" />
      <rect x="15" y="104" width="42" height="22" rx="6" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.4" />
      <text x="36" y="119" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="600" opacity="0.7">AUTO</text>

      {/* Right branch — AI */}
      <line x1="130" y1="50" x2="165" y2="110" stroke="#00C9B7" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
      </line>
      <rect x="143" y="104" width="42" height="22" rx="6" fill="#00C9B7" opacity="0.12" />
      <rect x="143" y="104" width="42" height="22" rx="6" fill="none" stroke="#00C9B7" strokeWidth="1" opacity="0.4" />
      <text x="164" y="119" textAnchor="middle" fill="#00C9B7" fontSize="7" fontWeight="600" opacity="0.7">AI</text>

      {/* Step indicators along paths */}
      <circle cx="52" cy="78" r="8" fill="#FFA602" opacity="0.1" />
      <text x="52" y="81" textAnchor="middle" fill="#FFA602" fontSize="7" opacity="0.5">1</text>
      <circle cx="148" cy="78" r="8" fill="#00C9B7" opacity="0.1" />
      <text x="148" y="81" textAnchor="middle" fill="#00C9B7" fontSize="7" opacity="0.5">2</text>

      {/* Incoming arrow from top */}
      <line x1="100" y1="12" x2="100" y2="28" stroke="rgba(240,239,235,0.2)" strokeWidth="1.5" />
      <polygon points="95,28 105,28 100,34" fill="rgba(240,239,235,0.2)" />

      {/* Sparkles */}
      <circle cx="24" cy="22" r="1.2" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="176" cy="140" r="1" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  );
}

/** m5-side-by-side — Split comparison table with checkmarks and X marks */
export function M5SideBySideIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Left panel — Automation tasks */}
      <rect x="10" y="20" width="82" height="120" rx="10" fill="#FFA602" opacity="0.06" />
      <rect x="10" y="20" width="82" height="120" rx="10" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.2" />
      <text x="51" y="38" textAnchor="middle" fill="#FFA602" fontSize="8" fontWeight="700" opacity="0.7">AUTOMATION</text>

      {/* Left rows */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`l-${i}`} transform={`translate(20, ${52 + i * 22})`}>
          <rect x="0" y="0" width="60" height="14" rx="4" fill="#FFA602" opacity="0.08">
            <animate attributeName="opacity" values="0.05;0.12;0.05" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          </rect>
          <rect x="4" y="4" width={24 + i * 4} height="6" rx="3" fill="#FFA602" opacity="0.2" />
          <circle cx="54" cy="7" r="4" fill="#26890C" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          <path d="M52,7 L53.5,9 L56.5,5" stroke="#26890C" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
        </g>
      ))}

      {/* Right panel — AI tasks */}
      <rect x="108" y="20" width="82" height="120" rx="10" fill="#1368CE" opacity="0.06" />
      <rect x="108" y="20" width="82" height="120" rx="10" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.2" />
      <text x="149" y="38" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="700" opacity="0.7">AI</text>

      {/* Right rows */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`r-${i}`} transform={`translate(118, ${52 + i * 22})`}>
          <rect x="0" y="0" width="60" height="14" rx="4" fill="#1368CE" opacity="0.08">
            <animate attributeName="opacity" values="0.05;0.12;0.05" dur={`${2.8 + i * 0.3}s`} repeatCount="indefinite" />
          </rect>
          <rect x="4" y="4" width={28 + i * 3} height="6" rx="3" fill="#1368CE" opacity="0.2" />
          <circle cx="54" cy="7" r="4" fill="#00C9B7" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" begin="0.5s" />
          </circle>
          {/* Brain icon */}
          <circle cx="54" cy="7" r="2.5" fill="none" stroke="#00C9B7" strokeWidth="0.8" opacity="0.5" />
        </g>
      ))}

      {/* Center divider */}
      <line x1="100" y1="28" x2="100" y2="132" stroke="rgba(240,239,235,0.1)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Sparkles */}
      <circle cx="51" cy="148" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="149" cy="12" r="1" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" begin="0.7s" />
      </circle>
    </svg>
  );
}

/** m5-hybrid-reality — Three connected steps: automation → AI → automation */
export function M5HybridRealityIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Step 1 — Automation */}
      <g transform="translate(32, 80)">
        <rect x="-24" y="-20" width="48" height="40" rx="8" fill="#FFA602" opacity="0.1">
          <animate attributeName="opacity" values="0.08;0.15;0.08" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="-24" y="-20" width="48" height="40" rx="8" fill="none" stroke="#FFA602" strokeWidth="1.2" opacity="0.4" />
        {/* Gear icon */}
        <circle r="8" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#FFA602" opacity="0.3" />
        <text x="0" y="32" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="600" opacity="0.6">ROUTE</text>
      </g>

      {/* Arrow 1→2 */}
      <line x1="58" y1="80" x2="76" y2="80" stroke="rgba(240,239,235,0.2)" strokeWidth="1.5" />
      <polygon points="76,77 82,80 76,83" fill="rgba(240,239,235,0.25)">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Step 2 — AI */}
      <g transform="translate(100, 80)">
        <rect x="-24" y="-24" width="48" height="48" rx="10" fill="#1368CE" opacity="0.12">
          <animate attributeName="opacity" values="0.08;0.18;0.08" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="-24" y="-24" width="48" height="48" rx="10" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.5" />
        {/* Brain/neural icon */}
        <circle r="10" fill="none" stroke="#1368CE" strokeWidth="1.2" opacity="0.5">
          <animate attributeName="r" values="9;11;9" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Three dots inside representing neurons */}
        <circle cx="-4" cy="-3" r="2" fill="#1368CE" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="4" cy="-3" r="2" fill="#1368CE" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        <circle cx="0" cy="5" r="2" fill="#1368CE" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.8s" repeatCount="indefinite" begin="1.2s" />
        </circle>
        <text x="0" y="38" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="600" opacity="0.6">DRAFT</text>
      </g>

      {/* Arrow 2→3 */}
      <line x1="126" y1="80" x2="144" y2="80" stroke="rgba(240,239,235,0.2)" strokeWidth="1.5" />
      <polygon points="144,77 150,80 144,83" fill="rgba(240,239,235,0.25)">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </polygon>

      {/* Step 3 — Automation */}
      <g transform="translate(168, 80)">
        <rect x="-24" y="-20" width="48" height="40" rx="8" fill="#26890C" opacity="0.1">
          <animate attributeName="opacity" values="0.08;0.15;0.08" dur="3s" repeatCount="indefinite" begin="1s" />
        </rect>
        <rect x="-24" y="-20" width="48" height="40" rx="8" fill="none" stroke="#26890C" strokeWidth="1.2" opacity="0.4" />
        {/* Send/arrow icon */}
        <path d="M-6,-5 L6,0 L-6,5 Z" fill="#26890C" opacity="0.4">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="0" y="32" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="600" opacity="0.6">SEND</text>
      </g>

      {/* Labels at top */}
      <text x="32" y="42" textAnchor="middle" fill="#FFA602" fontSize="7" opacity="0.5">Step 1</text>
      <text x="100" y="38" textAnchor="middle" fill="#1368CE" fontSize="7" opacity="0.5">Step 2</text>
      <text x="168" y="42" textAnchor="middle" fill="#26890C" fontSize="7" opacity="0.5">Step 3</text>

      {/* Sparkles */}
      <circle cx="15" cy="25" r="1.2" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="1s" />
      </circle>
      <circle cx="100" cy="145" r="1.3" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
      </circle>
    </svg>
  );
}

/** m5-quick-check-1 — Clipboard with checkmarks animating in */
export function M5QuickCheck1Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Clipboard body */}
      <rect x="60" y="28" width="80" height="108" rx="10" fill="#1368CE" opacity="0.06" />
      <rect x="60" y="28" width="80" height="108" rx="10" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />

      {/* Clipboard clip */}
      <rect x="85" y="20" width="30" height="16" rx="4" fill="#1368CE" opacity="0.15" />
      <rect x="85" y="20" width="30" height="16" rx="4" fill="none" stroke="#1368CE" strokeWidth="1.2" opacity="0.4" />

      {/* Checklist items */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(74, ${56 + i * 28})`}>
          <rect x="0" y="0" width="14" height="14" rx="3" fill="none" stroke="#26890C" strokeWidth="1.2" opacity="0.4" />
          {/* Animated checkmark */}
          <path d="M3,7 L6,10 L11,4" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0">
            <animate attributeName="opacity" values="0;0;0.7;0.7" dur="3s" repeatCount="indefinite" begin={`${i * 0.8}s`} />
          </path>
          {/* Text line */}
          <rect x="20" y="4" width={36 + i * 4} height="6" rx="3" fill="rgba(240,239,235,0.1)" />
        </g>
      ))}

      {/* Floating question mark */}
      <g transform="translate(158, 40)">
        <circle r="12" fill="#FFA602" opacity="0.1">
          <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="5" textAnchor="middle" fill="#FFA602" fontSize="14" fontWeight="700" opacity="0.5">?</text>
      </g>

      {/* Sparkles */}
      <circle cx="32" cy="50" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="120" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </circle>
    </svg>
  );
}

/** m5-key-takeaway-1 — Lightbulb with radiating rings */
export function M5KeyTakeaway1Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Radiating rings */}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx="100" cy="72" r={30 + i * 16} fill="none" stroke="#FFA602" strokeWidth="0.8" opacity="0">
          <animate attributeName="opacity" values="0;0.25;0" dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} />
          <animate attributeName="r" values={`${28 + i * 16};${36 + i * 16};${28 + i * 16}`} dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} />
        </circle>
      ))}

      {/* Lightbulb */}
      <g transform="translate(100, 68)">
        {/* Bulb glow */}
        <circle r="22" fill="#FFA602" opacity="0.08">
          <animate attributeName="opacity" values="0.05;0.12;0.05" dur="2.5s" repeatCount="indefinite" />
        </circle>
        {/* Bulb shape */}
        <path d="M-12,-14 C-12,-26 12,-26 12,-14 C12,-4 8,4 8,10 L-8,10 C-8,4 -12,-4 -12,-14Z" fill="#FFA602" opacity="0.2" stroke="#FFA602" strokeWidth="1.2" />
        {/* Filament */}
        <path d="M-4,-8 C-2,-4 2,-12 4,-8" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
        {/* Base */}
        <rect x="-6" y="10" width="12" height="6" rx="1" fill="#FFA602" opacity="0.3" />
        <line x1="-6" y1="13" x2="6" y2="13" stroke="#FFA602" strokeWidth="0.8" opacity="0.4" />
      </g>

      {/* "Both" label */}
      <text x="100" y="115" textAnchor="middle" fill="rgba(240,239,235,0.3)" fontSize="8" fontWeight="600">USE BOTH</text>

      {/* Small icons: gear left, brain right */}
      <circle cx="56" cy="115" r="8" fill="#FFA602" opacity="0.1" />
      <text x="56" y="118" textAnchor="middle" fill="#FFA602" fontSize="8" opacity="0.4">⚙</text>
      <circle cx="144" cy="115" r="8" fill="#1368CE" opacity="0.1" />
      <text x="144" y="118" textAnchor="middle" fill="#1368CE" fontSize="8" opacity="0.4">◎</text>

      {/* Sparkles */}
      <circle cx="32" cy="30" r="1.2" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="168" cy="40" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" begin="0.8s" />
      </circle>
      <circle cx="100" cy="145" r="1.3" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.8s" repeatCount="indefinite" begin="1.2s" />
      </circle>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   LESSON 2 — Red Flags in AI Vendor Pitches
   ───────────────────────────────────────────── */

/** m5-ai-pitches-different — Stage/podium with a vendor presenting a shiny screen */
export function M5AIPitchesDifferentIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Stage/podium */}
      <rect x="30" y="110" width="140" height="20" rx="6" fill="#1368CE" opacity="0.08" />
      <rect x="30" y="110" width="140" height="20" rx="6" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.2" />

      {/* Presentation screen */}
      <rect x="55" y="25" width="90" height="60" rx="6" fill="#1368CE" opacity="0.06" />
      <rect x="55" y="25" width="90" height="60" rx="6" fill="none" stroke="#1368CE" strokeWidth="1.2" opacity="0.3" />

      {/* Sparkly "demo" content on screen */}
      <rect x="62" y="34" width="36" height="4" rx="2" fill="#26890C" opacity="0.3" />
      <rect x="62" y="42" width="44" height="4" rx="2" fill="#26890C" opacity="0.2" />
      <rect x="62" y="50" width="28" height="4" rx="2" fill="#26890C" opacity="0.2" />

      {/* Upward graph on screen */}
      <path d="M108,72 L116,60 L124,50 L132,36" stroke="#26890C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Star burst around graph */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={angle}
          cx={132 + Math.cos((angle * Math.PI) / 180) * 10}
          cy={36 + Math.sin((angle * Math.PI) / 180) * 10}
          r="1"
          fill="#FFA602"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin={`${angle / 360}s`} />
        </circle>
      ))}

      {/* Presenter figure */}
      <g transform="translate(100, 100)">
        <circle cy="-12" r="6" fill="rgba(240,239,235,0.1)" />
        <rect x="-8" y="-6" width="16" height="16" rx="4" fill="rgba(240,239,235,0.08)" />
      </g>

      {/* Gap indicator — ceiling vs reality */}
      <line x1="160" y1="36" x2="160" y2="85" stroke="#E21B3C" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
      <text x="170" y="48" fill="#26890C" fontSize="5.5" opacity="0.5">DEMO</text>
      <text x="170" y="80" fill="#E21B3C" fontSize="5.5" opacity="0.5">REAL</text>
      <path d="M160,36 L163,42 L157,42 Z" fill="#26890C" opacity="0.4" />
      <path d="M160,85 L163,79 L157,79 Z" fill="#E21B3C" opacity="0.4" />

      {/* Sparkles */}
      <circle cx="22" cy="40" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
    </svg>
  );
}

/** m5-red-flags — Eight warning flags on poles, pulsing red */
export function M5RedFlagsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Eight flags arranged in two rows */}
      {[
        { x: 25, y: 50 }, { x: 50, y: 45 }, { x: 75, y: 55 }, { x: 100, y: 42 },
        { x: 125, y: 52 }, { x: 150, y: 48 }, { x: 175, y: 54 }, { x: 62, y: 100 },
      ].map((pos, i) => (
        <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
          {/* Pole */}
          <line x1="0" y1="0" x2="0" y2={i < 7 ? 40 : 30} stroke="rgba(240,239,235,0.15)" strokeWidth="1.2" />
          {/* Flag */}
          <path d={`M0,0 L16,${4 + (i % 3)} L16,${14 + (i % 3)} L0,10 Z`} fill="#E21B3C" opacity="0.15">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </path>
          <path d={`M0,0 L16,${4 + (i % 3)} L16,${14 + (i % 3)} L0,10 Z`} fill="none" stroke="#E21B3C" strokeWidth="0.8" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </path>
          {/* Number */}
          <text x="8" y={8 + (i % 3)} textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="700" opacity="0.6">{i + 1}</text>
        </g>
      ))}

      {/* Warning triangle in center-bottom */}
      <g transform="translate(137, 108)">
        <path d="M0,-14 L14,10 L-14,10 Z" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="1" />
        <text x="0" y="6" textAnchor="middle" fill="#FFA602" fontSize="12" fontWeight="700" opacity="0.5">!</text>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </g>

      {/* Sparkles */}
      <circle cx="10" cy="130" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="25" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  );
}

/** m5-demo-playbook — A magic wand over a screen with smoke/mirrors */
export function M5DemoPlaybookIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Screen/monitor */}
      <rect x="50" y="40" width="100" height="68" rx="8" fill="#1368CE" opacity="0.06" />
      <rect x="50" y="40" width="100" height="68" rx="8" fill="none" stroke="#1368CE" strokeWidth="1.2" opacity="0.3" />
      {/* Screen stand */}
      <rect x="90" y="108" width="20" height="8" rx="2" fill="rgba(240,239,235,0.08)" />
      <rect x="80" y="116" width="40" height="4" rx="2" fill="rgba(240,239,235,0.06)" />

      {/* "Perfect" content on screen */}
      <rect x="58" y="48" width="40" height="5" rx="2.5" fill="#26890C" opacity="0.25" />
      <rect x="58" y="57" width="50" height="5" rx="2.5" fill="#26890C" opacity="0.18" />
      <rect x="58" y="66" width="34" height="5" rx="2.5" fill="#26890C" opacity="0.15" />

      {/* Upward chart */}
      <polyline points="110,96 118,86 126,78 134,60 140,50" stroke="#26890C" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      </polyline>

      {/* Magic wand */}
      <g transform="translate(38, 32) rotate(-30)">
        <rect x="-2" y="0" width="4" height="40" rx="2" fill="#FFA602" opacity="0.4" />
        <rect x="-3" y="0" width="6" height="8" rx="1" fill="#FFA602" opacity="0.6" />
        {/* Sparkle at tip */}
        <circle cx="0" cy="0" r="3" fill="#FFA602" opacity="0.3">
          <animate attributeName="r" values="2;5;2" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Magic sparkles around screen */}
      {[
        { cx: 52, cy: 38 }, { cx: 148, cy: 42 }, { cx: 56, cy: 106 },
        { cx: 144, cy: 100 }, { cx: 100, cy: 34 },
      ].map((s, i) => (
        <g key={i}>
          <line x1={s.cx - 3} y1={s.cy} x2={s.cx + 3} y2={s.cy} stroke="#FFA602" strokeWidth="0.8" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </line>
          <line x1={s.cx} y1={s.cy - 3} x2={s.cx} y2={s.cy + 3} stroke="#FFA602" strokeWidth="0.8" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </line>
        </g>
      ))}

      {/* Smoke/mirror effect — curved lines */}
      <path d="M160,60 C170,50 175,70 185,60" stroke="#E21B3C" strokeWidth="0.8" opacity="0.15" fill="none">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="4s" repeatCount="indefinite" />
      </path>
      <path d="M162,70 C172,62 177,78 187,68" stroke="#E21B3C" strokeWidth="0.8" opacity="0.12" fill="none">
        <animate attributeName="opacity" values="0.08;0.2;0.08" dur="4s" repeatCount="indefinite" begin="1s" />
      </path>

      {/* Sparkles */}
      <circle cx="18" cy="100" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="145" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.7s" />
      </circle>
    </svg>
  );
}

/** m5-sort-signals — Two buckets: green (good) and red (bad) with items dropping in */
export function M5SortSignalsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Red flag bucket */}
      <g transform="translate(55, 95)">
        <path d="M-28,0 L-22,35 L22,35 L28,0 Z" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="1" />
        <text x="0" y="22" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="600" opacity="0.5">RED</text>
        {/* Items in bucket */}
        <rect x="-16" y="24" width="14" height="4" rx="2" fill="#E21B3C" opacity="0.2" />
        <rect x="-4" y="27" width="16" height="4" rx="2" fill="#E21B3C" opacity="0.15" />
      </g>

      {/* Green flag bucket */}
      <g transform="translate(145, 95)">
        <path d="M-28,0 L-22,35 L22,35 L28,0 Z" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="1" />
        <text x="0" y="22" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="600" opacity="0.5">GREEN</text>
        {/* Items in bucket */}
        <rect x="-16" y="24" width="14" height="4" rx="2" fill="#26890C" opacity="0.2" />
        <rect x="-4" y="27" width="16" height="4" rx="2" fill="#26890C" opacity="0.15" />
      </g>

      {/* Falling items */}
      <g>
        {/* Item falling to red */}
        <rect x="48" y="30" width="20" height="8" rx="3" fill="#E21B3C" opacity="0.3">
          <animate attributeName="y" values="30;80;80" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.2;0" dur="3s" repeatCount="indefinite" />
        </rect>
      </g>
      <g>
        {/* Item falling to green */}
        <rect x="135" y="25" width="20" height="8" rx="3" fill="#26890C" opacity="0.3">
          <animate attributeName="y" values="25;80;80" dur="3s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="opacity" values="0.4;0.2;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </rect>
      </g>

      {/* Funnel at top */}
      <path d="M70,20 L100,10 L130,20 L120,40 L80,40 Z" fill="#1368CE" stroke="#1368CE" strokeWidth="0.8" opacity="0.15" />
      <text x="100" y="32" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="600" opacity="0.4">SORT</text>

      {/* Connecting lines from funnel to buckets */}
      <line x1="85" y1="40" x2="55" y2="90" stroke="rgba(240,239,235,0.1)" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="115" y1="40" x2="145" y2="90" stroke="rgba(240,239,235,0.1)" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* Sparkles */}
      <circle cx="18" cy="50" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="45" r="1" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.9s" />
      </circle>
    </svg>
  );
}

/** m5-quick-check-2 — Magnifying glass inspecting a document */
export function M5QuickCheck2Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Document */}
      <rect x="55" y="25" width="70" height="95" rx="8" fill="rgba(240,239,235,0.04)" stroke="rgba(240,239,235,0.12)" strokeWidth="1" />
      {/* Document lines */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="64" y={40 + i * 14} width={42 + (i % 3) * 6} height="4" rx="2" fill="rgba(240,239,235,0.08)" />
      ))}

      {/* Magnifying glass */}
      <g transform="translate(140, 80)">
        <circle r="22" fill="#E21B3C" opacity="0.05">
          <animate attributeName="r" values="20;24;20" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="18" fill="none" stroke="#E21B3C" strokeWidth="2" opacity="0.4" />
        {/* Handle */}
        <line x1="13" y1="13" x2="28" y2="28" stroke="#E21B3C" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        {/* Highlight inside lens */}
        <circle r="12" fill="#E21B3C" opacity="0.06">
          <animate attributeName="opacity" values="0.04;0.1;0.04" dur="2.5s" repeatCount="indefinite" />
        </circle>
        {/* Exclamation mark inside */}
        <text x="0" y="4" textAnchor="middle" fill="#E21B3C" fontSize="14" fontWeight="700" opacity="0.5">!</text>
      </g>

      {/* Highlight zone on document */}
      <rect x="62" y="62" width="56" height="20" rx="4" fill="#E21B3C" opacity="0.06">
        <animate attributeName="opacity" values="0.03;0.1;0.03" dur="2.5s" repeatCount="indefinite" />
      </rect>

      {/* Sparkles */}
      <circle cx="30" cy="40" r="1.2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="30" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.8s" />
      </circle>
      <circle cx="100" cy="145" r="1.3" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
      </circle>
    </svg>
  );
}

/** m5-key-takeaway-2 — Shield with an honest checkmark vs a cracked mask */
export function M5KeyTakeaway2Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Left: Cracked mask (bad vendor) */}
      <g transform="translate(60, 75)">
        <ellipse rx="22" ry="28" fill="#E21B3C" opacity="0.08" />
        <ellipse rx="22" ry="28" fill="none" stroke="#E21B3C" strokeWidth="1.2" opacity="0.3" />
        {/* Eye holes */}
        <ellipse cx="-8" cy="-6" rx="5" ry="3" fill="#E21B3C" opacity="0.15" />
        <ellipse cx="8" cy="-6" rx="5" ry="3" fill="#E21B3C" opacity="0.15" />
        {/* Smile */}
        <path d="M-8,8 Q0,16 8,8" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.25" />
        {/* Crack */}
        <path d="M2,-28 L-2,-18 L4,-10 L-1,-2 L3,8" stroke="#E21B3C" strokeWidth="1.2" opacity="0.4" fill="none">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </path>
        <text x="0" y="42" textAnchor="middle" fill="#E21B3C" fontSize="6" opacity="0.5">STORY</text>
      </g>

      {/* Right: Honest shield (good vendor) */}
      <g transform="translate(140, 75)">
        {/* Shield shape */}
        <path d="M0,-30 L22,-18 L22,6 C22,22 0,34 0,34 C0,34 -22,22 -22,6 L-22,-18 Z" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="1.2" />
        {/* Checkmark */}
        <path d="M-8,2 L-2,8 L10,-6" stroke="#26890C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
        </path>
        <text x="0" y="48" textAnchor="middle" fill="#26890C" fontSize="6" opacity="0.5">REAL</text>
      </g>

      {/* VS divider */}
      <text x="100" y="78" textAnchor="middle" fill="rgba(240,239,235,0.25)" fontSize="9" fontWeight="600">vs</text>

      {/* Sparkles */}
      <circle cx="20" cy="30" r="1.2" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="130" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cx="100" cy="145" r="1.3" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   LESSON 3 — 12 Questions to Ask Before You Buy
   ───────────────────────────────────────────── */

/** m5-evaluations-fail — A broken evaluation checklist with missing items */
export function M5EvaluationsFailIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Clipboard */}
      <rect x="55" y="18" width="90" height="120" rx="10" fill="rgba(240,239,235,0.03)" stroke="rgba(240,239,235,0.1)" strokeWidth="1.2" />
      <rect x="80" y="12" width="40" height="14" rx="4" fill="rgba(240,239,235,0.06)" stroke="rgba(240,239,235,0.12)" strokeWidth="1" />

      {/* First item — checked (the only one people check) */}
      <g transform="translate(66, 42)">
        <rect x="0" y="0" width="12" height="12" rx="3" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.4" />
        <path d="M2,6 L5,9 L10,3" stroke="#26890C" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
        <rect x="18" y="3" width="50" height="5" rx="2.5" fill="rgba(240,239,235,0.1)" />
        <text x="18" y="8" fill="rgba(240,239,235,0.2)" fontSize="5">Can it do the thing?</text>
      </g>

      {/* Missing items — dimmed out with X marks */}
      {["What if it fails?", "Cost at scale?", "How to leave?", "Who owns outputs?"].map((label, i) => (
        <g key={i} transform={`translate(66, ${62 + i * 20})`}>
          <rect x="0" y="0" width="12" height="12" rx="3" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.2" strokeDasharray="2 2" />
          {/* X mark */}
          <line x1="2" y1="2" x2="10" y2="10" stroke="#E21B3C" strokeWidth="0.8" opacity="0.3">
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
          <line x1="10" y1="2" x2="2" y2="10" stroke="#E21B3C" strokeWidth="0.8" opacity="0.3">
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
          <rect x="18" y="3" width={36 + i * 3} height="5" rx="2.5" fill="rgba(240,239,235,0.06)" />
          <text x="18" y="8" fill="rgba(240,239,235,0.12)" fontSize="4.5">{label}</text>
        </g>
      ))}

      {/* Warning indicator */}
      <g transform="translate(160, 35)">
        <circle r="12" fill="#FFA602" opacity="0.08">
          <animate attributeName="r" values="10;14;10" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="5" textAnchor="middle" fill="#FFA602" fontSize="13" fontWeight="700" opacity="0.5">!</text>
      </g>

      {/* Sparkles */}
      <circle cx="30" cy="80" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="130" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.7s" />
      </circle>
    </svg>
  );
}

/** m5-twelve-questions — Grid of 12 numbered question cards */
export function M5TwelveQuestionsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* 4x3 grid of question cards */}
      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 18 + col * 46;
        const y = 18 + row * 44;
        const colors = ["#1368CE", "#FFA602", "#26890C", "#E21B3C", "#00C9B7", "#FF3EA5"];
        const color = colors[i % colors.length];
        return (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <rect x="0" y="0" width="38" height="36" rx="6" fill={color} opacity="0.06">
              <animate attributeName="opacity" values="0.04;0.1;0.04" dur={`${2.5 + (i % 3) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </rect>
            <rect x="0" y="0" width="38" height="36" rx="6" fill="none" stroke={color} strokeWidth="0.8" opacity="0.25" />
            <text x="19" y="16" textAnchor="middle" fill={color} fontSize="10" fontWeight="700" opacity="0.5">{i + 1}</text>
            <text x="19" y="28" textAnchor="middle" fill={color} fontSize="10" opacity="0.4">?</text>
          </g>
        );
      })}

      {/* Sparkles */}
      <circle cx="8" cy="8" r="1.2" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="192" cy="150" r="1" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" begin="0.8s" />
      </circle>
    </svg>
  );
}

/** m5-pre-buy-checklist — A printed checklist with all boxes checked, stamp of approval */
export function M5PreBuyChecklistIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Paper/checklist */}
      <rect x="40" y="14" width="100" height="128" rx="6" fill="rgba(240,239,235,0.04)" stroke="rgba(240,239,235,0.12)" strokeWidth="1" />

      {/* Title bar */}
      <rect x="50" y="20" width="80" height="10" rx="3" fill="#1368CE" opacity="0.12" />
      <text x="90" y="28" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="700" opacity="0.5">PRE-BUY CHECK</text>

      {/* 10 checklist items */}
      {Array.from({ length: 10 }, (_, i) => (
        <g key={i} transform={`translate(48, ${38 + i * 10})`}>
          <rect x="0" y="0" width="8" height="8" rx="2" fill="none" stroke="#26890C" strokeWidth="0.8" opacity="0.3" />
          <path d="M1.5,4 L3.5,6 L6.5,2" stroke="#26890C" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6" dur="4s" repeatCount="indefinite" begin={`${i * 0.35}s`} />
          </path>
          <rect x="12" y="2" width={52 + (i % 3) * 6} height="4" rx="2" fill="rgba(240,239,235,0.07)" />
        </g>
      ))}

      {/* Approval stamp */}
      <g transform="translate(158, 80)">
        <circle r="20" fill="none" stroke="#26890C" strokeWidth="2" opacity="0" strokeDasharray="4 2">
          <animate attributeName="opacity" values="0;0;0;0.4;0.4" dur="5s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="4" textAnchor="middle" fill="#26890C" fontSize="7" fontWeight="700" opacity="0">
          <animate attributeName="opacity" values="0;0;0;0.5;0.5" dur="5s" repeatCount="indefinite" />
          OK
        </text>
      </g>

      {/* Sparkles */}
      <circle cx="22" cy="50" r="1.2" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="178" cy="140" r="1" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
    </svg>
  );
}

/** m5-quick-check-3 — A quiz bell with question marks orbiting */
export function M5QuickCheck3Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Central bell shape */}
      <g transform="translate(100, 78)">
        <path d="M-20,10 C-20,-16 -14,-28 0,-32 C14,-28 20,-16 20,10 Z" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="1.2" />
        <rect x="-24" y="10" width="48" height="6" rx="3" fill="#FFA602" opacity="0.2" />
        <circle cy="18" r="3" fill="#FFA602" opacity="0.3">
          <animate attributeName="cy" values="18;20;18" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Ring effect */}
        <circle r="30" fill="none" stroke="#FFA602" strokeWidth="0.8" opacity="0">
          <animate attributeName="opacity" values="0;0.2;0" dur="2s" repeatCount="indefinite" />
          <animate attributeName="r" values="28;38;28" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Orbiting question marks */}
      {[0, 72, 144, 216, 288].map((startAngle, i) => {
        const colors = ["#1368CE", "#E21B3C", "#00C9B7", "#FF3EA5", "#26890C"];
        return (
          <g key={i}>
            <circle cx="100" cy="78" r="0" fill={colors[i]} opacity="0.5">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                begin={`${(startAngle / 360) * 6}s`}
                path={`M${44 * Math.cos((startAngle * Math.PI) / 180)},${44 * Math.sin((startAngle * Math.PI) / 180)} A44,44 0 0,1 ${44 * Math.cos(((startAngle + 180) * Math.PI) / 180)},${44 * Math.sin(((startAngle + 180) * Math.PI) / 180)} A44,44 0 0,1 ${44 * Math.cos((startAngle * Math.PI) / 180)},${44 * Math.sin((startAngle * Math.PI) / 180)}`}
              />
              <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* Static question marks at corners */}
      <text x="40" y="40" textAnchor="middle" fill="#1368CE" fontSize="12" fontWeight="700" opacity="0.2">?</text>
      <text x="160" y="40" textAnchor="middle" fill="#E21B3C" fontSize="12" fontWeight="700" opacity="0.2">?</text>
      <text x="40" y="130" textAnchor="middle" fill="#00C9B7" fontSize="12" fontWeight="700" opacity="0.2">?</text>
      <text x="160" y="130" textAnchor="middle" fill="#FF3EA5" fontSize="12" fontWeight="700" opacity="0.2">?</text>

      {/* Sparkles */}
      <circle cx="20" cy="20" r="1.2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="145" r="1" fill="#1368CE" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.9s" />
      </circle>
    </svg>
  );
}

/** m5-key-takeaway-3 — A key unlocking a lock, representing informed purchase */
export function M5KeyTakeaway3Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Lock body */}
      <g transform="translate(120, 82)">
        <rect x="-18" y="-8" width="36" height="30" rx="6" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="1.2" />
        {/* Lock shackle */}
        <path d="M-10,-8 L-10,-22 C-10,-32 10,-32 10,-22 L10,-8" fill="none" stroke="#1368CE" strokeWidth="2" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.15;0.3" dur="3s" repeatCount="indefinite" />
        </path>
        {/* Keyhole */}
        <circle cy="4" r="4" fill="#1368CE" opacity="0.25" />
        <rect x="-1.5" y="4" width="3" height="8" rx="1" fill="#1368CE" opacity="0.25" />
      </g>

      {/* Key */}
      <g transform="translate(68, 82)">
        <animateTransform attributeName="transform" type="translate" values="68,82;80,82;68,82" dur="4s" repeatCount="indefinite" />
        {/* Key head (circle) */}
        <circle r="10" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="1.2" />
        <circle r="4" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        {/* Key shaft */}
        <rect x="10" y="-2" width="24" height="4" rx="1" fill="#FFA602" opacity="0.3" />
        {/* Key teeth */}
        <rect x="28" y="-2" width="3" height="6" rx="0.5" fill="#FFA602" opacity="0.4" />
        <rect x="32" y="-2" width="3" height="8" rx="0.5" fill="#FFA602" opacity="0.4" />
      </g>

      {/* "YES" label beneath */}
      <text x="100" y="132" textAnchor="middle" fill="#26890C" fontSize="8" fontWeight="700" opacity="0.4">INFORMED YES</text>

      {/* Radiating lines from lock when "unlocked" */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1={120 + Math.cos((angle * Math.PI) / 180) * 26}
          y1={75 + Math.sin((angle * Math.PI) / 180) * 26}
          x2={120 + Math.cos((angle * Math.PI) / 180) * 34}
          y2={75 + Math.sin((angle * Math.PI) / 180) * 34}
          stroke="#FFA602"
          strokeWidth="0.8"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" begin="2s" />
        </line>
      ))}

      {/* Sparkles */}
      <circle cx="30" cy="40" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="35" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.7s" />
      </circle>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   LESSON 4 — Pricing Models and Build vs. Buy
   ───────────────────────────────────────────── */

/** m5-pricing-models — Three price tags with different symbols ($, per-use meter, flat bar) */
export function M5PricingModelsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Per-Seat tag */}
      <g transform="translate(36, 75)">
        <rect x="-26" y="-30" width="52" height="60" rx="8" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="1" />
        {/* Person icon */}
        <circle cy="-12" r="7" fill="none" stroke="#1368CE" strokeWidth="1.2" opacity="0.4" />
        <path d="M-10,2 C-10,-4 10,-4 10,2" fill="none" stroke="#1368CE" strokeWidth="1.2" opacity="0.4" />
        <text x="0" y="18" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="600" opacity="0.5">PER</text>
        <text x="0" y="25" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="600" opacity="0.5">SEAT</text>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
      </g>

      {/* Per-Use tag */}
      <g transform="translate(100, 75)">
        <rect x="-26" y="-30" width="52" height="60" rx="8" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="1" />
        {/* Meter/gauge icon */}
        <circle cy="-6" r="12" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
        <line x1="0" y1="-6" x2="6" y2="-14" stroke="#FFA602" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 0 -6" to="90 0 -6" dur="3s" repeatCount="indefinite" />
        </line>
        <text x="0" y="18" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="600" opacity="0.5">PER</text>
        <text x="0" y="25" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="600" opacity="0.5">USE</text>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </g>

      {/* Flat Rate tag */}
      <g transform="translate(164, 75)">
        <rect x="-26" y="-30" width="52" height="60" rx="8" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="1" />
        {/* Flat bar / infinity concept */}
        <rect x="-14" y="-14" width="28" height="6" rx="3" fill="#26890C" opacity="0.25">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="-14" y="-4" width="28" height="6" rx="3" fill="#26890C" opacity="0.2" />
        <text x="0" y="18" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="600" opacity="0.5">FLAT</text>
        <text x="0" y="25" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="600" opacity="0.5">RATE</text>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="1s" />
      </g>

      {/* Dollar signs floating above */}
      {[
        { x: 36, delay: "0s" },
        { x: 100, delay: "0.8s" },
        { x: 164, delay: "1.6s" },
      ].map((s, i) => (
        <text key={i} x={s.x} y="30" textAnchor="middle" fill="rgba(240,239,235,0.2)" fontSize="11" fontWeight="700">
          $
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
          <animate attributeName="y" values="32;28;32" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
        </text>
      ))}

      {/* Sparkles */}
      <circle cx="12" cy="130" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="28" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.9s" />
      </circle>
    </svg>
  );
}

/** m5-hybrid-pricing — Three pricing blocks merging/overlapping with a "gotcha" indicator */
export function M5HybridPricingIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Base fee layer */}
      <rect x="30" y="60" width="60" height="50" rx="8" fill="#1368CE" stroke="#1368CE" strokeWidth="1" opacity="0.2">
        <animate attributeName="x" values="30;35;30" dur="5s" repeatCount="indefinite" />
      </rect>
      <text x="60" y="82" textAnchor="middle" fill="#1368CE" fontSize="7" fontWeight="600" opacity="0.4">BASE</text>
      <text x="60" y="92" textAnchor="middle" fill="#1368CE" fontSize="6" opacity="0.3">$99/mo</text>

      {/* Consumption layer (overlapping) */}
      <rect x="70" y="50" width="60" height="50" rx="8" fill="#FFA602" stroke="#FFA602" strokeWidth="1" opacity="0.2">
        <animate attributeName="x" values="70;65;70" dur="5s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="72" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="600" opacity="0.4">USAGE</text>
      <text x="100" y="82" textAnchor="middle" fill="#FFA602" fontSize="6" opacity="0.3">$0.01/call</text>

      {/* Overage layer (hidden cost, emerging) */}
      <rect x="110" y="55" width="60" height="50" rx="8" fill="#E21B3C" stroke="#E21B3C" strokeWidth="1" strokeDasharray="3 2" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="140" y="77" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="600" opacity="0.35">OVERAGE</text>
      <text x="140" y="87" textAnchor="middle" fill="#E21B3C" fontSize="6" opacity="0.25">$$$</text>

      {/* Warning eye */}
      <g transform="translate(170, 40)">
        <circle r="8" fill="#E21B3C" opacity="0.08">
          <animate attributeName="r" values="7;10;7" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="4" textAnchor="middle" fill="#E21B3C" fontSize="10" fontWeight="700" opacity="0.4">!</text>
      </g>

      {/* Plus signs between layers */}
      <text x="50" y="50" textAnchor="middle" fill="rgba(240,239,235,0.2)" fontSize="14" fontWeight="700">+</text>
      <text x="90" y="45" textAnchor="middle" fill="rgba(240,239,235,0.2)" fontSize="14" fontWeight="700">+</text>

      {/* Total bar at bottom */}
      <rect x="30" y="120" width="140" height="16" rx="4" fill="rgba(240,239,235,0.04)" stroke="rgba(240,239,235,0.1)" strokeWidth="0.8" />
      <text x="100" y="131" textAnchor="middle" fill="rgba(240,239,235,0.25)" fontSize="7" fontWeight="600">TOTAL: $$$$ (surprise)</text>

      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="140" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.7s" />
      </circle>
    </svg>
  );
}

/** m5-total-cost — Iceberg: tip visible (subscription), bulk hidden (real costs) */
export function M5TotalCostIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Water line */}
      <line x1="20" y1="60" x2="180" y2="60" stroke="#1368CE" strokeWidth="0.8" opacity="0.2" />
      <path d="M20,60 Q40,56 60,60 Q80,64 100,60 Q120,56 140,60 Q160,64 180,60" fill="none" stroke="#1368CE" strokeWidth="0.8" opacity="0.15">
        <animate attributeName="d" values="M20,60 Q40,56 60,60 Q80,64 100,60 Q120,56 140,60 Q160,64 180,60;M20,60 Q40,64 60,60 Q80,56 100,60 Q120,64 140,60 Q160,56 180,60;M20,60 Q40,56 60,60 Q80,64 100,60 Q120,56 140,60 Q160,64 180,60" dur="4s" repeatCount="indefinite" />
      </path>

      {/* Tip of iceberg (above water — visible cost) */}
      <path d="M88,58 L100,24 L112,58 Z" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="1" />
      <text x="100" y="18" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="600" opacity="0.5">$99/mo</text>

      {/* Bulk of iceberg (below water — hidden costs) */}
      <path d="M70,62 L88,62 L112,62 L130,62 L122,100 L110,120 L90,120 L78,100 Z" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="1" strokeDasharray="3 2">
        <animate attributeName="opacity" values="0.06;0.12;0.06" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Labels on hidden portion */}
      <text x="100" y="76" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.35">Setup: 40hrs</text>
      <text x="100" y="86" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.3">Integration</text>
      <text x="100" y="96" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.25">Training</text>
      <text x="100" y="106" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.2">QA/Review</text>
      <text x="100" y="116" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.15">Switching</text>

      {/* Real total at bottom */}
      <text x="100" y="142" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="600" opacity="0.4">Real cost: $$$$/yr</text>

      {/* Sparkles */}
      <circle cx="30" cy="32" r="1.2" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="45" r="1" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cx="155" cy="130" r="1.3" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  );
}

/** m5-build-vs-buy — Hammer (build) vs shopping cart (buy) on a balance scale */
export function M5BuildVsBuyIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Scale fulcrum */}
      <polygon points="100,105 94,115 106,115" fill="rgba(240,239,235,0.12)" />
      <line x1="100" y1="70" x2="100" y2="105" stroke="rgba(240,239,235,0.15)" strokeWidth="1.5" />

      {/* Scale beam — tilts slightly */}
      <line x1="40" y1="72" x2="160" y2="68" stroke="rgba(240,239,235,0.2)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="y1" values="72;68;72" dur="5s" repeatCount="indefinite" />
        <animate attributeName="y2" values="68;72;68" dur="5s" repeatCount="indefinite" />
      </line>

      {/* Left pan — BUILD */}
      <g>
        <line x1="40" y1="72" x2="40" y2="84" stroke="rgba(240,239,235,0.12)" strokeWidth="0.8">
          <animate attributeName="y1" values="72;68;72" dur="5s" repeatCount="indefinite" />
          <animate attributeName="y2" values="84;80;84" dur="5s" repeatCount="indefinite" />
        </line>
        <rect x="16" y="84" width="48" height="6" rx="3" fill="#FFA602" opacity="0.12">
          <animate attributeName="y" values="84;80;84" dur="5s" repeatCount="indefinite" />
        </rect>
        {/* Hammer icon */}
        <g>
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="5s" repeatCount="indefinite" />
          <rect x="34" y="52" width="12" height="6" rx="2" fill="#FFA602" opacity="0.3" />
          <rect x="38" y="56" width="4" height="18" rx="1" fill="#FFA602" opacity="0.25" />
        </g>
        <text x="40" y="100" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="600" opacity="0.5">BUILD</text>
      </g>

      {/* Right pan — BUY */}
      <g>
        <line x1="160" y1="68" x2="160" y2="80" stroke="rgba(240,239,235,0.12)" strokeWidth="0.8">
          <animate attributeName="y1" values="68;72;68" dur="5s" repeatCount="indefinite" />
          <animate attributeName="y2" values="80;84;80" dur="5s" repeatCount="indefinite" />
        </line>
        <rect x="136" y="80" width="48" height="6" rx="3" fill="#1368CE" opacity="0.12">
          <animate attributeName="y" values="80;84;80" dur="5s" repeatCount="indefinite" />
        </rect>
        {/* Cart icon */}
        <g>
          <animateTransform attributeName="transform" type="translate" values="0,0;0,4;0,0" dur="5s" repeatCount="indefinite" />
          <path d="M150,48 L154,48 L162,62 L152,62 Z" fill="none" stroke="#1368CE" strokeWidth="1.2" opacity="0.4" />
          <circle cx="154" cy="66" r="2" fill="#1368CE" opacity="0.3" />
          <circle cx="162" cy="66" r="2" fill="#1368CE" opacity="0.3" />
        </g>
        <text x="160" y="100" textAnchor="middle" fill="#1368CE" fontSize="7" fontWeight="600" opacity="0.5">BUY</text>
      </g>

      {/* "vs" in the middle */}
      <text x="100" y="56" textAnchor="middle" fill="rgba(240,239,235,0.2)" fontSize="9" fontWeight="600">vs</text>

      {/* Base line */}
      <rect x="60" y="115" width="80" height="4" rx="2" fill="rgba(240,239,235,0.06)" />

      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cx="100" cy="140" r="1.3" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
      </circle>
    </svg>
  );
}

/** m5-build-vs-buy-matrix — 2x2 grid showing build/buy scenarios */
export function M5BuildVsBuyMatrixIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Grid lines */}
      <line x1="100" y1="18" x2="100" y2="142" stroke="rgba(240,239,235,0.1)" strokeWidth="0.8" />
      <line x1="18" y1="80" x2="182" y2="80" stroke="rgba(240,239,235,0.1)" strokeWidth="0.8" />

      {/* Top-left: Generic + Low Volume = BUY */}
      <g transform="translate(56, 48)">
        <rect x="-34" y="-24" width="68" height="48" rx="8" fill="#1368CE" opacity="0.08">
          <animate attributeName="opacity" values="0.05;0.1;0.05" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="0" y="-6" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="700" opacity="0.5">BUY</text>
        <text x="0" y="6" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.3">Generic use case</text>
        <text x="0" y="14" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.3">Low volume</text>
      </g>

      {/* Top-right: Unique + Low Volume = BUY first, build later */}
      <g transform="translate(144, 48)">
        <rect x="-34" y="-24" width="68" height="48" rx="8" fill="#FFA602" opacity="0.08">
          <animate attributeName="opacity" values="0.05;0.1;0.05" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </rect>
        <text x="0" y="-6" textAnchor="middle" fill="#FFA602" fontSize="8" fontWeight="700" opacity="0.5">TEST</text>
        <text x="0" y="6" textAnchor="middle" fill="#FFA602" fontSize="5" opacity="0.3">Unique need</text>
        <text x="0" y="14" textAnchor="middle" fill="#FFA602" fontSize="5" opacity="0.3">Validate first</text>
      </g>

      {/* Bottom-left: Generic + High Volume = BUY (still) */}
      <g transform="translate(56, 112)">
        <rect x="-34" y="-24" width="68" height="48" rx="8" fill="#26890C" opacity="0.08">
          <animate attributeName="opacity" values="0.05;0.1;0.05" dur="3s" repeatCount="indefinite" begin="1s" />
        </rect>
        <text x="0" y="-6" textAnchor="middle" fill="#26890C" fontSize="8" fontWeight="700" opacity="0.5">BUY</text>
        <text x="0" y="6" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.3">Commodity task</text>
        <text x="0" y="14" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.3">Negotiate pricing</text>
      </g>

      {/* Bottom-right: Unique + High Volume = BUILD */}
      <g transform="translate(144, 112)">
        <rect x="-34" y="-24" width="68" height="48" rx="8" fill="#E21B3C" opacity="0.08">
          <animate attributeName="opacity" values="0.05;0.1;0.05" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </rect>
        <text x="0" y="-6" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="700" opacity="0.5">BUILD</text>
        <text x="0" y="6" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.3">Unique + scale</text>
        <text x="0" y="14" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.3">Custom wins here</text>
      </g>

      {/* Axis labels */}
      <text x="100" y="12" textAnchor="middle" fill="rgba(240,239,235,0.25)" fontSize="6" fontWeight="600">LOW VOLUME</text>
      <text x="100" y="154" textAnchor="middle" fill="rgba(240,239,235,0.25)" fontSize="6" fontWeight="600">HIGH VOLUME</text>
      <text x="10" y="82" fill="rgba(240,239,235,0.25)" fontSize="6" fontWeight="600" transform="rotate(-90, 10, 82)">GENERIC</text>
      <text x="194" y="82" fill="rgba(240,239,235,0.25)" fontSize="6" fontWeight="600" transform="rotate(90, 194, 82)">UNIQUE</text>

      {/* Sparkles */}
      <circle cx="10" cy="20" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="148" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.9s" />
      </circle>
    </svg>
  );
}

/** m5-quick-check-4 — Calculator with dollar signs and a checkmark */
export function M5QuickCheck4Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Calculator body */}
      <rect x="60" y="20" width="80" height="118" rx="10" fill="rgba(240,239,235,0.04)" stroke="rgba(240,239,235,0.12)" strokeWidth="1.2" />

      {/* Display */}
      <rect x="68" y="28" width="64" height="22" rx="4" fill="#1368CE" stroke="#1368CE" strokeWidth="0.8" opacity="0.12" />
      <text x="124" y="44" textAnchor="end" fill="#26890C" fontSize="12" fontWeight="700" opacity="0.4">
        $
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Button grid */}
      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const colors = ["#1368CE", "#FFA602", "#26890C", "#E21B3C"];
        const color = colors[row % 4];
        return (
          <rect
            key={i}
            x={72 + col * 18}
            y={58 + row * 18}
            width="14"
            height="14"
            rx="3"
            fill={color}
            opacity="0.08"
            stroke={color}
            strokeWidth="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.06;0.12;0.06"
              dur={`${2 + (i % 4) * 0.3}s`}
              repeatCount="indefinite"
              begin={`${i * 0.15}s`}
            />
          </rect>
        );
      })}

      {/* Floating dollar signs */}
      <text x="40" y="50" fill="#FFA602" fontSize="14" fontWeight="700" opacity="0.15">$</text>
      <text x="155" y="60" fill="#26890C" fontSize="12" fontWeight="700" opacity="0.15">$</text>
      <text x="45" y="110" fill="#E21B3C" fontSize="10" fontWeight="700" opacity="0.1">$</text>

      {/* Checkmark badge */}
      <g transform="translate(155, 115)">
        <circle r="12" fill="#26890C" opacity="0.12">
          <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
        </circle>
        <path d="M-5,0 L-1,4 L6,-4" stroke="#26890C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>

      {/* Sparkles */}
      <circle cx="28" cy="30" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="172" cy="25" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.7s" />
      </circle>
    </svg>
  );
}

/** m5-key-takeaway-4 — A path forking: "buy first" leads to "build later" with progress arrows */
export function M5KeyTakeaway4Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Starting point */}
      <circle cx="30" cy="80" r="10" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="1.2" />
      <text x="30" y="83" textAnchor="middle" fill="#1368CE" fontSize="7" fontWeight="700" opacity="0.5">GO</text>

      {/* Path: buy first */}
      <path d="M42,80 Q70,80 85,60" fill="none" stroke="#26890C" strokeWidth="2" strokeLinecap="round" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Buy node */}
      <g transform="translate(95, 50)">
        <rect x="-20" y="-14" width="40" height="28" rx="6" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#26890C" fontSize="7" fontWeight="600" opacity="0.5">BUY</text>
      </g>

      {/* Arrow: buy → validate */}
      <line x1="116" y1="50" x2="132" y2="50" stroke="rgba(240,239,235,0.2)" strokeWidth="1.5" />
      <polygon points="132,47 138,50 132,53" fill="rgba(240,239,235,0.25)">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </polygon>

      {/* Validate node */}
      <g transform="translate(150, 50)">
        <rect x="-16" y="-12" width="32" height="24" rx="5" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="600" opacity="0.5">PROVE</text>
      </g>

      {/* Arrow down to build */}
      <line x1="150" y1="62" x2="150" y2="86" stroke="rgba(240,239,235,0.2)" strokeWidth="1.5" />
      <polygon points="147,86 153,86 150,92" fill="rgba(240,239,235,0.25)">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" begin="1s" />
      </polygon>

      {/* Build node (optional path) */}
      <g transform="translate(150, 105)">
        <rect x="-22" y="-12" width="44" height="24" rx="6" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="1" strokeDasharray="3 2" />
        <text x="0" y="4" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="600" opacity="0.4">BUILD?</text>
      </g>

      {/* Path: always build (wrong path — dimmed) */}
      <path d="M42,80 Q70,80 85,105" fill="none" stroke="#E21B3C" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />
      <text x="62" y="108" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.2">slow path</text>

      {/* Progress indicators on the right path */}
      <text x="105" y="34" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.3">fast</text>
      <text x="158" y="80" fill="#FFA602" fontSize="5" opacity="0.3">then</text>

      {/* Sparkles */}
      <circle cx="18" cy="30" r="1.2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="1" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="3.2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cx="30" cy="140" r="1.3" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
      </circle>
    </svg>
  );
}

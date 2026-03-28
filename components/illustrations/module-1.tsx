/**
 * Module 1 — "What AI Actually Is"
 * Animated SVG illustrations for every section of every lesson.
 *
 * Kahoot palette: #E21B3C (red), #1368CE (blue), #FFA602 (gold),
 *                 #26890C (green), #00C9B7 (cyan), #FF3EA5 (magenta)
 */

// ─── INTRO ILLUSTRATIONS ───────────────────────────────────────────────

/**
 * m1-intro-hype — AI vs. the Hype Machine intro
 * A megaphone blasting headlines with a magnifying glass revealing truth beneath.
 */
export function M1IntroHype({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background pulse */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Megaphone */}
      <g transform="translate(40, 30)">
        <path d="M0 35 L25 20 L25 50 Z" fill="#E21B3C" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
        </path>
        <rect x="25" y="18" width="50" height="34" rx="4" fill="#E21B3C" opacity="0.5" />
        <ellipse cx="75" cy="35" rx="18" ry="22" fill="#E21B3C" opacity="0.3" />
      </g>

      {/* Headline bursts from megaphone */}
      <g opacity="0.6">
        <rect x="120" y="25" width="55" height="10" rx="5" fill="#FFA602" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;15,-5" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="125" y="42" width="45" height="8" rx="4" fill="#FF3EA5" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;20,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </rect>
        <rect x="118" y="56" width="50" height="8" rx="4" fill="#1368CE" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="1s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;12,5" dur="3s" begin="1s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Magnifying glass revealing truth */}
      <g transform="translate(85, 85)">
        <circle cx="0" cy="0" r="28" fill="#1368CE" opacity="0.08" />
        <circle cx="0" cy="0" r="28" stroke="#1368CE" strokeWidth="2.5" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <line x1="20" y1="20" x2="38" y2="38" stroke="#1368CE" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        {/* Truth checkmark inside lens */}
        <path d="M-10 2 L-3 10 L12 -8" stroke="#26890C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Sparkles */}
      <circle cx="20" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;3;1" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="30" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="145" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-intro-automation — AI vs Automation intro
 * A robot arm (automation) next to a brain (AI), with a dividing line.
 */
export function M1IntroAutomation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Dividing line */}
      <line x1="100" y1="20" x2="100" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Left side: Gear/Robot (Automation) */}
      <g transform="translate(50, 75)">
        <circle cx="0" cy="0" r="30" fill="#FFA602" opacity="0.08" />
        {/* Gear */}
        <circle cx="0" cy="0" r="18" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite" />
        </circle>
        {/* Gear teeth */}
        <g opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite" />
          <rect x="-3" y="-24" width="6" height="8" rx="1" fill="#FFA602" />
          <rect x="-3" y="16" width="6" height="8" rx="1" fill="#FFA602" />
          <rect x="-24" y="-3" width="8" height="6" rx="1" fill="#FFA602" />
          <rect x="16" y="-3" width="8" height="6" rx="1" fill="#FFA602" />
        </g>
        <circle cx="0" cy="0" r="6" fill="#FFA602" opacity="0.3" />
      </g>
      <text x="50" y="120" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.4">AUTOMATION</text>

      {/* Right side: Brain (AI) */}
      <g transform="translate(150, 75)">
        <circle cx="0" cy="0" r="30" fill="#1368CE" opacity="0.08" />
        {/* Brain shape */}
        <path d="M-12 5 C-12 -15 -5 -20 0 -20 C5 -20 12 -15 12 5 C12 15 5 18 0 18 C-5 18 -12 15 -12 5" stroke="#1368CE" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M0 -20 C0 -10 -8 -5 -8 5 M0 -20 C0 -10 8 -5 8 5" stroke="#1368CE" strokeWidth="1" fill="none" opacity="0.3" />
        {/* Neural pulses */}
        <circle cx="-5" cy="-5" r="2" fill="#00C9B7" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="5" cy="3" r="2" fill="#FF3EA5" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="-3" cy="8" r="1.5" fill="#FFA602" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>
      <text x="150" y="120" textAnchor="middle" fill="#1368CE" fontSize="7" fontWeight="bold" opacity="0.4">AI</text>

      {/* VS badge */}
      <circle cx="100" cy="75" r="12" fill="#E21B3C" opacity="0.15" />
      <text x="100" y="79" textAnchor="middle" fill="#E21B3C" fontSize="9" fontWeight="bold" opacity="0.6">VS</text>

      {/* Sparkles */}
      <circle cx="15" cy="25" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="25" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="145" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="140" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-intro-llms — How ChatGPT Works intro
 * Neural network layers with data flowing through them.
 */
export function M1IntroLlms({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background pulse */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#00C9B7" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Neural network layers */}
      {/* Layer 1 — Input */}
      {[30, 55, 80, 105, 130].map((y, i) => (
        <circle key={`l1-${i}`} cx="35" cy={y} r="6" stroke="#1368CE" strokeWidth="1.5" fill="#1368CE" fillOpacity="0.15" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Layer 2 — Hidden */}
      {[45, 70, 95, 120].map((y, i) => (
        <circle key={`l2-${i}`} cx="85" cy={y} r="7" stroke="#FFA602" strokeWidth="1.5" fill="#FFA602" fillOpacity="0.15" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${2.2 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Layer 3 — Hidden 2 */}
      {[45, 70, 95, 120].map((y, i) => (
        <circle key={`l3-${i}`} cx="135" cy={y} r="7" stroke="#FF3EA5" strokeWidth="1.5" fill="#FF3EA5" fillOpacity="0.15" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${2.4 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Layer 4 — Output */}
      {[55, 80, 105].map((y, i) => (
        <circle key={`l4-${i}`} cx="175" cy={y} r="6" stroke="#26890C" strokeWidth="1.5" fill="#26890C" fillOpacity="0.15" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${2.6 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Connections L1 to L2 */}
      {[30, 55, 80, 105, 130].map((y1, i) =>
        [45, 70, 95, 120].map((y2, j) => (
          <line key={`c12-${i}-${j}`} x1="41" y1={y1} x2="78" y2={y2} stroke="#1368CE" strokeWidth="0.4" opacity="0.15" />
        ))
      )}

      {/* Connections L2 to L3 */}
      {[45, 70, 95, 120].map((y1, i) =>
        [45, 70, 95, 120].map((y2, j) => (
          <line key={`c23-${i}-${j}`} x1="92" y1={y1} x2="128" y2={y2} stroke="#FFA602" strokeWidth="0.4" opacity="0.15" />
        ))
      )}

      {/* Connections L3 to L4 */}
      {[45, 70, 95, 120].map((y1, i) =>
        [55, 80, 105].map((y2, j) => (
          <line key={`c34-${i}-${j}`} x1="142" y1={y1} x2="169" y2={y2} stroke="#FF3EA5" strokeWidth="0.4" opacity="0.15" />
        ))
      )}

      {/* Data pulse traveling through */}
      <circle r="3" fill="#00C9B7" opacity="0.8">
        <animateMotion path="M35,80 L85,70 L135,95 L175,80" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#FFA602" opacity="0.8">
        <animateMotion path="M35,55 L85,95 L135,45 L175,55" dur="3s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="15" cy="15" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="145" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-intro-daily — AI in Daily Life intro
 * Everyday devices (phone, speaker, car, watch) with AI glow.
 */
export function M1IntroDaily({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Phone */}
      <g transform="translate(40, 35)">
        <rect x="-12" y="-25" width="24" height="42" rx="4" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1.2" opacity="0.7" />
        <rect x="-9" y="-20" width="18" height="32" rx="2" fill="#0d0d1a" opacity="0.8" />
        <circle cx="0" cy="0" r="18" fill="#1368CE" opacity="0">
          <animate attributeName="opacity" values="0;0.15;0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="-5" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.5">AI</text>
      </g>

      {/* Smart speaker */}
      <g transform="translate(100, 40)">
        <ellipse cx="0" cy="12" rx="14" ry="4" fill="#1a1a2e" opacity="0.5" />
        <rect x="-12" y="-15" width="24" height="27" rx="12" fill="#1a1a2e" stroke="#26890C" strokeWidth="1.2" opacity="0.7" />
        <circle cx="0" cy="0" r="18" fill="#26890C" opacity="0">
          <animate attributeName="opacity" values="0;0.15;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="r" values="15;25;15" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        {/* Sound waves */}
        <path d="M8 -5 Q15 0 8 5" stroke="#26890C" strokeWidth="1" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M12 -9 Q22 0 12 9" stroke="#26890C" strokeWidth="0.8" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;0.4;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Car */}
      <g transform="translate(160, 40)">
        <path d="M-18 5 L-14 -8 L14 -8 L18 5 Z" fill="#1a1a2e" stroke="#FFA602" strokeWidth="1.2" opacity="0.7" />
        <rect x="-20" y="5" width="40" height="12" rx="3" fill="#1a1a2e" stroke="#FFA602" strokeWidth="1" opacity="0.6" />
        <circle cx="-12" cy="18" r="4" fill="#333" stroke="#FFA602" strokeWidth="0.8" opacity="0.5" />
        <circle cx="12" cy="18" r="4" fill="#333" stroke="#FFA602" strokeWidth="0.8" opacity="0.5" />
        <circle cx="0" cy="0" r="22" fill="#FFA602" opacity="0">
          <animate attributeName="opacity" values="0;0.12;0" dur="3s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="r" values="18;28;18" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Smartwatch */}
      <g transform="translate(65, 105)">
        <rect x="-10" y="-12" width="20" height="24" rx="5" fill="#1a1a2e" stroke="#FF3EA5" strokeWidth="1.2" opacity="0.7" />
        <rect x="-4" y="-18" width="8" height="6" rx="2" fill="#FF3EA5" opacity="0.2" />
        <rect x="-4" y="12" width="8" height="6" rx="2" fill="#FF3EA5" opacity="0.2" />
        <circle cx="0" cy="0" r="16" fill="#FF3EA5" opacity="0">
          <animate attributeName="opacity" values="0;0.15;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Laptop */}
      <g transform="translate(135, 105)">
        <rect x="-20" y="-15" width="40" height="25" rx="3" fill="#1a1a2e" stroke="#00C9B7" strokeWidth="1.2" opacity="0.7" />
        <rect x="-25" y="10" width="50" height="4" rx="2" fill="#1a1a2e" stroke="#00C9B7" strokeWidth="0.8" opacity="0.5" />
        <circle cx="0" cy="-3" r="20" fill="#00C9B7" opacity="0">
          <animate attributeName="opacity" values="0;0.12;0" dur="3s" begin="2s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="0" textAnchor="middle" fill="#00C9B7" fontSize="5" opacity="0.5">AI</text>
      </g>

      {/* Connecting lines between all devices */}
      <line x1="52" y1="45" x2="88" y2="42" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="112" y1="42" x2="142" y2="42" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="50" y1="55" x2="65" y2="95" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="110" y1="55" x2="130" y2="92" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" strokeDasharray="2 2" />

      {/* Sparkles */}
      <circle cx="10" cy="15" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="85" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// ─── LESSON 1: AI vs. the Hype Machine ──────────────────────────────────

/**
 * m1-autocomplete-parrot
 * A phone screen with text bubbles, autocomplete suggestion bar glowing,
 * and sparkles as words fill in.
 */
export function M1AutocompleteParrot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#1368CE" opacity="0.06">
        <animate attributeName="opacity" values="0.04;0.08;0.04" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Phone body */}
      <rect x="55" y="15" width="90" height="130" rx="14" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1.5" opacity="0.9" />
      <rect x="60" y="25" width="80" height="110" rx="8" fill="#0d0d1a" />

      {/* Text bubble 1 — user */}
      <rect x="85" y="32" width="50" height="14" rx="7" fill="#1368CE" opacity="0.6" />
      <rect x="90" y="36" width="30" height="3" rx="1.5" fill="white" opacity="0.5" />
      <rect x="90" y="41" width="20" height="2" rx="1" fill="white" opacity="0.3" />

      {/* Text bubble 2 — AI response */}
      <rect x="65" y="52" width="55" height="18" rx="7" fill="#26890C" opacity="0.5" />
      <rect x="70" y="57" width="35" height="3" rx="1.5" fill="white" opacity="0.5" />
      <rect x="70" y="62" width="25" height="2" rx="1" fill="white" opacity="0.3" />

      {/* Autocomplete bar — the star of the show */}
      <rect x="65" y="78" width="70" height="16" rx="8" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="65" y="78" width="70" height="16" rx="8" stroke="#FFA602" strokeWidth="1" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </rect>

      {/* Autocomplete text filling in */}
      <rect x="72" y="83" width="0" height="4" rx="2" fill="#FFA602" opacity="0.8">
        <animate attributeName="width" values="0;50;50;0" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Cursor blink in autocomplete */}
      <rect x="72" y="82" width="2" height="7" rx="1" fill="#FFA602">
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;50,0;50,0;0,0" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Suggestion chips below bar */}
      <rect x="65" y="98" width="20" height="8" rx="4" fill="#1368CE" opacity="0.2" />
      <rect x="88" y="98" width="22" height="8" rx="4" fill="#26890C" opacity="0.2" />
      <rect x="113" y="98" width="18" height="8" rx="4" fill="#E21B3C" opacity="0.2" />

      {/* Sparkles around the phone */}
      <circle cx="42" cy="40" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="158" cy="55" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2.5;1" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="48" cy="120" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2;1" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="110" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;3;1" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Floating "..." prediction dots */}
      <circle cx="110" cy="118" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="118" cy="118" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="126" cy="118" r="2" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-headlines-vs-real
 * Split screen: wild newspaper headlines on left, calm reality on right,
 * with a divider that pulses.
 */
export function M1HeadlinesVsReal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Left side — HYPE */}
      <rect x="10" y="20" width="82" height="120" rx="8" fill="#E21B3C" opacity="0.08" />

      {/* Hype headlines — jagged, dramatic */}
      <rect x="18" y="30" width="60" height="6" rx="2" fill="#E21B3C" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="18" y="40" width="50" height="4" rx="1.5" fill="#E21B3C" opacity="0.3" />
      <rect x="18" y="48" width="55" height="4" rx="1.5" fill="#E21B3C" opacity="0.3" />

      {/* Explosion / alarm icon on hype side */}
      <polygon points="50,68 44,80 56,80" fill="#E21B3C" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
      </polygon>
      <line x1="50" y1="72" x2="50" y2="76" stroke="#FFA602" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="50" cy="78" r="0.8" fill="#FFA602" />

      {/* More hype lines */}
      <rect x="18" y="90" width="65" height="5" rx="2" fill="#FF3EA5" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.8s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      <rect x="18" y="99" width="45" height="3" rx="1.5" fill="#E21B3C" opacity="0.25" />
      <rect x="18" y="106" width="55" height="3" rx="1.5" fill="#E21B3C" opacity="0.25" />

      {/* HYPE label */}
      <text x="50" y="132" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.7">HYPE</text>

      {/* Center divider — pulsing */}
      <line x1="100" y1="25" x2="100" y2="135" stroke="white" strokeWidth="1" opacity="0.15" />
      <line x1="100" y1="25" x2="100" y2="135" stroke="#FFA602" strokeWidth="2" opacity="0.3" strokeDasharray="4 4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </line>

      {/* VS circle */}
      <circle cx="100" cy="80" r="12" fill="#0d0d1a" stroke="#FFA602" strokeWidth="1.5" />
      <text x="100" y="84" textAnchor="middle" fill="#FFA602" fontSize="8" fontWeight="bold">VS</text>

      {/* Right side — REAL */}
      <rect x="108" y="20" width="82" height="120" rx="8" fill="#26890C" opacity="0.08" />

      {/* Calm reality text */}
      <rect x="116" y="30" width="55" height="5" rx="2" fill="#26890C" opacity="0.5" />
      <rect x="116" y="39" width="65" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
      <rect x="116" y="46" width="50" height="3" rx="1.5" fill="#26890C" opacity="0.25" />

      {/* Checkmark icon on real side */}
      <circle cx="148" cy="72" r="10" fill="#26890C" opacity="0.15" />
      <polyline points="142,72 146,76 155,67" stroke="#26890C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </polyline>

      {/* More reality text */}
      <rect x="116" y="90" width="60" height="4" rx="2" fill="#00C9B7" opacity="0.4" />
      <rect x="116" y="98" width="50" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
      <rect x="116" y="105" width="55" height="3" rx="1.5" fill="#26890C" opacity="0.25" />

      {/* REAL label */}
      <text x="148" y="132" textAnchor="middle" fill="#26890C" fontSize="8" fontWeight="bold" opacity="0.7">REAL</text>

      {/* Sparkles */}
      <circle cx="30" cy="18" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="15" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="150" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-why-hype-matters
 * A person-shaped silhouette with a shield, deflecting incoming hype arrows.
 */
export function M1WhyHypeMatters({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="85" rx="80" ry="65" fill="#00C9B7" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3.5s" repeatCount="indefinite" />
      </ellipse>

      {/* Person silhouette — simple stylized */}
      <circle cx="100" cy="50" r="14" fill="#1368CE" opacity="0.3" />
      <ellipse cx="100" cy="90" rx="18" ry="28" fill="#1368CE" opacity="0.2" />

      {/* Shield in front of person */}
      <path d="M80 55 L80 90 Q80 110 100 115 Q120 110 120 90 L120 55 Q100 48 80 55Z" fill="#26890C" fillOpacity="0.2" stroke="#26890C" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M80 55 L80 90 Q80 110 100 115 Q120 110 120 90 L120 55 Q100 48 80 55Z" fill="none" stroke="#00C9B7" strokeWidth="1" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      {/* Shield checkmark */}
      <polyline points="92,82 98,88 110,72" stroke="#26890C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />

      {/* Incoming hype arrows from left — bouncing off */}
      <g opacity="0.6">
        <line x1="15" y1="50" x2="65" y2="70" stroke="#E21B3C" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="x2" values="65;72;65" dur="1.5s" repeatCount="indefinite" />
        </line>
        <polygon points="65,70 60,65 62,72" fill="#E21B3C">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
        </polygon>
      </g>
      <g opacity="0.5">
        <line x1="20" y1="90" x2="68" y2="85" stroke="#FF3EA5" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="x2" values="68;75;68" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
        </line>
        <polygon points="68,85 63,80 64,88" fill="#FF3EA5">
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Incoming from right */}
      <g opacity="0.5">
        <line x1="185" y1="55" x2="135" y2="72" stroke="#E21B3C" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="x2" values="135;128;135" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
        </line>
        <polygon points="135,72 140,67 138,75" fill="#E21B3C">
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Deflected sparks */}
      <circle cx="75" cy="65" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="125" cy="68" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2.5;1" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="78" cy="88" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Word labels — hype words bouncing away */}
      <text x="30" y="42" fill="#E21B3C" fontSize="6" opacity="0.4" fontWeight="bold">
        DOOM!
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </text>
      <text x="155" y="45" fill="#FF3EA5" fontSize="5" opacity="0.3" fontWeight="bold">
        MAGIC!
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.3s" begin="0.7s" repeatCount="indefinite" />
      </text>
      <text x="25" y="110" fill="#E21B3C" fontSize="5" opacity="0.3" fontWeight="bold">
        PANIC!
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.1s" begin="0.4s" repeatCount="indefinite" />
      </text>

      {/* Ground sparkles */}
      <circle cx="60" cy="140" r="1" fill="#FFA602">
        <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="145" r="1.2" fill="#00C9B7">
        <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-quick-check-l1
 * Quiz/brain icon with question marks and a glowing lightbulb.
 */
export function M1QuickCheckL1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Brain shape — stylized */}
      <path d="M80 60 Q60 50 65 35 Q70 20 90 25 Q100 15 115 25 Q135 20 140 35 Q145 50 125 60 Q130 75 120 85 Q100 95 85 85 Q75 75 80 60Z" fill="#FF3EA5" fillOpacity="0.1" stroke="#FF3EA5" strokeWidth="1.5" opacity="0.3" />

      {/* Brain center line */}
      <path d="M100 28 Q98 50 100 60 Q102 70 100 85" stroke="#FF3EA5" strokeWidth="1" opacity="0.2" fill="none" />

      {/* Question marks floating */}
      <text x="50" y="55" fill="#FFA602" fontSize="16" fontWeight="bold" opacity="0.5">
        ?
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2s" repeatCount="indefinite" />
      </text>
      <text x="145" y="50" fill="#1368CE" fontSize="14" fontWeight="bold" opacity="0.4">
        ?
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </text>
      <text x="40" y="95" fill="#00C9B7" fontSize="12" fontWeight="bold" opacity="0.3">
        ?
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </text>

      {/* Lightbulb below brain */}
      <ellipse cx="100" cy="115" rx="10" ry="12" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="100" cy="115" rx="10" ry="12" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.5" />
      <rect x="96" y="126" width="8" height="5" rx="2" fill="#FFA602" opacity="0.3" />

      {/* Light rays from bulb */}
      <line x1="100" y1="98" x2="100" y2="93" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="85" y1="108" x2="80" y2="105" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
      </line>
      <line x1="115" y1="108" x2="120" y2="105" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
      </line>

      {/* Sparkles */}
      <circle cx="35" cy="30" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="168" cy="35" r="1" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="130" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-key-takeaway-l1
 * A key icon with a glowing "AI = Autocomplete" label, sparkles.
 */
export function M1KeyTakeawayL1({ className }: { className?: string }) {
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

      {/* Label floating above */}
      <rect x="45" y="25" width="110" height="22" rx="11" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="40" textAnchor="middle" fill="#00C9B7" fontSize="8" fontWeight="bold" opacity="0.7">
        AI = Smart Autocomplete
      </text>

      {/* Downward arrow from label to key */}
      <line x1="100" y1="48" x2="100" y2="58" stroke="#00C9B7" strokeWidth="1" opacity="0.3" />
      <polygon points="96,56 100,62 104,56" fill="#00C9B7" opacity="0.3" />

      {/* Glowing aura around key */}
      <circle cx="70" cy="70" r="30" fill="none" stroke="#FFA602" strokeWidth="0.5" opacity="0.15">
        <animate attributeName="r" values="28;34;28" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="30" cy="40" r="2" fill="#FF3EA5">
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


// ─── LESSON 2: AI vs. Automation ─────────────────────────────────────────

/**
 * m1-dishwasher-vs-chef
 * Left: a rigid dishwasher with mechanical cycle arrows. Right: a chef hat with creative swirls.
 */
export function M1DishwasherVsChef({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="95" ry="70" fill="#1368CE" opacity="0.04" />

      {/* LEFT: Dishwasher — boxy, mechanical */}
      <rect x="15" y="40" width="65" height="70" rx="6" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />
      {/* Door */}
      <rect x="20" y="45" width="55" height="40" rx="4" fill="#1368CE" fillOpacity="0.05" stroke="#1368CE" strokeWidth="1" opacity="0.2" />
      {/* Control panel dots */}
      <circle cx="30" cy="97" r="3" fill="#1368CE" opacity="0.3" />
      <circle cx="40" cy="97" r="3" fill="#26890C" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="97" r="3" fill="#1368CE" opacity="0.2" />

      {/* Cycle arrows — rigid, repeating */}
      <path d="M30 65 A12 12 0 1 1 60 65" fill="none" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 2">
        <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
      </path>
      <polygon points="60,65 57,60 63,62" fill="#1368CE" opacity="0.4" />

      {/* LABEL */}
      <text x="47" y="128" textAnchor="middle" fill="#1368CE" fontSize="7" fontWeight="bold" opacity="0.5">RULES</text>

      {/* CENTER: VS divider */}
      <line x1="100" y1="30" x2="100" y2="130" stroke="white" strokeWidth="0.5" opacity="0.1" />
      <circle cx="100" cy="80" r="10" fill="#0d0d1a" stroke="#FFA602" strokeWidth="1.5" />
      <text x="100" y="84" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold">VS</text>

      {/* RIGHT: Chef — hat, creative swirls */}
      {/* Chef hat */}
      <ellipse cx="150" cy="50" rx="22" ry="8" fill="#FFA602" opacity="0.15" />
      <rect x="133" y="44" width="34" height="18" rx="4" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1.5" opacity="0.35" />
      <ellipse cx="140" cy="44" rx="7" ry="8" fill="#FFA602" opacity="0.12" />
      <ellipse cx="150" cy="42" rx="7" ry="9" fill="#FFA602" opacity="0.12" />
      <ellipse cx="160" cy="44" rx="7" ry="8" fill="#FFA602" opacity="0.12" />

      {/* Creative thought swirls */}
      <path d="M135 75 Q125 70 128 60" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M145 80 Q138 72 142 65" fill="none" stroke="#00C9B7" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </path>
      <path d="M155 82 Q165 75 160 68" fill="none" stroke="#FF3EA5" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.2s" begin="1s" repeatCount="indefinite" />
      </path>

      {/* Plate with food */}
      <ellipse cx="150" cy="100" rx="25" ry="8" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <path d="M140 97 Q145 88 150 92 Q155 88 160 97" fill="#E21B3C" opacity="0.2" />

      {/* LABEL */}
      <text x="150" y="128" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.5">JUDGMENT</text>

      {/* Sparkles */}
      <circle cx="10" cy="25" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="30" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-automation-real-life
 * Gears and a conveyor belt with identical items — rigid, repeatable, mechanical.
 */
export function M1AutomationRealLife({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#1368CE" opacity="0.04" />

      {/* Conveyor belt */}
      <rect x="20" y="95" width="160" height="12" rx="6" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      {/* Belt rollers */}
      <circle cx="35" cy="101" r="4" fill="#1368CE" fillOpacity="0.15" stroke="#1368CE" strokeWidth="1" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="0 35 101;360 35 101" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="101" r="4" fill="#1368CE" fillOpacity="0.15" stroke="#1368CE" strokeWidth="1" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="0 100 101;360 100 101" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="101" r="4" fill="#1368CE" fillOpacity="0.15" stroke="#1368CE" strokeWidth="1" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="0 165 101;360 165 101" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Belt movement lines */}
      <line x1="30" y1="95" x2="170" y2="95" stroke="#1368CE" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="30" y1="107" x2="170" y2="107" stroke="#1368CE" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2s" repeatCount="indefinite" />
      </line>

      {/* Identical items on belt — boxes moving right */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="-60,0;160,0" dur="6s" repeatCount="indefinite" />
        <rect x="40" y="78" width="14" height="14" rx="3" fill="#26890C" fillOpacity="0.3" stroke="#26890C" strokeWidth="1" opacity="0.4" />
        <rect x="90" y="78" width="14" height="14" rx="3" fill="#26890C" fillOpacity="0.3" stroke="#26890C" strokeWidth="1" opacity="0.4" />
        <rect x="140" y="78" width="14" height="14" rx="3" fill="#26890C" fillOpacity="0.3" stroke="#26890C" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Gear — top left */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 55 45;360 55 45" dur="4s" repeatCount="indefinite" />
        <circle cx="55" cy="45" r="16" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />
        <circle cx="55" cy="45" r="8" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.25" />
        {/* Gear teeth */}
        <rect x="52" y="26" width="6" height="6" rx="1" fill="#1368CE" opacity="0.25" />
        <rect x="52" y="58" width="6" height="6" rx="1" fill="#1368CE" opacity="0.25" />
        <rect x="36" y="42" width="6" height="6" rx="1" fill="#1368CE" opacity="0.25" />
        <rect x="68" y="42" width="6" height="6" rx="1" fill="#1368CE" opacity="0.25" />
      </g>

      {/* Gear — top right — counter-rotating */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="360 145 45;0 145 45" dur="4s" repeatCount="indefinite" />
        <circle cx="145" cy="45" r="12" fill="#FFA602" fillOpacity="0.08" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
        <circle cx="145" cy="45" r="5" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.25" />
        <rect x="143" y="30" width="4" height="5" rx="1" fill="#FFA602" opacity="0.25" />
        <rect x="143" y="55" width="4" height="5" rx="1" fill="#FFA602" opacity="0.25" />
        <rect x="130" y="43" width="5" height="4" rx="1" fill="#FFA602" opacity="0.25" />
        <rect x="155" y="43" width="5" height="4" rx="1" fill="#FFA602" opacity="0.25" />
      </g>

      {/* Thermostat icon */}
      <rect x="92" y="30" width="16" height="30" rx="8" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      <rect x="97" y="42" width="6" height="14" rx="3" fill="#E21B3C" opacity="0.3">
        <animate attributeName="height" values="8;14;8" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y" values="48;42;48" dur="3s" repeatCount="indefinite" />
      </rect>
      <circle cx="100" cy="52" r="5" fill="#E21B3C" opacity="0.2" />

      {/* Rule arrow — IF → THEN */}
      <text x="50" y="130" fill="#1368CE" fontSize="6" opacity="0.4" fontWeight="bold">IF</text>
      <line x1="60" y1="128" x2="130" y2="128" stroke="#1368CE" strokeWidth="1" opacity="0.2" strokeDasharray="3 2" />
      <polygon points="130,126 136,128 130,130" fill="#1368CE" opacity="0.3" />
      <text x="138" y="130" fill="#26890C" fontSize="6" opacity="0.4" fontWeight="bold">THEN</text>

      {/* Sparkles */}
      <circle cx="15" cy="20" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="25" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-ai-real-life
 * A brain / neural net shape with diverse messy inputs funneling into a clear output.
 */
export function M1AiRealLife({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="85" ry="70" fill="#26890C" opacity="0.04" />

      {/* Central brain / processing circle */}
      <circle cx="100" cy="75" r="28" fill="#26890C" fillOpacity="0.08" stroke="#26890C" strokeWidth="1.5" opacity="0.3">
        <animate attributeName="r" values="26;30;26" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="75" r="18" fill="none" stroke="#00C9B7" strokeWidth="0.8" opacity="0.2">
        <animate attributeName="r" values="16;20;16" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Neural connections inside brain */}
      <circle cx="92" cy="68" r="3" fill="#26890C" opacity="0.3" />
      <circle cx="108" cy="68" r="3" fill="#26890C" opacity="0.3" />
      <circle cx="100" cy="80" r="3" fill="#00C9B7" opacity="0.4" />
      <circle cx="94" cy="85" r="2" fill="#26890C" opacity="0.3" />
      <circle cx="107" cy="84" r="2" fill="#26890C" opacity="0.3" />
      <line x1="92" y1="68" x2="100" y2="80" stroke="#26890C" strokeWidth="0.8" opacity="0.3" />
      <line x1="108" y1="68" x2="100" y2="80" stroke="#26890C" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="80" x2="94" y2="85" stroke="#00C9B7" strokeWidth="0.8" opacity="0.25" />
      <line x1="100" y1="80" x2="107" y2="84" stroke="#00C9B7" strokeWidth="0.8" opacity="0.25" />

      {/* Messy inputs from left */}
      <g opacity="0.5">
        {/* Email icon */}
        <rect x="15" y="35" width="18" height="12" rx="2" fill="none" stroke="#E21B3C" strokeWidth="1" />
        <polyline points="15,35 24,43 33,35" fill="none" stroke="#E21B3C" strokeWidth="1" />
        <line x1="33" y1="41" x2="72" y2="65" stroke="#E21B3C" strokeWidth="0.8" strokeDasharray="2 2">
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
        </line>
      </g>

      <g opacity="0.5">
        {/* Photo icon */}
        <rect x="12" y="70" width="16" height="14" rx="2" fill="none" stroke="#FF3EA5" strokeWidth="1" />
        <circle cx="20" cy="75" r="3" fill="none" stroke="#FF3EA5" strokeWidth="0.8" />
        <polyline points="12,82 18,77 22,80 28,75" fill="none" stroke="#FF3EA5" strokeWidth="0.8" />
        <line x1="28" y1="77" x2="72" y2="75" stroke="#FF3EA5" strokeWidth="0.8" strokeDasharray="2 2">
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="2.3s" repeatCount="indefinite" />
        </line>
      </g>

      <g opacity="0.5">
        {/* Voice wave */}
        <path d="M18 105 Q22 100 26 105 Q30 110 34 105" fill="none" stroke="#FFA602" strokeWidth="1">
          <animate attributeName="d" values="M18 105 Q22 100 26 105 Q30 110 34 105;M18 105 Q22 110 26 105 Q30 100 34 105;M18 105 Q22 100 26 105 Q30 110 34 105" dur="1.5s" repeatCount="indefinite" />
        </path>
        <line x1="34" y1="105" x2="72" y2="82" stroke="#FFA602" strokeWidth="0.8" strokeDasharray="2 2">
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="1.8s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Clean output on right */}
      <line x1="128" y1="75" x2="155" y2="75" stroke="#26890C" strokeWidth="1.5" opacity="0.4" />
      <polygon points="155,72 162,75 155,78" fill="#26890C" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Output — a clean document */}
      <rect x="165" y="58" width="25" height="34" rx="4" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <rect x="170" y="64" width="15" height="2" rx="1" fill="#26890C" opacity="0.3" />
      <rect x="170" y="70" width="12" height="2" rx="1" fill="#26890C" opacity="0.25" />
      <rect x="170" y="76" width="14" height="2" rx="1" fill="#26890C" opacity="0.25" />
      <rect x="170" y="82" width="10" height="2" rx="1" fill="#26890C" opacity="0.2" />
      <polyline points="172,84 175,87 182,78" stroke="#00C9B7" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Label */}
      <text x="100" y="120" textAnchor="middle" fill="#26890C" fontSize="7" opacity="0.4" fontWeight="bold">MESSY IN → CLEAR OUT</text>

      {/* Sparkles */}
      <circle cx="50" cy="20" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="130" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="40" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-sort-these-out
 * Two buckets with items being sorted — drag/drop visual metaphor.
 */
export function M1SortTheseOut({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#FFA602" opacity="0.04" />

      {/* Left bucket — Automation (blue) */}
      <path d="M25 70 L25 125 Q25 135 35 135 L70 135 Q80 135 80 125 L80 70" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />
      <rect x="25" y="65" width="55" height="8" rx="4" fill="#1368CE" opacity="0.15" />
      {/* Gear icon in bucket */}
      <circle cx="52" cy="105" r="10" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.2">
        <animateTransform attributeName="transform" type="rotate" values="0 52 105;360 52 105" dur="6s" repeatCount="indefinite" />
      </circle>
      <text x="52" y="135" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="bold" opacity="0.4" dy="14">AUTO</text>

      {/* Right bucket — AI (green) */}
      <path d="M120 70 L120 125 Q120 135 130 135 L165 135 Q175 135 175 125 L175 70" fill="#26890C" fillOpacity="0.08" stroke="#26890C" strokeWidth="1.5" opacity="0.3" />
      <rect x="120" y="65" width="55" height="8" rx="4" fill="#26890C" opacity="0.15" />
      {/* Brain icon in bucket */}
      <circle cx="147" cy="105" r="10" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.2" />
      <path d="M142 102 Q147 95 152 102 Q147 108 142 102" fill="none" stroke="#00C9B7" strokeWidth="0.8" opacity="0.3" />
      <text x="147" y="135" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="bold" opacity="0.4" dy="14">AI</text>

      {/* Floating items being sorted */}
      {/* Item 1 — dropping into left */}
      <rect x="40" y="20" width="26" height="14" rx="5" fill="#FFA602" fillOpacity="0.3" stroke="#FFA602" strokeWidth="1" opacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,40;0,40;0,0" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.2;0;0.4" dur="4s" repeatCount="indefinite" />
      </rect>
      <rect x="45" y="25" width="16" height="2" rx="1" fill="#FFA602" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,40;0,40;0,0" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.2;0;0.5" dur="4s" repeatCount="indefinite" />
      </rect>

      {/* Item 2 — dropping into right */}
      <rect x="132" y="25" width="26" height="14" rx="5" fill="#FF3EA5" fillOpacity="0.3" stroke="#FF3EA5" strokeWidth="1" opacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,35;0,35;0,0" dur="3.5s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.2;0;0.4" dur="3.5s" begin="1s" repeatCount="indefinite" />
      </rect>
      <rect x="137" y="30" width="16" height="2" rx="1" fill="#FF3EA5" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,35;0,35;0,0" dur="3.5s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.2;0;0.5" dur="3.5s" begin="1s" repeatCount="indefinite" />
      </rect>

      {/* Center arrow / hand icon */}
      <circle cx="100" cy="40" r="8" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M96 40 L100 36 L104 40 M100 36 L100 46" fill="none" stroke="#FFA602" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" dur="1.5s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="10" cy="15" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="20" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-why-matters-automation
 * Two paths diverging: a cheap/simple automation path and a powerful AI path.
 */
export function M1WhyMattersAutomation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#00C9B7" opacity="0.04" />

      {/* Start point */}
      <circle cx="100" cy="25" r="8" fill="#FFA602" fillOpacity="0.2" stroke="#FFA602" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="29" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="bold" opacity="0.7">?</text>

      {/* Fork — left path: Automation */}
      <path d="M92 32 Q60 55 45 80 Q35 100 40 120" fill="none" stroke="#1368CE" strokeWidth="2" opacity="0.3" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Left destination — simple, cheap */}
      <rect x="22" y="118" width="40" height="24" rx="6" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      <text x="42" y="128" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.5">Simple</text>
      <text x="42" y="136" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.5">& Cheap</text>
      {/* Dollar sign */}
      <text x="42" y="112" textAnchor="middle" fill="#26890C" fontSize="10" opacity="0.4">$</text>

      {/* Fork — right path: AI */}
      <path d="M108 32 Q140 55 155 80 Q165 100 160 120" fill="none" stroke="#26890C" strokeWidth="2" opacity="0.3" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Right destination — powerful, flexible */}
      <rect x="138" y="118" width="44" height="24" rx="6" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <text x="160" y="128" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.5">Powerful</text>
      <text x="160" y="136" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.5">& Flexible</text>
      {/* Brain icon */}
      <circle cx="160" cy="110" r="6" fill="none" stroke="#00C9B7" strokeWidth="1" opacity="0.3" />
      <path d="M157 109 Q160 106 163 109" fill="none" stroke="#00C9B7" strokeWidth="0.8" opacity="0.4" />

      {/* Center label */}
      <text x="100" y="80" textAnchor="middle" fill="white" fontSize="7" opacity="0.2" fontWeight="bold">RIGHT TOOL</text>
      <text x="100" y="90" textAnchor="middle" fill="white" fontSize="7" opacity="0.2" fontWeight="bold">RIGHT JOB</text>

      {/* Sparkles */}
      <circle cx="20" cy="50" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="55" r="1" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-quick-check-l2
 * Clipboard with checkmarks and a timer.
 */
export function M1QuickCheckL2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Clipboard body */}
      <rect x="60" y="30" width="80" height="100" rx="8" fill="#1368CE" fillOpacity="0.06" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />
      {/* Clipboard clip */}
      <rect x="85" y="22" width="30" height="14" rx="5" fill="#FFA602" fillOpacity="0.2" stroke="#FFA602" strokeWidth="1" opacity="0.4" />

      {/* Checklist items */}
      {/* Item 1 — checked */}
      <rect x="72" y="48" width="10" height="10" rx="2" fill="none" stroke="#26890C" strokeWidth="1.5" opacity="0.5" />
      <polyline points="74,53 77,56 82,50" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </polyline>
      <rect x="88" y="50" width="40" height="4" rx="2" fill="white" opacity="0.1" />

      {/* Item 2 — checked */}
      <rect x="72" y="66" width="10" height="10" rx="2" fill="none" stroke="#26890C" strokeWidth="1.5" opacity="0.5" />
      <polyline points="74,71 77,74 82,68" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </polyline>
      <rect x="88" y="68" width="35" height="4" rx="2" fill="white" opacity="0.1" />

      {/* Item 3 — in progress */}
      <rect x="72" y="84" width="10" height="10" rx="2" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      <rect x="88" y="86" width="38" height="4" rx="2" fill="white" opacity="0.1" />
      {/* Blinking cursor */}
      <rect x="82" y="86" width="2" height="6" rx="1" fill="#FFA602">
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
      </rect>

      {/* Item 4 — empty */}
      <rect x="72" y="102" width="10" height="10" rx="2" fill="none" stroke="white" strokeWidth="1" opacity="0.15" />
      <rect x="88" y="104" width="30" height="4" rx="2" fill="white" opacity="0.06" />

      {/* Sparkles */}
      <circle cx="40" cy="45" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="50" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="120" r="1" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="45" cy="125" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-key-takeaway-l2
 * Light switch (automation) next to a balance scale (judgment) — both glowing.
 */
export function M1KeyTakeawayL2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="80" ry="65" fill="#FFA602" opacity="0.04" />

      {/* Light switch — automation side */}
      <rect x="30" y="40" width="30" height="55" rx="6" fill="#1368CE" fillOpacity="0.08" stroke="#1368CE" strokeWidth="1.5" opacity="0.3" />
      {/* Switch toggle — in ON position */}
      <rect x="38" y="48" width="14" height="22" rx="4" fill="#1368CE" fillOpacity="0.2" stroke="#1368CE" strokeWidth="1" opacity="0.4" />
      <circle cx="45" cy="55" r="4" fill="#26890C" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="45" y="82" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.4">ON/OFF</text>
      <text x="45" y="108" textAnchor="middle" fill="#1368CE" fontSize="6" opacity="0.4" fontWeight="bold">Switch</text>

      {/* Plus sign between */}
      <text x="87" y="72" textAnchor="middle" fill="#FFA602" fontSize="14" opacity="0.3">+</text>

      {/* Balance scale — judgment side */}
      {/* Center pole */}
      <line x1="145" y1="42" x2="145" y2="90" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      <polygon points="142,42 145,36 148,42" fill="#FFA602" opacity="0.4" />
      {/* Base */}
      <rect x="135" y="88" width="20" height="4" rx="2" fill="#FFA602" opacity="0.2" />
      {/* Cross beam */}
      <line x1="118" y1="52" x2="172" y2="52" stroke="#FFA602" strokeWidth="1.5" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="-3 145 52;3 145 52;-3 145 52" dur="3s" repeatCount="indefinite" />
      </line>
      {/* Left pan */}
      <path d="M118 52 L112 65 L126 65 Z" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="-3 145 52;3 145 52;-3 145 52" dur="3s" repeatCount="indefinite" />
      </path>
      {/* Right pan */}
      <path d="M172 52 L166 65 L180 65 Z" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="-3 145 52;3 145 52;-3 145 52" dur="3s" repeatCount="indefinite" />
      </path>
      <text x="145" y="108" textAnchor="middle" fill="#FFA602" fontSize="6" opacity="0.4" fontWeight="bold">Judgment</text>

      {/* Bottom tagline */}
      <rect x="30" y="122" width="140" height="18" rx="9" fill="white" fillOpacity="0.03" stroke="#00C9B7" strokeWidth="1" opacity="0.15" />
      <text x="100" y="134" textAnchor="middle" fill="#00C9B7" fontSize="6" opacity="0.5" fontWeight="bold">Best systems use BOTH</text>

      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="188" cy="35" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="130" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


// ─── LESSON 3: How ChatGPT Actually Works ────────────────────────────────

/**
 * m1-wellread-parrot
 * A colorful parrot on a pile of books, with text fragments floating around it.
 */
export function M1WellreadParrot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#26890C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3.5s" repeatCount="indefinite" />
      </ellipse>

      {/* Book stack */}
      <rect x="55" y="100" width="90" height="10" rx="2" fill="#1368CE" opacity="0.2" />
      <rect x="58" y="92" width="84" height="10" rx="2" fill="#E21B3C" opacity="0.2" />
      <rect x="61" y="84" width="78" height="10" rx="2" fill="#FFA602" opacity="0.2" />
      <rect x="64" y="76" width="72" height="10" rx="2" fill="#26890C" opacity="0.2" />

      {/* Parrot — stylized, sitting on books */}
      {/* Body */}
      <ellipse cx="100" cy="58" rx="16" ry="20" fill="#26890C" opacity="0.3" />
      {/* Head */}
      <circle cx="100" cy="38" r="12" fill="#00C9B7" opacity="0.3" />
      {/* Eye */}
      <circle cx="105" cy="35" r="3" fill="white" opacity="0.6" />
      <circle cx="106" cy="35" r="1.5" fill="#0d0d1a" />
      {/* Beak */}
      <path d="M112 38 L120 40 L112 42" fill="#FFA602" opacity="0.6" />
      {/* Wing */}
      <ellipse cx="88" cy="55" rx="10" ry="15" fill="#1368CE" opacity="0.2" transform="rotate(-15 88 55)" />
      {/* Tail feathers */}
      <path d="M95 72 Q85 85 80 95" stroke="#E21B3C" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M98 72 Q90 88 88 98" stroke="#FFA602" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M100 74 Q95 90 95 100" stroke="#26890C" strokeWidth="2" fill="none" opacity="0.3" />

      {/* Floating text fragments */}
      <rect x="20" y="30" width="25" height="4" rx="2" fill="#1368CE" opacity="0.2">
        <animateTransform attributeName="transform" type="translate" values="0,0;3,-2;0,0" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="22" y="38" width="18" height="3" rx="1.5" fill="#1368CE" opacity="0.15">
        <animateTransform attributeName="transform" type="translate" values="0,0;2,-1;0,0" dur="3.5s" repeatCount="indefinite" />
      </rect>

      <rect x="155" y="25" width="22" height="4" rx="2" fill="#FF3EA5" opacity="0.2">
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,-3;0,0" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <rect x="158" y="33" width="16" height="3" rx="1.5" fill="#FF3EA5" opacity="0.15">
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,-2;0,0" dur="3.2s" repeatCount="indefinite" />
      </rect>

      <rect x="30" y="115" width="20" height="3" rx="1.5" fill="#FFA602" opacity="0.15">
        <animateTransform attributeName="transform" type="translate" values="0,0;2,1;0,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      <rect x="150" y="118" width="24" height="3" rx="1.5" fill="#00C9B7" opacity="0.15">
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,1;0,0" dur="2.5s" begin="1s" repeatCount="indefinite" />
      </rect>

      {/* Speech bubble from parrot */}
      <path d="M120 30 Q135 20 155 22 Q165 22 165 32 Q165 40 155 42 L130 42 L122 35Z" fill="white" fillOpacity="0.05" stroke="#00C9B7" strokeWidth="1" opacity="0.2" />
      <rect x="132" y="28" width="25" height="3" rx="1.5" fill="#00C9B7" opacity="0.3">
        <animate attributeName="width" values="0;25;25;0" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="132" y="34" width="18" height="2.5" rx="1.2" fill="#00C9B7" opacity="0.2">
        <animate attributeName="width" values="0;18;18;0" dur="3s" begin="0.3s" repeatCount="indefinite" />
      </rect>

      {/* Sparkles */}
      <circle cx="15" cy="55" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="60" r="1" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="145" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-sounding-human
 * A wave of human writing text flowing into an AI that mirrors it back — pattern matching visual.
 */
export function M1SoundingHuman({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#1368CE" opacity="0.04" />

      {/* Left — massive text wall (human writing) */}
      <rect x="10" y="20" width="60" height="120" rx="6" fill="#1368CE" fillOpacity="0.06" stroke="#1368CE" strokeWidth="1" opacity="0.2" />
      {/* Text lines */}
      {[28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126].map((y, i) => (
        <rect key={i} x="16" y={y} width={30 + (i % 3) * 8} height="3" rx="1.5" fill="#1368CE" opacity={0.12 + (i % 4) * 0.03} />
      ))}
      <text x="40" y="18" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.3">BILLIONS OF WORDS</text>

      {/* Flow arrows — text flowing right */}
      <g opacity="0.4">
        <line x1="72" y1="60" x2="88" y2="60" stroke="#FFA602" strokeWidth="1" strokeDasharray="2 2">
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="1.5s" repeatCount="indefinite" />
        </line>
        <line x1="72" y1="75" x2="88" y2="75" stroke="#FFA602" strokeWidth="1" strokeDasharray="2 2">
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
        </line>
        <line x1="72" y1="90" x2="88" y2="90" stroke="#FFA602" strokeWidth="1" strokeDasharray="2 2">
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Center — AI brain / pattern matcher */}
      <circle cx="108" cy="75" r="20" fill="#26890C" fillOpacity="0.08" stroke="#26890C" strokeWidth="1.5" opacity="0.3">
        <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* Pattern dots inside */}
      <circle cx="100" cy="70" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="108" cy="65" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="116" cy="72" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="104" cy="80" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
      </circle>
      <circle cx="112" cy="82" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
      </circle>
      {/* Connections */}
      <line x1="100" y1="70" x2="108" y2="65" stroke="#00C9B7" strokeWidth="0.5" opacity="0.3" />
      <line x1="108" y1="65" x2="116" y2="72" stroke="#00C9B7" strokeWidth="0.5" opacity="0.3" />
      <line x1="116" y1="72" x2="112" y2="82" stroke="#00C9B7" strokeWidth="0.5" opacity="0.3" />
      <line x1="104" y1="80" x2="112" y2="82" stroke="#00C9B7" strokeWidth="0.5" opacity="0.3" />
      <line x1="100" y1="70" x2="104" y2="80" stroke="#00C9B7" strokeWidth="0.5" opacity="0.3" />

      {/* PATTERNS label */}
      <text x="108" y="55" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.3">PATTERNS</text>

      {/* Output — mirrored human-sounding text */}
      <line x1="128" y1="75" x2="140" y2="75" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <polygon points="140,73 145,75 140,77" fill="#26890C" opacity="0.4" />

      <rect x="148" y="55" width="45" height="40" rx="8" fill="#26890C" fillOpacity="0.06" stroke="#26890C" strokeWidth="1" opacity="0.2" />
      {/* Output text lines */}
      <rect x="154" y="62" width="32" height="3" rx="1.5" fill="#26890C" opacity="0.25">
        <animate attributeName="width" values="0;32;32" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="154" y="69" width="28" height="3" rx="1.5" fill="#26890C" opacity="0.2">
        <animate attributeName="width" values="0;28;28" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </rect>
      <rect x="154" y="76" width="30" height="3" rx="1.5" fill="#26890C" opacity="0.2">
        <animate attributeName="width" values="0;30;30" dur="2s" begin="0.8s" repeatCount="indefinite" />
      </rect>
      <rect x="154" y="83" width="24" height="3" rx="1.5" fill="#26890C" opacity="0.15">
        <animate attributeName="width" values="0;24;24" dur="2s" begin="1.2s" repeatCount="indefinite" />
      </rect>

      {/* "Sounds human!" label */}
      <text x="170" y="50" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.3">SOUNDS HUMAN</text>

      {/* Sparkles */}
      <circle cx="90" cy="20" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="140" r="1" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-makes-stuff-up
 * A confident-looking output with cracks/warning signs — hallucination visual.
 */
export function M1MakesStuffUp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow — warm warning */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Document with "confident" text */}
      <rect x="50" y="20" width="100" height="95" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="1" opacity="0.1" />

      {/* Text lines that look authoritative */}
      <rect x="60" y="32" width="70" height="5" rx="2" fill="#26890C" opacity="0.3" />
      <rect x="60" y="42" width="80" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="60" y="50" width="65" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="60" y="58" width="75" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="60" y="68" width="70" height="5" rx="2" fill="#26890C" opacity="0.3" />
      <rect x="60" y="78" width="80" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="60" y="86" width="60" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="60" y="94" width="72" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="60" y="102" width="50" height="4" rx="2" fill="white" opacity="0.08" />

      {/* Cracks / fractures across the document */}
      <path d="M70 45 L80 52 L75 60 L82 65" stroke="#E21B3C" strokeWidth="1" opacity="0.4" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M120 55 L115 62 L122 70 L118 80" stroke="#E21B3C" strokeWidth="1" opacity="0.35" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;0.45;0.2" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </path>
      <path d="M95 38 L100 48 L92 55" stroke="#FFA602" strokeWidth="0.8" opacity="0.3" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" begin="1s" repeatCount="indefinite" />
      </path>

      {/* Warning triangle */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2s" repeatCount="indefinite" />
        <polygon points="100,120 85,145 115,145" fill="#FFA602" fillOpacity="0.15" stroke="#FFA602" strokeWidth="1.5" opacity="0.5" />
        <text x="100" y="141" textAnchor="middle" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.7">!</text>
      </g>

      {/* "Confident but wrong" label */}
      <text x="100" y="155" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.3">SOUNDS RIGHT. MIGHT NOT BE.</text>

      {/* Floating confidence mask */}
      <circle cx="35" cy="50" r="12" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.2" />
      <path d="M30 48 Q35 43 40 48" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <circle cx="32" cy="46" r="1" fill="#26890C" opacity="0.3" />
      <circle cx="38" cy="46" r="1" fill="#26890C" opacity="0.3" />
      {/* X over the smile */}
      <line x1="28" y1="43" x2="42" y2="57" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      <line x1="42" y1="43" x2="28" y2="57" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />

      {/* Sparkles */}
      <circle cx="170" cy="30" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="100" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="120" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-how-to-use-it
 * A prompt box with arrows showing: specific input → good output; vague input → poor output.
 */
export function M1HowToUseIt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#00C9B7" opacity="0.04" />

      {/* TOP PATH: Specific prompt → good output */}
      {/* Input box — detailed */}
      <rect x="10" y="15" width="65" height="35" rx="6" fill="#26890C" fillOpacity="0.08" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      <rect x="16" y="22" width="50" height="3" rx="1.5" fill="#26890C" opacity="0.3" />
      <rect x="16" y="28" width="45" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
      <rect x="16" y="34" width="48" height="3" rx="1.5" fill="#26890C" opacity="0.2" />
      <rect x="16" y="40" width="35" height="3" rx="1.5" fill="#26890C" opacity="0.2" />
      <text x="42" y="14" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.4">SPECIFIC</text>

      {/* Arrow */}
      <line x1="78" y1="32" x2="118" y2="32" stroke="#26890C" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 2">
        <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
      </line>
      <polygon points="118,29 125,32 118,35" fill="#26890C" opacity="0.4" />

      {/* Output box — great result */}
      <rect x="128" y="15" width="62" height="35" rx="6" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="134" y="22" width="48" height="3" rx="1.5" fill="#26890C" opacity="0.35" />
      <rect x="134" y="28" width="44" height="3" rx="1.5" fill="#26890C" opacity="0.3" />
      <rect x="134" y="34" width="46" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
      <rect x="134" y="40" width="30" height="3" rx="1.5" fill="#26890C" opacity="0.2" />
      {/* Checkmark */}
      <polyline points="178,20 182,24 190,14" stroke="#26890C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* BOTTOM PATH: Vague prompt → meh output */}
      {/* Input box — sparse */}
      <rect x="10" y="90" width="65" height="35" rx="6" fill="#E21B3C" fillOpacity="0.06" stroke="#E21B3C" strokeWidth="1" opacity="0.2" />
      <rect x="16" y="102" width="20" height="3" rx="1.5" fill="#E21B3C" opacity="0.25" />
      <rect x="16" y="108" width="15" height="3" rx="1.5" fill="#E21B3C" opacity="0.15" />
      <text x="42" y="89" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.3">VAGUE</text>

      {/* Arrow */}
      <line x1="78" y1="108" x2="118" y2="108" stroke="#E21B3C" strokeWidth="1.5" opacity="0.2" strokeDasharray="3 2">
        <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
      </line>
      <polygon points="118,105 125,108 118,111" fill="#E21B3C" opacity="0.3" />

      {/* Output box — generic */}
      <rect x="128" y="90" width="62" height="35" rx="6" fill="#E21B3C" fillOpacity="0.05" stroke="#E21B3C" strokeWidth="1" opacity="0.2" />
      <rect x="134" y="98" width="40" height="3" rx="1.5" fill="#E21B3C" opacity="0.15" />
      <rect x="134" y="104" width="35" height="3" rx="1.5" fill="#E21B3C" opacity="0.1" />
      <rect x="134" y="110" width="30" height="3" rx="1.5" fill="#E21B3C" opacity="0.08" />
      {/* Meh face */}
      <circle cx="184" cy="100" r="5" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      <line x1="181" y1="101" x2="187" y2="101" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />

      {/* Center label */}
      <text x="100" y="72" textAnchor="middle" fill="#FFA602" fontSize="6" opacity="0.3" fontWeight="bold">CONTEXT IS EVERYTHING</text>

      {/* Sparkles */}
      <circle cx="100" cy="8" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="5" cy="70" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="195" cy="70" r="1" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-quick-check-l3
 * Magnifying glass over text with verification checkmarks.
 */
export function M1QuickCheckL3({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Document / answer text */}
      <rect x="45" y="25" width="110" height="80" rx="8" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="1" opacity="0.1" />
      <rect x="55" y="35" width="80" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="55" y="44" width="70" height="4" rx="2" fill="white" opacity="0.08" />
      <rect x="55" y="53" width="85" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="55" y="62" width="60" height="4" rx="2" fill="white" opacity="0.08" />
      <rect x="55" y="71" width="75" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="55" y="80" width="65" height="4" rx="2" fill="white" opacity="0.08" />
      <rect x="55" y="89" width="50" height="4" rx="2" fill="white" opacity="0.06" />

      {/* Magnifying glass */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="-5,0;5,0;-5,0" dur="4s" repeatCount="indefinite" />
        <circle cx="115" cy="60" r="20" fill="#FFA602" fillOpacity="0.06" stroke="#FFA602" strokeWidth="2" opacity="0.4" />
        <line x1="130" y1="74" x2="145" y2="90" stroke="#FFA602" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        {/* Lens highlight */}
        <path d="M105 48 Q108 45 112 47" fill="none" stroke="white" strokeWidth="1" opacity="0.15" />
      </g>

      {/* Verification checkmarks appearing */}
      <polyline points="42,38 44,40 48,36" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0;0.6;0.6;0" dur="4s" repeatCount="indefinite" />
      </polyline>
      <polyline points="42,56 44,58 48,54" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0;0.6;0.6;0" dur="4s" begin="1s" repeatCount="indefinite" />
      </polyline>
      <polyline points="42,74 44,76 48,72" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0;0.6;0.6;0" dur="4s" begin="2s" repeatCount="indefinite" />
      </polyline>

      {/* Question mark / alert on one line */}
      <text x="43" y="94" fill="#E21B3C" fontSize="8" fontWeight="bold" opacity="0.4">
        ?
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Label */}
      <text x="100" y="125" textAnchor="middle" fill="#FFA602" fontSize="6" opacity="0.3" fontWeight="bold">VERIFY WHAT MATTERS</text>

      {/* Sparkles */}
      <circle cx="30" cy="20" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="25" r="1" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="140" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-key-takeaway-l3
 * Parrot with a magnifying glass — "impressive but verify" concept.
 */
export function M1KeyTakeawayL3({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="80" ry="65" fill="#00C9B7" opacity="0.04" />

      {/* Parrot silhouette — small and centered */}
      <ellipse cx="85" cy="70" rx="14" ry="18" fill="#26890C" opacity="0.2" />
      <circle cx="85" cy="52" r="11" fill="#00C9B7" opacity="0.25" />
      <circle cx="89" cy="50" r="2.5" fill="white" opacity="0.5" />
      <circle cx="90" cy="50" r="1.2" fill="#0d0d1a" />
      <path d="M96 53 L103 55 L96 57" fill="#FFA602" opacity="0.5" />

      {/* Tail */}
      <path d="M80 82 Q72 95 70 105" stroke="#E21B3C" strokeWidth="1.5" fill="none" opacity="0.25" />
      <path d="M82 84 Q76 98 76 108" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.25" />

      {/* Magnifying glass held by parrot */}
      <circle cx="120" cy="65" r="14" fill="#FFA602" fillOpacity="0.06" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      <line x1="130" y1="75" x2="140" y2="86" stroke="#FFA602" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />

      {/* Sparkle inside magnifying glass */}
      <circle cx="118" cy="63" r="3" fill="#FFA602" opacity="0.15">
        <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Two labels */}
      <rect x="25" y="110" width="68" height="16" rx="8" fill="#26890C" fillOpacity="0.08" stroke="#26890C" strokeWidth="1" opacity="0.2" />
      <text x="59" y="121" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="bold" opacity="0.5">IMPRESSIVE</text>

      <text x="100" y="118" textAnchor="middle" fill="white" fontSize="8" opacity="0.15">+</text>

      <rect x="108" y="110" width="68" height="16" rx="8" fill="#FFA602" fillOpacity="0.08" stroke="#FFA602" strokeWidth="1" opacity="0.2" />
      <text x="142" y="121" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="bold" opacity="0.5">VERIFY</text>

      {/* Connecting line */}
      <path d="M85 88 Q85 100 59 110" fill="none" stroke="#26890C" strokeWidth="0.8" opacity="0.15" strokeDasharray="2 2" />
      <path d="M120 78 Q130 95 142 110" fill="none" stroke="#FFA602" strokeWidth="0.8" opacity="0.15" strokeDasharray="2 2" />

      {/* Sparkles */}
      <circle cx="30" cy="35" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="40" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="130" r="1" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="140" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


// ─── LESSON 4: You're Already Using AI ───────────────────────────────────

/**
 * m1-ai-already-living
 * A daily routine timeline — phone, email, Netflix, maps — all with AI sparkles.
 */
export function M1AiAlreadyLiving({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#00C9B7" opacity="0.04" />

      {/* Timeline line */}
      <line x1="30" y1="80" x2="170" y2="80" stroke="white" strokeWidth="1" opacity="0.1" />

      {/* Item 1: Email / Spam filter */}
      <circle cx="45" cy="80" r="4" fill="#1368CE" opacity="0.4" />
      <rect x="30" y="45" width="30" height="22" rx="4" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      {/* Envelope icon */}
      <rect x="36" y="50" width="18" height="12" rx="2" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.4" />
      <polyline points="36,50 45,57 54,50" fill="none" stroke="#1368CE" strokeWidth="0.8" opacity="0.4" />
      <line x1="45" y1="67" x2="45" y2="76" stroke="#1368CE" strokeWidth="0.5" opacity="0.2" />
      {/* AI sparkle */}
      <circle cx="55" cy="48" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2.5;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Item 2: Netflix */}
      <circle cx="80" cy="80" r="4" fill="#E21B3C" opacity="0.4" />
      <rect x="65" y="45" width="30" height="22" rx="4" fill="#E21B3C" fillOpacity="0.1" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />
      {/* Play button */}
      <polygon points="76,52 76,62 84,57" fill="#E21B3C" opacity="0.4" />
      <line x1="80" y1="67" x2="80" y2="76" stroke="#E21B3C" strokeWidth="0.5" opacity="0.2" />
      {/* AI sparkle */}
      <circle cx="90" cy="48" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2;1" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>

      {/* Item 3: Face ID */}
      <circle cx="115" cy="80" r="4" fill="#26890C" opacity="0.4" />
      <rect x="100" y="45" width="30" height="22" rx="4" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.3" />
      {/* Face outline */}
      <circle cx="115" cy="54" r="6" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.4" />
      <circle cx="113" cy="52" r="1" fill="#26890C" opacity="0.3" />
      <circle cx="117" cy="52" r="1" fill="#26890C" opacity="0.3" />
      <path d="M112 56 Q115 58 118 56" fill="none" stroke="#26890C" strokeWidth="0.8" opacity="0.3" />
      <line x1="115" y1="67" x2="115" y2="76" stroke="#26890C" strokeWidth="0.5" opacity="0.2" />
      {/* AI sparkle */}
      <circle cx="125" cy="48" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2;1" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>

      {/* Item 4: Maps */}
      <circle cx="150" cy="80" r="4" fill="#FF3EA5" opacity="0.4" />
      <rect x="135" y="45" width="30" height="22" rx="4" fill="#FF3EA5" fillOpacity="0.1" stroke="#FF3EA5" strokeWidth="1" opacity="0.3" />
      {/* Map pin */}
      <path d="M150 50 Q155 50 155 55 Q155 58 150 62 Q145 58 145 55 Q145 50 150 50Z" fill="#FF3EA5" opacity="0.3" />
      <circle cx="150" cy="54" r="2" fill="white" opacity="0.2" />
      <line x1="150" y1="67" x2="150" y2="76" stroke="#FF3EA5" strokeWidth="0.5" opacity="0.2" />
      {/* AI sparkle */}
      <circle cx="160" cy="48" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2.5;1" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
      </circle>

      {/* "AI" labels along bottom */}
      <text x="45" y="98" textAnchor="middle" fill="#1368CE" fontSize="5" opacity="0.3">Spam</text>
      <text x="80" y="98" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0.3">Recs</text>
      <text x="115" y="98" textAnchor="middle" fill="#26890C" fontSize="5" opacity="0.3">FaceID</text>
      <text x="150" y="98" textAnchor="middle" fill="#FF3EA5" fontSize="5" opacity="0.3">Maps</text>

      {/* "YOUR DAY" arc label */}
      <text x="100" y="120" textAnchor="middle" fill="#FFA602" fontSize="7" opacity="0.3" fontWeight="bold">YOUR TYPICAL DAY</text>

      {/* Corner sparkles */}
      <circle cx="15" cy="25" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="30" r="1" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="140" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="140" r="1" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-why-feels-new
 * Split: invisible background AI (faded) vs visible ChatGPT conversation (bright).
 */
export function M1WhyFeelsNew({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#1368CE" opacity="0.04" />

      {/* LEFT: Invisible AI — faded, ghostly */}
      <rect x="10" y="25" width="75" height="95" rx="8" fill="white" fillOpacity="0.02" stroke="white" strokeWidth="1" opacity="0.06" strokeDasharray="4 3" />

      {/* Ghost icons — very faint */}
      {/* Email */}
      <rect x="20" y="35" width="16" height="10" rx="2" fill="none" stroke="white" strokeWidth="0.8" opacity="0.08" />
      <polyline points="20,35 28,41 36,35" fill="none" stroke="white" strokeWidth="0.5" opacity="0.08" />
      <text x="45" y="42" fill="white" fontSize="5" opacity="0.08">Spam filter</text>

      {/* Music note */}
      <circle cx="25" cy="62" r="3" fill="white" opacity="0.06" />
      <line x1="28" y1="62" x2="28" y2="52" stroke="white" strokeWidth="0.8" opacity="0.08" />
      <text x="45" y="60" fill="white" fontSize="5" opacity="0.08">Playlists</text>

      {/* Shield */}
      <path d="M22 75 L22 85 Q22 90 28 92 Q34 90 34 85 L34 75 Q28 72 22 75Z" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.8" opacity="0.08" />
      <text x="45" y="82" fill="white" fontSize="5" opacity="0.08">Fraud detect</text>

      {/* Map */}
      <rect x="20" y="96" width="14" height="10" rx="2" fill="none" stroke="white" strokeWidth="0.8" opacity="0.08" />
      <text x="45" y="104" fill="white" fontSize="5" opacity="0.08">Traffic</text>

      <text x="47" y="130" textAnchor="middle" fill="white" fontSize="6" opacity="0.1">INVISIBLE</text>

      {/* CENTER: Arrow / transition */}
      <path d="M90 80 L105 80" stroke="#FFA602" strokeWidth="2" opacity="0.3" />
      <polygon points="105,77 112,80 105,83" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </polygon>
      <text x="100" y="70" textAnchor="middle" fill="#FFA602" fontSize="5" opacity="0.3">NOW</text>

      {/* RIGHT: Visible ChatGPT — bright, conversational */}
      <rect x="115" y="25" width="75" height="95" rx="8" fill="#26890C" fillOpacity="0.06" stroke="#26890C" strokeWidth="1.5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Chat bubbles */}
      <rect x="122" y="35" width="40" height="12" rx="6" fill="#1368CE" opacity="0.3" />
      <rect x="126" y="39" width="25" height="3" rx="1.5" fill="white" opacity="0.3" />

      <rect x="140" y="52" width="44" height="16" rx="6" fill="#26890C" opacity="0.25" />
      <rect x="144" y="56" width="30" height="3" rx="1.5" fill="white" opacity="0.3" />
      <rect x="144" y="62" width="24" height="3" rx="1.5" fill="white" opacity="0.2" />

      <rect x="122" y="73" width="35" height="12" rx="6" fill="#1368CE" opacity="0.3" />
      <rect x="126" y="77" width="22" height="3" rx="1.5" fill="white" opacity="0.3" />

      <rect x="140" y="90" width="44" height="16" rx="6" fill="#26890C" opacity="0.25" />
      <rect x="144" y="94" width="32" height="3" rx="1.5" fill="white" opacity="0.3">
        <animate attributeName="width" values="0;32;32" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="144" y="100" width="26" height="3" rx="1.5" fill="white" opacity="0.2">
        <animate attributeName="width" values="0;26;26" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </rect>

      <text x="152" y="130" textAnchor="middle" fill="#26890C" fontSize="6" opacity="0.4" fontWeight="bold">VISIBLE</text>

      {/* Sparkles */}
      <circle cx="180" cy="22" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="20" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-ai-or-not
 * Two-column sort with diverse items being evaluated — some glow AI, others stay plain.
 */
export function M1AiOrNot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="#FFA602" opacity="0.04" />

      {/* Left column: AI */}
      <rect x="15" y="25" width="75" height="110" rx="8" fill="#26890C" fillOpacity="0.05" stroke="#26890C" strokeWidth="1" opacity="0.2" />
      <text x="52" y="20" textAnchor="middle" fill="#26890C" fontSize="7" fontWeight="bold" opacity="0.4">AI</text>

      {/* AI items with glow */}
      <rect x="22" y="35" width="60" height="14" rx="5" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <circle cx="30" cy="42" r="3" fill="#26890C" opacity="0.3" />
      <rect x="36" y="40" width="35" height="3" rx="1.5" fill="#26890C" opacity="0.25" />

      <rect x="22" y="55" width="60" height="14" rx="5" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      <circle cx="30" cy="62" r="3" fill="#00C9B7" opacity="0.3" />
      <rect x="36" y="60" width="30" height="3" rx="1.5" fill="#26890C" opacity="0.25" />

      <rect x="22" y="75" width="60" height="14" rx="5" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2.5s" begin="1s" repeatCount="indefinite" />
      </rect>
      <circle cx="30" cy="82" r="3" fill="#FFA602" opacity="0.3" />
      <rect x="36" y="80" width="38" height="3" rx="1.5" fill="#26890C" opacity="0.25" />

      {/* AI sparkles */}
      <circle cx="78" cy="40" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="78" cy="60" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="78" cy="80" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="1s" repeatCount="indefinite" />
      </circle>

      {/* Right column: Not AI */}
      <rect x="110" y="25" width="75" height="110" rx="8" fill="white" fillOpacity="0.02" stroke="white" strokeWidth="1" opacity="0.08" />
      <text x="147" y="20" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" opacity="0.2">NOT AI</text>

      {/* Not AI items — plain, no glow */}
      <rect x="117" y="35" width="60" height="14" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="1" opacity="0.08" />
      <circle cx="125" cy="42" r="3" fill="white" opacity="0.1" />
      <rect x="131" y="40" width="35" height="3" rx="1.5" fill="white" opacity="0.08" />

      <rect x="117" y="55" width="60" height="14" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="1" opacity="0.08" />
      <circle cx="125" cy="62" r="3" fill="white" opacity="0.1" />
      <rect x="131" y="60" width="30" height="3" rx="1.5" fill="white" opacity="0.08" />

      <rect x="117" y="75" width="60" height="14" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="1" opacity="0.08" />
      <circle cx="125" cy="82" r="3" fill="white" opacity="0.1" />
      <rect x="131" y="80" width="38" height="3" rx="1.5" fill="white" opacity="0.08" />

      {/* Center question mark */}
      <text x="100" y="115" textAnchor="middle" fill="#FFA602" fontSize="18" fontWeight="bold" opacity="0.15">
        ?
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Floating item being decided */}
      <rect x="80" y="100" width="40" height="12" rx="5" fill="#FF3EA5" fillOpacity="0.15" stroke="#FF3EA5" strokeWidth="1" opacity="0.2">
        <animateTransform attributeName="transform" type="translate" values="0,0;-30,-10;-30,-10;30,-10;30,-10;0,0" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.3;0.1;0.3;0.1;0.2" dur="6s" repeatCount="indefinite" />
      </rect>

      {/* Sparkles */}
      <circle cx="10" cy="15" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="10" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-what-means-for-you
 * A person reaching out to grab an AI tool — empowerment visual.
 */
export function M1WhatMeansForYou({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="85" ry="65" fill="#00C9B7" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Person silhouette on the left */}
      <circle cx="60" cy="55" r="12" fill="#1368CE" opacity="0.2" />
      <ellipse cx="60" cy="85" rx="14" ry="22" fill="#1368CE" opacity="0.15" />

      {/* Reaching hand/arm */}
      <line x1="74" y1="75" x2="105" y2="68" stroke="#1368CE" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
      <circle cx="105" cy="68" r="4" fill="#1368CE" opacity="0.2" />

      {/* AI tool — glowing orb being grasped */}
      <circle cx="130" cy="65" r="18" fill="#26890C" fillOpacity="0.08" stroke="#26890C" strokeWidth="1.5" opacity="0.3">
        <animate attributeName="r" values="16;20;16" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="65" r="10" fill="#00C9B7" opacity="0.1">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* AI label inside */}
      <text x="130" y="68" textAnchor="middle" fill="#00C9B7" fontSize="8" fontWeight="bold" opacity="0.5">AI</text>

      {/* Connection spark between hand and orb */}
      <circle cx="115" cy="67" r="3" fill="#FFA602">
        <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Arrow: passive → active */}
      <text x="50" y="125" fill="white" fontSize="5" opacity="0.15">PASSIVE</text>
      <line x1="72" y1="123" x2="118" y2="123" stroke="#FFA602" strokeWidth="1" opacity="0.2" strokeDasharray="3 2">
        <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
      </line>
      <polygon points="118,121 124,123 118,125" fill="#FFA602" opacity="0.3" />
      <text x="130" y="125" fill="#26890C" fontSize="5" opacity="0.4" fontWeight="bold">ACTIVE</text>

      {/* Radiating benefit lines from the orb */}
      <line x1="148" y1="58" x2="165" y2="48" stroke="#26890C" strokeWidth="0.8" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="148" y1="65" x2="168" y2="65" stroke="#26890C" strokeWidth="0.8" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <line x1="148" y1="72" x2="165" y2="82" stroke="#26890C" strokeWidth="0.8" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </line>

      {/* Sparkles */}
      <circle cx="25" cy="30" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="35" r="1" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="110" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-quick-check-l4
 * A rotating quiz wheel with question marks and answer options.
 */
export function M1QuickCheckL4({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Quiz wheel */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 100 75;360 100 75" dur="20s" repeatCount="indefinite" />

        {/* Wheel segments */}
        <path d="M100 75 L100 35 A40 40 0 0 1 134 55 Z" fill="#E21B3C" opacity="0.12" />
        <path d="M100 75 L134 55 A40 40 0 0 1 134 95 Z" fill="#1368CE" opacity="0.12" />
        <path d="M100 75 L134 95 A40 40 0 0 1 100 115 Z" fill="#FFA602" opacity="0.12" />
        <path d="M100 75 L100 115 A40 40 0 0 1 66 95 Z" fill="#26890C" opacity="0.12" />
        <path d="M100 75 L66 95 A40 40 0 0 1 66 55 Z" fill="#00C9B7" opacity="0.12" />
        <path d="M100 75 L66 55 A40 40 0 0 1 100 35 Z" fill="#FF3EA5" opacity="0.12" />

        {/* Segment dividing lines */}
        <line x1="100" y1="75" x2="100" y2="35" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <line x1="100" y1="75" x2="134" y2="55" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <line x1="100" y1="75" x2="134" y2="95" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <line x1="100" y1="75" x2="100" y2="115" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <line x1="100" y1="75" x2="66" y2="95" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <line x1="100" y1="75" x2="66" y2="55" stroke="white" strokeWidth="0.5" opacity="0.1" />
      </g>

      {/* Wheel border */}
      <circle cx="100" cy="75" r="40" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      {/* Center hub */}
      <circle cx="100" cy="75" r="8" fill="#0d0d1a" stroke="#FFA602" strokeWidth="1.5" opacity="0.5" />
      <text x="100" y="79" textAnchor="middle" fill="#FFA602" fontSize="7" fontWeight="bold" opacity="0.7">?</text>

      {/* Pointer at top */}
      <polygon points="95,30 100,22 105,30" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
      </polygon>

      {/* Answer options around wheel */}
      <text x="35" y="40" fill="#E21B3C" fontSize="6" opacity="0.3">A</text>
      <text x="160" y="40" fill="#1368CE" fontSize="6" opacity="0.3">B</text>
      <text x="170" y="100" fill="#FFA602" fontSize="6" opacity="0.3">C</text>
      <text x="30" y="100" fill="#26890C" fontSize="6" opacity="0.3">D</text>

      {/* Sparkles */}
      <circle cx="20" cy="20" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="25" r="1" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="145" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="145" r="1" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-key-takeaway-l4
 * An AI orb transitioning from background service to foreground tool.
 */
export function M1KeyTakeawayL4({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <ellipse cx="100" cy="80" rx="80" ry="65" fill="#00C9B7" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Key icon */}
      <circle cx="55" cy="55" r="16" fill="#FFA602" fillOpacity="0.08" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      <circle cx="55" cy="55" r="8" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.2" />
      <rect x="69" y="52" width="40" height="6" rx="3" fill="#FFA602" fillOpacity="0.15" stroke="#FFA602" strokeWidth="1" opacity="0.3" />
      <rect x="95" y="58" width="5" height="7" rx="1.5" fill="#FFA602" opacity="0.2" />
      <rect x="103" y="58" width="5" height="5" rx="1.5" fill="#FFA602" opacity="0.2" />

      {/* Transformation arrow */}
      <path d="M100 72 Q100 85 100 90" fill="none" stroke="#00C9B7" strokeWidth="1.5" opacity="0.3" />
      <polygon points="96,88 100,95 104,88" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Bottom: AI tool in your hands */}
      <rect x="55" y="100" width="90" height="30" rx="10" fill="#26890C" fillOpacity="0.06" stroke="#26890C" strokeWidth="1" opacity="0.2" />

      {/* Tool items */}
      <circle cx="80" cy="115" r="8" fill="#1368CE" fillOpacity="0.1" stroke="#1368CE" strokeWidth="1" opacity="0.2" />
      <text x="80" y="118" textAnchor="middle" fill="#1368CE" fontSize="6" opacity="0.4">Use</text>

      <circle cx="105" cy="115" r="8" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.2" />
      <text x="105" y="118" textAnchor="middle" fill="#26890C" fontSize="6" opacity="0.4">Direct</text>

      <circle cx="130" cy="115" r="8" fill="#FFA602" fillOpacity="0.1" stroke="#FFA602" strokeWidth="1" opacity="0.2" />
      <text x="130" y="118" textAnchor="middle" fill="#FFA602" fontSize="6" opacity="0.4">Own</text>

      {/* Glow around the tool section */}
      <rect x="55" y="100" width="90" height="30" rx="10" fill="none" stroke="#00C9B7" strokeWidth="0.5" opacity="0.1">
        <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Top label */}
      <text x="100" y="18" textAnchor="middle" fill="#FFA602" fontSize="6" opacity="0.3" fontWeight="bold">AI WAS ALWAYS THERE</text>
      <text x="100" y="145" textAnchor="middle" fill="#26890C" fontSize="6" opacity="0.4" fontWeight="bold">NOW IT&apos;S YOURS TO WIELD</text>

      {/* Sparkles */}
      <circle cx="20" cy="30" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="40" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="130" r="1" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m1-module-complete
 * Trophy / graduation cap with confetti and a big checkmark.
 */
export function M1ModuleComplete({ className }: { className?: string }) {
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

      {/* Star on trophy */}
      <polygon points="100,55 103,65 114,65 106,72 109,82 100,76 91,82 94,72 86,65 97,65" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Big checkmark over trophy */}
      <polyline points="82,68 95,80 120,52" stroke="#26890C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
      </polyline>

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
      <rect x="165" y="22" width="6" height="3" rx="1" fill="#FF3EA5" opacity="0.5" transform="rotate(-35 168 23)">
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,14" dur="1.9s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="1.9s" repeatCount="indefinite" />
      </rect>
      <circle cx="45" y="25" r="2.5" fill="#FFA602" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0;3,20" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="12" r="2" fill="#00C9B7" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0;-4,22" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <rect x="95" y="10" width="4" height="4" rx="1" fill="#FFA602" opacity="0.5" transform="rotate(45 97 12)">
        <animateTransform attributeName="transform" type="translate" values="0,0;1,20" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
      </rect>

      {/* MODULE 1 COMPLETE label */}
      <rect x="40" y="125" width="120" height="20" rx="10" fill="#26890C" fillOpacity="0.1" stroke="#26890C" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="138" textAnchor="middle" fill="#26890C" fontSize="7" fontWeight="bold" opacity="0.6">MODULE 1 COMPLETE!</text>

      {/* Sparkles */}
      <circle cx="18" cy="60" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="65" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="130" r="1" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

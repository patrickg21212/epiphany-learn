/**
 * Module 2 — "Talking to AI"
 * Animated SVG illustrations for every section of every lesson.
 *
 * Naming: m2-<descriptor>
 * Palette: #E21B3C (red), #1368CE (blue), #FFA602 (gold), #26890C (green), #00C9B7 (cyan), #FF3EA5 (magenta)
 */

// ─── INTRO ILLUSTRATIONS ───────────────────────────────────────────────

/**
 * m2-intro-conversation — First Real Conversation intro
 * A chat bubble exchange between a person and AI, glowing warmly.
 */
export function M2IntroConversation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Person silhouette — left */}
      <circle cx="45" cy="120" r="12" fill="#FFA602" opacity="0.15" />
      <circle cx="45" cy="112" r="6" fill="#FFA602" opacity="0.25" />

      {/* AI circle — right */}
      <circle cx="155" cy="120" r="12" fill="#1368CE" opacity="0.15" />
      <text x="155" y="124" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="bold" opacity="0.4">AI</text>

      {/* Person's chat bubble */}
      <g>
        <rect x="30" y="30" width="65" height="28" rx="14" fill="#FFA602" opacity="0.2">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="38" y="39" width="40" height="3" rx="1.5" fill="#FFA602" opacity="0.4" />
        <rect x="38" y="46" width="28" height="3" rx="1.5" fill="#FFA602" opacity="0.3" />
        <polygon points="50,58 55,58 48,66" fill="#FFA602" opacity="0.2">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* AI's chat bubble */}
      <g>
        <rect x="105" y="55" width="70" height="35" rx="14" fill="#1368CE" opacity="0.2">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" begin="0.8s" repeatCount="indefinite" />
        </rect>
        <rect x="115" y="64" width="48" height="3" rx="1.5" fill="#1368CE" opacity="0.4" />
        <rect x="115" y="71" width="35" height="3" rx="1.5" fill="#1368CE" opacity="0.3" />
        <rect x="115" y="78" width="42" height="3" rx="1.5" fill="#1368CE" opacity="0.25" />
        <polygon points="155,90 150,90 157,98" fill="#1368CE" opacity="0.2">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" begin="0.8s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Typing indicator dots */}
      <g transform="translate(60, 80)">
        <circle cx="0" cy="0" r="2.5" fill="#FFA602" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="9" cy="0" r="2.5" fill="#FFA602" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="18" cy="0" r="2.5" fill="#FFA602" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="20" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="15" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="150" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m2-intro-questions — Better Questions intro
 * A funnel transforming vague text into sharp prompts.
 */
export function M2IntroQuestions({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Vague text blobs — top */}
      <rect x="55" y="15" width="35" height="10" rx="5" fill="#E21B3C" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="95" y="12" width="50" height="10" rx="5" fill="#E21B3C" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.3s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      <rect x="70" y="28" width="60" height="10" rx="5" fill="#E21B3C" opacity="0.18">
        <animate attributeName="opacity" values="0.12;0.28;0.12" dur="2.1s" begin="0.6s" repeatCount="indefinite" />
      </rect>

      {/* Funnel shape */}
      <path d="M50 48 L150 48 L120 95 L80 95 Z" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="1.5" strokeOpacity="0.3" />

      {/* Arrows going down into funnel */}
      <line x1="75" y1="35" x2="90" y2="50" stroke="#E21B3C" strokeWidth="1" opacity="0.3" markerEnd="url(#arrowhead)" />
      <line x1="120" y1="30" x2="110" y2="50" stroke="#E21B3C" strokeWidth="1" opacity="0.3" />

      {/* Transformation sparkles inside funnel */}
      <circle cx="100" cy="65" r="3" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="75" r="2" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.6;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="72" r="2.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0" dur="1.5s" begin="1s" repeatCount="indefinite" />
      </circle>

      {/* Sharp output — clean text */}
      <rect x="70" y="105" width="60" height="14" rx="7" fill="#26890C" opacity="0.2" stroke="#26890C" strokeWidth="1" strokeOpacity="0.4">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="78" y="110" width="44" height="3" rx="1.5" fill="#26890C" opacity="0.5" />

      {/* Arrow from funnel to output */}
      <line x1="100" y1="95" x2="100" y2="105" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />

      {/* Label */}
      <text x="100" y="135" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6">vague in, sharp out</text>

      {/* Sparkles */}
      <circle cx="20" cy="25" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="30" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="140" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="145" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m2-intro-wrong — When AI Gets It Wrong intro
 * A confident-looking AI with a cracked facade, wrong answers leaking out.
 */
export function M2IntroWrong({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* AI "face" — confident monitor */}
      <rect x="65" y="25" width="70" height="55" rx="8" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1.5" opacity="0.7" />
      <rect x="70" y="30" width="60" height="44" rx="4" fill="#0d0d1a" />

      {/* Confident smile on screen */}
      <path d="M85 55 Q100 68 115 55" stroke="#26890C" strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="88" cy="46" r="3" fill="#26890C" opacity="0.4" />
      <circle cx="112" cy="46" r="3" fill="#26890C" opacity="0.4" />

      {/* Cracks across the monitor */}
      <path d="M75 35 L88 50 L82 60 L90 72" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M125 32 L115 48 L120 58 L112 70" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </path>

      {/* Wrong answers floating out */}
      <g opacity="0.5">
        <rect x="20" y="45" width="35" height="10" rx="5" fill="#E21B3C" opacity="0">
          <animate attributeName="opacity" values="0;0.4;0" dur="4s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;-10,-10" dur="4s" repeatCount="indefinite" />
        </rect>
        <text x="37" y="53" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="4s" repeatCount="indefinite" />
          WRONG
        </text>
      </g>
      <g opacity="0.5">
        <rect x="145" y="40" width="35" height="10" rx="5" fill="#E21B3C" opacity="0">
          <animate attributeName="opacity" values="0;0.4;0" dur="4s" begin="1.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;10,-8" dur="4s" begin="1.5s" repeatCount="indefinite" />
        </rect>
        <text x="162" y="48" textAnchor="middle" fill="#E21B3C" fontSize="5" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="4s" begin="1.5s" repeatCount="indefinite" />
          FAKE
        </text>
      </g>

      {/* Warning triangle */}
      <g transform="translate(100, 115)">
        <polygon points="0,-18 18,12 -18,12" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="1.5" strokeOpacity="0.4">
          <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
        </polygon>
        <text x="0" y="8" textAnchor="middle" fill="#FFA602" fontSize="14" fontWeight="bold" opacity="0.5">!</text>
      </g>

      {/* Sparkles */}
      <circle cx="18" cy="20" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="25" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m2-intro-tasks — AI for Everyday Tasks intro
 * Icons for email, cooking, travel, and writing swirling around a central AI hub.
 */
export function M2IntroTasks({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Central AI hub */}
      <circle cx="100" cy="80" r="22" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="1.5" strokeOpacity="0.3">
        <animate attributeName="r" values="20;24;20" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="84" textAnchor="middle" fill="#1368CE" fontSize="10" fontWeight="bold" opacity="0.5">AI</text>

      {/* Email icon — top left */}
      <g transform="translate(40, 35)">
        <rect x="-14" y="-9" width="28" height="18" rx="3" fill="none" stroke="#FFA602" strokeWidth="1.2" opacity="0.5" />
        <path d="M-14,-9 L0,3 L14,-9" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.4" />
        <line x1="55" y1="35" x2="78" y2="60" stroke="#1368CE" strokeWidth="0.5" opacity="0.15" strokeDasharray="2 2" />
      </g>

      {/* Cooking icon — top right */}
      <g transform="translate(160, 35)">
        <ellipse cx="0" cy="2" rx="14" ry="8" fill="none" stroke="#26890C" strokeWidth="1.2" opacity="0.5" />
        <line x1="0" y1="-6" x2="0" y2="-14" stroke="#26890C" strokeWidth="1" opacity="0.3" />
        <path d="M-4,-10 Q0,-16 4,-10" stroke="#26890C" strokeWidth="0.8" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Travel icon — bottom left */}
      <g transform="translate(40, 125)">
        <rect x="-10" y="-12" width="20" height="24" rx="3" fill="none" stroke="#FF3EA5" strokeWidth="1.2" opacity="0.5" />
        <rect x="-6" y="-16" width="12" height="4" rx="1" fill="none" stroke="#FF3EA5" strokeWidth="0.8" opacity="0.4" />
        <rect x="-6" y="-3" width="12" height="3" rx="1" fill="#FF3EA5" opacity="0.15" />
        <rect x="-6" y="2" width="12" height="3" rx="1" fill="#FF3EA5" opacity="0.1" />
      </g>

      {/* Writing icon — bottom right */}
      <g transform="translate(160, 125)">
        <line x1="-8" y1="10" x2="8" y2="-12" stroke="#00C9B7" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
        <polygon points="8,-12 12,-10 9,-7" fill="#00C9B7" opacity="0.4" />
        <line x1="-10" y1="12" x2="2" y2="12" stroke="#00C9B7" strokeWidth="1" opacity="0.3" />
      </g>

      {/* Connection lines from hub to icons */}
      <line x1="82" y1="65" x2="52" y2="42" stroke="#1368CE" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
      <line x1="118" y1="65" x2="148" y2="42" stroke="#1368CE" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
      <line x1="82" y1="95" x2="52" y2="118" stroke="#1368CE" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
      <line x1="118" y1="95" x2="148" y2="118" stroke="#1368CE" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />

      {/* Orbiting dots */}
      <circle r="3" fill="#FFA602" opacity="0.6">
        <animateMotion path="M100,80 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="6s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="15" cy="80" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="80" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m2-intro-cheatsheet — The AI Cheat Sheet intro
 * A clipboard/card with columns: Great / Okay / Terrible, color-coded.
 */
export function M2IntroCheatsheet({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Clipboard body */}
      <rect x="35" y="18" width="130" height="125" rx="8" fill="#1a1a2e" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Clipboard clip */}
      <rect x="80" y="12" width="40" height="14" rx="4" fill="#1a1a2e" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <rect x="90" y="10" width="20" height="6" rx="3" fill="#FFA602" opacity="0.3" />

      {/* Column headers */}
      <rect x="42" y="35" width="38" height="14" rx="4" fill="#26890C" opacity="0.2" />
      <text x="61" y="45" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="bold" opacity="0.6">GREAT</text>
      <rect x="83" y="35" width="38" height="14" rx="4" fill="#FFA602" opacity="0.2" />
      <text x="102" y="45" textAnchor="middle" fill="#FFA602" fontSize="6" fontWeight="bold" opacity="0.6">OKAY</text>
      <rect x="124" y="35" width="38" height="14" rx="4" fill="#E21B3C" opacity="0.2" />
      <text x="143" y="45" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.6">NOPE</text>

      {/* Column items — Great */}
      <rect x="44" y="55" width="34" height="6" rx="3" fill="#26890C" opacity="0.15" />
      <rect x="44" y="65" width="30" height="6" rx="3" fill="#26890C" opacity="0.12" />
      <rect x="44" y="75" width="32" height="6" rx="3" fill="#26890C" opacity="0.1" />
      <rect x="44" y="85" width="28" height="6" rx="3" fill="#26890C" opacity="0.08" />

      {/* Column items — Okay */}
      <rect x="85" y="55" width="34" height="6" rx="3" fill="#FFA602" opacity="0.15" />
      <rect x="85" y="65" width="28" height="6" rx="3" fill="#FFA602" opacity="0.12" />
      <rect x="85" y="75" width="32" height="6" rx="3" fill="#FFA602" opacity="0.1" />

      {/* Column items — Nope */}
      <rect x="126" y="55" width="34" height="6" rx="3" fill="#E21B3C" opacity="0.15" />
      <rect x="126" y="65" width="30" height="6" rx="3" fill="#E21B3C" opacity="0.12" />
      <rect x="126" y="75" width="26" height="6" rx="3" fill="#E21B3C" opacity="0.1" />
      <rect x="126" y="85" width="32" height="6" rx="3" fill="#E21B3C" opacity="0.08" />

      {/* Check marks in Great column */}
      <path d="M44 105 L48 109 L56 100" stroke="#26890C" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* X marks in Nope column */}
      <g opacity="0.4" transform="translate(140, 105)">
        <line x1="-4" y1="-4" x2="4" y2="4" stroke="#E21B3C" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="-4" x2="-4" y2="4" stroke="#E21B3C" strokeWidth="1.5" strokeLinecap="round" />
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="20" r="2" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="25" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="145" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="150" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// ─── Lesson 1: Your First Real Conversation with AI ─────────────────────────

/** "What Are These Things, Anyway?" — three chat platforms floating */
export function M2ChatInterfacesIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background glow */}
      <circle cx="100" cy="80" r="60" fill="#1368CE" opacity="0.06">
        <animate attributeName="r" values="55;65;55" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* ChatGPT bubble */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="20" y="40" width="50" height="40" rx="10" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="1" />
        <rect x="28" y="50" width="28" height="3" rx="1.5" fill="#26890C" opacity="0.5" />
        <rect x="28" y="56" width="20" height="3" rx="1.5" fill="#26890C" opacity="0.35" />
        <rect x="28" y="62" width="34" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
        <circle cx="45" cy="38" r="6" fill="#26890C" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.45;0.25" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="45" y="41" textAnchor="middle" fontSize="6" fill="#26890C" fontWeight="bold">G</text>
      </g>

      {/* Claude bubble */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,4;0,0" dur="3.5s" repeatCount="indefinite" />
        <rect x="75" y="30" width="50" height="40" rx="10" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="1" />
        <rect x="83" y="40" width="30" height="3" rx="1.5" fill="#FFA602" opacity="0.5" />
        <rect x="83" y="46" width="22" height="3" rx="1.5" fill="#FFA602" opacity="0.35" />
        <rect x="83" y="52" width="34" height="3" rx="1.5" fill="#FFA602" opacity="0.25" />
        <circle cx="100" cy="28" r="6" fill="#FFA602" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.45;0.25" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <text x="100" y="31" textAnchor="middle" fontSize="6" fill="#FFA602" fontWeight="bold">C</text>
      </g>

      {/* Gemini bubble */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="130" y="45" width="50" height="40" rx="10" fill="#1368CE" opacity="0.15" stroke="#1368CE" strokeWidth="1" />
        <rect x="138" y="55" width="26" height="3" rx="1.5" fill="#1368CE" opacity="0.5" />
        <rect x="138" y="61" width="34" height="3" rx="1.5" fill="#1368CE" opacity="0.35" />
        <rect x="138" y="67" width="18" height="3" rx="1.5" fill="#1368CE" opacity="0.25" />
        <circle cx="155" cy="43" r="6" fill="#1368CE" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.45;0.25" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="155" y="46" textAnchor="middle" fontSize="6" fill="#1368CE" fontWeight="bold">G</text>
      </g>

      {/* Connection lines */}
      <line x1="70" y1="60" x2="75" y2="50" stroke="#00C9B7" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="125" y1="50" x2="130" y2="60" stroke="#00C9B7" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.5s" repeatCount="indefinite" />
      </line>

      {/* "FREE" badge */}
      <rect x="72" y="95" width="56" height="18" rx="9" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="0.8">
        <animate attributeName="opacity" values="0.12;0.2;0.12" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="107" textAnchor="middle" fontSize="8" fill="#26890C" opacity="0.6" fontWeight="bold">FREE</text>

      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.5" fill="#FF3EA5" opacity="0.4">
        <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="35" r="1" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="120" r="1.2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="110" r="1" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Where to Go Right Now" — browser with three tabs */
export function M2WhereToGoIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="80" rx="70" ry="50" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Browser window */}
      <rect x="25" y="25" width="150" height="100" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.8" strokeOpacity="0.12" />
      {/* Browser top bar */}
      <rect x="25" y="25" width="150" height="16" rx="8" fill="white" opacity="0.06" />
      <rect x="25" y="37" width="150" height="4" fill="white" opacity="0.06" />
      {/* Traffic lights */}
      <circle cx="35" cy="33" r="2.5" fill="#E21B3C" opacity="0.5" />
      <circle cx="43" cy="33" r="2.5" fill="#FFA602" opacity="0.5" />
      <circle cx="51" cy="33" r="2.5" fill="#26890C" opacity="0.5" />

      {/* Tab 1: ChatGPT — active */}
      <rect x="30" y="48" width="42" height="22" rx="4" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="0.7">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="51" y="62" textAnchor="middle" fontSize="5.5" fill="#26890C" opacity="0.7">ChatGPT</text>

      {/* Tab 2: Claude */}
      <rect x="79" y="48" width="42" height="22" rx="4" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="0.7">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="3.3s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="62" textAnchor="middle" fontSize="5.5" fill="#FFA602" opacity="0.7">Claude</text>

      {/* Tab 3: Gemini */}
      <rect x="128" y="48" width="42" height="22" rx="4" fill="#1368CE" opacity="0.15" stroke="#1368CE" strokeWidth="0.7">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="3.6s" repeatCount="indefinite" />
      </rect>
      <text x="149" y="62" textAnchor="middle" fontSize="5.5" fill="#1368CE" opacity="0.7">Gemini</text>

      {/* URL bar */}
      <rect x="38" y="80" width="124" height="10" rx="5" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <rect x="44" y="83.5" width="40" height="3" rx="1.5" fill="#00C9B7" opacity="0.25" />

      {/* Cursor clicking */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,1;0,0" dur="1.5s" repeatCount="indefinite" />
        <path d="M95 95 L95 108 L99 105 L103 112 L106 110 L102 103 L107 102 Z" fill="#FF3EA5" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* "Pick one!" text */}
      <text x="100" y="140" textAnchor="middle" fontSize="7" fill="#FFA602" opacity="0.35" fontWeight="bold">
        Pick one!
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </text>

      {/* Sparkles */}
      <circle cx="18" cy="50" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="188" cy="70" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Your First Prompt" — chat input with typing indicator */
export function M2FirstPromptIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="85" rx="75" ry="40" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Chat window background */}
      <rect x="30" y="20" width="140" height="110" rx="10" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.8" strokeOpacity="0.1" />

      {/* User message bubble */}
      <rect x="60" y="32" width="100" height="28" rx="10" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="0.6" />
      <rect x="70" y="40" width="70" height="3" rx="1.5" fill="#1368CE" opacity="0.4" />
      <rect x="70" y="46" width="50" height="3" rx="1.5" fill="#1368CE" opacity="0.3" />

      {/* AI response bubble */}
      <rect x="40" y="68" width="110" height="35" rx="10" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.6">
        <animate attributeName="opacity" values="0.08;0.15;0.08" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="50" y="76" width="80" height="3" rx="1.5" fill="#26890C" opacity="0.35" />
      <rect x="50" y="82" width="65" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
      <rect x="50" y="88" width="90" height="3" rx="1.5" fill="#26890C" opacity="0.2" />

      {/* Input bar at bottom */}
      <rect x="38" y="112" width="124" height="14" rx="7" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="0.6" strokeOpacity="0.12" />

      {/* Typing cursor */}
      <rect x="48" y="116" width="2" height="7" rx="1" fill="#FFA602" opacity="0.6">
        <animate attributeName="opacity" values="0;0.7;0" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* Typing dots in input */}
      <circle cx="58" cy="119" r="1.5" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="64" cy="119" r="1.5" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="119" r="1.5" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
      </circle>

      {/* Send arrow */}
      <polygon points="148,115 148,123 156,119" fill="#1368CE" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
      </polygon>

      {/* Sparkles */}
      <circle cx="22" cy="40" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="55" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="130" r="1.2" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "What an AI Conversation Actually Looks Like" — back-and-forth conversation */
export function M2ConversationFlowIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="55" fill="#00C9B7" opacity="0.05">
        <animate attributeName="r" values="50;60;50" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Message 1: user */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;1,0;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="55" y="18" width="90" height="18" rx="8" fill="#1368CE" opacity="0.15" stroke="#1368CE" strokeWidth="0.6" />
        <rect x="63" y="24" width="55" height="3" rx="1.5" fill="#1368CE" opacity="0.4" />
        <circle cx="150" cy="27" r="5" fill="#1368CE" opacity="0.1" />
        <text x="150" y="29.5" textAnchor="middle" fontSize="5" fill="#1368CE" opacity="0.5">You</text>
      </g>

      {/* Message 2: AI response */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,0;0,0" dur="3.2s" repeatCount="indefinite" />
        <rect x="30" y="42" width="110" height="25" rx="8" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="0.6" />
        <rect x="38" y="48" width="80" height="3" rx="1.5" fill="#26890C" opacity="0.35" />
        <rect x="38" y="54" width="60" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
        <circle cx="35" cy="55" r="5" fill="#26890C" opacity="0.1" />
        <text x="35" y="57.5" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.5">AI</text>
      </g>

      {/* Message 3: user follow-up */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;1,0;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="70" y="74" width="80" height="18" rx="8" fill="#1368CE" opacity="0.15" stroke="#1368CE" strokeWidth="0.6" />
        <rect x="78" y="80" width="50" height="3" rx="1.5" fill="#1368CE" opacity="0.4" />
      </g>

      {/* Message 4: AI adapts */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,0;0,0" dur="3.5s" repeatCount="indefinite" />
        <rect x="30" y="98" width="115" height="25" rx="8" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="0.6" />
        <rect x="38" y="104" width="85" height="3" rx="1.5" fill="#26890C" opacity="0.35" />
        <rect x="38" y="110" width="70" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
      </g>

      {/* Connecting flow arrows */}
      <path d="M100 37 L100 41" stroke="#00C9B7" strokeWidth="0.8" opacity="0.2" strokeDasharray="1 1">
        <animate attributeName="opacity" values="0.1;0.35;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M100 68 L100 73" stroke="#00C9B7" strokeWidth="0.8" opacity="0.2" strokeDasharray="1 1">
        <animate attributeName="opacity" values="0.1;0.35;0.1" dur="2.3s" repeatCount="indefinite" />
      </path>
      <path d="M100 93 L100 97" stroke="#00C9B7" strokeWidth="0.8" opacity="0.2" strokeDasharray="1 1">
        <animate attributeName="opacity" values="0.1;0.35;0.1" dur="2.6s" repeatCount="indefinite" />
      </path>

      {/* Refresh/iterate icon */}
      <path d="M170 75 A12 12 0 1 1 170 85" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
      </path>
      <polygon points="170,84 167,80 173,80" fill="#FFA602" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Sparkles */}
      <circle cx="18" cy="30" r="1" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="100" r="1.5" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="130" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Things You Might Not Know AI Can Do" — surprise toolbox */
export function M2HiddenCapabilitiesIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="85" rx="60" ry="45" fill="#FF3EA5" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Gift box / surprise box */}
      <rect x="65" y="55" width="70" height="55" rx="6" fill="#FF3EA5" opacity="0.1" stroke="#FF3EA5" strokeWidth="1" />
      {/* Lid bouncing */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="60" y="48" width="80" height="12" rx="4" fill="#FF3EA5" opacity="0.15" stroke="#FF3EA5" strokeWidth="1" />
        <rect x="96" y="42" width="8" height="10" rx="4" fill="#FF3EA5" opacity="0.2" />
      </g>

      {/* Items popping out */}
      {/* Pen icon — drafting */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-3,-8;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="40" y="30" width="22" height="18" rx="4" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="0.6" />
        <line x1="46" y1="36" x2="56" y2="36" stroke="#1368CE" strokeWidth="1" opacity="0.4" />
        <line x1="46" y1="40" x2="53" y2="40" stroke="#1368CE" strokeWidth="1" opacity="0.3" />
      </g>

      {/* Brain icon — explain */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" dur="2.8s" repeatCount="indefinite" />
        <circle cx="100" cy="28" r="12" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="0.6" />
        <path d="M94 28 Q97 22 100 28 Q103 22 106 28" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.4" />
      </g>

      {/* Lightbulb — brainstorm */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;3,-7;0,0" dur="3.2s" repeatCount="indefinite" />
        <rect x="138" y="30" width="22" height="18" rx="4" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="0.6" />
        <circle cx="149" cy="36" r="4" fill="#26890C" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Sparkles around box */}
      <circle cx="55" cy="50" r="2" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.6;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="48" r="1.5" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="15" r="1.5" fill="#E21B3C" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="70" r="1" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="75" r="1.2" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* "?" bubbles */}
      <text x="30" y="50" fontSize="10" fill="#FF3EA5" opacity="0.25" fontWeight="bold">?</text>
      <text x="170" y="45" fontSize="8" fill="#FFA602" opacity="0.2" fontWeight="bold">!</text>
    </svg>
  );
}

/** "Quick Check" (Lesson 1) — quiz clipboard */
export function M2L1QuickCheckIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="50" fill="#1368CE" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Clipboard body */}
      <rect x="60" y="28" width="80" height="100" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.8" strokeOpacity="0.12" />
      {/* Clip */}
      <rect x="85" y="22" width="30" height="14" rx="4" fill="#1368CE" opacity="0.2" stroke="#1368CE" strokeWidth="0.6" />

      {/* Question 1 — checked */}
      <circle cx="76" cy="52" r="5" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="0.8" />
      <path d="M73 52 L75.5 54.5 L79 50" stroke="#26890C" strokeWidth="1.2" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <rect x="86" y="50" width="44" height="3" rx="1.5" fill="white" opacity="0.12" />

      {/* Question 2 — checked */}
      <circle cx="76" cy="72" r="5" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="0.8" />
      <path d="M73 72 L75.5 74.5 L79 70" stroke="#26890C" strokeWidth="1.2" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </path>
      <rect x="86" y="70" width="38" height="3" rx="1.5" fill="white" opacity="0.12" />

      {/* Question 3 — active */}
      <circle cx="76" cy="92" r="5" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="0.8">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <rect x="86" y="90" width="42" height="3" rx="1.5" fill="white" opacity="0.12" />

      {/* Star */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 160 40;10 160 40;0 160 40" dur="3s" repeatCount="indefinite" />
        <polygon points="160,30 163,38 171,38 165,43 167,51 160,46 153,51 155,43 149,38 157,38" fill="#FFA602" opacity="0.2">
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Sparkles */}
      <circle cx="45" cy="45" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="110" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Key Takeaway" (Lesson 1) — glowing lightbulb */
export function M2L1KeyTakeawayIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Radial glow */}
      <circle cx="100" cy="70" r="45" fill="#FFA602" opacity="0.06">
        <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Lightbulb body */}
      <circle cx="100" cy="60" r="24" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="1">
        <animate attributeName="opacity" values="0.08;0.18;0.08" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Filament */}
      <path d="M92 55 Q96 48 100 55 Q104 48 108 55" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </path>
      {/* Bulb base */}
      <rect x="92" y="82" width="16" height="10" rx="2" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="0.6" />
      <line x1="92" y1="86" x2="108" y2="86" stroke="#FFA602" strokeWidth="0.5" opacity="0.2" />
      <line x1="92" y1="89" x2="108" y2="89" stroke="#FFA602" strokeWidth="0.5" opacity="0.2" />

      {/* Chat icon in bulb */}
      <rect x="90" y="55" width="20" height="12" rx="4" fill="#FFA602" opacity="0.2" />
      <rect x="93" y="58" width="12" height="2" rx="1" fill="#FFA602" opacity="0.35" />
      <rect x="93" y="62" width="8" height="2" rx="1" fill="#FFA602" opacity="0.25" />

      {/* Rays */}
      <line x1="100" y1="28" x2="100" y2="20" stroke="#FFA602" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="130" y1="42" x2="136" y2="36" stroke="#FFA602" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="42" x2="64" y2="36" stroke="#FFA602" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </line>
      <line x1="134" y1="65" x2="142" y2="65" stroke="#FFA602" strokeWidth="1" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" begin="0.9s" repeatCount="indefinite" />
      </line>
      <line x1="66" y1="65" x2="58" y2="65" stroke="#FFA602" strokeWidth="1" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" begin="1.2s" repeatCount="indefinite" />
      </line>

      {/* "Just start!" text */}
      <text x="100" y="115" textAnchor="middle" fontSize="7" fill="#FFA602" opacity="0.3" fontWeight="bold">
        Just start!
      </text>

      {/* Sparkles */}
      <circle cx="140" cy="25" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="100" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="95" r="1.2" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


// ─── Lesson 2: How to Ask Better Questions ──────────────────────────────────

/** "Why Vague Prompts Get Vague Answers" — blurry vs sharp contrast */
export function M2VaguePromptsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Left side: blurry/vague */}
      <rect x="15" y="30" width="75" height="90" rx="8" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />

      {/* Vague input bubble */}
      <rect x="25" y="40" width="55" height="16" rx="6" fill="#E21B3C" opacity="0.1" stroke="#E21B3C" strokeWidth="0.5" />
      <rect x="32" y="46" width="30" height="2.5" rx="1" fill="#E21B3C" opacity="0.25" />

      {/* Blurry response — fuzzy circles to simulate blur */}
      <circle cx="52" cy="82" r="18" fill="#E21B3C" opacity="0.04">
        <animate attributeName="r" values="16;20;16" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="30" y="65" width="45" height="3" rx="1.5" fill="#E21B3C" opacity="0.12" />
      <rect x="30" y="71" width="38" height="3" rx="1.5" fill="#E21B3C" opacity="0.08" />
      <rect x="30" y="77" width="42" height="3" rx="1.5" fill="#E21B3C" opacity="0.06" />
      <rect x="30" y="83" width="35" height="3" rx="1.5" fill="#E21B3C" opacity="0.04" />
      <text x="52" y="105" textAnchor="middle" fontSize="6" fill="#E21B3C" opacity="0.3">Meh...</text>

      {/* Divider */}
      <line x1="100" y1="35" x2="100" y2="115" stroke="white" strokeWidth="0.5" opacity="0.08" strokeDasharray="3 3" />

      {/* Right side: specific/clear */}
      <rect x="110" y="30" width="75" height="90" rx="8" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />

      {/* Detailed input bubble */}
      <rect x="118" y="40" width="60" height="22" rx="6" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="0.5" />
      <rect x="125" y="45" width="42" height="2.5" rx="1" fill="#26890C" opacity="0.35" />
      <rect x="125" y="50" width="35" height="2.5" rx="1" fill="#26890C" opacity="0.3" />
      <rect x="125" y="55" width="46" height="2.5" rx="1" fill="#26890C" opacity="0.25" />

      {/* Crisp response */}
      <rect x="118" y="70" width="58" height="3" rx="1.5" fill="#26890C" opacity="0.35">
        <animate attributeName="opacity" values="0.25;0.45;0.25" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="118" y="76" width="50" height="3" rx="1.5" fill="#26890C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </rect>
      <rect x="118" y="82" width="55" height="3" rx="1.5" fill="#26890C" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </rect>
      <rect x="118" y="88" width="45" height="3" rx="1.5" fill="#26890C" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </rect>

      {/* Checkmark */}
      <circle cx="165" cy="100" r="5" fill="#26890C" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M162 100 L164.5 102.5 L168 98" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.5" />

      {/* X mark on left */}
      <circle cx="40" cy="100" r="5" fill="#E21B3C" opacity="0.1" />
      <line x1="37" y1="97" x2="43" y2="103" stroke="#E21B3C" strokeWidth="1" opacity="0.35" />
      <line x1="43" y1="97" x2="37" y2="103" stroke="#E21B3C" strokeWidth="1" opacity="0.35" />

      {/* Arrow between */}
      <path d="M93 78 L107 78" stroke="#FFA602" strokeWidth="1" fill="none" opacity="0.3" markerEnd="url(#arrowM2vague)" />
      <defs>
        <marker id="arrowM2vague" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
          <polygon points="0,0 4,2 0,4" fill="#FFA602" opacity="0.4" />
        </marker>
      </defs>

      {/* Sparkles */}
      <circle cx="185" cy="35" r="1" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="125" r="1.5" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "The Four Things That Always Help" — four pillars */
export function M2FourPillarsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="85" rx="75" ry="40" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Base platform */}
      <rect x="20" y="120" width="160" height="8" rx="4" fill="white" opacity="0.06" />

      {/* Pillar 1: Context */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="28" y="55" width="32" height="65" rx="4" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="0.7" />
        <circle cx="44" cy="70" r="7" fill="#1368CE" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="44" y="73" textAnchor="middle" fontSize="7" fill="#1368CE" opacity="0.5" fontWeight="bold">C</text>
        <text x="44" y="95" textAnchor="middle" fontSize="5" fill="#1368CE" opacity="0.4">Context</text>
      </g>

      {/* Pillar 2: Audience */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="66" y="45" width="32" height="75" rx="4" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.7" />
        <circle cx="82" cy="60" r="7" fill="#FFA602" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <text x="82" y="63" textAnchor="middle" fontSize="7" fill="#FFA602" opacity="0.5" fontWeight="bold">A</text>
        <text x="82" y="85" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.4">Audience</text>
      </g>

      {/* Pillar 3: Tone */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="3.1s" repeatCount="indefinite" />
        <rect x="104" y="50" width="32" height="70" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.7" />
        <circle cx="120" cy="65" r="7" fill="#26890C" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="120" y="68" textAnchor="middle" fontSize="7" fill="#26890C" opacity="0.5" fontWeight="bold">T</text>
        <text x="120" y="90" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.4">Tone</text>
      </g>

      {/* Pillar 4: Format */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2.6s" repeatCount="indefinite" />
        <rect x="142" y="40" width="32" height="80" rx="4" fill="#FF3EA5" opacity="0.1" stroke="#FF3EA5" strokeWidth="0.7" />
        <circle cx="158" cy="55" r="7" fill="#FF3EA5" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <text x="158" y="58" textAnchor="middle" fontSize="7" fill="#FF3EA5" opacity="0.5" fontWeight="bold">F</text>
        <text x="158" y="80" textAnchor="middle" fontSize="5" fill="#FF3EA5" opacity="0.4">Format</text>
      </g>

      {/* Top crown line connecting them */}
      <path d="M44 52 L82 42 L120 47 L158 37" stroke="#FFA602" strokeWidth="0.8" fill="none" opacity="0.15" strokeDasharray="3 2">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="14" cy="35" r="1.5" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="188" cy="25" r="1" fill="#E21B3C" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Before and After" — side-by-side comparison */
export function M2BeforeAfterIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Left: Before */}
      <rect x="10" y="25" width="80" height="105" rx="8" fill="#E21B3C" fillOpacity="0.04" stroke="#E21B3C" strokeWidth="0.5" strokeOpacity="0.1" />
      <text x="50" y="40" textAnchor="middle" fontSize="6" fill="#E21B3C" opacity="0.35" fontWeight="bold">BEFORE</text>

      {/* Short vague prompt */}
      <rect x="20" y="48" width="60" height="12" rx="5" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="0.4" />
      <rect x="26" y="52" width="25" height="2.5" rx="1" fill="#E21B3C" opacity="0.2" />

      {/* Meh response */}
      <rect x="20" y="68" width="60" height="45" rx="5" fill="white" fillOpacity="0.02" stroke="white" strokeWidth="0.4" strokeOpacity="0.06" />
      <rect x="26" y="74" width="48" height="2.5" rx="1" fill="white" opacity="0.06" />
      <rect x="26" y="80" width="40" height="2.5" rx="1" fill="white" opacity="0.05" />
      <rect x="26" y="86" width="44" height="2.5" rx="1" fill="white" opacity="0.04" />
      <rect x="26" y="92" width="36" height="2.5" rx="1" fill="white" opacity="0.03" />
      {/* Thumbs down */}
      <circle cx="50" cy="108" r="4" fill="#E21B3C" opacity="0.12" />
      <text x="50" y="110.5" textAnchor="middle" fontSize="5" fill="#E21B3C" opacity="0.3">:/</text>

      {/* Arrow */}
      <path d="M95 78 L105 78" stroke="#FFA602" strokeWidth="1.5" fill="none" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>
      <polygon points="105,75 111,78 105,81" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Right: After */}
      <rect x="110" y="25" width="80" height="105" rx="8" fill="#26890C" fillOpacity="0.04" stroke="#26890C" strokeWidth="0.5" strokeOpacity="0.1" />
      <text x="150" y="40" textAnchor="middle" fontSize="6" fill="#26890C" opacity="0.35" fontWeight="bold">AFTER</text>

      {/* Detailed prompt */}
      <rect x="118" y="48" width="65" height="22" rx="5" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.4" />
      <rect x="124" y="52" width="50" height="2.5" rx="1" fill="#26890C" opacity="0.25" />
      <rect x="124" y="57" width="42" height="2.5" rx="1" fill="#26890C" opacity="0.2" />
      <rect x="124" y="62" width="48" height="2.5" rx="1" fill="#26890C" opacity="0.18" />

      {/* Great response */}
      <rect x="118" y="78" width="65" height="35" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.4" strokeOpacity="0.08" />
      <rect x="124" y="83" width="52" height="2.5" rx="1" fill="#26890C" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="124" y="88" width="46" height="2.5" rx="1" fill="#26890C" opacity="0.2">
        <animate attributeName="opacity" values="0.12;0.3;0.12" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </rect>
      <rect x="124" y="93" width="50" height="2.5" rx="1" fill="#26890C" opacity="0.18">
        <animate attributeName="opacity" values="0.1;0.28;0.1" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </rect>
      <rect x="124" y="98" width="42" height="2.5" rx="1" fill="#26890C" opacity="0.15" />

      {/* Checkmark */}
      <circle cx="150" cy="110" r="4" fill="#26890C" opacity="0.15" />
      <path d="M147 110 L149 112.5 L153 108" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Sparkles */}
      <circle cx="180" cy="20" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="5" cy="140" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "The Context Trick" — magnifying glass revealing persona */
export function M2ContextTrickIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="75" r="50" fill="#00C9B7" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Person silhouette */}
      <circle cx="80" cy="55" r="12" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="0.6" />
      <ellipse cx="80" cy="85" rx="18" ry="12" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="0.5" />

      {/* Context labels floating from person */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,-1;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="105" y="38" width="55" height="12" rx="4" fill="#00C9B7" opacity="0.12" stroke="#00C9B7" strokeWidth="0.5" />
        <text x="132" y="47" textAnchor="middle" fontSize="5" fill="#00C9B7" opacity="0.5">Who I am</text>
      </g>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,1;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="108" y="55" width="60" height="12" rx="4" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="0.5" />
        <text x="138" y="64" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.5">My situation</text>
      </g>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,0;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="105" y="72" width="55" height="12" rx="4" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="0.5" />
        <text x="132" y="81" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.5">My goal</text>
      </g>

      {/* Arrow pointing into chat */}
      <path d="M100 100 L100 112" stroke="#FF3EA5" strokeWidth="1" fill="none" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
      </path>
      <polygon points="96,112 100,118 104,112" fill="#FF3EA5" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Chat box at bottom */}
      <rect x="55" y="120" width="90" height="22" rx="6" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.6" strokeOpacity="0.1" />
      <rect x="63" y="127" width="60" height="3" rx="1.5" fill="#00C9B7" opacity="0.2" />
      <rect x="63" y="133" width="45" height="3" rx="1.5" fill="#00C9B7" opacity="0.15" />

      {/* Sparkles */}
      <circle cx="30" cy="30" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="90" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="30" r="1.2" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Pick the Better Prompt" — quiz podium */
export function M2PickBetterPromptIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="80" rx="65" ry="45" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Option A: vague — dimmed */}
      <rect x="20" y="40" width="70" height="50" rx="8" fill="#E21B3C" opacity="0.06" stroke="#E21B3C" strokeWidth="0.6" />
      <text x="55" y="55" textAnchor="middle" fontSize="10" fill="#E21B3C" opacity="0.25" fontWeight="bold">A</text>
      <rect x="32" y="62" width="46" height="2.5" rx="1" fill="#E21B3C" opacity="0.12" />
      <rect x="35" y="68" width="36" height="2.5" rx="1" fill="#E21B3C" opacity="0.08" />
      <rect x="32" y="74" width="42" height="2.5" rx="1" fill="#E21B3C" opacity="0.06" />

      {/* Option B: specific — highlighted */}
      <rect x="110" y="35" width="70" height="55" rx="8" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.8">
        <animate attributeName="opacity" values="0.06;0.14;0.06" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="145" y="52" textAnchor="middle" fontSize="10" fill="#26890C" opacity="0.35" fontWeight="bold">B</text>
      <rect x="120" y="58" width="52" height="2.5" rx="1" fill="#26890C" opacity="0.2" />
      <rect x="120" y="63" width="46" height="2.5" rx="1" fill="#26890C" opacity="0.18" />
      <rect x="120" y="68" width="50" height="2.5" rx="1" fill="#26890C" opacity="0.15" />
      <rect x="120" y="73" width="42" height="2.5" rx="1" fill="#26890C" opacity="0.12" />
      <rect x="120" y="78" width="48" height="2.5" rx="1" fill="#26890C" opacity="0.1" />

      {/* Trophy / crown on B */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2s" repeatCount="indefinite" />
        <polygon points="145,22 140,32 150,32" fill="#FFA602" opacity="0.2" stroke="#FFA602" strokeWidth="0.5" />
        <circle cx="145" cy="22" r="3" fill="#FFA602" opacity="0.2">
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* VS divider */}
      <text x="100" y="70" textAnchor="middle" fontSize="8" fill="#FFA602" opacity="0.3" fontWeight="bold">vs</text>

      {/* "Which is better?" */}
      <text x="100" y="115" textAnchor="middle" fontSize="6" fill="white" opacity="0.2">Which is better?</text>

      {/* Hand pointer */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;3,-2;0,0" dur="1.5s" repeatCount="indefinite" />
        <circle cx="145" cy="100" r="6" fill="#FF3EA5" opacity="0.1" stroke="#FF3EA5" strokeWidth="0.5" />
        <path d="M142 100 L145 96 L148 100" stroke="#FF3EA5" strokeWidth="1" fill="none" opacity="0.35" />
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.5" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="188" cy="120" r="1" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Try This Right Now" — hands on keyboard / go time */
export function M2TryThisNowIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="85" rx="70" ry="40" fill="#26890C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Laptop base */}
      <rect x="40" y="85" width="120" height="7" rx="3" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      {/* Laptop screen */}
      <rect x="50" y="35" width="100" height="52" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.7" strokeOpacity="0.12" />

      {/* Template prompt on screen */}
      <rect x="58" y="42" width="84" height="36" rx="3" fill="white" opacity="0.02" />
      <text x="62" y="50" fontSize="4" fill="#26890C" opacity="0.35">I need to [__________]</text>
      <text x="62" y="57" fontSize="4" fill="#FFA602" opacity="0.35">for [__________]</text>
      <text x="62" y="64" fontSize="4" fill="#1368CE" opacity="0.35">Tone: [__________]</text>
      <text x="62" y="71" fontSize="4" fill="#FF3EA5" opacity="0.35">Goal: [__________]</text>

      {/* Blinking cursor */}
      <rect x="104" y="48" width="1.5" height="5" rx="0.5" fill="#26890C" opacity="0.5">
        <animate attributeName="opacity" values="0;0.6;0" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* "GO!" badge */}
      <circle cx="100" cy="112" r="14" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.8">
        <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="116" textAnchor="middle" fontSize="9" fill="#26890C" opacity="0.4" fontWeight="bold">GO!</text>

      {/* Arrows pointing to blanks */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,0;0,0" dur="2s" repeatCount="indefinite" />
        <path d="M38 50 L52 50" stroke="#26890C" strokeWidth="0.7" fill="none" opacity="0.2" />
        <polygon points="52,48 56,50 52,52" fill="#26890C" opacity="0.2" />
      </g>

      {/* Sparkles */}
      <circle cx="25" cy="35" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="50" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="110" r="1.2" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="105" r="1" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Key Takeaway" (Lesson 2) — target bullseye */
export function M2L2KeyTakeawayIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="75" r="50" fill="#E21B3C" opacity="0.04">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Target rings */}
      <circle cx="100" cy="75" r="40" fill="none" stroke="#E21B3C" strokeWidth="0.8" opacity="0.1" />
      <circle cx="100" cy="75" r="30" fill="none" stroke="#FFA602" strokeWidth="0.8" opacity="0.12" />
      <circle cx="100" cy="75" r="20" fill="none" stroke="#26890C" strokeWidth="0.8" opacity="0.15" />
      <circle cx="100" cy="75" r="10" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="1">
        <animate attributeName="opacity" values="0.08;0.2;0.08" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Bullseye center */}
      <circle cx="100" cy="75" r="4" fill="#26890C" opacity="0.25">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Arrow hitting center */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="3,3;0,0;0,0" dur="2s" repeatCount="indefinite" />
        <line x1="130" y1="50" x2="103" y2="73" stroke="#1368CE" strokeWidth="1.2" opacity="0.35" />
        <polygon points="103,73 106,68 108,73" fill="#1368CE" opacity="0.35" />
      </g>

      {/* Labels on rings */}
      <text x="100" y="128" textAnchor="middle" fontSize="5" fill="#E21B3C" opacity="0.25">Context</text>
      <text x="145" y="78" textAnchor="start" fontSize="5" fill="#FFA602" opacity="0.25">Audience</text>
      <text x="100" y="30" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.25">Tone + Format</text>

      {/* Sparkles */}
      <circle cx="25" cy="40" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="120" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


// ─── Lesson 3: When AI Gets It Wrong ────────────────────────────────────────

/** "What Hallucination Actually Means" — ghost text appearing from nothing */
export function M2HallucinationIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Eerie glow */}
      <circle cx="100" cy="75" r="50" fill="#FF3EA5" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* AI brain / head */}
      <circle cx="100" cy="50" r="22" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.8" strokeOpacity="0.1" />
      {/* Brain waves / pattern matching */}
      <path d="M88 45 Q92 38 96 45 Q100 38 104 45 Q108 38 112 45" stroke="#FF3EA5" strokeWidth="1" fill="none" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M90 55 Q94 48 98 55 Q102 48 106 55 Q110 48 114 55" stroke="#FF3EA5" strokeWidth="0.8" fill="none" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </path>

      {/* Output text — some real, some ghostly */}
      <rect x="45" y="82" width="50" height="3" rx="1.5" fill="#26890C" opacity="0.3" />
      <rect x="45" y="89" width="42" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
      <rect x="45" y="96" width="55" height="3" rx="1.5" fill="#FF3EA5" opacity="0.2" strokeDasharray="2 1" stroke="#FF3EA5" strokeWidth="0.3">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="45" y="103" width="38" height="3" rx="1.5" fill="#FF3EA5" opacity="0.15" strokeDasharray="2 1" stroke="#FF3EA5" strokeWidth="0.3">
        <animate attributeName="opacity" values="0.1;0.25;0.05" dur="2s" repeatCount="indefinite" />
      </rect>

      {/* Ghost / fabricated indicator */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" repeatCount="indefinite" />
        <circle cx="125" cy="92" r="15" fill="#FF3EA5" opacity="0.06" stroke="#FF3EA5" strokeWidth="0.5" strokeDasharray="3 2" />
        <text x="125" y="88" textAnchor="middle" fontSize="6" fill="#FF3EA5" opacity="0.3">?</text>
        <text x="125" y="98" textAnchor="middle" fontSize="4.5" fill="#FF3EA5" opacity="0.2">made</text>
        <text x="125" y="104" textAnchor="middle" fontSize="4.5" fill="#FF3EA5" opacity="0.2">up</text>
      </g>

      {/* Warning triangle */}
      <g>
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        <polygon points="155,40 163,54 147,54" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.4" />
        <text x="155" y="52" textAnchor="middle" fontSize="7" fill="#FFA602" opacity="0.4" fontWeight="bold">!</text>
      </g>

      {/* Sparkles */}
      <circle cx="30" cy="35" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="110" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="120" r="1.2" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Real Things AI Has Gotten Embarrassingly Wrong" — courtroom blunder */
export function M2AiBlundersIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="80" rx="65" ry="45" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Gavel (courtroom reference) */}
      <rect x="75" y="28" width="50" height="8" rx="4" fill="#E21B3C" opacity="0.15" stroke="#E21B3C" strokeWidth="0.6" />
      <rect x="95" y="34" width="10" height="20" rx="2" fill="#E21B3C" opacity="0.1" stroke="#E21B3C" strokeWidth="0.5" />
      <ellipse cx="100" cy="56" rx="18" ry="4" fill="#E21B3C" opacity="0.08" />

      {/* Fake citation document */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;1,-1;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="30" y="65" width="55" height="70" rx="4" fill="white" opacity="0.04" stroke="#E21B3C" strokeWidth="0.6" strokeDasharray="3 2" />
        <rect x="38" y="72" width="38" height="2.5" rx="1" fill="#E21B3C" opacity="0.15" />
        <rect x="38" y="78" width="30" height="2.5" rx="1" fill="#E21B3C" opacity="0.12" />
        <rect x="38" y="84" width="35" height="2.5" rx="1" fill="#E21B3C" opacity="0.1" />
        <rect x="38" y="90" width="28" height="2.5" rx="1" fill="#E21B3C" opacity="0.08" />
        {/* Big X through it */}
        <line x1="32" y1="67" x2="83" y2="133" stroke="#E21B3C" strokeWidth="1.5" opacity="0.2" />
        <line x1="83" y1="67" x2="32" y2="133" stroke="#E21B3C" strokeWidth="1.5" opacity="0.2" />
        <text x="57" y="115" textAnchor="middle" fontSize="5" fill="#E21B3C" opacity="0.3">FAKE</text>
      </g>

      {/* Wrong pill dosage */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,1;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="120" y="65" width="50" height="35" rx="4" fill="white" opacity="0.04" stroke="#FFA602" strokeWidth="0.6" strokeDasharray="3 2" />
        <circle cx="145" cy="77" r="6" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.5" />
        <text x="145" y="80" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.3">Rx</text>
        <text x="145" y="93" textAnchor="middle" fontSize="4" fill="#FFA602" opacity="0.2">Wrong dose</text>
      </g>

      {/* Wrong dates */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="115" y="108" width="55" height="25" rx="4" fill="white" opacity="0.04" stroke="#FF3EA5" strokeWidth="0.6" strokeDasharray="3 2" />
        <text x="142" y="120" textAnchor="middle" fontSize="5" fill="#FF3EA5" opacity="0.25">1974?</text>
        <text x="142" y="128" textAnchor="middle" fontSize="4" fill="#FF3EA5" opacity="0.2">Wrong year</text>
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="40" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="50" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "What AI Doesn't Know It Doesn't Know" — blind spot / cliff edge */
export function M2BlindSpotsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="55" fill="#FFA602" opacity="0.04">
        <animate attributeName="r" values="50;60;50" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Knowledge area — solid ground */}
      <rect x="15" y="90" width="100" height="40" rx="4" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.6" />
      <text x="65" y="110" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.3">Known territory</text>

      {/* Cliff edge */}
      <line x1="115" y1="90" x2="115" y2="130" stroke="#FFA602" strokeWidth="1" opacity="0.3" />

      {/* Unknown zone — foggy */}
      <rect x="115" y="90" width="70" height="40" rx="4" fill="#E21B3C" opacity="0.04" stroke="#E21B3C" strokeWidth="0.5" strokeDasharray="4 3" />
      <text x="150" y="110" textAnchor="middle" fontSize="5" fill="#E21B3C" opacity="0.2">Unknown zone</text>
      <circle cx="140" cy="108" r="8" fill="#E21B3C" opacity="0.03">
        <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="102" r="6" fill="#E21B3C" opacity="0.03">
        <animate attributeName="r" values="4;8;4" dur="3.5s" repeatCount="indefinite" />
      </circle>

      {/* AI walking confidently toward edge */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;3,0;0,0" dur="2s" repeatCount="indefinite" />
        <circle cx="98" cy="75" r="8" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="0.6" />
        <text x="98" y="78" textAnchor="middle" fontSize="6" fill="#1368CE" opacity="0.4">AI</text>
        <line x1="98" y1="83" x2="98" y2="88" stroke="#1368CE" strokeWidth="0.8" opacity="0.2" />
      </g>

      {/* Training cutoff calendar */}
      <rect x="30" y="28" width="45" height="40" rx="4" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <rect x="30" y="28" width="45" height="10" rx="4" fill="#FFA602" opacity="0.1" />
      <text x="52" y="36" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.4">Cutoff</text>
      <line x1="38" y1="48" x2="68" y2="48" stroke="white" strokeWidth="0.4" opacity="0.08" />
      <line x1="38" y1="55" x2="68" y2="55" stroke="white" strokeWidth="0.4" opacity="0.08" />
      <rect x="55" y="50" width="10" height="8" rx="1" fill="#E21B3C" opacity="0.1" />

      {/* Warning */}
      <text x="150" y="55" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.25">More specific =</text>
      <text x="150" y="63" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.25">more risky</text>

      {/* Sparkles */}
      <circle cx="15" cy="55" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="75" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "How to Catch AI When It's Making Stuff Up" — detective magnifier */
export function M2CatchAiIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="50" fill="#1368CE" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Magnifying glass */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;3,-2;0,0" dur="3s" repeatCount="indefinite" />
        <circle cx="85" cy="65" r="25" fill="white" fillOpacity="0.03" stroke="#1368CE" strokeWidth="1.5" strokeOpacity="0.25" />
        <line x1="103" y1="83" x2="120" y2="100" stroke="#1368CE" strokeWidth="3" opacity="0.2" strokeLinecap="round" />
      </g>

      {/* Text under magnifier — some flagged */}
      <rect x="70" y="55" width="30" height="3" rx="1.5" fill="#26890C" opacity="0.3" />
      <rect x="70" y="61" width="25" height="3" rx="1.5" fill="#26890C" opacity="0.25" />
      <rect x="70" y="67" width="28" height="3" rx="1.5" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="70" y="73" width="22" height="3" rx="1.5" fill="#26890C" opacity="0.2" />

      {/* Verification methods */}
      {/* Ask for sources */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="130" y="35" width="55" height="14" rx="4" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="0.5" />
        <text x="157" y="44.5" textAnchor="middle" fontSize="4.5" fill="#1368CE" opacity="0.4">Ask sources</text>
      </g>

      {/* Google the claim */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="130" y="55" width="55" height="14" rx="4" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.5" />
        <text x="157" y="64.5" textAnchor="middle" fontSize="4.5" fill="#FFA602" opacity="0.4">Google it</text>
      </g>

      {/* Common sense */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="130" y="75" width="55" height="14" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.5" />
        <text x="157" y="84.5" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.4">Common sense</text>
      </g>

      {/* Self-check */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="3.3s" repeatCount="indefinite" />
        <rect x="130" y="95" width="55" height="14" rx="4" fill="#FF3EA5" opacity="0.1" stroke="#FF3EA5" strokeWidth="0.5" />
        <text x="157" y="104.5" textAnchor="middle" fontSize="4.5" fill="#FF3EA5" opacity="0.4">Ask AI to check</text>
      </g>

      {/* Sparkles */}
      <circle cx="25" cy="40" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="130" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "The Right Way to Think About This" — 80-20 bar */
export function M2RightWayToThinkIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="75" rx="70" ry="40" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Progress bar — 80% AI, 20% you */}
      <rect x="25" y="55" width="150" height="24" rx="12" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.8" strokeOpacity="0.1" />

      {/* 80% AI portion */}
      <rect x="25" y="55" width="120" height="24" rx="12" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="0.6">
        <animate attributeName="opacity" values="0.08;0.16;0.08" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="85" y="70" textAnchor="middle" fontSize="7" fill="#1368CE" opacity="0.4" fontWeight="bold">AI gets you 80%</text>

      {/* 20% You portion */}
      <rect x="145" y="55" width="30" height="24" rx="12" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="0.6">
        <animate attributeName="opacity" values="0.1;0.22;0.1" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="160" y="70" textAnchor="middle" fontSize="6" fill="#FFA602" opacity="0.4" fontWeight="bold">You</text>

      {/* AI as a starting point */}
      <text x="100" y="40" textAnchor="middle" fontSize="6" fill="white" opacity="0.2">Starting point, not endpoint</text>

      {/* Friend metaphor — two people */}
      <circle cx="60" cy="105" r="8" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="0.5" />
      <text x="60" y="108" textAnchor="middle" fontSize="5" fill="#1368CE" opacity="0.3">AI</text>

      <path d="M72 105 L88 105" stroke="#00C9B7" strokeWidth="0.8" opacity="0.2" strokeDasharray="2 2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
      </path>

      <circle cx="100" cy="105" r="8" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="0.5" />
      <text x="100" y="108" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.3">You</text>

      <path d="M112 105 L128 105" stroke="#00C9B7" strokeWidth="0.8" opacity="0.2" strokeDasharray="2 2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" repeatCount="indefinite" />
      </path>

      <circle cx="140" cy="105" r="8" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.5" />
      <text x="140" y="108" textAnchor="middle" fontSize="4" fill="#26890C" opacity="0.3">Done</text>

      {/* Checkmark at end */}
      <path d="M136 105 L139 108 L144 103" stroke="#26890C" strokeWidth="0" fill="none" opacity="0" />

      {/* Sparkles */}
      <circle cx="20" cy="40" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="100" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Verify label */}
      <text x="100" y="135" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.2">Verify the last 20%</text>
    </svg>
  );
}

/** "Would You Trust AI for This?" — trust scale */
export function M2TrustScaleIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="50" fill="#FFA602" opacity="0.04">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Scale base */}
      <rect x="90" y="45" width="4" height="60" rx="2" fill="white" opacity="0.08" />
      <polygon points="92,45 70,42 114,42" fill="white" opacity="0.06" />

      {/* Left pan — safe to trust */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" dur="3s" repeatCount="indefinite" />
        <line x1="72" y1="42" x2="40" y2="50" stroke="white" strokeWidth="0.6" opacity="0.1" />
        <ellipse cx="35" cy="55" rx="25" ry="8" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.6" />
        <text x="35" y="58" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.3">Dinner ideas</text>
        <text x="35" y="65" textAnchor="middle" fontSize="4" fill="#26890C" opacity="0.25">Drafts</text>
      </g>

      {/* Right pan — verify first */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="3s" repeatCount="indefinite" />
        <line x1="112" y1="42" x2="160" y2="48" stroke="white" strokeWidth="0.6" opacity="0.1" />
        <ellipse cx="165" cy="53" rx="25" ry="8" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="0.6" />
        <text x="165" y="56" textAnchor="middle" fontSize="4.5" fill="#E21B3C" opacity="0.3">Medication</text>
        <text x="165" y="63" textAnchor="middle" fontSize="4" fill="#E21B3C" opacity="0.25">Legal advice</text>
      </g>

      {/* Stakes label */}
      <text x="35" y="85" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.25">Low stakes</text>
      <text x="165" y="82" textAnchor="middle" fontSize="5" fill="#E21B3C" opacity="0.25">High stakes</text>

      {/* Arrow / spectrum */}
      <line x1="30" y1="115" x2="170" y2="115" stroke="white" strokeWidth="0.8" opacity="0.08" />
      <rect x="30" y="112" width="40" height="6" rx="3" fill="#26890C" opacity="0.1" />
      <rect x="75" y="112" width="50" height="6" rx="3" fill="#FFA602" opacity="0.08" />
      <rect x="130" y="112" width="40" height="6" rx="3" fill="#E21B3C" opacity="0.1" />
      <text x="50" y="128" textAnchor="middle" fontSize="4" fill="#26890C" opacity="0.2">Trust</text>
      <text x="100" y="128" textAnchor="middle" fontSize="4" fill="#FFA602" opacity="0.2">Check</text>
      <text x="150" y="128" textAnchor="middle" fontSize="4" fill="#E21B3C" opacity="0.2">Verify</text>

      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="130" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "The One Sentence to Remember" — carved-in-stone sentence */
export function M2OneSentenceIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="80" rx="65" ry="45" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Stone tablet */}
      <rect x="30" y="30" width="140" height="80" rx="6" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
      <rect x="30" y="30" width="140" height="14" rx="6" fill="#FFA602" opacity="0.06" />

      {/* Engraved text */}
      <text x="100" y="42" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.35" fontWeight="bold">THE RULE</text>

      <text x="100" y="62" textAnchor="middle" fontSize="5" fill="white" opacity="0.2">Trust the structure.</text>
      <text x="100" y="74" textAnchor="middle" fontSize="5" fill="white" opacity="0.2">Verify the specifics.</text>

      {/* Underline emphasis */}
      <line x1="55" y1="78" x2="145" y2="78" stroke="#FFA602" strokeWidth="0.5" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </line>

      {/* Two icons: structure (check) and specifics (magnifier) */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="2.5s" repeatCount="indefinite" />
        <circle cx="70" cy="96" r="8" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.5" />
        <path d="M66 96 L69 99 L74 93" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.4" />
      </g>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="2.8s" repeatCount="indefinite" />
        <circle cx="130" cy="96" r="6" fill="none" stroke="#1368CE" strokeWidth="0.8" opacity="0.25" />
        <line x1="135" y1="100" x2="140" y2="105" stroke="#1368CE" strokeWidth="1" opacity="0.2" />
      </g>

      {/* Eternal flame vibes — small glow */}
      <circle cx="100" cy="125" r="8" fill="#FFA602" opacity="0.06">
        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="125" r="4" fill="#FFA602" opacity="0.1">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="18" cy="25" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="45" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Key Takeaway" (Lesson 3) — shield with checkmark */
export function M2L3KeyTakeawayIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="75" r="50" fill="#1368CE" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Shield shape */}
      <path d="M100 25 L140 40 L140 80 Q140 110 100 130 Q60 110 60 80 L60 40 Z" fill="#1368CE" opacity="0.06" stroke="#1368CE" strokeWidth="1">
        <animate attributeName="opacity" values="0.04;0.1;0.04" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Inner shield */}
      <path d="M100 38 L128 48 L128 78 Q128 100 100 116 Q72 100 72 78 L72 48 Z" fill="#1368CE" opacity="0.04" stroke="#1368CE" strokeWidth="0.5" />

      {/* Checkmark inside */}
      <path d="M88 75 L96 83 L114 65" stroke="#26890C" strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round">
        <animate attributeName="opacity" values="0.25;0.5;0.25" dur="2s" repeatCount="indefinite" />
      </path>

      {/* "Verify" text */}
      <text x="100" y="100" textAnchor="middle" fontSize="6" fill="#1368CE" opacity="0.3">Verify facts</text>

      {/* Small warning icons around */}
      <g>
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
        <polygon points="40,50 44,58 36,58" fill="none" stroke="#FFA602" strokeWidth="0.6" />
        <text x="40" y="57" textAnchor="middle" fontSize="4" fill="#FFA602">!</text>
      </g>
      <g>
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.8s" repeatCount="indefinite" />
        <polygon points="160,50 164,58 156,58" fill="none" stroke="#FFA602" strokeWidth="0.6" />
        <text x="160" y="57" textAnchor="middle" fontSize="4" fill="#FFA602">!</text>
      </g>

      {/* Sparkles */}
      <circle cx="25" cy="35" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="120" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="145" r="1.2" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


// ─── Lesson 4: AI for Everyday Tasks ────────────────────────────────────────

/** "Writing Help" — pen on paper with text flowing */
export function M2WritingHelpIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="80" rx="65" ry="45" fill="#1368CE" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Paper */}
      <rect x="50" y="20" width="100" height="120" rx="4" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.8" strokeOpacity="0.1" />
      {/* Lines on paper */}
      <rect x="60" y="35" width="65" height="3" rx="1.5" fill="#1368CE" opacity="0.2">
        <animate attributeName="width" values="0;65;65" dur="2s" fill="freeze" />
      </rect>
      <rect x="60" y="43" width="55" height="3" rx="1.5" fill="#1368CE" opacity="0.17">
        <animate attributeName="width" values="0;55;55" dur="2s" begin="0.3s" fill="freeze" />
      </rect>
      <rect x="60" y="51" width="70" height="3" rx="1.5" fill="#1368CE" opacity="0.14">
        <animate attributeName="width" values="0;70;70" dur="2s" begin="0.6s" fill="freeze" />
      </rect>
      <rect x="60" y="59" width="50" height="3" rx="1.5" fill="#1368CE" opacity="0.11">
        <animate attributeName="width" values="0;50;50" dur="2s" begin="0.9s" fill="freeze" />
      </rect>
      <rect x="60" y="67" width="60" height="3" rx="1.5" fill="#1368CE" opacity="0.09">
        <animate attributeName="width" values="0;60;60" dur="2s" begin="1.2s" fill="freeze" />
      </rect>

      {/* Pen */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;3,2;0,0" dur="2s" repeatCount="indefinite" />
        <line x1="125" y1="60" x2="140" y2="30" stroke="#FFA602" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
        <circle cx="125" cy="60" r="2" fill="#FFA602" opacity="0.4" />
      </g>

      {/* Label icons */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="60" y="88" width="35" height="10" rx="3" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="0.4" />
        <text x="77" y="96" textAnchor="middle" fontSize="4" fill="#E21B3C" opacity="0.3">Emails</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="100" y="88" width="40" height="10" rx="3" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.4" />
        <text x="120" y="96" textAnchor="middle" fontSize="4" fill="#26890C" opacity="0.3">Letters</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="60" y="102" width="38" height="10" rx="3" fill="#FF3EA5" opacity="0.08" stroke="#FF3EA5" strokeWidth="0.4" />
        <text x="79" y="110" textAnchor="middle" fontSize="4" fill="#FF3EA5" opacity="0.3">Apologies</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="3.2s" repeatCount="indefinite" />
        <rect x="103" y="102" width="35" height="10" rx="3" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="0.4" />
        <text x="120" y="110" textAnchor="middle" fontSize="4" fill="#FFA602" opacity="0.3">Cover</text>
      </g>

      {/* Sparkles */}
      <circle cx="30" cy="30" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="50" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Research Help" — books and search */
export function M2ResearchHelpIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="55" fill="#FFA602" opacity="0.04">
        <animate attributeName="r" values="50;60;50" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Globe / world icon */}
      <circle cx="70" cy="55" r="22" fill="white" fillOpacity="0.03" stroke="#FFA602" strokeWidth="0.8" strokeOpacity="0.2" />
      <ellipse cx="70" cy="55" rx="10" ry="22" fill="none" stroke="#FFA602" strokeWidth="0.5" opacity="0.12" />
      <line x1="48" y1="55" x2="92" y2="55" stroke="#FFA602" strokeWidth="0.5" opacity="0.1" />
      <line x1="48" y1="45" x2="92" y2="45" stroke="#FFA602" strokeWidth="0.3" opacity="0.08" />
      <line x1="48" y1="65" x2="92" y2="65" stroke="#FFA602" strokeWidth="0.3" opacity="0.08" />

      {/* Search magnifier on globe */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,-1;0,0" dur="3s" repeatCount="indefinite" />
        <circle cx="82" cy="50" r="8" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.25" />
        <line x1="88" y1="55" x2="95" y2="62" stroke="#1368CE" strokeWidth="1.5" opacity="0.2" />
      </g>

      {/* Info cards flowing out */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,0;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="110" y="30" width="65" height="18" rx="4" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="0.5" />
        <text x="142" y="41.5" textAnchor="middle" fontSize="4.5" fill="#FFA602" opacity="0.3">Trip planning</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,0;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="110" y="53" width="65" height="18" rx="4" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.5" />
        <text x="142" y="64.5" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.3">Explanations</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,0;0,0" dur="3.1s" repeatCount="indefinite" />
        <rect x="110" y="76" width="65" height="18" rx="4" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="0.5" />
        <text x="142" y="87.5" textAnchor="middle" fontSize="4.5" fill="#1368CE" opacity="0.3">Comparisons</text>
      </g>

      {/* Document icon */}
      <rect x="40" y="95" width="35" height="40" rx="3" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />
      <rect x="46" y="102" width="22" height="2" rx="1" fill="white" opacity="0.08" />
      <rect x="46" y="108" width="18" height="2" rx="1" fill="white" opacity="0.06" />
      <rect x="46" y="114" width="20" height="2" rx="1" fill="white" opacity="0.05" />

      {/* Arrow from doc to AI */}
      <path d="M78 115 L95 115" stroke="#00C9B7" strokeWidth="0.8" opacity="0.2" strokeDasharray="2 2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="20" cy="30" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="110" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Creative Help" — lightbulbs and brainstorm cloud */
export function M2CreativeHelpIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="75" rx="65" ry="50" fill="#FF3EA5" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Brainstorm cloud */}
      <circle cx="80" cy="55" r="20" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.6" strokeOpacity="0.08" />
      <circle cx="105" cy="48" r="18" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.6" strokeOpacity="0.08" />
      <circle cx="125" cy="58" r="16" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.6" strokeOpacity="0.08" />
      <circle cx="95" cy="65" r="15" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.6" strokeOpacity="0.08" />

      {/* Lightbulbs popping out of cloud */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2.5s" repeatCount="indefinite" />
        <circle cx="65" cy="30" r="7" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="0.6" />
        <path d="M62 28 Q64 24 65 28 Q66 24 68 28" stroke="#FFA602" strokeWidth="0.8" fill="none" opacity="0.3" />
      </g>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2.8s" repeatCount="indefinite" />
        <circle cx="100" cy="22" r="8" fill="#FF3EA5" opacity="0.12" stroke="#FF3EA5" strokeWidth="0.6" />
        <path d="M97 20 Q99 16 100 20 Q101 16 103 20" stroke="#FF3EA5" strokeWidth="0.8" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" repeatCount="indefinite" />
        <circle cx="135" cy="32" r="7" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="0.6" />
        <path d="M132 30 Q134 26 135 30 Q136 26 138 30" stroke="#26890C" strokeWidth="0.8" fill="none" opacity="0.3" />
      </g>

      {/* Idea labels */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;1,0;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="28" y="90" width="40" height="12" rx="4" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.4" />
        <text x="48" y="99" textAnchor="middle" fontSize="4" fill="#FFA602" opacity="0.35">Gifts</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,0;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="74" y="90" width="40" height="12" rx="4" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="0.4" />
        <text x="94" y="99" textAnchor="middle" fontSize="4" fill="#1368CE" opacity="0.35">Meals</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;1,0;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="120" y="90" width="48" height="12" rx="4" fill="#FF3EA5" opacity="0.1" stroke="#FF3EA5" strokeWidth="0.4" />
        <text x="144" y="99" textAnchor="middle" fontSize="4" fill="#FF3EA5" opacity="0.35">Hobbies</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,0;0,0" dur="3.2s" repeatCount="indefinite" />
        <rect x="55" y="108" width="40" height="12" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.4" />
        <text x="75" y="117" textAnchor="middle" fontSize="4" fill="#26890C" opacity="0.35">Parties</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;1,0;0,0" dur="2.6s" repeatCount="indefinite" />
        <rect x="102" y="108" width="42" height="12" rx="4" fill="#00C9B7" opacity="0.1" stroke="#00C9B7" strokeWidth="0.4" />
        <text x="123" y="117" textAnchor="middle" fontSize="4" fill="#00C9B7" opacity="0.35">Names</text>
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="50" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="60" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="140" r="1.2" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Prompts You Can Steal Right Now" — copy/paste clipboard */
export function M2StealPromptsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="50" fill="#00C9B7" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Clipboard 1 — source */}
      <rect x="30" y="25" width="65" height="85" rx="5" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.7" strokeOpacity="0.1" />
      <rect x="50" y="20" width="25" height="12" rx="3" fill="#00C9B7" opacity="0.15" stroke="#00C9B7" strokeWidth="0.5" />
      {/* Template lines */}
      <rect x="38" y="42" width="48" height="3" rx="1.5" fill="#00C9B7" opacity="0.2" />
      <rect x="38" y="49" width="40" height="3" rx="1.5" fill="#00C9B7" opacity="0.15" />
      <rect x="38" y="56" width="45" height="3" rx="1.5" fill="#00C9B7" opacity="0.12" />
      <rect x="38" y="63" width="35" height="3" rx="1.5" fill="#00C9B7" opacity="0.1" />
      <rect x="38" y="70" width="42" height="3" rx="1.5" fill="#00C9B7" opacity="0.08" />

      {/* Copy arrow animation */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;5,0;10,0" dur="2s" repeatCount="indefinite" />
        <rect x="95" y="50" width="15" height="15" rx="3" fill="#FFA602" opacity="0.15" stroke="#FFA602" strokeWidth="0.5" />
        <rect x="99" y="50" width="15" height="15" rx="3" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.5" />
      </g>

      {/* Clipboard 2 — your version */}
      <rect x="120" y="30" width="60" height="80" rx="5" fill="white" fillOpacity="0.04" stroke="#26890C" strokeWidth="0.7" strokeOpacity="0.15" />
      <rect x="138" y="25" width="25" height="12" rx="3" fill="#26890C" opacity="0.15" stroke="#26890C" strokeWidth="0.5" />
      {/* Customized lines */}
      <rect x="128" y="45" width="42" height="3" rx="1.5" fill="#26890C" opacity="0.2">
        <animate attributeName="opacity" values="0.12;0.25;0.12" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="128" y="52" width="36" height="3" rx="1.5" fill="#26890C" opacity="0.17">
        <animate attributeName="opacity" values="0.1;0.22;0.1" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </rect>
      <rect x="128" y="59" width="40" height="3" rx="1.5" fill="#26890C" opacity="0.14">
        <animate attributeName="opacity" values="0.08;0.2;0.08" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </rect>
      <rect x="128" y="66" width="32" height="3" rx="1.5" fill="#26890C" opacity="0.11" />

      {/* "Yours!" label */}
      <text x="150" y="90" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.3">Your version</text>

      {/* Sparkles */}
      <circle cx="15" cy="40" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="70" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="140" r="1.2" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Quick Check" (Lesson 4) — quiz with checkmarks */
export function M2L4QuickCheckIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="50" fill="#26890C" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Quiz card */}
      <rect x="40" y="25" width="120" height="100" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.7" strokeOpacity="0.1" />

      {/* Question mark header */}
      <circle cx="100" cy="42" r="10" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.6">
        <animate attributeName="opacity" values="0.08;0.16;0.08" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="46" textAnchor="middle" fontSize="10" fill="#FFA602" opacity="0.4" fontWeight="bold">?</text>

      {/* Option A */}
      <rect x="52" y="60" width="96" height="12" rx="4" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.4" strokeOpacity="0.08" />
      <rect x="58" y="64" width="50" height="3" rx="1.5" fill="white" opacity="0.08" />

      {/* Option B — correct */}
      <rect x="52" y="78" width="96" height="12" rx="4" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.5">
        <animate attributeName="opacity" values="0.06;0.12;0.06" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="58" y="82" width="55" height="3" rx="1.5" fill="#26890C" opacity="0.2" />
      <path d="M140 82 L142 84.5 L146 80" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Option C */}
      <rect x="52" y="96" width="96" height="12" rx="4" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.4" strokeOpacity="0.08" />
      <rect x="58" y="100" width="45" height="3" rx="1.5" fill="white" opacity="0.08" />

      {/* Celebration sparkle */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 100 80;360 100 80" dur="8s" repeatCount="indefinite" />
        <circle cx="165" cy="35" r="2" fill="#FFA602" opacity="0.3">
          <animate attributeName="opacity" values="0;0.5;0" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Sparkles */}
      <circle cx="25" cy="50" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="110" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Key Takeaway" (Lesson 4) — daily tools / Swiss army knife */
export function M2L4KeyTakeawayIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="75" r="50" fill="#00C9B7" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Central hub */}
      <circle cx="100" cy="70" r="18" fill="#00C9B7" opacity="0.1" stroke="#00C9B7" strokeWidth="1">
        <animate attributeName="opacity" values="0.06;0.15;0.06" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="73" textAnchor="middle" fontSize="7" fill="#00C9B7" opacity="0.4" fontWeight="bold">AI</text>

      {/* Radiating tool branches */}
      {/* Writing */}
      <line x1="85" y1="58" x2="55" y2="35" stroke="#1368CE" strokeWidth="0.8" opacity="0.15" />
      <circle cx="50" cy="32" r="10" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="0.5" />
      <text x="50" y="35" textAnchor="middle" fontSize="5" fill="#1368CE" opacity="0.3">Write</text>

      {/* Research */}
      <line x1="115" y1="58" x2="148" y2="35" stroke="#FFA602" strokeWidth="0.8" opacity="0.15" />
      <circle cx="152" cy="32" r="10" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="0.5" />
      <text x="152" y="35" textAnchor="middle" fontSize="4.5" fill="#FFA602" opacity="0.3">Learn</text>

      {/* Creative */}
      <line x1="118" y1="72" x2="155" y2="78" stroke="#FF3EA5" strokeWidth="0.8" opacity="0.15" />
      <circle cx="160" cy="78" r="10" fill="#FF3EA5" opacity="0.08" stroke="#FF3EA5" strokeWidth="0.5" />
      <text x="160" y="81" textAnchor="middle" fontSize="4.5" fill="#FF3EA5" opacity="0.3">Create</text>

      {/* Plan */}
      <line x1="100" y1="88" x2="100" y2="115" stroke="#26890C" strokeWidth="0.8" opacity="0.15" />
      <circle cx="100" cy="120" r="10" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.5" />
      <text x="100" y="123" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.3">Plan</text>

      {/* Fix */}
      <line x1="82" y1="72" x2="45" y2="78" stroke="#E21B3C" strokeWidth="0.8" opacity="0.15" />
      <circle cx="40" cy="78" r="10" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="0.5" />
      <text x="40" y="81" textAnchor="middle" fontSize="5" fill="#E21B3C" opacity="0.3">Edit</text>

      {/* "Everyday" text */}
      <text x="100" y="148" textAnchor="middle" fontSize="6" fill="#00C9B7" opacity="0.2">Everyday tools</text>

      {/* Sparkles */}
      <circle cx="20" cy="55" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="55" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


// ─── Lesson 5: The AI Cheat Sheet ───────────────────────────────────────────

/** "What AI Is Great At" — trophy podium */
export function M2AiGreatAtIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="80" rx="65" ry="45" fill="#26890C" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.07;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Trophy */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="88" y="80" width="24" height="8" rx="2" fill="#FFA602" opacity="0.15" />
        <rect x="94" y="65" width="12" height="18" rx="2" fill="#FFA602" opacity="0.12" />
        <path d="M80 35 L80 55 Q80 65 100 65 Q120 65 120 55 L120 35 Z" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.8" />
        <path d="M80 42 Q65 42 65 52 Q65 60 80 55" fill="none" stroke="#FFA602" strokeWidth="0.6" opacity="0.15" />
        <path d="M120 42 Q135 42 135 52 Q135 60 120 55" fill="none" stroke="#FFA602" strokeWidth="0.6" opacity="0.15" />
        <text x="100" y="52" textAnchor="middle" fontSize="10" fill="#FFA602" opacity="0.3" fontWeight="bold">#1</text>
      </g>

      {/* Strengths floating */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;1,-1;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="15" y="30" width="50" height="12" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.4" />
        <text x="40" y="39" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.35">First drafts</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,1;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="135" y="25" width="52" height="12" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.4" />
        <text x="161" y="34" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.35">Explaining</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;1,0;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="15" y="50" width="50" height="12" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.4" />
        <text x="40" y="59" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.35">Brainstorm</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-1,0;0,0" dur="3.2s" repeatCount="indefinite" />
        <rect x="135" y="50" width="52" height="12" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.4" />
        <text x="161" y="59" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.35">Summarize</text>
      </g>

      {/* Stars */}
      <polygon points="100,15 103,22 110,22 104,26 106,33 100,29 94,33 96,26 90,22 97,22" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Base text */}
      <text x="100" y="108" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.25">AI&apos;s sweet spot</text>

      {/* Sparkles */}
      <circle cx="18" cy="80" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="80" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "What AI Is Okay At" — yellow caution zone */
export function M2AiOkayAtIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="80" rx="60" ry="45" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Gauge / meter */}
      <path d="M40 100 A60 60 0 0 1 160 100" fill="none" stroke="white" strokeWidth="1" opacity="0.08" />

      {/* Green zone */}
      <path d="M40 100 A60 60 0 0 1 70 55" stroke="#26890C" strokeWidth="4" fill="none" opacity="0.15" />
      {/* Yellow zone — highlighted */}
      <path d="M70 55 A60 60 0 0 1 130 55" stroke="#FFA602" strokeWidth="4" fill="none" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2s" repeatCount="indefinite" />
      </path>
      {/* Red zone */}
      <path d="M130 55 A60 60 0 0 1 160 100" stroke="#E21B3C" strokeWidth="4" fill="none" opacity="0.15" />

      {/* Needle pointing to yellow */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-5 100 100;5 100 100;-5 100 100" dur="3s" repeatCount="indefinite" />
        <line x1="100" y1="100" x2="100" y2="50" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
        <circle cx="100" cy="100" r="4" fill="#FFA602" opacity="0.15" />
      </g>

      {/* Labels */}
      <text x="50" y="115" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.25">Great</text>
      <text x="100" y="42" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.3" fontWeight="bold">Okay</text>
      <text x="150" y="115" textAnchor="middle" fontSize="4.5" fill="#E21B3C" opacity="0.25">Bad</text>

      {/* Examples */}
      <rect x="30" y="125" width="55" height="10" rx="3" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="0.4" />
      <text x="57" y="133" textAnchor="middle" fontSize="4" fill="#FFA602" opacity="0.3">Research starts</text>

      <rect x="92" y="125" width="55" height="10" rx="3" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="0.4" />
      <text x="119" y="133" textAnchor="middle" fontSize="4" fill="#FFA602" opacity="0.3">Recommendations</text>

      {/* Sparkles */}
      <circle cx="20" cy="40" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="40" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "What AI Is Terrible At" — red danger zone */
export function M2AiTerribleAtIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Danger glow */}
      <circle cx="100" cy="75" r="50" fill="#E21B3C" opacity="0.04">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Stop sign octagon */}
      <polygon points="100,25 125,35 135,60 125,85 100,95 75,85 65,60 75,35" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="1">
        <animate attributeName="opacity" values="0.06;0.14;0.06" dur="2s" repeatCount="indefinite" />
      </polygon>
      <text x="100" y="64" textAnchor="middle" fontSize="10" fill="#E21B3C" opacity="0.3" fontWeight="bold">STOP</text>

      {/* X marks around */}
      <g>
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" />
        <line x1="35" y1="40" x2="45" y2="50" stroke="#E21B3C" strokeWidth="1.5" opacity="0.25" />
        <line x1="45" y1="40" x2="35" y2="50" stroke="#E21B3C" strokeWidth="1.5" opacity="0.25" />
      </g>
      <g>
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.8s" repeatCount="indefinite" />
        <line x1="155" y1="40" x2="165" y2="50" stroke="#E21B3C" strokeWidth="1.5" opacity="0.25" />
        <line x1="165" y1="40" x2="155" y2="50" stroke="#E21B3C" strokeWidth="1.5" opacity="0.25" />
      </g>

      {/* Danger items */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="20" y="105" width="50" height="12" rx="4" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="0.4" />
        <text x="45" y="114" textAnchor="middle" fontSize="4" fill="#E21B3C" opacity="0.3">Live data</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="76" y="105" width="50" height="12" rx="4" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="0.4" />
        <text x="101" y="114" textAnchor="middle" fontSize="4" fill="#E21B3C" opacity="0.3">Medical Rx</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="132" y="105" width="50" height="12" rx="4" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="0.4" />
        <text x="157" y="114" textAnchor="middle" fontSize="4" fill="#E21B3C" opacity="0.3">Legal advice</text>
      </g>

      <text x="100" y="135" textAnchor="middle" fontSize="5" fill="#E21B3C" opacity="0.2">Always verify these</text>

      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="90" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "AI vs. Google vs. Ask a Human" — three-way decision */
export function M2AiVsGoogleVsHumanIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="75" r="55" fill="#00C9B7" opacity="0.04">
        <animate attributeName="r" values="50;60;50" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Three circles in triangle */}
      {/* AI */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2.5s" repeatCount="indefinite" />
        <circle cx="100" cy="35" r="20" fill="#1368CE" opacity="0.08" stroke="#1368CE" strokeWidth="0.8" />
        <text x="100" y="33" textAnchor="middle" fontSize="8" fill="#1368CE" opacity="0.35" fontWeight="bold">AI</text>
        <text x="100" y="42" textAnchor="middle" fontSize="4" fill="#1368CE" opacity="0.2">Drafts, ideas</text>
      </g>

      {/* Google */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-2,1;0,0" dur="2.8s" repeatCount="indefinite" />
        <circle cx="55" cy="100" r="20" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="0.8" />
        <text x="55" y="98" textAnchor="middle" fontSize="6" fill="#FFA602" opacity="0.35" fontWeight="bold">Google</text>
        <text x="55" y="107" textAnchor="middle" fontSize="4" fill="#FFA602" opacity="0.2">Live data</text>
      </g>

      {/* Human */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;2,1;0,0" dur="3s" repeatCount="indefinite" />
        <circle cx="145" cy="100" r="20" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.8" />
        <text x="145" y="98" textAnchor="middle" fontSize="6" fill="#26890C" opacity="0.35" fontWeight="bold">Human</text>
        <text x="145" y="107" textAnchor="middle" fontSize="4" fill="#26890C" opacity="0.2">High stakes</text>
      </g>

      {/* Connecting lines */}
      <line x1="88" y1="52" x2="67" y2="84" stroke="#00C9B7" strokeWidth="0.6" opacity="0.1" strokeDasharray="3 3">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="112" y1="52" x2="133" y2="84" stroke="#00C9B7" strokeWidth="0.6" opacity="0.1" strokeDasharray="3 3">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="2.3s" repeatCount="indefinite" />
      </line>
      <line x1="75" y1="100" x2="125" y2="100" stroke="#00C9B7" strokeWidth="0.6" opacity="0.1" strokeDasharray="3 3">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="2.6s" repeatCount="indefinite" />
      </line>

      {/* "Which one?" center */}
      <text x="100" y="80" textAnchor="middle" fontSize="5" fill="#00C9B7" opacity="0.2">Right tool for</text>
      <text x="100" y="88" textAnchor="middle" fontSize="5" fill="#00C9B7" opacity="0.2">the job</text>

      {/* Sparkles */}
      <circle cx="20" cy="30" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="50" r="1" fill="#E21B3C" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "The One Rule" — golden rule plaque */
export function M2OneRuleIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <ellipse cx="100" cy="75" rx="65" ry="45" fill="#FFA602" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Golden plaque */}
      <rect x="30" y="35" width="140" height="70" rx="8" fill="#FFA602" opacity="0.06" stroke="#FFA602" strokeWidth="1.2">
        <animate attributeName="opacity" values="0.04;0.1;0.04" dur="2s" repeatCount="indefinite" />
      </rect>
      {/* Inner border */}
      <rect x="38" y="43" width="124" height="54" rx="4" fill="none" stroke="#FFA602" strokeWidth="0.5" opacity="0.15" />

      {/* Text */}
      <text x="100" y="60" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.3" fontWeight="bold">THE ONE RULE</text>
      <line x1="60" y1="64" x2="140" y2="64" stroke="#FFA602" strokeWidth="0.5" opacity="0.15" />

      <text x="100" y="78" textAnchor="middle" fontSize="5" fill="white" opacity="0.22">Never trust AI with facts</text>
      <text x="100" y="88" textAnchor="middle" fontSize="5" fill="white" opacity="0.22">you haven&apos;t verified.</text>

      {/* Laurel decoration */}
      <path d="M28 70 Q20 55 30 40" stroke="#FFA602" strokeWidth="0.8" fill="none" opacity="0.12" />
      <path d="M28 70 Q18 65 22 50" stroke="#FFA602" strokeWidth="0.6" fill="none" opacity="0.1" />
      <path d="M172 70 Q180 55 170 40" stroke="#FFA602" strokeWidth="0.8" fill="none" opacity="0.12" />
      <path d="M172 70 Q182 65 178 50" stroke="#FFA602" strokeWidth="0.6" fill="none" opacity="0.1" />

      {/* Star below */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 100 125;360 100 125" dur="12s" repeatCount="indefinite" />
        <polygon points="100,115 103,122 110,122 105,126 107,133 100,129 93,133 95,126 90,122 97,122" fill="#FFA602" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Sparkles */}
      <circle cx="15" cy="30" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="120" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Your AI Decision Tree" — branching flowchart */
export function M2DecisionTreeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="55" fill="#1368CE" opacity="0.04">
        <animate attributeName="r" values="50;60;50" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Root question */}
      <rect x="65" y="12" width="70" height="18" rx="6" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="0.6">
        <animate attributeName="opacity" values="0.08;0.16;0.08" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="24" textAnchor="middle" fontSize="5" fill="#1368CE" opacity="0.4">What do I need?</text>

      {/* Branch lines from root */}
      <line x1="80" y1="30" x2="45" y2="48" stroke="white" strokeWidth="0.6" opacity="0.08" />
      <line x1="100" y1="30" x2="100" y2="48" stroke="white" strokeWidth="0.6" opacity="0.08" />
      <line x1="120" y1="30" x2="155" y2="48" stroke="white" strokeWidth="0.6" opacity="0.08" />

      {/* Left branch: Real-time data → Google */}
      <rect x="15" y="48" width="60" height="16" rx="4" fill="#FFA602" opacity="0.08" stroke="#FFA602" strokeWidth="0.5" />
      <text x="45" y="59" textAnchor="middle" fontSize="4.5" fill="#FFA602" opacity="0.3">Real-time data?</text>
      <line x1="45" y1="64" x2="45" y2="78" stroke="#FFA602" strokeWidth="0.5" opacity="0.1" />
      <rect x="22" y="78" width="46" height="14" rx="4" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.4">
        <animate attributeName="opacity" values="0.06;0.14;0.06" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <text x="45" y="88" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.35" fontWeight="bold">Google</text>

      {/* Center branch: Draft/explain → AI */}
      <rect x="72" y="48" width="56" height="16" rx="4" fill="#26890C" opacity="0.08" stroke="#26890C" strokeWidth="0.5" />
      <text x="100" y="59" textAnchor="middle" fontSize="4.5" fill="#26890C" opacity="0.3">Draft or explain?</text>
      <line x1="100" y1="64" x2="100" y2="78" stroke="#26890C" strokeWidth="0.5" opacity="0.1" />
      <rect x="80" y="78" width="40" height="14" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.4">
        <animate attributeName="opacity" values="0.06;0.14;0.06" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="88" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.35" fontWeight="bold">AI</text>

      {/* Right branch: High stakes → Human */}
      <rect x="128" y="48" width="56" height="16" rx="4" fill="#E21B3C" opacity="0.08" stroke="#E21B3C" strokeWidth="0.5" />
      <text x="156" y="59" textAnchor="middle" fontSize="4.5" fill="#E21B3C" opacity="0.3">High stakes?</text>
      <line x1="156" y1="64" x2="156" y2="78" stroke="#E21B3C" strokeWidth="0.5" opacity="0.1" />
      <rect x="133" y="78" width="46" height="14" rx="4" fill="#E21B3C" opacity="0.1" stroke="#E21B3C" strokeWidth="0.4">
        <animate attributeName="opacity" values="0.06;0.14;0.06" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="156" y="88" textAnchor="middle" fontSize="5" fill="#E21B3C" opacity="0.35" fontWeight="bold">Human</text>

      {/* Bottom summary */}
      <rect x="30" y="110" width="140" height="22" rx="6" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />
      <text x="100" y="124" textAnchor="middle" fontSize="5" fill="white" opacity="0.2">Right tool, right time</text>

      {/* Sparkles */}
      <circle cx="10" cy="20" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="30" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="148" r="1.2" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Quick Check" (Lesson 5) — final exam */
export function M2L5QuickCheckIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Glow */}
      <circle cx="100" cy="80" r="50" fill="#1368CE" opacity="0.05">
        <animate attributeName="r" values="45;55;45" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Exam paper */}
      <rect x="45" y="18" width="110" height="120" rx="6" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.7" strokeOpacity="0.1" />

      {/* Header */}
      <rect x="60" y="25" width="80" height="12" rx="3" fill="#1368CE" opacity="0.08" />
      <text x="100" y="34" textAnchor="middle" fontSize="6" fill="#1368CE" opacity="0.35" fontWeight="bold">Final Check</text>

      {/* Q1 */}
      <circle cx="58" cy="50" r="4" fill="#FFA602" opacity="0.12" stroke="#FFA602" strokeWidth="0.5" />
      <text x="58" y="53" textAnchor="middle" fontSize="5" fill="#FFA602" opacity="0.35">1</text>
      <rect x="66" y="48" width="78" height="3" rx="1.5" fill="white" opacity="0.08" />

      {/* Q2 */}
      <circle cx="58" cy="68" r="4" fill="#26890C" opacity="0.12" stroke="#26890C" strokeWidth="0.5" />
      <text x="58" y="71" textAnchor="middle" fontSize="5" fill="#26890C" opacity="0.35">2</text>
      <rect x="66" y="66" width="72" height="3" rx="1.5" fill="white" opacity="0.08" />

      {/* Q3 */}
      <circle cx="58" cy="86" r="4" fill="#FF3EA5" opacity="0.12" stroke="#FF3EA5" strokeWidth="0.5" />
      <text x="58" y="89" textAnchor="middle" fontSize="5" fill="#FF3EA5" opacity="0.35">3</text>
      <rect x="66" y="84" width="80" height="3" rx="1.5" fill="white" opacity="0.08" />

      {/* Completion progress */}
      <rect x="55" y="105" width="90" height="6" rx="3" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.4" strokeOpacity="0.08" />
      <rect x="55" y="105" width="60" height="6" rx="3" fill="#26890C" opacity="0.12">
        <animate attributeName="width" values="30;60;30" dur="3s" repeatCount="indefinite" />
      </rect>

      <text x="100" y="125" textAnchor="middle" fontSize="4.5" fill="white" opacity="0.15">Almost there!</text>

      {/* Sparkles */}
      <circle cx="30" cy="30" r="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="60" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** "Key Takeaway" (Lesson 5) — graduation cap / module complete */
export function M2L5KeyTakeawayIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Celebration glow */}
      <circle cx="100" cy="75" r="55" fill="#FFA602" opacity="0.05">
        <animate attributeName="r" values="50;60;50" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Graduation cap */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2.5s" repeatCount="indefinite" />
        <polygon points="100,25 145,45 100,55 55,45" fill="#1368CE" opacity="0.12" stroke="#1368CE" strokeWidth="0.8" />
        <rect x="90" y="25" width="20" height="5" rx="1" fill="#1368CE" opacity="0.08" />
        {/* Tassel */}
        <line x1="145" y1="45" x2="145" y2="65" stroke="#FFA602" strokeWidth="1" opacity="0.25" />
        <circle cx="145" cy="67" r="3" fill="#FFA602" opacity="0.2">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* "Module Complete" text */}
      <text x="100" y="78" textAnchor="middle" fontSize="7" fill="#FFA602" opacity="0.3" fontWeight="bold">Module Complete!</text>

      {/* Key rules summary badges */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="2.5s" repeatCount="indefinite" />
        <rect x="25" y="90" width="65" height="12" rx="4" fill="#26890C" opacity="0.1" stroke="#26890C" strokeWidth="0.4" />
        <text x="57" y="99" textAnchor="middle" fontSize="4" fill="#26890C" opacity="0.35">Trust structure</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,1;0,0" dur="2.8s" repeatCount="indefinite" />
        <rect x="95" y="90" width="80" height="12" rx="4" fill="#1368CE" opacity="0.1" stroke="#1368CE" strokeWidth="0.4" />
        <text x="135" y="99" textAnchor="middle" fontSize="4" fill="#1368CE" opacity="0.35">Verify specifics</text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" dur="3s" repeatCount="indefinite" />
        <rect x="55" y="108" width="90" height="12" rx="4" fill="#FFA602" opacity="0.1" stroke="#FFA602" strokeWidth="0.4" />
        <text x="100" y="117" textAnchor="middle" fontSize="4" fill="#FFA602" opacity="0.35">Right tool, right time</text>
      </g>

      {/* Confetti sparkles */}
      <circle cx="30" cy="30" r="2" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="25" r="1.5" fill="#26890C" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="75" r="1" fill="#FFA602" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="80" r="1.5" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="135" r="1" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="130" r="1.5" fill="#E21B3C" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

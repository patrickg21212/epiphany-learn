"use client";

/**
 * Module 4: "Staying Safe and Smart with AI"
 * Animated SVG illustrations for every section of every lesson.
 * Kahoot palette: #E21B3C (red), #1368CE (blue), #FFA602 (gold), #26890C (green), #00C9B7 (cyan), #FF3EA5 (magenta)
 */

// ─── INTRO ILLUSTRATIONS ───────────────────────────────────────────────

/**
 * m4-intro-data — What Happens to What You Type intro
 * A keyboard/text input with data flowing into a cloud, showing the journey.
 */
export function M4IntroData({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#1368CE" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Keyboard / text input at bottom */}
      <g transform="translate(60, 120)">
        <rect x="-30" y="-10" width="60" height="20" rx="4" fill="#1a1a2e" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        {/* Keys */}
        <rect x="-25" y="-6" width="8" height="6" rx="1" fill="rgba(255,255,255,0.05)" />
        <rect x="-14" y="-6" width="8" height="6" rx="1" fill="rgba(255,255,255,0.05)" />
        <rect x="-3" y="-6" width="8" height="6" rx="1" fill="rgba(255,255,255,0.05)" />
        <rect x="8" y="-6" width="8" height="6" rx="1" fill="rgba(255,255,255,0.05)" />
        <rect x="19" y="-6" width="8" height="6" rx="1" fill="rgba(255,255,255,0.05)" />
        {/* Typed text cursor */}
        <rect x="-25" y="3" width="2" height="5" rx="1" fill="#FFA602" opacity="0.5">
          <animate attributeName="opacity" values="0;0.7;0" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Data stream flowing upward */}
      <g opacity="0.5">
        <circle r="2" fill="#1368CE">
          <animateMotion path="M60,108 Q70,80 100,55" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="1.5" fill="#FFA602">
          <animateMotion path="M65,108 Q80,75 105,50" dur="2s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle r="2" fill="#00C9B7">
          <animateMotion path="M55,108 Q65,85 95,55" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Cloud */}
      <g transform="translate(120, 40)">
        <ellipse cx="0" cy="5" rx="30" ry="18" fill="#1a1a2e" opacity="0.6" />
        <ellipse cx="-15" cy="0" rx="18" ry="15" fill="#1a1a2e" opacity="0.6" />
        <ellipse cx="10" cy="-5" rx="22" ry="16" fill="#1a1a2e" opacity="0.6" />
        {/* Cloud outline glow */}
        <ellipse cx="0" cy="5" rx="30" ry="18" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Question mark inside */}
        <text x="2" y="8" textAnchor="middle" fill="#FFA602" fontSize="16" fontWeight="bold" opacity="0.3">?</text>
      </g>

      {/* Lock icon */}
      <g transform="translate(165, 90)">
        <rect x="-8" y="-2" width="16" height="12" rx="2" fill="#26890C" opacity="0.2" stroke="#26890C" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M-4,-2 L-4,-7 Q-4,-12 0,-12 Q4,-12 4,-7 L4,-2" fill="none" stroke="#26890C" strokeWidth="1.2" opacity="0.3" />
      </g>

      {/* Sparkles */}
      <circle cx="18" cy="30" r="2" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="1.5" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#26890C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m4-intro-fakes — Spotting AI Fakes intro
 * A split face — half real photo, half glitchy deepfake with scan lines.
 */
export function M4IntroFakes({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#E21B3C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Face outline — left half (real) */}
      <g transform="translate(100, 75)">
        <path d="M0,-40 Q-30,-35 -32,-10 Q-35,15 -25,30 Q-15,45 0,48" fill="none" stroke="#26890C" strokeWidth="1.5" opacity="0.4" />
        {/* Eye */}
        <ellipse cx="-16" cy="-10" rx="6" ry="4" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.3" />
        <circle cx="-16" cy="-10" r="2" fill="#26890C" opacity="0.3" />
        {/* Mouth half */}
        <path d="M-12,15 Q-6,22 0,20" stroke="#26890C" strokeWidth="1" fill="none" opacity="0.3" />
        {/* REAL label */}
        <text x="-22" y="58" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="bold" opacity="0.4">REAL</text>
      </g>

      {/* Face outline — right half (fake, glitchy) */}
      <g transform="translate(100, 75)">
        <path d="M0,-40 Q30,-35 32,-10 Q35,15 25,30 Q15,45 0,48" fill="none" stroke="#E21B3C" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 2">
          <animate attributeName="strokeDashoffset" values="0;10" dur="1s" repeatCount="indefinite" />
        </path>
        {/* Eye — glitchy */}
        <ellipse cx="16" cy="-10" rx="6" ry="4" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="0.5s" repeatCount="indefinite" />
        </ellipse>
        <circle cx="16" cy="-10" r="2" fill="#E21B3C" opacity="0.3">
          <animate attributeName="cx" values="15;17;16;15" dur="0.8s" repeatCount="indefinite" />
        </circle>
        {/* Mouth half — glitchy */}
        <path d="M12,15 Q6,22 0,20" stroke="#E21B3C" strokeWidth="1" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.4;0.1;0.3" dur="0.7s" repeatCount="indefinite" />
        </path>
        {/* FAKE label */}
        <text x="22" y="58" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" opacity="0.4">FAKE</text>
      </g>

      {/* Center dividing line */}
      <line x1="100" y1="30" x2="100" y2="128" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Scan lines across fake half */}
      {[40, 55, 70, 85, 100, 115].map((y, i) => (
        <line key={`scan-${i}`} x1="100" y1={y} x2="140" y2={y} stroke="#E21B3C" strokeWidth="0.5" opacity="0">
          <animate attributeName="opacity" values="0;0.15;0" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Sparkles */}
      <circle cx="20" cy="25" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="25" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m4-intro-trust — When NOT to Trust AI intro
 * A shield with a crack and a caution barrier.
 */
export function M4IntroTrust({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#FFA602" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Large shield */}
      <g transform="translate(100, 72)">
        <path d="M0,-45 L35,-30 L35,5 C35,25 18,42 0,50 C-18,42 -35,25 -35,5 L-35,-30 Z"
          fill="#1a1a2e" stroke="#FFA602" strokeWidth="2" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Crack through shield */}
        <path d="M-5,-30 L2,-15 L-4,0 L3,15 L-2,30" stroke="#E21B3C" strokeWidth="1.5" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Exclamation inside shield */}
        <line x1="12" y1="-15" x2="12" y2="5" stroke="#FFA602" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <circle cx="12" cy="14" r="2" fill="#FFA602" opacity="0.4" />
      </g>

      {/* Caution stripes at bottom */}
      <g opacity="0.2">
        <rect x="30" y="132" width="140" height="8" rx="2" fill="url(#cautionStripes)" />
        <defs>
          <pattern id="cautionStripes" width="16" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#FFA602" />
            <rect x="8" width="8" height="8" fill="#1a1a2e" />
          </pattern>
        </defs>
      </g>

      {/* Sparkles */}
      <circle cx="20" cy="25" r="2" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="30" r="1.5" fill="#00C9B7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="18" cy="145" r="1.5" fill="#FF3EA5">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="145" r="2" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * m4-intro-family — Teaching Your Family About AI intro
 * Family figures gathered around a glowing AI screen, connected.
 */
export function M4IntroFamily({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      <ellipse cx="100" cy="80" rx="95" ry="75" fill="#26890C" opacity="0.04">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Central screen/device */}
      <g transform="translate(100, 65)">
        <rect x="-18" y="-22" width="36" height="44" rx="4" fill="#1a1a2e" stroke="#1368CE" strokeWidth="1.5" opacity="0.6" />
        <rect x="-14" y="-18" width="28" height="35" rx="2" fill="#0d0d1a" />
        {/* Screen glow */}
        <circle cx="0" cy="0" r="25" fill="#1368CE" opacity="0">
          <animate attributeName="opacity" values="0;0.1;0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="20;35;20" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="3" textAnchor="middle" fill="#1368CE" fontSize="8" opacity="0.5">AI</text>
      </g>

      {/* Family figures */}
      {/* Adult left */}
      <g transform="translate(45, 90)">
        <circle cx="0" cy="-8" r="7" fill="#FFA602" opacity="0.2" />
        <line x1="0" y1="-1" x2="0" y2="15" stroke="#FFA602" strokeWidth="1.5" opacity="0.2" />
        <line x1="0" y1="5" x2="-8" y2="12" stroke="#FFA602" strokeWidth="1.2" opacity="0.15" />
        <line x1="0" y1="5" x2="8" y2="12" stroke="#FFA602" strokeWidth="1.2" opacity="0.15" />
      </g>

      {/* Adult right */}
      <g transform="translate(155, 90)">
        <circle cx="0" cy="-8" r="7" fill="#26890C" opacity="0.2" />
        <line x1="0" y1="-1" x2="0" y2="15" stroke="#26890C" strokeWidth="1.5" opacity="0.2" />
        <line x1="0" y1="5" x2="-8" y2="12" stroke="#26890C" strokeWidth="1.2" opacity="0.15" />
        <line x1="0" y1="5" x2="8" y2="12" stroke="#26890C" strokeWidth="1.2" opacity="0.15" />
      </g>

      {/* Child bottom */}
      <g transform="translate(100, 118)">
        <circle cx="0" cy="-6" r="5" fill="#FF3EA5" opacity="0.2" />
        <line x1="0" y1="-1" x2="0" y2="10" stroke="#FF3EA5" strokeWidth="1.2" opacity="0.2" />
        <line x1="0" y1="3" x2="-6" y2="8" stroke="#FF3EA5" strokeWidth="1" opacity="0.15" />
        <line x1="0" y1="3" x2="6" y2="8" stroke="#FF3EA5" strokeWidth="1" opacity="0.15" />
      </g>

      {/* Elder top */}
      <g transform="translate(100, 22)">
        <circle cx="0" cy="-6" r="6" fill="#00C9B7" opacity="0.2" />
        <line x1="0" y1="0" x2="0" y2="12" stroke="#00C9B7" strokeWidth="1.2" opacity="0.2" />
      </g>

      {/* Connection lines to screen */}
      <line x1="55" y1="88" x2="82" y2="70" stroke="#FFA602" strokeWidth="0.8" opacity="0.12" strokeDasharray="2 2" />
      <line x1="145" y1="88" x2="118" y2="70" stroke="#26890C" strokeWidth="0.8" opacity="0.12" strokeDasharray="2 2" />
      <line x1="100" y1="112" x2="100" y2="90" stroke="#FF3EA5" strokeWidth="0.8" opacity="0.12" strokeDasharray="2 2" />
      <line x1="100" y1="34" x2="100" y2="43" stroke="#00C9B7" strokeWidth="0.8" opacity="0.12" strokeDasharray="2 2" />

      {/* Sparkles */}
      <circle cx="20" cy="50" r="2" fill="#FFA602">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="50" r="1.5" fill="#1368CE">
        <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="145" r="1.5" fill="#E21B3C">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ================================================================
   LESSON 1 — What Happens to the Stuff You Type
   ================================================================ */

/** m4-data-letter — Envelope flying to a server building */
export function DataLetterIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Server building */}
      <rect x="140" y="40" width="45" height="70" rx="6" fill="#1368CE" fillOpacity={0.2} stroke="#1368CE" strokeWidth="1.5" strokeOpacity={0.5} />
      <rect x="148" y="52" width="10" height="4" rx="1" fill="#00C9B7" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.2s" repeatCount="indefinite" />
      </rect>
      <rect x="162" y="52" width="10" height="4" rx="1" fill="#26890C" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="1.4s" repeatCount="indefinite" />
      </rect>
      <rect x="148" y="62" width="10" height="4" rx="1" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.1s" repeatCount="indefinite" />
      </rect>
      <rect x="162" y="62" width="10" height="4" rx="1" fill="#1368CE" opacity="0.5">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.3s" repeatCount="indefinite" />
      </rect>
      <rect x="148" y="72" width="10" height="4" rx="1" fill="#E21B3C" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="162" y="72" width="10" height="4" rx="1" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1s" repeatCount="indefinite" />
      </rect>
      {/* Antenna on server */}
      <line x1="162" y1="40" x2="162" y2="28" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
      <circle cx="162" cy="25" r="3" fill="#E21B3C" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="0.8s" repeatCount="indefinite" />
      </circle>

      {/* Flying envelope */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 60,-10; 60,-10; 0,0" dur="3s" repeatCount="indefinite" />
        {/* Envelope body */}
        <rect x="25" y="55" width="40" height="28" rx="4" fill="#FFA602" opacity="0.85" />
        {/* Envelope flap */}
        <path d="M25 55 L45 72 L65 55" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
        {/* Letter peeking out */}
        <rect x="30" y="48" width="30" height="10" rx="2" fill="#fff" opacity="0.3" />
        {/* Motion lines */}
        <line x1="18" y1="65" x2="8" y2="65" stroke="#FFA602" strokeWidth="1" opacity="0.4" strokeLinecap="round">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="0.5s" repeatCount="indefinite" />
        </line>
        <line x1="18" y1="72" x2="12" y2="72" stroke="#FFA602" strokeWidth="1" opacity="0.3" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="0.6s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Data trail dots */}
      <circle cx="90" cy="60" r="2" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.8s" />
      </circle>
      <circle cx="105" cy="55" r="1.5" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" begin="1s" />
      </circle>
      <circle cx="118" cy="52" r="2" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" begin="1.2s" />
      </circle>

      {/* Sparkle top-right */}
      <path d="M185 20 L187 14 L189 20 L195 22 L189 24 L187 30 L185 24 L179 22 Z" fill="#FFD166" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Person silhouette (sender) */}
      <circle cx="20" cy="120" r="10" fill="rgba(255,255,255,0.15)" />
      <rect x="12" y="132" width="16" height="18" rx="5" fill="rgba(255,255,255,0.1)" />

      {/* Ground line */}
      <line x1="5" y1="150" x2="195" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    </svg>
  );
}

/** m4-free-vs-paid — Scale/balance with free vs paid */
export function FreeVsPaidIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Balance beam pivot */}
      <polygon points="100,45 95,55 105,55" fill="#FFA602" opacity="0.7" />
      <line x1="100" y1="55" x2="100" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      <rect x="80" y="130" width="40" height="6" rx="3" fill="rgba(255,255,255,0.15)" />

      {/* Balance beam — tilts */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-5 100 50; 5 100 50; -5 100 50" dur="4s" repeatCount="indefinite" />
        <line x1="30" y1="50" x2="170" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Left pan — FREE side */}
        <line x1="30" y1="50" x2="25" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="30" y1="50" x2="55" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <path d="M20 70 Q40 78 60 70" fill="none" stroke="#E21B3C" strokeWidth="1.5" opacity="0.7" />
        {/* FREE label */}
        <text x="40" y="67" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.8">FREE</text>
        {/* Data/eye icons on free side */}
        <circle cx="32" cy="85" r="5" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.5" />
        <circle cx="32" cy="85" r="2" fill="#E21B3C" opacity="0.4" />
        <text x="45" y="90" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="system-ui">data</text>

        {/* Right pan — PAID side */}
        <line x1="170" y1="50" x2="145" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="170" y1="50" x2="175" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <path d="M140 70 Q160 78 180 70" fill="none" stroke="#26890C" strokeWidth="1.5" opacity="0.7" />
        {/* PAID label */}
        <text x="160" y="67" textAnchor="middle" fill="#26890C" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.8">PAID</text>
        {/* Lock on paid side */}
        <rect x="153" y="82" width="12" height="10" rx="2" fill="#26890C" opacity="0.4" />
        <path d="M156 82 V78 C156 75 162 75 162 78 V82" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.5" />
        <circle cx="159" cy="88" r="1.5" fill="rgba(255,255,255,0.5)" />
      </g>

      {/* Dollar sparkle */}
      <text x="172" y="40" fill="#FFA602" fontSize="12" fontWeight="bold" fontFamily="system-ui" opacity="0.5">$</text>

      {/* Floating sparkles */}
      <circle cx="15" cy="30" r="2" fill="#00C9B7" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="25" r="1.5" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-data-tools — Grid of AI tool logos with data flow arrows */
export function DataToolsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Row of AI tool cards */}
      {/* Card 1 */}
      <rect x="15" y="35" width="38" height="45" rx="8" fill="#26890C" fillOpacity={0.15} stroke="#26890C" strokeWidth="1.2" strokeOpacity={0.4} />
      <circle cx="34" cy="50" r="8" fill="#26890C" opacity="0.3" />
      <text x="34" y="54" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="system-ui" opacity="0.7">C</text>
      <rect x="22" y="65" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />

      {/* Card 2 */}
      <rect x="60" y="35" width="38" height="45" rx="8" fill="#1368CE" fillOpacity={0.15} stroke="#1368CE" strokeWidth="1.2" strokeOpacity={0.4} />
      <circle cx="79" cy="50" r="8" fill="#1368CE" opacity="0.3" />
      <text x="79" y="54" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="system-ui" opacity="0.7">G</text>
      <rect x="67" y="65" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />

      {/* Card 3 */}
      <rect x="105" y="35" width="38" height="45" rx="8" fill="#FFA602" fillOpacity={0.15} stroke="#FFA602" strokeWidth="1.2" strokeOpacity={0.4} />
      <circle cx="124" cy="50" r="8" fill="#FFA602" opacity="0.3" />
      <text x="124" y="54" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="system-ui" opacity="0.7">G</text>
      <rect x="112" y="65" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />

      {/* Card 4 */}
      <rect x="150" y="35" width="38" height="45" rx="8" fill="#E21B3C" fillOpacity={0.15} stroke="#E21B3C" strokeWidth="1.2" strokeOpacity={0.4} />
      <circle cx="169" cy="50" r="8" fill="#E21B3C" opacity="0.3" />
      <text x="169" y="54" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="system-ui" opacity="0.7">+</text>
      <rect x="157" y="65" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />

      {/* Data flow arrows going up from cards */}
      <g opacity="0.4">
        <line x1="34" y1="35" x2="34" y2="20" stroke="#26890C" strokeWidth="1" strokeLinecap="round">
          <animate attributeName="y2" values="25;15;25" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="79" y1="35" x2="79" y2="20" stroke="#1368CE" strokeWidth="1" strokeLinecap="round">
          <animate attributeName="y2" values="25;15;25" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </line>
        <line x1="124" y1="35" x2="124" y2="20" stroke="#FFA602" strokeWidth="1" strokeLinecap="round">
          <animate attributeName="y2" values="25;15;25" dur="2s" repeatCount="indefinite" begin="0.6s" />
        </line>
        <line x1="169" y1="35" x2="169" y2="20" stroke="#E21B3C" strokeWidth="1" strokeLinecap="round">
          <animate attributeName="y2" values="25;15;25" dur="2s" repeatCount="indefinite" begin="0.9s" />
        </line>
      </g>

      {/* Data particles flowing up */}
      <circle cx="34" cy="28" r="2" fill="#26890C" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0" dur="2s" repeatCount="indefinite" />
        <animate attributeName="cy" values="30;12;30" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="79" cy="28" r="2" fill="#1368CE" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
        <animate attributeName="cy" values="30;12;30" dur="2s" repeatCount="indefinite" begin="0.3s" />
      </circle>

      {/* Info banner at bottom */}
      <rect x="30" y="100" width="140" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="100" y="118" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="system-ui">Your data policies vary by tool</text>

      {/* Toggle switches */}
      <rect x="45" y="130" width="18" height="9" rx="4.5" fill="#26890C" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
      </rect>
      <circle cx="58" cy="134.5" r="3.5" fill="#26890C" opacity="0.5" />

      <rect x="137" y="130" width="18" height="9" rx="4.5" fill="#E21B3C" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="1s" />
      </rect>
      <circle cx="142" cy="134.5" r="3.5" fill="#E21B3C" opacity="0.5" />

      {/* Sparkle */}
      <path d="M10 55 L12 49 L14 55 L20 57 L14 59 L12 65 L10 59 L4 57 Z" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/** m4-coffee-shop-stranger — Person at coffee shop with friendly stranger */
export function CoffeeShopStrangerIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Table */}
      <rect x="55" y="95" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
      <rect x="95" y="100" width="10" height="30" rx="2" fill="rgba(255,255,255,0.1)" />

      {/* Coffee cup left */}
      <rect x="68" y="78" width="18" height="17" rx="3" fill="#FFA602" opacity="0.5" />
      <path d="M86 83 Q92 86 86 92" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.4" />
      {/* Steam */}
      <path d="M73 75 Q75 68 73 62" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round">
        <animate attributeName="d" values="M73 75 Q75 68 73 62;M73 75 Q71 68 73 62;M73 75 Q75 68 73 62" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M79 74 Q81 66 79 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round">
        <animate attributeName="d" values="M79 74 Q81 66 79 60;M79 74 Q77 66 79 60;M79 74 Q81 66 79 60" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Person on left (you) */}
      <circle cx="50" cy="55" r="10" fill="rgba(255,255,255,0.15)" />
      <rect x="42" y="67" width="16" height="20" rx="5" fill="#1368CE" opacity="0.2" />

      {/* AI stranger on right — with robot hint */}
      <circle cx="150" cy="55" r="10" fill="rgba(255,255,255,0.15)" />
      <rect x="142" y="67" width="16" height="20" rx="5" fill="#00C9B7" opacity="0.2" />
      {/* Antenna on stranger */}
      <line x1="150" y1="45" x2="150" y2="38" stroke="#00C9B7" strokeWidth="1" opacity="0.4" />
      <circle cx="150" cy="36" r="2.5" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Speech bubble from stranger */}
      <rect x="118" y="25" width="55" height="20" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="145" y="38" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="system-ui">How can I help?</text>

      {/* Red X over SSN card — DON'T share sensitive info */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="3s" repeatCount="indefinite" />
        <rect x="105" y="80" width="28" height="16" rx="2" fill="rgba(255,255,255,0.08)" stroke="#E21B3C" strokeWidth="1" opacity="0.5" />
        <text x="119" y="91" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="system-ui">SSN</text>
        <line x1="107" y1="82" x2="131" y2="94" stroke="#E21B3C" strokeWidth="1.5" opacity="0.6" />
        <line x1="131" y1="82" x2="107" y2="94" stroke="#E21B3C" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* Sparkles */}
      <circle cx="20" cy="30" r="2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="120" r="1.5" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-safe-to-share — Green checkmarks on safe items */
export function SafeToShareIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Green zone */}
      <rect x="20" y="25" width="160" height="110" rx="12" fill="#26890C" fillOpacity={0.06} stroke="#26890C" strokeWidth="1" strokeOpacity={0.15} strokeDasharray="4 3" />

      {/* Safe item cards with checkmarks */}
      {/* Card 1 — Writing help */}
      <rect x="30" y="35" width="65" height="22" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="55" y="49" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="system-ui">Writing help</text>
      <circle cx="82" cy="46" r="6" fill="#26890C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M79 46 L81 48 L85 43" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

      {/* Card 2 — Brainstorming */}
      <rect x="105" y="35" width="65" height="22" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="130" y="49" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="system-ui">Brainstorming</text>
      <circle cx="157" cy="46" r="6" fill="#26890C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" begin="0.3s" />
      </circle>
      <path d="M154 46 L156 48 L160 43" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

      {/* Card 3 — Questions */}
      <rect x="30" y="65" width="65" height="22" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="55" y="79" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="system-ui">{"General Q&A"}</text>
      <circle cx="82" cy="76" r="6" fill="#26890C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <path d="M79 76 L81 78 L85 73" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

      {/* Card 4 — Trip planning */}
      <rect x="105" y="65" width="65" height="22" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="130" y="79" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="system-ui">Trip planning</text>
      <circle cx="157" cy="76" r="6" fill="#26890C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" begin="0.9s" />
      </circle>
      <path d="M154 76 L156 78 L160 73" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

      {/* Google search bar comparison */}
      <rect x="50" y="100" width="100" height="18" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="60" cy="109" r="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="63" y1="112" x2="66" y2="115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="105" y="112" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="system-ui">Same safety as search</text>

      {/* Sparkles */}
      <path d="M10 60 L12 54 L14 60 L20 62 L14 64 L12 70 L10 64 L4 62 Z" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <circle cx="190" cy="40" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-quiz-check-1 — Clipboard with checkboxes */
export function QuizCheck1Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Clipboard */}
      <rect x="55" y="20" width="90" height="120" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      {/* Clip at top */}
      <rect x="82" y="12" width="36" height="16" rx="5" fill="#1368CE" opacity="0.3" />
      <rect x="88" y="16" width="24" height="8" rx="3" fill="rgba(255,255,255,0.1)" />

      {/* Checklist rows */}
      <rect x="68" y="45" width="12" height="12" rx="3" fill="none" stroke="#26890C" strokeWidth="1.2" opacity="0.5" />
      <path d="M71 51 L73 53 L77 48" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
        <animate attributeName="opacity" values="0;0.7;0.7" dur="2s" repeatCount="indefinite" />
      </path>
      <rect x="86" y="48" width="45" height="4" rx="2" fill="rgba(255,255,255,0.12)" />

      <rect x="68" y="68" width="12" height="12" rx="3" fill="none" stroke="#26890C" strokeWidth="1.2" opacity="0.5" />
      <path d="M71 74 L73 76 L77 71" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
        <animate attributeName="opacity" values="0;0.7;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </path>
      <rect x="86" y="71" width="38" height="4" rx="2" fill="rgba(255,255,255,0.12)" />

      <rect x="68" y="91" width="12" height="12" rx="3" fill="none" stroke="#FFA602" strokeWidth="1.2" opacity="0.5" />
      <rect x="86" y="94" width="42" height="4" rx="2" fill="rgba(255,255,255,0.12)" />

      {/* Question mark floating */}
      <text x="165" y="50" fill="#FFA602" fontSize="20" fontWeight="bold" fontFamily="system-ui" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        ?
      </text>

      {/* Sparkles */}
      <circle cx="30" cy="70" r="2.5" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="120" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-key-takeaway-1 — Coffee cup with shield */
export function KeyTakeaway1Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Large coffee cup */}
      <rect x="60" y="50" width="50" height="55" rx="6" fill="#FFA602" fillOpacity={0.15} stroke="#FFA602" strokeWidth="1.5" strokeOpacity={0.4} />
      <path d="M110 60 Q125 70 110 90" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.3" />
      {/* Steam */}
      <path d="M75 47 Q77 38 75 30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round">
        <animate attributeName="d" values="M75 47 Q77 38 75 30;M75 47 Q73 38 75 30;M75 47 Q77 38 75 30" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M85 46 Q87 36 85 28" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round">
        <animate attributeName="d" values="M85 46 Q87 36 85 28;M85 46 Q83 36 85 28;M85 46 Q87 36 85 28" dur="3.5s" repeatCount="indefinite" />
      </path>
      <path d="M95 47 Q97 39 95 31" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round">
        <animate attributeName="d" values="M95 47 Q97 39 95 31;M95 47 Q93 39 95 31;M95 47 Q97 39 95 31" dur="2.8s" repeatCount="indefinite" />
      </path>

      {/* Mini shield on the cup */}
      <path d="M85 65 L97 70 L97 82 C97 88 91 94 85 96 C79 94 73 88 73 82 L73 70 Z" fill="#1368CE" fillOpacity={0.2} stroke="#1368CE" strokeWidth="1" strokeOpacity={0.4} />
      <path d="M81 79 L84 82 L90 76" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

      {/* "When in doubt, leave it out" glow */}
      <rect x="30" y="118" width="140" height="22" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="0.05;0.15;0.05" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="100" y="133" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6.5" fontFamily="system-ui">When in doubt, leave it out</text>

      {/* Sparkles */}
      <path d="M150 35 L152 29 L154 35 L160 37 L154 39 L152 45 L150 39 L144 37 Z" fill="#FFD166" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="25" cy="50" r="2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="90" r="1.5" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


/* ================================================================
   LESSON 2 — Spotting AI Fakes
   ================================================================ */

/** m4-deepfake-face — Half-real half-glitchy face */
export function DeepfakeFaceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Face outline — left half normal, right half distorted */}
      <ellipse cx="100" cy="75" rx="40" ry="50" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* Dividing line down the center */}
      <line x1="100" y1="25" x2="100" y2="125" stroke="#E21B3C" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 2" />

      {/* Left eye — normal */}
      <ellipse cx="82" cy="65" rx="8" ry="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="82" cy="65" r="3" fill="rgba(255,255,255,0.4)" />

      {/* Right eye — glitchy, shifted */}
      <ellipse cx="120" cy="63" rx="9" ry="6" fill="rgba(255,255,255,0.1)" stroke="#E21B3C" strokeWidth="1" opacity="0.4">
        <animate attributeName="cy" values="63;65;63" dur="0.4s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="121" cy="63" r="3.5" fill="rgba(255,255,255,0.3)">
        <animate attributeName="cx" values="121;119;121" dur="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Left mouth — normal smile */}
      <path d="M78 90 Q88 98 100 90" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Right mouth — glitchy, jittering */}
      <path d="M100 90 Q112 96 122 88" fill="none" stroke="#E21B3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
        <animate attributeName="d" values="M100 90 Q112 96 122 88;M100 91 Q112 94 122 90;M100 90 Q112 96 122 88" dur="0.5s" repeatCount="indefinite" />
      </path>

      {/* Glitch lines on right side */}
      <rect x="108" y="40" width="25" height="2" fill="#E21B3C" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="y" values="40;50;70;40" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="105" y="85" width="30" height="1.5" fill="#FF3EA5" opacity="0">
        <animate attributeName="opacity" values="0;0.3;0" dur="0.6s" repeatCount="indefinite" begin="0.2s" />
        <animate attributeName="y" values="85;75;55;85" dur="2.5s" repeatCount="indefinite" />
      </rect>

      {/* REAL label left */}
      <text x="60" y="138" textAnchor="middle" fill="#26890C" fontSize="7" fontWeight="bold" fontFamily="system-ui" opacity="0.5">REAL</text>

      {/* FAKE label right */}
      <text x="140" y="138" textAnchor="middle" fill="#E21B3C" fontSize="7" fontWeight="bold" fontFamily="system-ui" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1s" repeatCount="indefinite" />
        FAKE
      </text>

      {/* Scan line effect */}
      <rect x="60" y="30" width="80" height="1" fill="rgba(255,255,255,0.08)">
        <animate attributeName="y" values="30;120;30" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Sparkles */}
      <circle cx="25" cy="40" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="45" r="1.5" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-grandparent-scam — Phone with voice waves and warning */
export function GrandparentScamIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Phone */}
      <rect x="75" y="20" width="50" height="90" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <rect x="80" y="30" width="40" height="60" rx="4" fill="rgba(255,255,255,0.03)" />

      {/* Voice waveform on phone screen */}
      <g transform="translate(85,50)">
        <rect x="0" y="5" width="3" height="10" rx="1.5" fill="#E21B3C" opacity="0.5">
          <animate attributeName="height" values="5;15;5" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" values="7;2;7" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="5" y="3" width="3" height="14" rx="1.5" fill="#E21B3C" opacity="0.5">
          <animate attributeName="height" values="14;6;14" dur="0.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="3;7;3" dur="0.5s" repeatCount="indefinite" />
        </rect>
        <rect x="10" y="1" width="3" height="18" rx="1.5" fill="#E21B3C" opacity="0.5">
          <animate attributeName="height" values="18;8;18" dur="0.7s" repeatCount="indefinite" />
          <animate attributeName="y" values="1;6;1" dur="0.7s" repeatCount="indefinite" />
        </rect>
        <rect x="15" y="4" width="3" height="12" rx="1.5" fill="#E21B3C" opacity="0.5">
          <animate attributeName="height" values="12;5;12" dur="0.55s" repeatCount="indefinite" />
          <animate attributeName="y" values="4;7;4" dur="0.55s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="6" width="3" height="8" rx="1.5" fill="#E21B3C" opacity="0.5">
          <animate attributeName="height" values="8;14;8" dur="0.65s" repeatCount="indefinite" />
          <animate attributeName="y" values="6;3;6" dur="0.65s" repeatCount="indefinite" />
        </rect>
        <rect x="25" y="2" width="3" height="16" rx="1.5" fill="#E21B3C" opacity="0.5">
          <animate attributeName="height" values="16;7;16" dur="0.45s" repeatCount="indefinite" />
          <animate attributeName="y" values="2;6;2" dur="0.45s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* "Grandma?" text bubble */}
      <rect x="18" y="30" width="48" height="20" rx="8" fill="rgba(255,255,255,0.08)" stroke="#E21B3C" strokeWidth="1" opacity="0.4" />
      <text x="42" y="43" textAnchor="middle" fill="#E21B3C" fontSize="7" fontFamily="system-ui" opacity="0.6">Grandma?</text>

      {/* Warning triangle */}
      <g>
        <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" additive="sum" />
        <polygon points="100,118 85,142 115,142" fill="none" stroke="#FFA602" strokeWidth="1.5" opacity="0.5" />
        <text x="100" y="138" textAnchor="middle" fill="#FFA602" fontSize="12" fontWeight="bold" fontFamily="system-ui" opacity="0.6">!</text>
      </g>

      {/* Dollar signs floating away */}
      <text x="140" y="55" fill="#26890C" fontSize="10" fontFamily="system-ui" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y" values="55;35;55" dur="3s" repeatCount="indefinite" />
        $
      </text>
      <text x="155" y="65" fill="#26890C" fontSize="8" fontFamily="system-ui" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="y" values="65;45;65" dur="3s" repeatCount="indefinite" begin="0.5s" />
        $
      </text>

      {/* Sparkles */}
      <circle cx="30" cy="90" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="100" r="1.5" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-real-examples — News headlines with deepfake theme */
export function RealExamplesIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Newspaper/headlines stack */}
      {/* Headline 1 */}
      <rect x="25" y="20" width="150" height="35" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="35" y="28" width="60" height="4" rx="2" fill="#E21B3C" opacity="0.3" />
      <rect x="35" y="36" width="100" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="35" y="43" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
      <text x="155" y="32" fill="#FFA602" fontSize="7" fontFamily="system-ui" opacity="0.4">$25M</text>

      {/* Headline 2 */}
      <rect x="25" y="62" width="150" height="35" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="35" y="70" width="55" height="4" rx="2" fill="#1368CE" opacity="0.3" />
      <rect x="35" y="78" width="90" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="35" y="85" width="75" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />

      {/* Headline 3 */}
      <rect x="25" y="104" width="150" height="35" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="35" y="112" width="65" height="4" rx="2" fill="#FF3EA5" opacity="0.3" />
      <rect x="35" y="120" width="95" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="35" y="127" width="70" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />

      {/* "REAL" stamp on headlines */}
      <rect x="145" y="70" width="25" height="12" rx="3" fill="none" stroke="#E21B3C" strokeWidth="1.2" opacity="0.4" transform="rotate(-8 157 76)">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="157" y="79" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" fontFamily="system-ui" opacity="0.5" transform="rotate(-8 157 76)">REAL</text>

      {/* Pulsing alert dot */}
      <circle cx="18" cy="37" r="4" fill="#E21B3C" opacity="0.4">
        <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Sparkles */}
      <circle cx="185" cy="25" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M8 120 L10 114 L12 120 L18 122 L12 124 L10 130 L8 124 L2 122 Z" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/** m4-spot-ai-content — Magnifying glass over image with tells */
export function SpotAiContentIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Photo frame */}
      <rect x="35" y="25" width="100" height="80" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* Simple face in photo */}
      <circle cx="85" cy="55" r="15" fill="rgba(255,255,255,0.08)" />
      <circle cx="79" cy="52" r="2" fill="rgba(255,255,255,0.2)" />
      <circle cx="91" cy="52" r="2" fill="rgba(255,255,255,0.2)" />
      <path d="M80 62 Q85 66 90 62" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Glitchy hand — too many fingers */}
      <g transform="translate(60,72)">
        <rect x="0" y="0" width="3" height="10" rx="1" fill="rgba(255,255,255,0.12)" />
        <rect x="4" y="-2" width="3" height="12" rx="1" fill="rgba(255,255,255,0.12)" />
        <rect x="8" y="-1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.12)" />
        <rect x="12" y="0" width="3" height="10" rx="1" fill="rgba(255,255,255,0.12)" />
        <rect x="16" y="1" width="3" height="9" rx="1" fill="#E21B3C" opacity="0.2" />
        <rect x="20" y="2" width="3" height="8" rx="1" fill="#E21B3C" opacity="0.2" />
      </g>

      {/* Magnifying glass — animated, moving over the image */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 15,-10; 0,0" dur="4s" repeatCount="indefinite" />
        <circle cx="130" cy="60" r="22" fill="none" stroke="#FFA602" strokeWidth="2" opacity="0.6" />
        <circle cx="130" cy="60" r="22" fill="rgba(255,166,2,0.05)" />
        <line x1="146" y1="76" x2="162" y2="92" stroke="#FFA602" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

        {/* Detection highlights inside magnifier */}
        <circle cx="125" cy="55" r="3" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.4" strokeDasharray="2 1">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Detection labels */}
      <rect x="35" y="115" width="40" height="14" rx="4" fill="#E21B3C" fillOpacity={0.1} stroke="#E21B3C" strokeWidth="0.8" strokeOpacity={0.3} />
      <text x="55" y="125" textAnchor="middle" fill="#E21B3C" fontSize="5.5" fontFamily="system-ui" opacity="0.5">Hands</text>

      <rect x="80" y="115" width="40" height="14" rx="4" fill="#FFA602" fillOpacity={0.1} stroke="#FFA602" strokeWidth="0.8" strokeOpacity={0.3} />
      <text x="100" y="125" textAnchor="middle" fill="#FFA602" fontSize="5.5" fontFamily="system-ui" opacity="0.5">Text</text>

      <rect x="125" y="115" width="40" height="14" rx="4" fill="#1368CE" fillOpacity={0.1} stroke="#1368CE" strokeWidth="0.8" strokeOpacity={0.3} />
      <text x="145" y="125" textAnchor="middle" fill="#1368CE" fontSize="5.5" fontFamily="system-ui" opacity="0.5">Eyes</text>

      {/* Sparkles */}
      <circle cx="15" cy="45" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="130" r="1.5" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-something-feels-off — Pause button with verification arrows */
export function SomethingFeelsOffIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Large pause symbol */}
      <circle cx="100" cy="65" r="35" fill="rgba(255,255,255,0.04)" stroke="#FFA602" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="r" values="33;37;33" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="88" y="48" width="8" height="34" rx="3" fill="#FFA602" opacity="0.5" />
      <rect x="104" y="48" width="8" height="34" rx="3" fill="#FFA602" opacity="0.5" />

      {/* "60 seconds" text */}
      <text x="100" y="115" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="system-ui">60 seconds to verify</text>

      {/* Verification arrows — call back */}
      <g transform="translate(30,40)">
        {/* Phone icon */}
        <rect x="0" y="5" width="16" height="25" rx="4" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.4" />
        <rect x="3" y="9" width="10" height="14" rx="2" fill="#26890C" opacity="0.1" />
        {/* Arrow from phone — verify */}
        <path d="M20 18 L35 18" stroke="#26890C" strokeWidth="1" strokeLinecap="round" opacity="0.4">
          <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M32 14 L36 18 L32 22" fill="none" stroke="#26890C" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* Checkmark appearing after pause */}
      <g transform="translate(150,40)">
        <circle cx="15" cy="18" r="12" fill="#26890C" fillOpacity={0.15} stroke="#26890C" strokeWidth="1" strokeOpacity={0.3}>
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
        <path d="M10 18 L14 22 L22 14" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </path>
      </g>

      {/* Gut instinct — brain with heart */}
      <circle cx="100" cy="140" r="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path d="M96 139 C96 137 98 136 100 138 C102 136 104 137 104 139 C104 141 100 144 100 144 C100 144 96 141 96 139" fill="#FF3EA5" opacity="0.3" />

      {/* Sparkles */}
      <path d="M20 20 L22 14 L24 20 L30 22 L24 24 L22 30 L20 24 L14 22 Z" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <circle cx="180" cy="80" r="2" fill="#FFD166" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-quiz-check-2 — Question bubbles with detective hat */
export function QuizCheck2Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Detective/magnifying glass */}
      <circle cx="100" cy="65" r="28" fill="none" stroke="#1368CE" strokeWidth="2" opacity="0.3" />
      <circle cx="100" cy="65" r="28" fill="rgba(19,104,206,0.05)" />
      <line x1="120" y1="87" x2="140" y2="107" stroke="#1368CE" strokeWidth="3" strokeLinecap="round" opacity="0.3" />

      {/* Question marks inside magnifying glass */}
      <text x="88" y="60" fill="#FFA602" fontSize="14" fontWeight="bold" fontFamily="system-ui" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        ?
      </text>
      <text x="103" y="72" fill="#E21B3C" fontSize="10" fontWeight="bold" fontFamily="system-ui" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        ?
      </text>
      <text x="95" y="80" fill="#00C9B7" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" begin="0.3s" />
        ?
      </text>

      {/* Answer options floating */}
      <rect x="20" y="115" width="35" height="18" rx="6" fill="#E21B3C" fillOpacity={0.1} stroke="#E21B3C" strokeWidth="0.8" strokeOpacity={0.3} />
      <text x="37" y="127" textAnchor="middle" fill="#E21B3C" fontSize="7" fontFamily="system-ui" opacity="0.5">A</text>

      <rect x="62" y="115" width="35" height="18" rx="6" fill="#1368CE" fillOpacity={0.1} stroke="#1368CE" strokeWidth="0.8" strokeOpacity={0.3} />
      <text x="79" y="127" textAnchor="middle" fill="#1368CE" fontSize="7" fontFamily="system-ui" opacity="0.5">B</text>

      <rect x="104" y="115" width="35" height="18" rx="6" fill="#FFA602" fillOpacity={0.1} stroke="#FFA602" strokeWidth="0.8" strokeOpacity={0.3} />
      <text x="121" y="127" textAnchor="middle" fill="#FFA602" fontSize="7" fontFamily="system-ui" opacity="0.5">C</text>

      <rect x="146" y="115" width="35" height="18" rx="6" fill="#26890C" fillOpacity={0.1} stroke="#26890C" strokeWidth="0.8" strokeOpacity={0.3} />
      <text x="163" y="127" textAnchor="middle" fill="#26890C" fontSize="7" fontFamily="system-ui" opacity="0.5">D</text>

      {/* Sparkles */}
      <circle cx="35" cy="35" r="2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="30" r="1.5" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-key-takeaway-2 — Pause clock with shield */
export function KeyTakeaway2Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Stopwatch / clock */}
      <circle cx="100" cy="72" r="35" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <circle cx="100" cy="72" r="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* Clock button */}
      <rect x="96" y="32" width="8" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
      <line x1="100" y1="28" x2="100" y2="32" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

      {/* Clock hands — second hand ticking */}
      <line x1="100" y1="72" x2="100" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="72" x2="115" y2="78" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Second hand — ticking */}
      <line x1="100" y1="72" x2="100" y2="48" stroke="#E21B3C" strokeWidth="0.8" strokeLinecap="round" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" values="0 100 72;360 100 72" dur="10s" repeatCount="indefinite" />
      </line>
      <circle cx="100" cy="72" r="2" fill="rgba(255,255,255,0.3)" />

      {/* "60s" label */}
      <text x="100" y="90" textAnchor="middle" fill="#FFA602" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.4">60s</text>

      {/* Shield check */}
      <g transform="translate(148,55)">
        <path d="M15 0 L30 6 L30 16 C30 24 23 30 15 33 C7 30 0 24 0 16 L0 6 Z" fill="#26890C" fillOpacity={0.15} stroke="#26890C" strokeWidth="1" strokeOpacity={0.3} />
        <path d="M10 15 L14 19 L22 11" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* "Verify" text */}
      <rect x="40" y="125" width="120" height="20" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="100" y="138" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6.5" fontFamily="system-ui">Pause is your best protection</text>

      {/* Sparkles */}
      <path d="M30 40 L32 34 L34 40 L40 42 L34 44 L32 50 L30 44 L24 42 Z" fill="#FFD166" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <circle cx="25" cy="120" r="2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}


/* ================================================================
   LESSON 3 — When NOT to Trust AI
   ================================================================ */

/** m4-library-book — Well-read friend with books but no personal knowledge */
export function LibraryBookIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Bookshelf */}
      <rect x="25" y="25" width="150" height="100" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* Shelf lines */}
      <line x1="30" y1="55" x2="170" y2="55" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <line x1="30" y1="85" x2="170" y2="85" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* Books on shelf — top row */}
      <rect x="35" y="30" width="10" height="24" rx="1.5" fill="#E21B3C" opacity="0.3" />
      <rect x="47" y="32" width="8" height="22" rx="1.5" fill="#1368CE" opacity="0.3" />
      <rect x="57" y="29" width="12" height="25" rx="1.5" fill="#FFA602" opacity="0.3" />
      <rect x="71" y="31" width="9" height="23" rx="1.5" fill="#26890C" opacity="0.3" />
      <rect x="82" y="30" width="11" height="24" rx="1.5" fill="#00C9B7" opacity="0.3" />
      <rect x="95" y="33" width="8" height="21" rx="1.5" fill="#FF3EA5" opacity="0.3" />
      <rect x="105" y="30" width="10" height="24" rx="1.5" fill="#1368CE" opacity="0.25" />
      <rect x="117" y="32" width="12" height="22" rx="1.5" fill="#FFA602" opacity="0.25" />
      <rect x="131" y="29" width="9" height="25" rx="1.5" fill="#E21B3C" opacity="0.25" />
      <rect x="142" y="31" width="11" height="23" rx="1.5" fill="#26890C" opacity="0.25" />
      <rect x="155" y="30" width="10" height="24" rx="1.5" fill="#00C9B7" opacity="0.25" />

      {/* Middle row — fewer */}
      <rect x="35" y="60" width="12" height="24" rx="1.5" fill="#FFA602" opacity="0.25" />
      <rect x="49" y="62" width="8" height="22" rx="1.5" fill="#FF3EA5" opacity="0.25" />
      <rect x="59" y="59" width="11" height="25" rx="1.5" fill="#1368CE" opacity="0.25" />
      <rect x="72" y="61" width="10" height="23" rx="1.5" fill="#E21B3C" opacity="0.25" />
      <rect x="84" y="60" width="9" height="24" rx="1.5" fill="#26890C" opacity="0.25" />

      {/* Question mark on bottom shelf — doesn't know YOUR situation */}
      <text x="100" y="110" textAnchor="middle" fill="#FFA602" fontSize="18" fontWeight="bold" fontFamily="system-ui" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
        ?
      </text>
      <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="system-ui">{"Doesn't know YOUR situation"}</text>

      {/* Person silhouette with question bubble */}
      <circle cx="160" cy="110" r="6" fill="rgba(255,255,255,0.1)" />
      <rect x="156" y="118" width="8" height="10" rx="3" fill="rgba(255,255,255,0.07)" />

      {/* Sparkle */}
      <path d="M180 30 L182 24 L184 30 L190 32 L184 34 L182 40 L180 34 L174 32 Z" fill="#FFD166" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <circle cx="15" cy="80" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-medical-ai — Stethoscope with AI warning */
export function MedicalAiIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Stethoscope tubing */}
      <path d="M70 35 Q70 80 100 85 Q130 90 130 45" fill="none" stroke="#1368CE" strokeWidth="2.5" opacity="0.3" />
      {/* Earpieces */}
      <circle cx="65" cy="32" r="5" fill="#1368CE" opacity="0.3" />
      <circle cx="135" cy="32" r="5" fill="#1368CE" opacity="0.3" />
      {/* Chest piece */}
      <circle cx="100" cy="95" r="14" fill="rgba(255,255,255,0.06)" stroke="#1368CE" strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="95" r="8" fill="rgba(255,255,255,0.04)" stroke="#1368CE" strokeWidth="1" opacity="0.3" />

      {/* AI brain overlay on stethoscope */}
      <circle cx="100" cy="60" r="16" fill="rgba(255,255,255,0.04)" stroke="#FFA602" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <text x="100" y="64" textAnchor="middle" fill="#FFA602" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.4">AI</text>

      {/* Warning — NOT a replacement */}
      <g transform="translate(135,70)">
        <polygon points="18,0 3,26 33,26" fill="none" stroke="#E21B3C" strokeWidth="1.2" opacity="0.4" />
        <text x="18" y="22" textAnchor="middle" fill="#E21B3C" fontSize="10" fontWeight="bold" fontFamily="system-ui" opacity="0.5">!</text>
      </g>

      {/* Cross/plus symbol — real doctor */}
      <rect x="26" y="65" width="8" height="22" rx="2" fill="#26890C" opacity="0.2" />
      <rect x="20" y="71" width="20" height="8" rx="2" fill="#26890C" opacity="0.2" />

      {/* Bottom rule */}
      <rect x="35" y="125" width="130" height="18" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="100" y="137" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="system-ui">Understand your health. Doctor manages it.</text>

      {/* Heartbeat pulse line */}
      <path d="M40 115 L55 115 L60 105 L65 125 L70 108 L75 115 L160 115" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.2">
        <animate attributeName="stroke-dasharray" values="0 200;200 200" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="175" cy="30" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-legal-ai — Gavel with AI caution */
export function LegalAiIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Gavel head */}
      <rect x="55" y="35" width="50" height="20" rx="5" fill="#FFA602" fillOpacity={0.25} stroke="#FFA602" strokeWidth="1.2" strokeOpacity={0.4} transform="rotate(-25 80 45)" />
      {/* Gavel handle */}
      <line x1="80" y1="55" x2="100" y2="95" stroke="#FFA602" strokeWidth="3" strokeLinecap="round" opacity="0.3" />

      {/* Sound block */}
      <rect x="85" y="100" width="60" height="10" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="80" y="108" width="70" height="6" rx="2" fill="rgba(255,255,255,0.05)" />

      {/* Impact lines */}
      <line x1="90" y1="96" x2="85" y2="88" stroke="#FFA602" strokeWidth="1" strokeLinecap="round" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="96" x2="100" y2="87" stroke="#FFA602" strokeWidth="1" strokeLinecap="round" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" begin="0.1s" />
      </line>
      <line x1="110" y1="96" x2="115" y2="88" stroke="#FFA602" strokeWidth="1" strokeLinecap="round" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" begin="0.2s" />
      </line>

      {/* Document with AI stamp */}
      <rect x="20" y="55" width="40" height="50" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="26" y="62" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="26" y="68" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
      <rect x="26" y="74" width="25" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
      {/* AI stamp */}
      <circle cx="45" cy="92" r="8" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.3" strokeDasharray="2 1" />
      <text x="45" y="95" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" fontFamily="system-ui" opacity="0.4">AI</text>

      {/* Lock — attorney-client privilege */}
      <rect x="155" y="50" width="20" height="16" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <path d="M159 50 V45 C159 41 167 41 167 45 V50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <circle cx="165" cy="58" r="2" fill="rgba(255,255,255,0.3)" />
      <text x="165" y="78" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="system-ui">Protected</text>

      {/* Jurisdiction map hint */}
      <rect x="140" y="90" width="45" height="25" rx="4" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 2" />
      <text x="162" y="105" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5" fontFamily="system-ui">Varies by</text>
      <text x="162" y="112" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5" fontFamily="system-ui">state</text>

      {/* Bottom rule */}
      <rect x="35" y="128" width="130" height="18" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="100" y="140" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="system-ui">Understand law. Lawyer makes the call.</text>

      {/* Sparkle */}
      <circle cx="185" cy="35" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-financial-ai — Piggy bank with AI, caution sign */
export function FinancialAiIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Piggy bank body */}
      <ellipse cx="90" cy="80" rx="40" ry="30" fill="#FF3EA5" fillOpacity={0.12} stroke="#FF3EA5" strokeWidth="1.5" strokeOpacity={0.3} />
      {/* Snout */}
      <ellipse cx="128" cy="78" rx="8" ry="6" fill="#FF3EA5" fillOpacity={0.1} stroke="#FF3EA5" strokeWidth="1" strokeOpacity={0.3} />
      <circle cx="126" cy="77" r="1.5" fill="#FF3EA5" opacity="0.3" />
      <circle cx="130" cy="77" r="1.5" fill="#FF3EA5" opacity="0.3" />
      {/* Ear */}
      <ellipse cx="72" cy="58" rx="8" ry="10" fill="#FF3EA5" fillOpacity={0.1} stroke="#FF3EA5" strokeWidth="1" strokeOpacity={0.25} />
      {/* Eye */}
      <circle cx="105" cy="72" r="3" fill="rgba(255,255,255,0.2)" />
      <circle cx="106" cy="71" r="1.5" fill="rgba(255,255,255,0.4)" />
      {/* Legs */}
      <rect x="68" y="105" width="6" height="15" rx="2" fill="#FF3EA5" opacity="0.15" />
      <rect x="82" y="105" width="6" height="15" rx="2" fill="#FF3EA5" opacity="0.15" />
      <rect x="98" y="105" width="6" height="15" rx="2" fill="#FF3EA5" opacity="0.15" />
      <rect x="112" y="105" width="6" height="15" rx="2" fill="#FF3EA5" opacity="0.15" />

      {/* Coin slot */}
      <rect x="82" y="48" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
      {/* Coin dropping in */}
      <circle cx="90" cy="40" r="6" fill="#FFA602" fillOpacity={0.3} stroke="#FFA602" strokeWidth="0.8" strokeOpacity={0.4}>
        <animate attributeName="cy" values="30;45;30" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <text x="90" y="43" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold" fontFamily="system-ui" opacity="0.4">
        <animate attributeName="y" values="33;48;33" dur="2.5s" repeatCount="indefinite" />
        $
      </text>

      {/* AI label */}
      <circle cx="90" cy="80" r="10" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.3" strokeDasharray="2 1" />
      <text x="90" y="83" textAnchor="middle" fill="#1368CE" fontSize="7" fontWeight="bold" fontFamily="system-ui" opacity="0.4">AI</text>

      {/* Caution — AI doesn't know your life */}
      <g transform="translate(148,45)">
        <polygon points="18,0 3,26 33,26" fill="none" stroke="#FFA602" strokeWidth="1.2" opacity="0.4" />
        <text x="18" y="22" textAnchor="middle" fill="#FFA602" fontSize="10" fontWeight="bold" fontFamily="system-ui" opacity="0.5">!</text>
      </g>
      <text x="165" y="80" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="system-ui">{"Doesn't know"}</text>
      <text x="165" y="88" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="system-ui">your life</text>

      {/* Bottom rule */}
      <rect x="35" y="130" width="130" height="18" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="100" y="142" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="system-ui">Get literate. Use a pro for decisions.</text>

      {/* Sparkle */}
      <circle cx="20" cy="40" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-emotional-ai — Heart with AI circuit overlay */
export function EmotionalAiIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Large heart shape */}
      <path d="M100 130 C60 100 20 70 20 50 C20 30 40 20 60 30 C75 38 90 50 100 60 C110 50 125 38 140 30 C160 20 180 30 180 50 C180 70 140 100 100 130 Z" fill="#FF3EA5" fillOpacity={0.08} stroke="#FF3EA5" strokeWidth="1.5" strokeOpacity={0.25} />

      {/* Circuit pattern inside heart */}
      <line x1="70" y1="55" x2="90" y2="55" stroke="#1368CE" strokeWidth="0.8" opacity="0.2" />
      <line x1="90" y1="55" x2="90" y2="70" stroke="#1368CE" strokeWidth="0.8" opacity="0.2" />
      <line x1="90" y1="70" x2="110" y2="70" stroke="#1368CE" strokeWidth="0.8" opacity="0.2" />
      <line x1="110" y1="55" x2="130" y2="55" stroke="#1368CE" strokeWidth="0.8" opacity="0.2" />
      <line x1="110" y1="55" x2="110" y2="70" stroke="#1368CE" strokeWidth="0.8" opacity="0.2" />
      <circle cx="90" cy="55" r="2" fill="#1368CE" opacity="0.3" />
      <circle cx="110" cy="55" r="2" fill="#1368CE" opacity="0.3" />
      <circle cx="90" cy="70" r="2" fill="#1368CE" opacity="0.3" />
      <circle cx="110" cy="70" r="2" fill="#1368CE" opacity="0.3" />

      {/* AI label in center */}
      <circle cx="100" cy="75" r="12" fill="rgba(255,255,255,0.04)" stroke="#1368CE" strokeWidth="1" opacity="0.2" strokeDasharray="2 2" />
      <text x="100" y="79" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.3">AI</text>

      {/* Person with real therapist — outside the heart */}
      <circle cx="30" cy="130" r="7" fill="rgba(255,255,255,0.1)" />
      <rect x="25" y="139" width="10" height="12" rx="3" fill="rgba(255,255,255,0.07)" />
      <text x="30" y="125" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="system-ui">Real</text>

      {/* vs */}
      <text x="55" y="138" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="6" fontFamily="system-ui">vs</text>

      {/* Pulsing glow */}
      <circle cx="100" cy="75" r="25" fill="none" stroke="#FF3EA5" strokeWidth="0.5" opacity="0.15">
        <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Chat bubble — AI listens */}
      <rect x="130" y="100" width="55" height="22" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="157" y="114" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="system-ui">Can listen,</text>
      <text x="157" y="120" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="system-ui">not treat</text>

      {/* Sparkle */}
      <circle cx="170" cy="30" r="2" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-starting-vs-final — Arrow path: starting point to final answer */
export function StartingVsFinalIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Starting circle — AI */}
      <circle cx="45" cy="75" r="22" fill="#1368CE" fillOpacity={0.1} stroke="#1368CE" strokeWidth="1.5" strokeOpacity={0.3} />
      <text x="45" y="72" textAnchor="middle" fill="#1368CE" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.5">AI</text>
      <text x="45" y="82" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="system-ui">START</text>

      {/* Arrow path */}
      <path d="M70 75 L130 75" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M126 70 L133 75 L126 80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ending circle — Human Expert */}
      <circle cx="155" cy="75" r="22" fill="#26890C" fillOpacity={0.1} stroke="#26890C" strokeWidth="1.5" strokeOpacity={0.3} />
      <circle cx="155" cy="68" r="6" fill="rgba(255,255,255,0.1)" />
      <rect x="150" y="76" width="10" height="10" rx="3" fill="rgba(255,255,255,0.07)" />
      <text x="155" y="95" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="system-ui">EXPERT</text>

      {/* Green checkmark at expert */}
      <path d="M147 103 L152 108 L163 97" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Warning on direct AI-to-decision path */}
      <path d="M45 50 Q100 15 155 50" fill="none" stroke="#E21B3C" strokeWidth="1" opacity="0.2" strokeDasharray="3 2" />
      <text x="100" y="30" textAnchor="middle" fill="#E21B3C" fontSize="12" fontWeight="bold" fontFamily="system-ui" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
        ✕
      </text>

      {/* Labels */}
      <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="system-ui">Great first step</text>
      <text x="100" y="130" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6.5" fontFamily="system-ui">Terrible last stop</text>

      {/* Sparkles */}
      <circle cx="15" cy="40" r="2" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="130" r="1.5" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-sort-it-out — Two buckets being filled */
export function SortItOutIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Bucket 1 — AI is great for this */}
      <path d="M20 60 L15 130 L85 130 L80 60 Z" fill="#26890C" fillOpacity={0.08} stroke="#26890C" strokeWidth="1.2" strokeOpacity={0.3} />
      <text x="50" y="145" textAnchor="middle" fill="#26890C" fontSize="6" fontWeight="bold" fontFamily="system-ui" opacity="0.5">AI is great</text>

      {/* Bucket 2 — Get a real human */}
      <path d="M120 60 L115 130 L185 130 L180 60 Z" fill="#E21B3C" fillOpacity={0.08} stroke="#E21B3C" strokeWidth="1.2" strokeOpacity={0.3} />
      <text x="150" y="145" textAnchor="middle" fill="#E21B3C" fontSize="6" fontWeight="bold" fontFamily="system-ui" opacity="0.5">Get a human</text>

      {/* Cards dropping into buckets */}
      {/* Card going left */}
      <rect x="35" y="30" width="30" height="18" rx="4" fill="rgba(255,255,255,0.06)" stroke="#26890C" strokeWidth="0.8" opacity="0.4">
        <animate attributeName="y" values="25;55;25" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="40" y="36" width="20" height="2.5" rx="1" fill="rgba(255,255,255,0.15)">
        <animate attributeName="y" values="31;61;31" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Card going right */}
      <rect x="135" y="30" width="30" height="18" rx="4" fill="rgba(255,255,255,0.06)" stroke="#E21B3C" strokeWidth="0.8" opacity="0.4">
        <animate attributeName="y" values="30;55;30" dur="3s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" begin="1s" />
      </rect>
      <rect x="140" y="36" width="20" height="2.5" rx="1" fill="rgba(255,255,255,0.15)">
        <animate attributeName="y" values="36;61;36" dur="3s" repeatCount="indefinite" begin="1s" />
      </rect>

      {/* Items already in buckets */}
      <rect x="28" y="100" width="44" height="10" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="28" y="114" width="44" height="10" rx="3" fill="rgba(255,255,255,0.03)" />
      <rect x="128" y="100" width="44" height="10" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="128" y="114" width="44" height="10" rx="3" fill="rgba(255,255,255,0.03)" />

      {/* Sparkle */}
      <path d="M100 20 L102 14 L104 20 L110 22 L104 24 L102 30 L100 24 L94 22 Z" fill="#FFA602" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/** m4-quiz-check-3 — Brain with checkmark and stethoscope hint */
export function QuizCheck3Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Brain outline */}
      <ellipse cx="100" cy="65" rx="35" ry="38" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      {/* Brain folds */}
      <path d="M80 45 C90 40 100 42 97 52" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
      <path d="M82 60 C92 55 104 58 100 67" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
      <path d="M97 45 C107 48 115 55 112 62" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />

      {/* Question marks inside brain */}
      <text x="87" y="58" fill="#FFA602" fontSize="10" fontWeight="bold" fontFamily="system-ui" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        ?
      </text>
      <text x="105" y="70" fill="#1368CE" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2.5s" repeatCount="indefinite" />
        ?
      </text>

      {/* Checkmark below brain */}
      <circle cx="100" cy="115" r="12" fill="#26890C" fillOpacity={0.1} stroke="#26890C" strokeWidth="1" strokeOpacity={0.3} />
      <path d="M94 115 L98 119 L107 110" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Floating icons — medical, legal, financial */}
      <text x="35" y="55" fill="#E21B3C" fontSize="14" fontFamily="system-ui" opacity="0.3">+</text>
      <text x="160" y="50" fill="#FFA602" fontSize="10" fontFamily="system-ui" opacity="0.3">$</text>
      <rect x="155" y="70" width="18" height="22" rx="3" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1">
        <rect x="159" y="74" width="10" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
      </rect>

      {/* Sparkles */}
      <circle cx="25" cy="120" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="120" r="1.5" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-key-takeaway-3 — Podium with "Research Assistant" ribbon and "Not Decision Maker" */
export function KeyTakeaway3Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Award ribbon / medal */}
      <circle cx="100" cy="55" r="25" fill="#1368CE" fillOpacity={0.1} stroke="#1368CE" strokeWidth="1.5" strokeOpacity={0.3} />
      <circle cx="100" cy="55" r="18" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="100" y="52" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="system-ui">Best</text>
      <text x="100" y="60" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="system-ui">Research</text>
      <text x="100" y="68" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="system-ui">Assistant</text>

      {/* Ribbon tails */}
      <path d="M82 75 L75 105 L85 95 L95 105 L88 75" fill="#1368CE" opacity="0.15" />
      <path d="M112 75 L105 105 L115 95 L125 105 L118 75" fill="#1368CE" opacity="0.15" />

      {/* Star on medal */}
      <path d="M100 35 L103 44 L112 44 L105 49 L107 58 L100 53 L93 58 L95 49 L88 44 L97 44 Z" fill="#FFA602" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
      </path>

      {/* NOT the decision-maker */}
      <rect x="35" y="115" width="130" height="22" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="100" y="128" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="system-ui">Worst final decision-maker</text>

      {/* Red X on decision side */}
      <circle cx="160" cy="126" r="6" fill="#E21B3C" fillOpacity={0.1} stroke="#E21B3C" strokeWidth="0.8" strokeOpacity={0.3} />
      <line x1="157" y1="123" x2="163" y2="129" stroke="#E21B3C" strokeWidth="1" opacity="0.4" />
      <line x1="163" y1="123" x2="157" y2="129" stroke="#E21B3C" strokeWidth="1" opacity="0.4" />

      {/* Sparkles */}
      <circle cx="30" cy="45" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M170 30 L172 24 L174 30 L180 32 L174 34 L172 40 L170 34 L164 32 Z" fill="#FFD166" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}


/* ================================================================
   LESSON 4 — Teaching Your Family About AI
   ================================================================ */

/** m4-conversation-worth-having — Family silhouettes with speech bubbles */
export function ConversationWorthHavingIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Family group — three people */}
      {/* Person 1 */}
      <circle cx="60" cy="85" r="10" fill="rgba(255,255,255,0.12)" />
      <rect x="52" y="97" width="16" height="22" rx="5" fill="#1368CE" opacity="0.15" />

      {/* Person 2 (taller — adult) */}
      <circle cx="100" cy="78" r="12" fill="rgba(255,255,255,0.12)" />
      <rect x="90" y="92" width="20" height="26" rx="6" fill="#26890C" opacity="0.15" />

      {/* Person 3 */}
      <circle cx="140" cy="88" r="9" fill="rgba(255,255,255,0.12)" />
      <rect x="133" y="99" width="14" height="20" rx="4" fill="#FFA602" opacity="0.15" />

      {/* Speech bubbles */}
      <rect x="25" y="40" width="50" height="28" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" >
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="50" y="57" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5.5" fontFamily="system-ui">AI scams?</text>

      <rect x="85" y="30" width="55" height="28" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1s" />
      </rect>
      <text x="112" y="47" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5.5" fontFamily="system-ui">Stay safe!</text>

      <rect x="130" y="50" width="55" height="24" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="2s" />
      </rect>
      <text x="157" y="65" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5.5" fontFamily="system-ui">How does it work?</text>

      {/* Shield of knowledge */}
      <path d="M100 130 L112 134 L112 142 C112 146 107 150 100 152 C93 150 88 146 88 142 L88 134 Z" fill="#26890C" fillOpacity={0.1} stroke="#26890C" strokeWidth="1" strokeOpacity={0.25}>
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Sparkles */}
      <circle cx="15" cy="80" r="2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="35" r="1.5" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-kids-ai — Child at computer with AI helper */
export function KidsAiIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Computer/laptop */}
      <rect x="55" y="45" width="70" height="50" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <rect x="60" y="50" width="60" height="38" rx="3" fill="rgba(255,255,255,0.03)" />
      {/* Laptop base */}
      <path d="M45 95 L55 95 L145 95 L155 95 L155 100 Q155 103 152 103 L48 103 Q45 103 45 100 Z" fill="rgba(255,255,255,0.06)" />

      {/* AI on screen */}
      <circle cx="90" cy="65" r="8" fill="#1368CE" fillOpacity={0.15} stroke="#1368CE" strokeWidth="0.8" strokeOpacity={0.3} />
      <text x="90" y="68" textAnchor="middle" fill="#1368CE" fontSize="6" fontWeight="bold" fontFamily="system-ui" opacity="0.4">AI</text>

      {/* Kid silhouette */}
      <circle cx="40" cy="70" r="8" fill="rgba(255,255,255,0.1)" />
      <rect x="34" y="80" width="12" height="15" rx="4" fill="#FFA602" opacity="0.15" />

      {/* Parent silhouette behind kid */}
      <circle cx="28" cy="55" r="10" fill="rgba(255,255,255,0.08)" />
      <rect x="21" y="67" width="14" height="18" rx="5" fill="#26890C" opacity="0.1" />

      {/* Thought bubbles from kid */}
      <circle cx="52" cy="55" r="2" fill="rgba(255,255,255,0.08)" />
      <circle cx="56" cy="48" r="3" fill="rgba(255,255,255,0.06)" />

      {/* Safety checklist on screen */}
      <rect x="98" y="55" width="16" height="2.5" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="98" y="60" width="12" height="2.5" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="98" y="65" width="14" height="2.5" rx="1" fill="rgba(255,255,255,0.08)" />

      {/* Red X over name/school info */}
      <g transform="translate(130,55)">
        <rect x="0" y="0" width="30" height="18" rx="3" fill="rgba(255,255,255,0.04)" stroke="#E21B3C" strokeWidth="0.8" opacity="0.3" />
        <text x="15" y="8" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="4" fontFamily="system-ui">name</text>
        <text x="15" y="14" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="4" fontFamily="system-ui">school</text>
        <line x1="2" y1="2" x2="28" y2="16" stroke="#E21B3C" strokeWidth="1" opacity="0.4" />
        <line x1="28" y1="2" x2="2" y2="16" stroke="#E21B3C" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Bottom labels */}
      <text x="70" y="118" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="system-ui">Under 12: with a parent</text>
      <text x="130" y="118" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="system-ui">Teens: critical thinking</text>

      {/* Sparkles */}
      <circle cx="175" cy="40" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M10 110 L12 104 L14 110 L20 112 L14 114 L12 120 L10 114 L4 112 Z" fill="#FFD166" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/** m4-older-adults-ai — Older person being shown an AI tool */
export function OlderAdultsAiIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Tablet device being shown */}
      <rect x="70" y="35" width="60" height="80" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <rect x="76" y="42" width="48" height="60" rx="4" fill="rgba(255,255,255,0.03)" />
      {/* Home button */}
      <circle cx="100" cy="110" r="3" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />

      {/* AI chat on screen */}
      <rect x="80" y="48" width="35" height="12" rx="5" fill="#1368CE" fillOpacity={0.1} stroke="#1368CE" strokeWidth="0.6" strokeOpacity={0.2} />
      <rect x="83" y="52" width="20" height="2.5" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="85" y="64" width="35" height="12" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
      <rect x="88" y="68" width="22" height="2.5" rx="1" fill="rgba(255,255,255,0.08)" />

      <rect x="80" y="80" width="30" height="12" rx="5" fill="#1368CE" fillOpacity={0.08} stroke="#1368CE" strokeWidth="0.6" strokeOpacity={0.15} />
      <rect x="83" y="84" width="18" height="2.5" rx="1" fill="rgba(255,255,255,0.08)" />

      {/* Older person — with glasses hint */}
      <circle cx="45" cy="65" r="12" fill="rgba(255,255,255,0.1)" />
      <rect x="37" y="79" width="16" height="22" rx="5" fill="#FFA602" opacity="0.12" />
      {/* Glasses */}
      <circle cx="41" cy="63" r="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <circle cx="50" cy="63" r="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <line x1="45" y1="63" x2="46" y2="63" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />

      {/* Helper person pointing */}
      <circle cx="155" cy="60" r="10" fill="rgba(255,255,255,0.08)" />
      <rect x="148" y="72" width="14" height="18" rx="4" fill="#26890C" opacity="0.1" />
      {/* Pointing arm */}
      <line x1="148" y1="78" x2="132" y2="72" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />

      {/* "Not scary" — smiley */}
      <circle cx="100" cy="135" r="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
      <circle cx="96" cy="133" r="1" fill="rgba(255,255,255,0.2)" />
      <circle cx="104" cy="133" r="1" fill="rgba(255,255,255,0.2)" />
      <path d="M96 137 Q100 140 104 137" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />

      {/* Shield — scam awareness */}
      <path d="M170 100 L180 104 L180 112 C180 116 176 120 170 122 C164 120 160 116 160 112 L160 104 Z" fill="#E21B3C" fillOpacity={0.1} stroke="#E21B3C" strokeWidth="0.8" strokeOpacity={0.25} />
      <text x="170" y="114" textAnchor="middle" fill="#E21B3C" fontSize="8" fontWeight="bold" fontFamily="system-ui" opacity="0.3">!</text>

      {/* Sparkle */}
      <circle cx="20" cy="35" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-age-guidelines — Age groups in colored brackets */
export function AgeGuidelinesIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Age group cards — 4 stacked */}
      {/* Under 12 */}
      <rect x="20" y="15" width="70" height="28" rx="8" fill="#E21B3C" fillOpacity={0.08} stroke="#E21B3C" strokeWidth="1" strokeOpacity={0.25} />
      <circle cx="38" cy="29" r="7" fill="rgba(255,255,255,0.06)" />
      <text x="38" y="32" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="system-ui">{"<12"}</text>
      <rect x="52" y="25" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="52" y="31" width="22" height="2.5" rx="1" fill="rgba(255,255,255,0.07)" />

      {/* Teens */}
      <rect x="20" y="50" width="70" height="28" rx="8" fill="#1368CE" fillOpacity={0.08} stroke="#1368CE" strokeWidth="1" strokeOpacity={0.25} />
      <circle cx="38" cy="64" r="7" fill="rgba(255,255,255,0.06)" />
      <text x="38" y="67" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="system-ui">13-17</text>
      <rect x="52" y="60" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="52" y="66" width="24" height="2.5" rx="1" fill="rgba(255,255,255,0.07)" />

      {/* Young adults */}
      <rect x="110" y="15" width="70" height="28" rx="8" fill="#FFA602" fillOpacity={0.08} stroke="#FFA602" strokeWidth="1" strokeOpacity={0.25} />
      <circle cx="128" cy="29" r="7" fill="rgba(255,255,255,0.06)" />
      <text x="128" y="32" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="system-ui">18-30</text>
      <rect x="142" y="25" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="142" y="31" width="25" height="2.5" rx="1" fill="rgba(255,255,255,0.07)" />

      {/* Older adults */}
      <rect x="110" y="50" width="70" height="28" rx="8" fill="#26890C" fillOpacity={0.08} stroke="#26890C" strokeWidth="1" strokeOpacity={0.25} />
      <circle cx="128" cy="64" r="7" fill="rgba(255,255,255,0.06)" />
      <text x="128" y="67" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="system-ui">60+</text>
      <rect x="142" y="60" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="142" y="66" width="22" height="2.5" rx="1" fill="rgba(255,255,255,0.07)" />

      {/* Connecting arrows to center shield */}
      <line x1="90" y1="35" x2="95" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="110" y1="35" x2="105" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="90" y1="70" x2="95" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="110" y1="70" x2="105" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

      {/* Central shield — different needs, same goal */}
      <path d="M100 100 L118 106 L118 120 C118 128 110 134 100 137 C90 134 82 128 82 120 L82 106 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path d="M94 115 L98 119 L107 110" stroke="#26890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Sparkle */}
      <circle cx="10" cy="90" r="2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="90" r="1.5" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-dinner-table — Table with family and 5 discussion topics */
export function DinnerTableIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Table surface */}
      <ellipse cx="100" cy="85" rx="75" ry="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* People around table (simple circles) */}
      <circle cx="40" cy="65" r="8" fill="rgba(255,255,255,0.08)" />
      <circle cx="70" cy="55" r="8" fill="rgba(255,255,255,0.08)" />
      <circle cx="100" cy="52" r="8" fill="rgba(255,255,255,0.08)" />
      <circle cx="130" cy="55" r="8" fill="rgba(255,255,255,0.08)" />
      <circle cx="160" cy="65" r="8" fill="rgba(255,255,255,0.08)" />

      {/* Floating topic bubbles — animated */}
      <rect x="10" y="15" width="35" height="18" rx="6" fill="#E21B3C" fillOpacity={0.1} stroke="#E21B3C" strokeWidth="0.8" strokeOpacity={0.25}>
        <animate attributeName="y" values="15;12;15" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="27" y="27" textAnchor="middle" fill="#E21B3C" fontSize="5" fontFamily="system-ui" opacity="0.5">Fakes?</text>

      <rect x="48" y="20" width="35" height="18" rx="6" fill="#1368CE" fillOpacity={0.1} stroke="#1368CE" strokeWidth="0.8" strokeOpacity={0.25}>
        <animate attributeName="y" values="20;17;20" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </rect>
      <text x="65" y="32" textAnchor="middle" fill="#1368CE" fontSize="5" fontFamily="system-ui" opacity="0.5">Voice AI?</text>

      <rect x="86" y="12" width="35" height="18" rx="6" fill="#FFA602" fillOpacity={0.1} stroke="#FFA602" strokeWidth="0.8" strokeOpacity={0.25}>
        <animate attributeName="y" values="12;9;12" dur="3s" repeatCount="indefinite" begin="1s" />
      </rect>
      <text x="103" y="24" textAnchor="middle" fill="#FFA602" fontSize="5" fontFamily="system-ui" opacity="0.5">Privacy?</text>

      <rect x="124" y="18" width="35" height="18" rx="6" fill="#26890C" fillOpacity={0.1} stroke="#26890C" strokeWidth="0.8" strokeOpacity={0.25}>
        <animate attributeName="y" values="18;15;18" dur="3s" repeatCount="indefinite" begin="1.5s" />
      </rect>
      <text x="141" y="30" textAnchor="middle" fill="#26890C" fontSize="5" fontFamily="system-ui" opacity="0.5">Homework?</text>

      <rect x="158" y="22" width="35" height="18" rx="6" fill="#FF3EA5" fillOpacity={0.1} stroke="#FF3EA5" strokeWidth="0.8" strokeOpacity={0.25}>
        <animate attributeName="y" values="22;19;22" dur="3s" repeatCount="indefinite" begin="2s" />
      </rect>
      <text x="175" y="34" textAnchor="middle" fill="#FF3EA5" fontSize="5" fontFamily="system-ui" opacity="0.5">Tell me?</text>

      {/* Food on table — plates */}
      <circle cx="70" cy="82" r="5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <circle cx="100" cy="80" r="5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <circle cx="130" cy="82" r="5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

      {/* Warm glow */}
      <circle cx="100" cy="80" r="35" fill="rgba(255,166,2,0.03)">
        <animate attributeName="r" values="33;37;33" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Bottom label */}
      <text x="100" y="125" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="system-ui">5 things every family should discuss</text>

      {/* Sparkle */}
      <circle cx="5" cy="50" r="2" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-ai-smart-family — Person with lightbulb halo sharing knowledge */
export function AiSmartFamilyIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Central figure with knowledge glow */}
      <circle cx="100" cy="55" r="14" fill="rgba(255,255,255,0.1)" />
      <rect x="90" y="71" width="20" height="25" rx="6" fill="#1368CE" opacity="0.15" />

      {/* Lightbulb halo */}
      <circle cx="100" cy="35" r="10" fill="#FFA602" fillOpacity={0.1} stroke="#FFA602" strokeWidth="1" strokeOpacity={0.3}>
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <path d="M97 30 L100 24 L103 30" fill="#FFA602" opacity="0.2" />
      <rect x="97" y="36" width="6" height="3" rx="1" fill="#FFA602" opacity="0.15" />

      {/* Knowledge rays going outward */}
      <line x1="78" y1="55" x2="55" y2="50" stroke="#FFA602" strokeWidth="0.8" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="122" y1="55" x2="145" y2="50" stroke="#FFA602" strokeWidth="0.8" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </line>
      <line x1="80" y1="75" x2="55" y2="90" stroke="#FFA602" strokeWidth="0.8" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" begin="1s" />
      </line>
      <line x1="120" y1="75" x2="145" y2="90" stroke="#FFA602" strokeWidth="0.8" opacity="0.15" strokeLinecap="round">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" begin="1.5s" />
      </line>

      {/* Family members receiving knowledge */}
      <circle cx="45" cy="45" r="8" fill="rgba(255,255,255,0.07)" />
      <circle cx="155" cy="45" r="8" fill="rgba(255,255,255,0.07)" />
      <circle cx="45" cy="95" r="8" fill="rgba(255,255,255,0.07)" />
      <circle cx="155" cy="95" r="8" fill="rgba(255,255,255,0.07)" />

      {/* Good habits icons */}
      {/* Lock — don't share */}
      <rect x="30" y="115" width="12" height="10" rx="2" fill="none" stroke="#26890C" strokeWidth="0.8" opacity="0.3" />
      <path d="M33 115 V112 C33 110 39 110 39 112 V115" fill="none" stroke="#26890C" strokeWidth="0.8" opacity="0.3" />

      {/* Pause — verify */}
      <rect x="62" y="116" width="4" height="8" rx="1" fill="#FFA602" opacity="0.2" />
      <rect x="69" y="116" width="4" height="8" rx="1" fill="#FFA602" opacity="0.2" />

      {/* Checkmark — critical thinking */}
      <path d="M102 118 L106 122 L114 114" stroke="#1368CE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />

      {/* Eye — stay curious */}
      <ellipse cx="145" cy="120" rx="8" ry="5" fill="none" stroke="#FF3EA5" strokeWidth="0.8" opacity="0.3" />
      <circle cx="145" cy="120" r="2" fill="#FF3EA5" opacity="0.2" />

      {/* Bottom text */}
      <text x="100" y="145" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="system-ui">Model good habits</text>

      {/* Sparkle */}
      <path d="M170 20 L172 14 L174 20 L180 22 L174 24 L172 30 L170 24 L164 22 Z" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/** m4-quiz-check-4 — Family with quiz bubbles */
export function QuizCheck4Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Quiz board */}
      <rect x="40" y="15" width="120" height="90" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

      {/* Quiz rows */}
      <rect x="55" y="28" width="90" height="14" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <circle cx="62" cy="35" r="4" fill="#E21B3C" opacity="0.2" />
      <text x="62" y="38" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="system-ui" opacity="0.5">1</text>
      <rect x="72" y="32" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />

      <rect x="55" y="48" width="90" height="14" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <circle cx="62" cy="55" r="4" fill="#1368CE" opacity="0.2" />
      <text x="62" y="58" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="system-ui" opacity="0.5">2</text>
      <rect x="72" y="52" width="55" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />

      <rect x="55" y="68" width="90" height="14" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <circle cx="62" cy="75" r="4" fill="#FFA602" opacity="0.2" />
      <text x="62" y="78" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="system-ui" opacity="0.5">3</text>
      <rect x="72" y="72" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />

      {/* Family silhouettes below quiz */}
      <circle cx="70" cy="120" r="7" fill="rgba(255,255,255,0.06)" />
      <circle cx="100" cy="118" r="8" fill="rgba(255,255,255,0.06)" />
      <circle cx="130" cy="120" r="7" fill="rgba(255,255,255,0.06)" />

      {/* Star completion */}
      <path d="M100 135 L103 141 L110 142 L105 147 L106 154 L100 151 L94 154 L95 147 L90 142 L97 141 Z" fill="#FFA602" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Sparkle */}
      <circle cx="20" cy="55" r="2" fill="#26890C" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="50" r="1.5" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** m4-key-takeaway-4 — Open eyes/heart family with shield */
export function KeyTakeaway4Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Large open eye — "clear eyes" */}
      <ellipse cx="100" cy="55" rx="35" ry="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <circle cx="100" cy="55" r="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="100" cy="55" r="6" fill="rgba(255,255,255,0.15)" />
      <circle cx="102" cy="53" r="2" fill="rgba(255,255,255,0.4)" />

      {/* Eyelashes/rays — clear vision */}
      <line x1="100" y1="32" x2="100" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" />
      <line x1="85" y1="37" x2="80" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeLinecap="round" />
      <line x1="115" y1="37" x2="120" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeLinecap="round" />

      {/* Family chain below */}
      <circle cx="55" cy="100" r="8" fill="rgba(255,255,255,0.07)" />
      <circle cx="80" cy="95" r="9" fill="rgba(255,255,255,0.07)" />
      <circle cx="100" cy="93" r="10" fill="rgba(255,255,255,0.08)" />
      <circle cx="120" cy="95" r="9" fill="rgba(255,255,255,0.07)" />
      <circle cx="145" cy="100" r="8" fill="rgba(255,255,255,0.07)" />

      {/* Connection lines between family */}
      <line x1="63" y1="100" x2="72" y2="97" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <line x1="88" y1="96" x2="92" y2="94" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <line x1="109" y1="94" x2="112" y2="95" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <line x1="128" y1="97" x2="138" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* Shield over family */}
      <path d="M100 85 L120 90 L120 105 C120 112 111 118 100 121 C89 118 80 112 80 105 L80 90 Z" fill="none" stroke="#26890C" strokeWidth="1" opacity="0.2" strokeDasharray="3 2">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Bottom text */}
      <text x="100" y="138" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="system-ui">Help them use it with clear eyes</text>

      {/* Sparkles */}
      <path d="M25 45 L27 39 L29 45 L35 47 L29 49 L27 55 L25 49 L19 47 Z" fill="#FFD166" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <circle cx="175" cy="40" r="2" fill="#FF3EA5" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="120" r="1.5" fill="#00C9B7" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

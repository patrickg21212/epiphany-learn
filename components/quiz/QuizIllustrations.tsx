"use client";

/**
 * Animated SVG illustrations for Quiz states.
 * Each is a self-contained animated graphic — no external images needed.
 */

/* ================================================================
   INTRO — Animated game controller with floating shapes
   ================================================================ */
export function IntroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <defs>
        <radialGradient id="introGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1368CE" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1368CE" stopOpacity="0" />
        </radialGradient>
        <filter id="introShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>
      <circle cx="120" cy="100" r="90" fill="url(#introGlow)">
        <animate attributeName="r" values="85;95;85" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Floating triangle — red */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 5,-8; 0,0" dur="2.5s" repeatCount="indefinite" />
        <polygon points="45,40 55,22 65,40" fill="#E21B3C" opacity="0.85">
          <animateTransform attributeName="transform" type="rotate" values="0 55 31; 15 55 31; 0 55 31" dur="4s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Floating diamond — blue */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; -6,5; 0,0" dur="3s" repeatCount="indefinite" />
        <polygon points="185,55 195,45 205,55 195,65" fill="#1368CE" opacity="0.85">
          <animateTransform attributeName="transform" type="rotate" values="0 195 55; -20 195 55; 0 195 55" dur="3.5s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Floating circle — gold */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 4,6; 0,0" dur="2.8s" repeatCount="indefinite" />
        <circle cx="50" cy="150" r="10" fill="#FFA602" opacity="0.8">
          <animate attributeName="r" values="9;11;9" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Floating square — green */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; -5,-4; 0,0" dur="3.2s" repeatCount="indefinite" />
        <rect x="180" y="140" width="18" height="18" rx="3" fill="#26890C" opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" values="0 189 149; 25 189 149; 0 189 149" dur="4s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Game controller body */}
      <g filter="url(#introShadow)">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-4; 0,0" dur="2s" repeatCount="indefinite" />
        {/* Controller body */}
        <rect x="70" y="70" width="100" height="65" rx="20" fill="#2A2A2A" stroke="#3A3A3A" strokeWidth="2" />
        {/* Left grip */}
        <rect x="58" y="90" width="30" height="50" rx="14" fill="#222" stroke="#333" strokeWidth="1.5" />
        {/* Right grip */}
        <rect x="152" y="90" width="30" height="50" rx="14" fill="#222" stroke="#333" strokeWidth="1.5" />
        {/* D-pad */}
        <rect x="84" y="88" width="6" height="22" rx="2" fill="#444" />
        <rect x="78" y="94" width="18" height="6" rx="2" fill="#444" />
        {/* Buttons — ABXY colored */}
        <circle cx="155" cy="88" r="6" fill="#E21B3C">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="167" cy="98" r="6" fill="#1368CE">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="143" cy="98" r="6" fill="#FFA602">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="155" cy="108" r="6" fill="#26890C">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.7s" repeatCount="indefinite" />
        </circle>
        {/* Center light */}
        <circle cx="120" cy="95" r="4" fill="#1368CE">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;5;3" dur="1.2s" repeatCount="indefinite" />
        </circle>
        {/* Glow ring around center */}
        <circle cx="120" cy="95" r="8" fill="none" stroke="#1368CE" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="6;12;6" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Sparkle stars */}
      <g>
        <path d="M38 80 L40 74 L42 80 L48 82 L42 84 L40 90 L38 84 L32 82Z" fill="#FFD166" opacity="0.7">
          <animate attributeName="opacity" values="0;0.9;0" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="scale" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" additive="sum" />
        </path>
      </g>
      <g>
        <path d="M195 25 L197 19 L199 25 L205 27 L199 29 L197 35 L195 29 L189 27Z" fill="#00C9B7" opacity="0.6">
          <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </path>
      </g>
      <g>
        <path d="M165 165 L166.5 160 L168 165 L173 166.5 L168 168 L166.5 173 L165 168 L160 166.5Z" fill="#FF3EA5" opacity="0.6">
          <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" repeatCount="indefinite" begin="1s" />
        </path>
      </g>
    </svg>
  );
}

/* ================================================================
   CORRECT — Animated checkmark with rays and sparkles
   ================================================================ */
export function CorrectIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="correctGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#26890C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#26890C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow pulse */}
      <circle cx="100" cy="100" r="80" fill="url(#correctGlow)">
        <animate attributeName="r" values="70;90;70" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Radiating rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={angle}
          x1="100" y1="100"
          x2={100 + Math.cos((angle * Math.PI) / 180) * 85}
          y2={100 + Math.sin((angle * Math.PI) / 180) * 85}
          stroke="#4CD929" strokeWidth="2" strokeLinecap="round" opacity="0.3"
        >
          <animate attributeName="opacity" values="0;0.5;0" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
          <animate attributeName="strokeWidth" values="1;3;1" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
        </line>
      ))}

      {/* Outer ring */}
      <circle cx="100" cy="100" r="55" fill="none" stroke="#26890C" strokeWidth="3" opacity="0.4">
        <animate attributeName="r" values="50;60;50" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Main circle */}
      <circle cx="100" cy="100" r="42" fill="#26890C">
        <animate attributeName="r" values="40;44;40" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="42" fill="none" stroke="#4CD929" strokeWidth="2" opacity="0.5" />

      {/* Checkmark */}
      <path
        d="M78 100 L93 115 L122 82"
        stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"
      >
        <animate attributeName="stroke-dasharray" values="0 100;70 100" dur="0.6s" fill="freeze" />
      </path>

      {/* Sparkle stars around */}
      {[
        { x: 40, y: 35, size: 8, delay: 0 },
        { x: 160, y: 40, size: 6, delay: 0.3 },
        { x: 155, y: 155, size: 7, delay: 0.6 },
        { x: 35, y: 150, size: 5, delay: 0.9 },
        { x: 100, y: 20, size: 6, delay: 0.4 },
      ].map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.size / 2} fill="#FFD166">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin={`${s.delay}s`} />
          <animate attributeName="r" values={`${s.size / 3};${s.size / 1.5};${s.size / 3}`} dur="1.2s" repeatCount="indefinite" begin={`${s.delay}s`} />
        </circle>
      ))}
    </svg>
  );
}

/* ================================================================
   WRONG — Animated X with shake feel and thinking elements
   ================================================================ */
export function WrongIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wrongGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E21B3C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E21B3C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx="100" cy="100" r="75" fill="url(#wrongGlow)">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Main circle */}
      <circle cx="100" cy="100" r="42" fill="#E21B3C" opacity="0.9">
        <animateTransform attributeName="transform" type="translate" values="0,0; -3,0; 3,0; -2,0; 2,0; 0,0" dur="0.5s" repeatCount="1" />
      </circle>
      <circle cx="100" cy="100" r="42" fill="none" stroke="#FF4D6A" strokeWidth="2" opacity="0.4" />

      {/* X mark */}
      <g>
        <line x1="82" y1="82" x2="118" y2="118" stroke="#fff" strokeWidth="7" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 60;55 60" dur="0.4s" fill="freeze" />
        </line>
        <line x1="118" y1="82" x2="82" y2="118" stroke="#fff" strokeWidth="7" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 60;55 60" dur="0.4s" fill="freeze" begin="0.15s" />
        </line>
      </g>

      {/* Thinking bubbles */}
      <circle cx="155" cy="50" r="5" fill="#FFA602" opacity="0.6">
        <animate attributeName="opacity" values="0;0.7;0" dur="2s" repeatCount="indefinite" />
        <animate attributeName="cy" values="52;46;52" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="38" r="8" fill="#FFA602" opacity="0.5">
        <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
        <animate attributeName="cy" values="40;34;40" dur="2s" repeatCount="indefinite" begin="0.3s" />
      </circle>
      <circle cx="175" cy="24" r="11" fill="#FFA602" opacity="0.4">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" begin="0.6s" />
      </circle>

      {/* Light bulb hint */}
      <g opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="2s" repeatCount="indefinite" />
        <ellipse cx="45" cy="50" rx="12" ry="14" fill="#FFD166" opacity="0.8" />
        <rect x="41" y="62" width="8" height="4" rx="1" fill="#FFD166" opacity="0.6" />
        <rect x="42" y="67" width="6" height="3" rx="1" fill="#FFD166" opacity="0.4" />
        {/* Filament */}
        <path d="M43 52 Q45 46 47 52" stroke="#FFA602" strokeWidth="1.5" fill="none" />
        {/* Rays */}
        <line x1="45" y1="30" x2="45" y2="34" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
        </line>
        <line x1="30" y1="45" x2="33" y2="47" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="57" y1="38" x2="60" y2="36" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </g>
    </svg>
  );
}

/* ================================================================
   TIMEOUT — Animated hourglass / clock
   ================================================================ */
export function TimeoutIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="timeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFA602" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFA602" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="75" fill="url(#timeGlow)" />

      {/* Clock face */}
      <circle cx="100" cy="100" r="50" fill="#1A1A1A" stroke="#FFA602" strokeWidth="3">
        <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="45" fill="none" stroke="#333" strokeWidth="1" />

      {/* Hour markers */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line
          key={angle}
          x1={100 + Math.cos(((angle - 90) * Math.PI) / 180) * 38}
          y1={100 + Math.sin(((angle - 90) * Math.PI) / 180) * 38}
          x2={100 + Math.cos(((angle - 90) * Math.PI) / 180) * 42}
          y2={100 + Math.sin(((angle - 90) * Math.PI) / 180) * 42}
          stroke="#666" strokeWidth={angle % 90 === 0 ? "2.5" : "1.5"} strokeLinecap="round"
        />
      ))}

      {/* Minute hand — spinning fast */}
      <line x1="100" y1="100" x2="100" y2="65" stroke="#FFA602" strokeWidth="3" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="2s" repeatCount="indefinite" />
      </line>

      {/* Hour hand */}
      <line x1="100" y1="100" x2="100" y2="75" stroke="#fff" strokeWidth="3.5" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="12s" repeatCount="indefinite" />
      </line>

      {/* Center dot */}
      <circle cx="100" cy="100" r="4" fill="#FFA602" />
      <circle cx="100" cy="100" r="6" fill="none" stroke="#FFA602" strokeWidth="1" opacity="0.4">
        <animate attributeName="r" values="5;9;5" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Alarm lines */}
      <line x1="62" y1="55" x2="55" y2="48" stroke="#E21B3C" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
        <animate attributeName="opacity" values="0;0.9;0" dur="0.6s" repeatCount="indefinite" />
      </line>
      <line x1="138" y1="55" x2="145" y2="48" stroke="#E21B3C" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
        <animate attributeName="opacity" values="0;0.9;0" dur="0.6s" repeatCount="indefinite" begin="0.3s" />
      </line>

      {/* "Time's up" text area glow */}
      <rect x="65" y="155" width="70" height="24" rx="12" fill="#FFA602" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="1.5s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

/* ================================================================
   TROPHY — Animated results trophy with confetti
   ================================================================ */
export function TrophyIllustration({ className = "", tier = "gold" }: { className?: string; tier?: "gold" | "silver" | "bronze" | "try" }) {
  const colors = {
    gold: { main: "#FFA602", light: "#FFD166", dark: "#D98B00", glow: "rgba(255,166,2,0.3)" },
    silver: { main: "#94A3B8", light: "#CBD5E1", dark: "#64748B", glow: "rgba(148,163,184,0.3)" },
    bronze: { main: "#D97706", light: "#FBBF24", dark: "#92400E", glow: "rgba(217,119,6,0.3)" },
    try: { main: "#1368CE", light: "#4DA3FF", dark: "#0D4F9E", glow: "rgba(19,104,206,0.3)" },
  }[tier];

  return (
    <svg viewBox="0 0 240 220" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`trophyGlow-${tier}`} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor={colors.main} stopOpacity="0.35" />
          <stop offset="100%" stopColor={colors.main} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`trophyGrad-${tier}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.light} />
          <stop offset="50%" stopColor={colors.main} />
          <stop offset="100%" stopColor={colors.dark} />
        </linearGradient>
        <filter id={`trophyShadow-${tier}`}>
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="120" cy="95" r="85" fill={`url(#trophyGlow-${tier})`}>
        <animate attributeName="r" values="80;92;80" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Confetti particles */}
      {tier === "gold" && [
        { x: 35, y: 30, color: "#E21B3C", delay: 0 },
        { x: 200, y: 40, color: "#1368CE", delay: 0.4 },
        { x: 50, y: 160, color: "#FFA602", delay: 0.8 },
        { x: 190, y: 150, color: "#26890C", delay: 0.2 },
        { x: 70, y: 25, color: "#FF3EA5", delay: 0.6 },
        { x: 170, y: 20, color: "#00C9B7", delay: 1.0 },
      ].map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="6" height="6" rx="1" fill={c.color} opacity="0.7">
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" begin={`${c.delay}s`} />
          <animateTransform attributeName="transform" type="rotate" values={`0 ${c.x + 3} ${c.y + 3}; 180 ${c.x + 3} ${c.y + 3}; 360 ${c.x + 3} ${c.y + 3}`} dur="2s" repeatCount="indefinite" begin={`${c.delay}s`} />
          <animate attributeName="y" values={`${c.y};${c.y + 20};${c.y}`} dur="2s" repeatCount="indefinite" begin={`${c.delay}s`} />
        </rect>
      ))}

      {/* Trophy */}
      <g filter={`url(#trophyShadow-${tier})`}>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="2s" repeatCount="indefinite" />

        {/* Cup body */}
        <path d="M85 55 L85 105 Q85 130 120 135 Q155 130 155 105 L155 55Z" fill={`url(#trophyGrad-${tier})`} />
        {/* Cup rim */}
        <rect x="80" y="50" width="80" height="10" rx="5" fill={colors.light} />
        {/* Shine */}
        <path d="M95 60 L95 100 Q95 115 105 120" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.3" />

        {/* Left handle */}
        <path d="M85 65 Q55 65 55 85 Q55 105 80 105" stroke={colors.main} strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* Right handle */}
        <path d="M155 65 Q185 65 185 85 Q185 105 160 105" stroke={colors.main} strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Stem */}
        <rect x="113" y="135" width="14" height="22" rx="3" fill={colors.dark} />
        {/* Base */}
        <rect x="95" y="155" width="50" height="10" rx="5" fill={colors.main} />
        <rect x="90" y="162" width="60" height="8" rx="4" fill={colors.dark} />

        {/* Star on cup */}
        <path d="M120 75 L124 87 L137 87 L127 95 L130 107 L120 99 L110 107 L113 95 L103 87 L116 87Z" fill="#fff" opacity="0.35">
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Sparkle stars */}
      <path d="M40 70 L42 64 L44 70 L50 72 L44 74 L42 80 L40 74 L34 72Z" fill={colors.light} opacity="0.6">
        <animate attributeName="opacity" values="0;0.8;0" dur="1.8s" repeatCount="indefinite" />
      </path>
      <path d="M195 85 L196.5 80 L198 85 L203 86.5 L198 88 L196.5 93 L195 88 L190 86.5Z" fill={colors.light} opacity="0.5">
        <animate attributeName="opacity" values="0;0.7;0" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
      </path>
      <path d="M65 180 L66.5 175 L68 180 L73 181.5 L68 183 L66.5 188 L65 183 L60 181.5Z" fill="#FFD166" opacity="0.4">
        <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin="1s" />
      </path>
    </svg>
  );
}

/* ================================================================
   STREAK FIRE — Animated fire for streak display
   ================================================================ */
export function StreakFireIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fireGlow" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#EB670F" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#EB670F" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="30" cy="50" r="30" fill="url(#fireGlow)">
        <animate attributeName="r" values="28;35;28" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* Outer flame */}
      <path d="M30 10 Q40 25 38 40 Q42 30 45 35 Q50 50 42 62 Q38 70 30 72 Q22 70 18 62 Q10 50 15 35 Q18 30 22 40 Q20 25 30 10Z" fill="#EB670F" opacity="0.8">
        <animateTransform attributeName="transform" type="scale" values="1 1; 1.05 0.97; 0.97 1.03; 1 1" dur="0.8s" repeatCount="indefinite" />
      </path>

      {/* Inner flame */}
      <path d="M30 25 Q36 35 34 45 Q37 38 39 42 Q42 52 36 60 Q33 64 30 65 Q27 64 24 60 Q18 52 21 42 Q23 38 26 45 Q24 35 30 25Z" fill="#FFA602" opacity="0.9">
        <animateTransform attributeName="transform" type="scale" values="1 1; 0.96 1.04; 1.04 0.97; 1 1" dur="0.6s" repeatCount="indefinite" />
      </path>

      {/* Core flame */}
      <path d="M30 40 Q33 46 32 52 Q34 48 35 50 Q36 56 32 60 Q31 62 30 62 Q29 62 28 60 Q24 56 25 50 Q26 48 28 52 Q27 46 30 40Z" fill="#FFD166">
        <animateTransform attributeName="transform" type="scale" values="1 1; 1.06 0.95; 0.95 1.05; 1 1" dur="0.5s" repeatCount="indefinite" />
      </path>

      {/* Sparks */}
      <circle cx="22" cy="20" r="2" fill="#FFD166" opacity="0.6">
        <animate attributeName="cy" values="22;15;22" dur="1.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.8;0" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="38" cy="18" r="1.5" fill="#FFA602" opacity="0.5">
        <animate attributeName="cy" values="20;12;20" dur="1s" repeatCount="indefinite" begin="0.3s" />
        <animate attributeName="opacity" values="0;0.7;0" dur="1s" repeatCount="indefinite" begin="0.3s" />
      </circle>
    </svg>
  );
}

/**
 * Fun, colorful SVG illustrations for each module.
 * Inspired by Kahoot's playful, illustrated card style.
 */

export function BrainIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Brain body */}
      <ellipse cx="55" cy="58" rx="32" ry="34" fill="rgba(255,255,255,0.25)" />
      <ellipse cx="55" cy="58" rx="32" ry="34" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      {/* Brain folds */}
      <path d="M40 42 C48 38, 58 40, 55 50" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M42 58 C50 54, 62 56, 58 65" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M55 42 C62 45, 68 52, 65 60" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Lightning bolt */}
      <path d="M72 20 L65 40 L75 38 L66 58" stroke="#FFD166" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Sparkles */}
      <circle cx="85" cy="30" r="3" fill="#FFD166" opacity="0.9" />
      <circle cx="30" cy="35" r="2.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="80" cy="65" r="2" fill="rgba(255,255,255,0.5)" />
      {/* Gear */}
      <circle cx="88" cy="52" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <circle cx="88" cy="52" r="3" fill="rgba(255,255,255,0.3)" />
      {/* Floating dots */}
      <circle cx="25" cy="70" r="4" fill="rgba(255,255,255,0.2)" />
      <circle cx="92" cy="80" r="3" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function ChatBotIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubble body */}
      <rect x="20" y="25" width="70" height="50" rx="16" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      {/* Tail */}
      <path d="M35 75 L28 90 L48 75" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinejoin="round" />
      {/* Robot face - eyes */}
      <circle cx="42" cy="48" r="6" fill="rgba(255,255,255,0.9)" />
      <circle cx="68" cy="48" r="6" fill="rgba(255,255,255,0.9)" />
      <circle cx="43" cy="47" r="3" fill="#1A1A1A" />
      <circle cx="69" cy="47" r="3" fill="#1A1A1A" />
      {/* Sparkle eyes */}
      <circle cx="44.5" cy="45.5" r="1" fill="white" />
      <circle cx="70.5" cy="45.5" r="1" fill="white" />
      {/* Smile */}
      <path d="M46 58 C50 64, 60 64, 64 58" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Antenna */}
      <line x1="55" y1="25" x2="55" y2="15" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      <circle cx="55" cy="12" r="4" fill="#FFD166" opacity="0.9" />
      {/* Floating typing dots - secondary bubble */}
      <rect x="72" y="8" width="35" height="20" rx="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <circle cx="82" cy="18" r="2.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="90" cy="18" r="2.5" fill="rgba(255,255,255,0.4)" />
      <circle cx="98" cy="18" r="2.5" fill="rgba(255,255,255,0.25)" />
      {/* Stars */}
      <circle cx="15" cy="40" r="2" fill="rgba(255,255,255,0.4)" />
      <circle cx="100" cy="70" r="3" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

export function ToolsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wrench */}
      <path d="M30 85 L55 60" stroke="rgba(255,255,255,0.8)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="60" cy="55" r="12" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
      <path d="M57 43 C52 38, 52 30, 60 25 C55 32, 58 38, 64 40" fill="rgba(255,255,255,0.3)" />
      {/* Magic wand */}
      <line x1="70" y1="80" x2="95" y2="30" stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" />
      <rect x="88" y="22" width="14" height="14" rx="2" fill="#FFD166" opacity="0.8" transform="rotate(25 95 30)" />
      {/* Sparkles around wand */}
      <path d="M78 25 L80 20 L82 25 L87 27 L82 29 L80 34 L78 29 L73 27 Z" fill="rgba(255,255,255,0.7)" />
      <path d="M100 50 L101 47 L102 50 L105 51 L102 52 L101 55 L100 52 L97 51 Z" fill="rgba(255,255,255,0.5)" />
      {/* App windows */}
      <rect x="15" y="20" width="28" height="22" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <rect x="17" y="22" width="24" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="17" y="28" width="12" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="17" y="33" width="18" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
      {/* Floating elements */}
      <circle cx="50" cy="95" r="4" fill="rgba(255,255,255,0.2)" />
      <circle cx="10" cy="65" r="3" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function ShieldIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield body */}
      <path d="M60 15 L95 30 L95 60 C95 80 78 98 60 105 C42 98 25 80 25 60 L25 30 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
      {/* Inner shield */}
      <path d="M60 25 L85 37 L85 58 C85 74 72 88 60 93 C48 88 35 74 35 58 L35 37 Z" fill="rgba(255,255,255,0.1)" />
      {/* Checkmark */}
      <path d="M45 58 L55 68 L76 47" stroke="#4CD929" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lock */}
      <rect x="78" y="72" width="18" height="14" rx="3" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <path d="M82 72 L82 66 C82 62 86 59 90 62 L90 72" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <circle cx="87" cy="79" r="2" fill="rgba(255,255,255,0.7)" />
      {/* Eye / watching */}
      <ellipse cx="22" cy="50" rx="10" ry="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <circle cx="22" cy="50" r="3" fill="rgba(255,255,255,0.4)" />
      {/* Sparkles */}
      <circle cx="100" cy="22" r="3" fill="#FFD166" opacity="0.7" />
      <circle cx="15" cy="85" r="2.5" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

export function ShoppingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shopping bag */}
      <path d="M30 45 L25 100 L95 100 L90 45 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      {/* Bag handles */}
      <path d="M42 45 C42 28 58 20 68 28 C74 33 78 40 78 45" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Star/deal badge */}
      <circle cx="85" cy="35" r="15" fill="#FFD166" opacity="0.85" />
      <text x="85" y="40" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontWeight="bold">AI</text>
      {/* Sparkle on bag */}
      <path d="M55 65 L57 58 L59 65 L66 67 L59 69 L57 76 L55 69 L48 67 Z" fill="rgba(255,255,255,0.6)" />
      {/* Price tags */}
      <rect x="10" y="55" width="16" height="10" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="14" cy="60" r="1.5" fill="rgba(255,255,255,0.4)" />
      {/* Comparison arrows */}
      <path d="M35 85 L45 80 M35 85 L45 90" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M85 85 L75 80 M85 85 L75 90" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Floating dots */}
      <circle cx="105" cy="60" r="3" fill="rgba(255,255,255,0.2)" />
      <circle cx="15" cy="35" r="2" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function RocketIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rocket body */}
      <path d="M60 10 C60 10 75 30 75 60 L75 80 L45 80 L45 60 C45 30 60 10 60 10 Z" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      {/* Nose cone */}
      <path d="M60 10 C55 20 52 30 50 40 L70 40 C68 30 65 20 60 10 Z" fill="rgba(255,255,255,0.15)" />
      {/* Window */}
      <circle cx="60" cy="50" r="8" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      <circle cx="60" cy="50" r="4" fill="rgba(255,255,255,0.3)" />
      {/* Fins */}
      <path d="M45 65 L30 85 L45 80 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <path d="M75 65 L90 85 L75 80 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      {/* Flames */}
      <path d="M50 80 C50 80 55 100 52 105 C55 98 60 110 60 110 C60 110 65 98 68 105 C65 100 70 80 70 80" fill="#FFD166" opacity="0.7" />
      <path d="M54 80 C54 80 57 95 56 98 C58 92 60 100 60 100 C60 100 62 92 64 98 C63 95 66 80 66 80" fill="#FF6B35" opacity="0.6" />
      {/* Stars */}
      <circle cx="20" cy="30" r="2" fill="rgba(255,255,255,0.5)" />
      <circle cx="95" cy="25" r="2.5" fill="rgba(255,255,255,0.4)" />
      <circle cx="100" cy="55" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="25" cy="60" r="2" fill="rgba(255,255,255,0.3)" />
      <circle cx="15" cy="45" r="1.5" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

// Hero illustration - big fun AI character
export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floating books */}
      <rect x="30" y="60" width="40" height="30" rx="3" fill="#E21B3C" opacity="0.8" transform="rotate(-12 50 75)" />
      <rect x="33" y="63" width="34" height="2" rx="1" fill="rgba(255,255,255,0.4)" transform="rotate(-12 50 75)" />
      <rect x="33" y="68" width="25" height="2" rx="1" fill="rgba(255,255,255,0.3)" transform="rotate(-12 50 75)" />

      <rect x="230" y="80" width="40" height="30" rx="3" fill="#1368CE" opacity="0.8" transform="rotate(8 250 95)" />
      <rect x="233" y="83" width="34" height="2" rx="1" fill="rgba(255,255,255,0.4)" transform="rotate(8 250 95)" />

      {/* Main robot character */}
      {/* Body */}
      <rect x="115" y="120" width="70" height="80" rx="20" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" />
      {/* Head */}
      <rect x="105" y="50" width="90" height="75" rx="25" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="133" cy="85" r="12" fill="rgba(255,255,255,0.9)" />
      <circle cx="167" cy="85" r="12" fill="rgba(255,255,255,0.9)" />
      <circle cx="135" cy="83" r="6" fill="#1A1A1A" />
      <circle cx="169" cy="83" r="6" fill="#1A1A1A" />
      <circle cx="137" cy="80" r="2.5" fill="white" />
      <circle cx="171" cy="80" r="2.5" fill="white" />
      {/* Happy mouth */}
      <path d="M135 102 C140 112 160 112 165 102" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Antenna */}
      <line x1="150" y1="50" x2="150" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
      <circle cx="150" cy="25" r="8" fill="#FFA602" opacity="0.9" />
      <circle cx="150" cy="25" r="4" fill="#FFD166" />
      {/* Arms waving */}
      <path d="M115 145 L80 120 L70 105" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="68" cy="102" r="8" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      <path d="M185 145 L220 120 L230 105" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="232" cy="102" r="8" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      {/* Legs */}
      <line x1="135" y1="200" x2="130" y2="230" stroke="rgba(255,255,255,0.3)" strokeWidth="4" strokeLinecap="round" />
      <line x1="165" y1="200" x2="170" y2="230" stroke="rgba(255,255,255,0.3)" strokeWidth="4" strokeLinecap="round" />

      {/* Floating elements around robot */}
      {/* Lightbulb */}
      <circle cx="60" cy="160" r="14" fill="#FFA602" opacity="0.3" stroke="#FFA602" strokeWidth="1.5" strokeOpacity="0.6" />
      <path d="M56 155 L60 148 L64 155" stroke="#FFA602" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
      <line x1="60" y1="165" x2="60" y2="170" stroke="#FFA602" strokeWidth="1.5" strokeOpacity="0.5" />

      {/* Magnifying glass */}
      <circle cx="245" cy="170" r="12" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      <line x1="253" y1="178" x2="262" y2="190" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />

      {/* Floating Kahoot shapes */}
      <text x="20" y="130" fontSize="28" fill="#E21B3C" opacity="0.5">▲</text>
      <text x="270" y="50" fontSize="24" fill="#1368CE" opacity="0.5">◆</text>
      <text x="40" y="230" fontSize="22" fill="#26890C" opacity="0.4">●</text>
      <text x="250" y="230" fontSize="26" fill="#FFA602" opacity="0.4">■</text>

      {/* Sparkle stars */}
      <path d="M90 40 L92 34 L94 40 L100 42 L94 44 L92 50 L90 44 L84 42 Z" fill="rgba(255,255,255,0.6)" />
      <path d="M210 40 L211 36 L212 40 L216 41 L212 42 L211 46 L210 42 L206 41 Z" fill="#00C9B7" opacity="0.6" />
      <path d="M270 140 L271 137 L272 140 L275 141 L272 142 L271 145 L270 142 L267 141 Z" fill="#FF3EA5" opacity="0.5" />

      {/* Small floating circles */}
      <circle cx="15" cy="180" r="4" fill="rgba(255,255,255,0.1)" />
      <circle cx="285" cy="200" r="5" fill="rgba(255,255,255,0.1)" />
      <circle cx="80" cy="250" r="3" fill="rgba(255,255,255,0.15)" />
      <circle cx="220" cy="260" r="4" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

export const MODULE_ILLUSTRATIONS = [
  BrainIllustration,      // Module 1: AI Fundamentals
  ChatBotIllustration,    // Module 2: Your First AI Chat
  ToolsIllustration,      // Module 3: AI in Your Day
  ShieldIllustration,     // Module 4: Safety & Trust
  ShoppingIllustration,   // Module 5: Buying Smart
  RocketIllustration,     // Module 6: Your First Project
] as const;

"use client";

/**
 * Animated SVG illustrations for interactive lesson components.
 * Small header graphics to make DragDrop, MatchTerms, FillBlank, RevealCard feel alive.
 */

/* ================================================================
   SORT / DRAG-DROP — Animated sorting boxes
   ================================================================ */
export function SortIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Box 1 — moving right */}
      <rect x="4" y="8" width="14" height="12" rx="3" fill="#1368CE" opacity="0.9">
        <animateTransform attributeName="transform" type="translate" values="0,0; 14,0; 14,0; 0,0" dur="2.5s" repeatCount="indefinite" />
      </rect>
      {/* Box 2 — moving left */}
      <rect x="30" y="8" width="14" height="12" rx="3" fill="#FFA602" opacity="0.9">
        <animateTransform attributeName="transform" type="translate" values="0,0; -14,0; -14,0; 0,0" dur="2.5s" repeatCount="indefinite" />
      </rect>
      {/* Arrow swap */}
      <path d="M20 12 L28 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M25 9 L28 12 L25 15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
      </path>
      {/* Category bins */}
      <rect x="4" y="28" width="18" height="14" rx="3" fill="none" stroke="#1368CE" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      <rect x="26" y="28" width="18" height="14" rx="3" fill="none" stroke="#FFA602" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      {/* Checkmarks appearing */}
      <path d="M10 33 L13 36 L18 31" stroke="#4CD929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0">
        <animate attributeName="opacity" values="0;0;0.8;0.8;0" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M32 33 L35 36 L40 31" stroke="#4CD929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0">
        <animate attributeName="opacity" values="0;0;0;0.8;0" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/* ================================================================
   MATCH — Animated connecting lines
   ================================================================ */
export function MatchIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Left dots */}
      <circle cx="10" cy="12" r="5" fill="#FF3EA5" opacity="0.9" />
      <circle cx="10" cy="28" r="5" fill="#1368CE" opacity="0.9" />
      <circle cx="10" cy="42" r="5" fill="#FFA602" opacity="0.9" />
      {/* Right dots */}
      <circle cx="38" cy="12" r="5" fill="#1368CE" opacity="0.9" />
      <circle cx="38" cy="28" r="5" fill="#FFA602" opacity="0.9" />
      <circle cx="38" cy="42" r="5" fill="#FF3EA5" opacity="0.9" />
      {/* Connecting lines — animate drawing */}
      <line x1="15" y1="12" x2="33" y2="42" stroke="#FF3EA5" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <animate attributeName="stroke-dasharray" values="0 50;45 50" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="15" y1="28" x2="33" y2="12" stroke="#1368CE" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <animate attributeName="stroke-dasharray" values="0 50;45 50" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
      </line>
      <line x1="15" y1="42" x2="33" y2="28" stroke="#FFA602" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <animate attributeName="stroke-dasharray" values="0 50;45 50" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
      </line>
    </svg>
  );
}

/* ================================================================
   FILL BLANK — Animated pencil writing
   ================================================================ */
export function FillBlankIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Text line with blank */}
      <rect x="4" y="22" width="12" height="3" rx="1.5" fill="#fff" opacity="0.3" />
      <rect x="20" y="22" width="16" height="3" rx="1.5" fill="none" stroke="#00C9B7" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6">
        <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
      </rect>
      {/* Pencil */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 12,0; 0,0" dur="2s" repeatCount="indefinite" />
        {/* Pencil body */}
        <rect x="20" y="8" width="4" height="18" rx="1" fill="#FFA602" transform="rotate(-15 22 17)" />
        <polygon points="20,25 22,30 24,25" fill="#FFD166" transform="rotate(-15 22 17)" />
        <rect x="20" y="8" width="4" height="4" rx="1" fill="#E21B3C" transform="rotate(-15 22 17)" />
        {/* Writing sparkle */}
        <circle cx="22" cy="28" r="2" fill="#00C9B7" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="r" values="1;3;1" dur="0.6s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* Filled text appearing */}
      <rect x="20" y="22" width="0" height="3" rx="1.5" fill="#00C9B7" opacity="0.7">
        <animate attributeName="width" values="0;14;14;0" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

/* ================================================================
   REVEAL — Animated flip card / mystery
   ================================================================ */
export function RevealIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Card face 1 (question side) */}
      <rect x="8" y="6" width="32" height="36" rx="4" fill="#1A1A1A" stroke="#333" strokeWidth="1.5">
        <animate attributeName="width" values="32;2;32" dur="3s" repeatCount="indefinite" />
        <animate attributeName="x" values="8;23;8" dur="3s" repeatCount="indefinite" />
      </rect>
      {/* Question mark */}
      <text x="24" y="30" textAnchor="middle" fill="#1368CE" fontSize="18" fontWeight="bold" fontFamily="system-ui" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0;0;0.8" dur="3s" repeatCount="indefinite" />
        ?
      </text>
      {/* Reveal content (lightbulb) */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;0.8;0" dur="3s" repeatCount="indefinite" />
        <circle cx="24" cy="22" r="8" fill="#FFA602" opacity="0.3" />
        <ellipse cx="24" cy="20" rx="5" ry="6" fill="#FFD166" />
        <rect x="22" y="26" width="4" height="3" rx="1" fill="#FFA602" />
        {/* Rays */}
        <line x1="24" y1="8" x2="24" y2="11" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="15" x2="16" y2="17" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="34" y1="15" x2="32" y2="17" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Sparkles */}
      <circle cx="38" cy="10" r="2" fill="#FFD166" opacity="0">
        <animate attributeName="opacity" values="0;0;0.7;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="38" r="1.5" fill="#00C9B7" opacity="0">
        <animate attributeName="opacity" values="0;0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.2s" />
      </circle>
    </svg>
  );
}

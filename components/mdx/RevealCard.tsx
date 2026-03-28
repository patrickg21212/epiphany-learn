"use client";

import { useState, useRef } from "react";

interface Props {
  id?: string;
  label: string;
  reveal: string;
}

const SPARKLE_POSITIONS = [
  { top: "10%", left: "15%", delay: 0, size: 5 },
  { top: "20%", right: "12%", delay: 0.4, size: 4 },
  { top: "50%", left: "8%", delay: 0.8, size: 6 },
  { top: "70%", right: "20%", delay: 1.2, size: 3 },
  { top: "85%", left: "25%", delay: 0.6, size: 5 },
  { top: "30%", right: "5%", delay: 1.0, size: 4 },
];

export default function RevealCard({ label, reveal }: Props) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasBeenRevealed, setHasBeenRevealed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    setIsRevealed(!isRevealed);
    if (!hasBeenRevealed) setHasBeenRevealed(true);
  }

  return (
    <div
      ref={cardRef}
      className="my-5 select-none cursor-pointer group"
      style={{ perspective: "1200px" }}
      onClick={handleClick}
      role="button"
      aria-expanded={isRevealed}
    >
      <div
        className="grid relative"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isRevealed ? "rotateY(180deg)" : "rotateY(0deg)",
          gridTemplate: "1fr / 1fr",
        }}
      >
        {/* ════ FRONT FACE ════ */}
        <div
          className="rounded-2xl p-5 flex items-center justify-between gap-4 relative overflow-hidden"
          style={{
            gridArea: "1 / 1",
            background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Animated shimmer */}
          <div className="reveal-card-shimmer absolute inset-0 pointer-events-none" />

          {/* Sparkle dots */}
          {SPARKLE_POSITIONS.map((pos, i) => (
            <div
              key={i}
              className="reveal-card-sparkle"
              style={{
                top: pos.top,
                left: pos.left,
                right: pos.right,
                width: pos.size,
                height: pos.size,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${2 + pos.delay}s`,
              } as React.CSSProperties}
            />
          ))}

          {/* Content */}
          <div className="flex items-center gap-3 relative z-10">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{
                background: "linear-gradient(135deg, var(--module-color, #1368CE), var(--module-color, #1368CE)90)",
                color: "#fff",
                boxShadow: "0 4px 12px var(--module-glow, rgba(19,104,206,0.3))",
                animation: "questionPulse 2.5s ease-in-out infinite",
              }}
            >
              ?
            </span>
            <span className="font-display font-medium text-[#F0EFEB]/80 group-hover:text-[#F0EFEB] transition-colors">
              {label}
            </span>
          </div>

          {/* Tap indicator */}
          <div className="flex items-center gap-2 relative z-10">
            <span
              className="text-xs text-white/25 flex-shrink-0 tracking-wider uppercase font-bold group-hover:text-white/40 transition-colors"
              style={{ animation: "tapPulse 2s ease-in-out infinite" }}
            >
              Tap to reveal
            </span>
            <span className="text-white/20 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all text-lg">
              →
            </span>
          </div>

          {/* Glow border on hover */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: "inset 0 0 20px var(--module-glow, rgba(19,104,206,0.15)), 0 0 30px var(--module-glow, rgba(19,104,206,0.1))",
            }}
          />
        </div>

        {/* ════ BACK FACE ════ */}
        <div
          className="rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
          style={{
            gridArea: "1 / 1",
            background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "2px solid var(--module-color, rgba(0,201,183,0.5))",
            boxShadow: "0 0 30px var(--module-glow, rgba(0,201,183,0.25)), inset 0 1px 0 rgba(255,255,255,0.08)",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, var(--module-bg-light, rgba(0,201,183,0.08)), transparent)" }}
          />

          {/* Sparkle burst on first reveal */}
          {hasBeenRevealed && isRevealed && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 3,
                    height: 3,
                    background: "var(--module-color, #00C9B7)",
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animation: `revealSparkle ${1.5 + Math.random()}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 1.5}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Header */}
          <div className="flex items-center gap-3 relative">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
              style={{
                background: "var(--module-color, #00C9B7)",
                boxShadow: "0 4px 12px var(--module-glow, rgba(0,201,183,0.3))",
              }}
            >
              ✓
            </span>
            <span className="font-display font-medium text-[#F0EFEB]">
              {label}
            </span>
          </div>

          {/* Revealed content */}
          <p className="text-[#F0EFEB]/75 text-sm leading-relaxed relative">
            {reveal}
          </p>

          {/* Tap to flip back hint */}
          <div className="text-xs text-white/20 text-right mt-1">
            ← Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}

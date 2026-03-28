"use client";

/**
 * <Visual> — FULL-WIDTH animated SVG illustration for slide-based lessons.
 *
 * KAHOOT REFERENCE: Images are full-width screenshots on device mockups,
 * taking up 50%+ of each section's visual space. Images shown at 1024x576
 * scale. Our illustrations must be equally dominant — not thumbnails.
 *
 * Default size is now "hero" — fills the available width.
 */

import { ILLUSTRATIONS, type IllustrationName } from "@/lib/illustrations-registry";

interface Props {
  name: string;
  size?: "sm" | "md" | "lg" | "hero";
  caption?: string;
  alt?: string;
}

const SIZE_MAP = {
  sm: { wrapper: "w-full max-w-xs h-44 md:h-52", viewClass: "p-4" },
  md: { wrapper: "w-full max-w-sm h-52 md:h-64", viewClass: "p-4" },
  lg: { wrapper: "w-full max-w-lg h-60 md:h-80", viewClass: "p-5" },
  hero: { wrapper: "w-full max-w-2xl h-64 md:h-96", viewClass: "p-5 md:p-8" },
};

export default function Visual({ name, size = "hero", caption, alt }: Props) {
  const Illustration = ILLUSTRATIONS[name as IllustrationName];

  return (
    <figure
      className="visual-figure my-4 flex flex-col items-center gap-3 not-prose"
      role="img"
      aria-label={alt ?? caption ?? name}
    >
      <div
        className={`${SIZE_MAP[size].wrapper} relative flex items-center justify-center rounded-3xl visual-container mx-auto`}
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Animated glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, var(--module-glow, rgba(19,104,206,0.15)), transparent 70%)",
            animation: "visualPulse 3s ease-in-out infinite",
          }}
        />

        {/* The illustration — BIG */}
        <div className={`relative z-10 w-full h-full ${SIZE_MAP[size].viewClass}`}>
          {Illustration ? (
            <Illustration className="w-full h-full" />
          ) : (
            <FallbackIllustration name={name} />
          )}
        </div>
      </div>

      {caption && (
        <figcaption className="text-xs text-center max-w-sm" style={{ color: "rgba(240,239,235,0.3)" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function FallbackIllustration({ name }: { name: string }) {
  const colors = ["#E21B3C", "#1368CE", "#FFA602", "#26890C", "#00C9B7", "#FF3EA5"];
  const hash = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const color = colors[hash % colors.length];

  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
      <rect x="10" y="10" width="180" height="140" rx="20" fill={color} opacity="0.08" />
      <rect x="10" y="10" width="180" height="140" rx="20" stroke={color} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.2" />
      <circle cx="100" cy="65" r="24" fill={color} opacity="0.15">
        <animate attributeName="r" values="20;28;20" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <rect x="55" y="105" width="90" height="6" rx="3" fill={color} opacity="0.12" />
      <rect x="70" y="118" width="60" height="5" rx="2.5" fill={color} opacity="0.08" />
    </svg>
  );
}

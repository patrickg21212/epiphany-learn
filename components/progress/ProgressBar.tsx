"use client";

import { motion } from "framer-motion";

interface Props {
  value: number; // 0-100
  className?: string;
  showLabel?: boolean;
  color?: "brand" | "green" | "yellow";
  customColor?: string; // hex color for module-specific bars
  customGlow?: string; // glow color
  animated?: boolean;
}

const colorMap = {
  brand: "bg-brand-500",
  green: "bg-green-500",
  yellow: "bg-yellow-400",
};

const shimmerColorMap = {
  brand: "from-brand-400 via-brand-300 to-brand-400",
  green: "from-green-400 via-green-300 to-green-400",
  yellow: "from-yellow-300 via-yellow-200 to-yellow-300",
};

export default function ProgressBar({
  value,
  className = "",
  showLabel = false,
  color = "brand",
  customColor,
  customGlow,
  animated = true,
}: Props) {
  const pct = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full ${className}`}>
      <div className="h-2.5 rounded-full overflow-hidden relative" style={{ background: "rgba(255,255,255,0.08)" }}>
        <motion.div
          className={`h-full ${customColor ? "" : colorMap[color]} rounded-full relative overflow-hidden`}
          style={customColor ? {
            backgroundColor: customColor,
            boxShadow: customGlow ? `0 0 10px ${customGlow}` : undefined,
          } : undefined}
          initial={animated ? { width: 0 } : { width: `${pct}%` }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {pct > 0 && (
            <div
              className={`absolute inset-0 ${customColor ? "" : `bg-gradient-to-r ${shimmerColorMap[color]}`} opacity-50 animate-shimmer`}
              style={customColor ? {
                backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                backgroundSize: "200% auto",
              } : { backgroundSize: "200% auto" }}
            />
          )}
        </motion.div>
      </div>
      {showLabel && (
        <p className="text-xs text-[#F0EFEB]/40 mt-1 text-right">{pct}%</p>
      )}
    </div>
  );
}

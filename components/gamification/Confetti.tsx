"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  shape: "rect" | "circle" | "triangle";
}

const COLORS = [
  "#E21B3C", "#1368CE", "#FFA602", "#26890C", "#00C9B7",
  "#FF3EA5", "#EB670F", "#4DA3FF", "#4CD929", "#FFD066",
];

interface Props {
  count?: number;
  active?: boolean;
}

export default function Confetti({ count = 60, active = true }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const pieces = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 8,
      duration: 1.8 + Math.random() * 1.4,
      delay: Math.random() * 0.8,
      rotation: 360 + Math.random() * 720,
      shape: (["rect", "circle", "triangle"] as const)[Math.floor(Math.random() * 3)],
    }));
  }, [count]);

  if (!active || prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.shape === "circle" ? p.size : p.size,
            height: p.shape === "triangle" ? 0 : p.size,
            backgroundColor: p.shape !== "triangle" ? p.color : "transparent",
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "rect" ? 2 : 0,
            borderLeft: p.shape === "triangle" ? `${p.size / 2}px solid transparent` : undefined,
            borderRight: p.shape === "triangle" ? `${p.size / 2}px solid transparent` : undefined,
            borderBottom: p.shape === "triangle" ? `${p.size}px solid ${p.color}` : undefined,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: "105vh",
            rotate: p.rotation,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
            opacity: { times: [0, 0.7, 1] },
          }}
        />
      ))}
    </div>
  );
}

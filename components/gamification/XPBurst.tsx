"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  xp: number;
  visible?: boolean;
}

const SPARKLES = [
  { x: -50, y: -40, delay: 0.1, size: 8 },
  { x: 50, y: -50, delay: 0.15, size: 6 },
  { x: -60, y: 10, delay: 0.05, size: 10 },
  { x: 65, y: 20, delay: 0.2, size: 7 },
  { x: -20, y: 55, delay: 0.12, size: 9 },
  { x: 30, y: 60, delay: 0.08, size: 6 },
];

export default function XPBurst({ xp, visible = true }: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          {/* Sparkle particles */}
          {SPARKLES.map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                background: "#FFA602",
                width: s.size,
                height: s.size,
                left: "50%",
                top: "50%",
              }}
              initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{
                x: s.x,
                y: s.y,
                scale: [0, 1.5, 0],
                opacity: [1, 1, 0],
              }}
              transition={{ duration: 0.7, delay: s.delay, ease: "easeOut" }}
            />
          ))}

          {/* Main XP badge */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0, y: 0 }}
            animate={{ scale: [0.3, 1.15, 1], opacity: 1, y: 0 }}
            exit={{ scale: 1, opacity: 0, y: -80 }}
            transition={{
              scale: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
              opacity: { duration: 0.3 },
            }}
          >
            <div className="text-white font-bold font-display text-3xl px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3" style={{ background: "linear-gradient(135deg, #FFA602, #EB670F)", boxShadow: "0 0 40px rgba(255, 166, 2, 0.4)" }}>
              <motion.span
                animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ⚡
              </motion.span>
              <span>+{xp} XP</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

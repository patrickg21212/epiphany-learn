"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProgress } from "@/lib/progress";

export default function StreakDisplay() {
  const [streak, setStreak] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const { streak } = getProgress();
    setStreak(streak || 0);
  }, []);

  if (!mounted || streak === 0) return null;

  const isHot = streak >= 3;
  const isOnFire = streak >= 7;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${
        isOnFire
          ? "bg-red-50 border-red-200"
          : isHot
          ? "bg-orange-50 border-orange-200"
          : "bg-amber-50 border-amber-200"
      }`}
    >
      {/* Animated fire */}
      <div className="relative">
        <span
          className="text-2xl inline-block animate-fire-flicker"
          style={{ transformOrigin: "bottom center" }}
        >
          🔥
        </span>
        {isOnFire && (
          <motion.span
            className="absolute -top-1 -right-1 text-xs"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ✨
          </motion.span>
        )}
      </div>

      <div>
        <AnimatePresence mode="wait">
          <motion.p
            key={streak}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-sm font-bold ${
              isOnFire ? "text-red-700" : isHot ? "text-orange-700" : "text-amber-700"
            }`}
          >
            {streak}-day streak
          </motion.p>
        </AnimatePresence>
        <p className={`text-xs ${isOnFire ? "text-red-500" : isHot ? "text-orange-500" : "text-amber-500"}`}>
          {isOnFire ? "You're on absolute fire! 🔥" : isHot ? "Keep it going!" : "Nice start!"}
        </p>
      </div>
    </motion.div>
  );
}

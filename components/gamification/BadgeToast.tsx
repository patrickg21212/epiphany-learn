"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Badge } from "@/lib/achievements";

interface Props {
  badge: Badge;
  onDismiss?: () => void;
  autoDismissMs?: number;
}

export default function BadgeToast({ badge, onDismiss, autoDismissMs = 5000 }: Props) {
  const [progress, setProgress] = useState(100);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / autoDismissMs) * 100);
      setProgress(remaining);
      if (remaining === 0) {
        clearInterval(interval);
        setVisible(false);
        setTimeout(() => onDismiss?.(), 300);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [autoDismissMs, onDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 120, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 120, opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 rounded-2xl p-5 max-w-xs overflow-hidden"
          style={{
            background: "#0A0A0A",
            border: "1px solid rgba(255, 166, 2, 0.3)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 166, 2, 0.15)",
          }}
        >
          {/* Glow ring behind badge */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-14 h-14 relative">
              <motion.div
                className="absolute inset-0 rounded-full opacity-0"
                style={{ background: "#FFA602" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0, 0.3, 0] }}
                transition={{ repeat: 2, duration: 0.8 }}
              />
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.1 }}
                className="w-14 h-14 flex items-center justify-center"
              >
                {badge.svgPath ? (
                  <Image src={badge.svgPath} alt={badge.title} width={56} height={56} />
                ) : (
                  <span className="text-4xl">{badge.icon}</span>
                )}
              </motion.div>
            </div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-semibold uppercase tracking-wide mb-1"
                style={{ color: "#FFA602" }}
              >
                🏆 Badge Unlocked!
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="font-bold font-display"
                style={{ color: "#F0EFEB" }}
              >
                {badge.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm mt-0.5"
                style={{ color: "rgba(240, 239, 235, 0.5)" }}
              >
                {badge.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-xs font-medium mt-1"
                style={{ color: "#FFA602" }}
              >
                +{badge.xpReward} XP
              </motion.p>
            </div>
          </div>

          {/* Dismiss button */}
          {onDismiss && (
            <button
              onClick={() => { setVisible(false); setTimeout(() => onDismiss(), 300); }}
              className="absolute top-3 right-3 transition-colors"
              style={{ color: "rgba(240, 239, 235, 0.3)" }}
            >
              ✕
            </button>
          )}

          {/* Auto-dismiss progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "rgba(255,255,255,0.05)" }}>
            <motion.div
              className="h-full rounded-b-2xl"
              style={{ width: `${progress}%`, background: "#FFA602" }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

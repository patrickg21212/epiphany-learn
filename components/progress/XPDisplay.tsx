"use client";

import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress";
import { getLevel, getLevelProgress } from "@/lib/achievements";
import ProgressBar from "./ProgressBar";

export default function XPDisplay() {
  const [xp, setXP] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const { xp } = getProgress();
    setXP(xp);
  }, []);

  if (!mounted) return null;

  const level = getLevel(xp);
  const progress = getLevelProgress(xp);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">
          Level {level.level} — {level.title}
        </span>
        <span className="text-sm font-bold text-brand-600">{xp} XP</span>
      </div>
      <ProgressBar value={progress} showLabel />
      {level.maxXP !== Infinity && (
        <p className="text-xs text-gray-400 mt-1">
          {level.maxXP - xp} XP to Level {level.level + 1}
        </p>
      )}
    </div>
  );
}

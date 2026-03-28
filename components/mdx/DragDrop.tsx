"use client";

import { useState } from "react";
import { SortIllustration } from "@/components/ui/InteractiveIllustrations";

interface Item {
  id: string;
  text: string;
  correctCategory: string;
}

interface Props {
  id?: string;
  instruction: string;
  categories: string[];
  items: Item[];
}

const CATEGORY_STYLES = [
  { bg: "#1368CE", glow: "rgba(19,104,206,0.3)", shape: "◆", lightBg: "rgba(19,104,206,0.12)", lightBorder: "rgba(19,104,206,0.3)" },
  { bg: "#00C9B7", glow: "rgba(0,201,183,0.3)", shape: "●", lightBg: "rgba(0,201,183,0.12)", lightBorder: "rgba(0,201,183,0.3)" },
  { bg: "#FFA602", glow: "rgba(255,166,2,0.3)", shape: "■", lightBg: "rgba(255,166,2,0.12)", lightBorder: "rgba(255,166,2,0.3)" },
  { bg: "#FF3EA5", glow: "rgba(255,62,165,0.3)", shape: "▲", lightBg: "rgba(255,62,165,0.12)", lightBorder: "rgba(255,62,165,0.3)" },
];

const CELEBRATION_EMOJIS = ["🎯", "✨", "⭐", "🔥", "💪"];

export default function DragDrop({ instruction, categories, items }: Props) {
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const allAssigned = items.every((item) => assignments[item.id]);
  const score = submitted
    ? items.filter((item) => assignments[item.id] === item.correctCategory).length
    : 0;
  const isPerfect = submitted && score === items.length;

  function assign(itemId: string, category: string) {
    if (submitted) return;
    setAssignments((prev) => {
      const current = prev[itemId];
      // Toggle off if clicking same category
      if (current === category) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return { ...prev, [itemId]: category };
    });
  }

  function handleSubmit() {
    if (!allAssigned) return;
    setSubmitted(true);
    if (items.every((item) => assignments[item.id] === item.correctCategory)) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  }

  function handleRetry() {
    setAssignments({});
    setSubmitted(false);
    setShowCelebration(false);
  }

  return (
    <div className="my-8 rounded-2xl overflow-hidden relative" style={{ background: "#0A0A0A", border: "2px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
      {/* Header bar */}
      <div className="px-5 py-3.5 flex items-center justify-between relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1368CE, #0D4F9E)" }}>
        {/* Background shape */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl font-bold text-white/[0.06] select-none">◆</div>
        <div className="flex items-center gap-2">
          <SortIllustration className="w-8 h-8 -my-1" />
          <span className="text-white font-display font-bold text-sm tracking-wide">Sort It Out</span>
        </div>
        {submitted && (
          <span className="text-sm font-display font-bold px-3 py-1 rounded-full" style={{
            background: isPerfect ? "rgba(38,137,12,0.3)" : "rgba(255,255,255,0.15)",
            color: isPerfect ? "#4CD929" : "#fff",
          }}>
            {isPerfect ? "🎯 Perfect!" : `${score}/${items.length}`}
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-sm mb-5 font-medium" style={{ color: "rgba(240,239,235,0.6)" }}>{instruction}</p>

        {/* Category legend */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat, ci) => {
            const s = CATEGORY_STYLES[ci % CATEGORY_STYLES.length];
            return (
              <div key={cat} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold" style={{
                background: s.lightBg, color: s.bg, border: `1px solid ${s.lightBorder}`,
              }}>
                <span className="text-sm opacity-70">{s.shape}</span>
                <span>{cat}</span>
              </div>
            );
          })}
        </div>

        {/* Items */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const assigned = assignments[item.id];
            const isCorrect = submitted && assigned === item.correctCategory;
            const isWrong = submitted && assigned && assigned !== item.correctCategory;
            const assignedStyle = assigned ? CATEGORY_STYLES[categories.indexOf(assigned) % CATEGORY_STYLES.length] : null;

            return (
              <div
                key={item.id}
                className={`rounded-xl p-4 transition-all duration-300 dragdrop-item-enter ${isCorrect ? "dragdrop-correct-flash" : ""}`}
                style={{
                  animationDelay: `${idx * 60}ms`,
                  border: submitted
                    ? isCorrect ? "2px solid #26890C" : isWrong ? "2px solid #E21B3C" : "2px solid rgba(255,255,255,0.06)"
                    : assigned ? `2px solid ${assignedStyle?.bg}40` : "2px solid rgba(255,255,255,0.06)",
                  background: submitted
                    ? isCorrect ? "rgba(38,137,12,0.08)" : isWrong ? "rgba(226,27,60,0.06)" : "rgba(255,255,255,0.02)"
                    : assigned ? `${assignedStyle?.lightBg}` : "rgba(255,255,255,0.02)",
                  boxShadow: isCorrect ? "0 0 16px rgba(38,137,12,0.15)" : "none",
                }}
              >
                {/* Item text + status */}
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-sm font-display font-medium flex-1" style={{
                    color: submitted && isWrong ? "#FF6B7A" : "#F0EFEB",
                  }}>
                    {item.text}
                  </p>
                  {submitted && isCorrect && (
                    <span className="text-base animate-bounce-in">✅</span>
                  )}
                  {submitted && isWrong && (
                    <span className="text-base animate-wrong-shake">❌</span>
                  )}
                </div>

                {/* Category buttons */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, ci) => {
                    const s = CATEGORY_STYLES[ci % CATEGORY_STYLES.length];
                    const isActive = assigned === cat;

                    return (
                      <button
                        key={cat}
                        onClick={() => assign(item.id, cat)}
                        disabled={submitted}
                        className="dragdrop-category-btn px-3.5 py-1.5 rounded-lg text-xs font-bold border-2 transition-all"
                        style={{
                          background: isActive
                            ? submitted ? (isCorrect ? "#26890C" : "#E21B3C") : s.bg
                            : "transparent",
                          color: isActive ? "#fff" : `${s.bg}CC`,
                          borderColor: isActive
                            ? submitted ? (isCorrect ? "#26890C" : "#E21B3C") : s.bg
                            : `${s.bg}40`,
                          boxShadow: isActive && !submitted ? `0 2px 12px ${s.glow}` : "none",
                          cursor: submitted ? "default" : "pointer",
                        }}
                      >
                        <span className="mr-1 opacity-70">{s.shape}</span>
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Wrong answer correction */}
                {submitted && isWrong && (
                  <div className="mt-2 text-xs animate-fade-in" style={{ color: "rgba(255,209,102,0.8)" }}>
                    → Correct: <span className="font-bold">{item.correctCategory}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAssigned}
            className="group font-display font-bold px-6 py-3 rounded-xl text-white text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 relative overflow-hidden"
            style={{ background: "#1368CE", boxShadow: allAssigned ? "0 4px 16px rgba(19,104,206,0.3)" : "none" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Check Answers</span>
          </button>
        ) : (
          <button
            onClick={handleRetry}
            className="font-display font-medium px-6 py-3 rounded-xl text-sm border-2 transition-all hover:scale-105 active:scale-95"
            style={{ color: "#4DA3FF", borderColor: "rgba(19,104,206,0.3)", background: "rgba(19,104,206,0.05)" }}
          >
            🔄 Try Again
          </button>
        )}
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {CELEBRATION_EMOJIS.map((emoji, i) => (
            <div
              key={i}
              className="absolute quiz-emoji-float"
              style={{
                left: `${15 + i * 18}%`,
                bottom: "-20px",
                fontSize: "28px",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

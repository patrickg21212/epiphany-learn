"use client";

import { useState, useMemo } from "react";
import { MatchIllustration } from "@/components/ui/InteractiveIllustrations";

interface Pair {
  term: string;
  definition: string;
}

interface Props {
  id?: string;
  instruction?: string;
  pairs: Pair[];
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

const PAIR_COLORS = [
  { bg: "#E21B3C", glow: "rgba(226,27,60,0.3)", light: "rgba(226,27,60,0.12)" },
  { bg: "#1368CE", glow: "rgba(19,104,206,0.3)", light: "rgba(19,104,206,0.12)" },
  { bg: "#FFA602", glow: "rgba(255,166,2,0.3)", light: "rgba(255,166,2,0.12)" },
  { bg: "#26890C", glow: "rgba(38,137,12,0.3)", light: "rgba(38,137,12,0.12)" },
  { bg: "#00C9B7", glow: "rgba(0,201,183,0.3)", light: "rgba(0,201,183,0.12)" },
  { bg: "#FF3EA5", glow: "rgba(255,62,165,0.3)", light: "rgba(255,62,165,0.12)" },
];

export default function MatchTerms({ instruction, pairs }: Props) {
  const shuffledDefs = useMemo(() => shuffle(pairs.map((p) => p.definition)), [pairs]);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [animatingMatch, setAnimatingMatch] = useState<string | null>(null);

  const score = submitted
    ? pairs.filter((p) => matches[p.term] === p.definition).length
    : 0;
  const isPerfect = submitted && score === pairs.length;

  // Give each matched pair a color
  const pairColorMap = useMemo(() => {
    const map: Record<string, typeof PAIR_COLORS[0]> = {};
    let colorIdx = 0;
    pairs.forEach((p) => {
      map[p.term] = PAIR_COLORS[colorIdx % PAIR_COLORS.length];
      colorIdx++;
    });
    return map;
  }, [pairs]);

  function handleTermClick(term: string) {
    if (submitted) return;
    setSelectedTerm((prev) => (prev === term ? null : term));
  }

  function handleDefClick(def: string) {
    if (submitted || !selectedTerm) return;
    setMatches((prev) => ({ ...prev, [selectedTerm]: def }));
    setAnimatingMatch(selectedTerm);
    setTimeout(() => setAnimatingMatch(null), 400);
    setSelectedTerm(null);
  }

  const allMatched = pairs.every((p) => matches[p.term]);
  const matchedDefs = new Set(Object.values(matches));

  function handleSubmit() {
    if (!allMatched) return;
    setSubmitted(true);
    if (pairs.every((p) => matches[p.term] === p.definition)) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  }

  function handleRetry() {
    setMatches({});
    setSelectedTerm(null);
    setSubmitted(false);
    setShowCelebration(false);
  }

  return (
    <div className="my-8 rounded-2xl overflow-hidden relative" style={{ background: "#0A0A0A", border: "2px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
      {/* Header */}
      <div className="px-5 py-3.5 flex items-center justify-between relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF3EA5, #CC3284)" }}>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl font-bold text-white/[0.06] select-none">▲</div>
        <div className="flex items-center gap-2">
          <MatchIllustration className="w-8 h-8 -my-1" />
          <span className="text-white font-display font-bold text-sm tracking-wide">Match the Terms</span>
        </div>
        {submitted && (
          <span className="text-sm font-display font-bold px-3 py-1 rounded-full" style={{
            background: isPerfect ? "rgba(38,137,12,0.3)" : "rgba(255,255,255,0.15)",
            color: isPerfect ? "#4CD929" : "#fff",
          }}>
            {isPerfect ? "🎯 Perfect!" : `${score}/${pairs.length}`}
          </span>
        )}
      </div>

      <div className="p-5">
        {instruction && (
          <p className="text-sm mb-4 font-medium" style={{ color: "rgba(240,239,235,0.6)" }}>{instruction}</p>
        )}

        {/* Instruction hint */}
        {!submitted && (
          <div className="mb-4 text-xs font-medium px-3 py-2 rounded-lg animate-fade-in" style={{
            background: selectedTerm ? "rgba(255,62,165,0.08)" : "rgba(255,255,255,0.03)",
            border: selectedTerm ? "1px solid rgba(255,62,165,0.2)" : "1px solid rgba(255,255,255,0.06)",
            color: selectedTerm ? "#FF7EC5" : "rgba(240,239,235,0.3)",
          }}>
            {selectedTerm
              ? <>Now tap the matching definition for <strong>&ldquo;{selectedTerm}&rdquo;</strong></>
              : "Tap a term, then tap its matching definition"}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {/* ─── Terms Column ─── */}
          <div className="space-y-2">
            <p className="text-xs font-display font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(240,239,235,0.35)" }}>Terms</p>
            {pairs.map((p, idx) => {
              const isSelected = selectedTerm === p.term;
              const isMatched = !!matches[p.term];
              const isCorrect = submitted && matches[p.term] === p.definition;
              const isWrong = submitted && matches[p.term] !== p.definition;
              const color = pairColorMap[p.term];
              const isAnimating = animatingMatch === p.term;

              return (
                <button
                  key={p.term}
                  onClick={() => handleTermClick(p.term)}
                  disabled={submitted}
                  className={`match-term-btn w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 animate-fade-in-up ${isAnimating ? "animate-scale-in" : ""}`}
                  style={{
                    animationDelay: `${idx * 60}ms`,
                    borderColor: submitted
                      ? isCorrect ? "#26890C" : isWrong ? "#E21B3C" : "rgba(255,255,255,0.06)"
                      : isSelected ? color.bg : isMatched ? `${color.bg}60` : "rgba(255,255,255,0.08)",
                    background: submitted
                      ? isCorrect ? "rgba(38,137,12,0.08)" : isWrong ? "rgba(226,27,60,0.06)" : "transparent"
                      : isSelected ? `${color.light}` : isMatched ? `${color.bg}08` : "rgba(255,255,255,0.02)",
                    color: submitted
                      ? isCorrect ? "#4CD929" : isWrong ? "#FF6B7A" : "rgba(240,239,235,0.3)"
                      : isSelected ? color.bg : "#F0EFEB",
                    boxShadow: isSelected ? `0 0 16px ${color.glow}` : isMatched ? `0 0 8px ${color.glow}40` : "none",
                    cursor: submitted ? "default" : "pointer",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex-1">{p.term}</span>
                    {isMatched && !submitted && (
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: color.bg, color: "#fff" }}>✓</span>
                    )}
                    {submitted && isCorrect && <span className="text-base animate-bounce-in">✅</span>}
                    {submitted && isWrong && <span className="text-base">❌</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* ─── Definitions Column ─── */}
          <div className="space-y-2">
            <p className="text-xs font-display font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(240,239,235,0.35)" }}>Definitions</p>
            {shuffledDefs.map((def, idx) => {
              const isUsed = matchedDefs.has(def);
              const isClickable = !!selectedTerm && !isUsed;
              const matchedTerm = Object.entries(matches).find(([, d]) => d === def)?.[0];
              const isCorrect = submitted && matchedTerm && pairs.find((p) => p.term === matchedTerm)?.definition === def;
              const isWrong = submitted && matchedTerm && pairs.find((p) => p.term === matchedTerm)?.definition !== def;
              const matchedColor = matchedTerm ? pairColorMap[matchedTerm] : null;

              return (
                <button
                  key={def}
                  onClick={() => handleDefClick(def)}
                  disabled={submitted || (!isClickable && !isUsed)}
                  className={`match-term-btn w-full text-left px-4 py-3 rounded-xl border-2 text-xs leading-relaxed transition-all duration-200 animate-fade-in-up`}
                  style={{
                    animationDelay: `${idx * 60 + 30}ms`,
                    borderColor: submitted
                      ? isCorrect ? "#26890C" : isWrong ? "#E21B3C" : "rgba(255,255,255,0.06)"
                      : isUsed && matchedColor ? `${matchedColor.bg}60` : isClickable ? "rgba(255,62,165,0.3)" : "rgba(255,255,255,0.06)",
                    background: submitted
                      ? isCorrect ? "rgba(38,137,12,0.08)" : isWrong ? "rgba(226,27,60,0.06)" : "transparent"
                      : isUsed && matchedColor ? `${matchedColor.bg}08` : isClickable ? "rgba(255,62,165,0.04)" : "rgba(255,255,255,0.02)",
                    color: submitted
                      ? isCorrect ? "#4CD929" : isWrong ? "#FF6B7A" : "rgba(240,239,235,0.3)"
                      : isUsed ? "rgba(240,239,235,0.45)" : "rgba(240,239,235,0.7)",
                    cursor: submitted ? "default" : isClickable ? "pointer" : "default",
                    boxShadow: isClickable ? "0 0 8px rgba(255,62,165,0.15)" : "none",
                  }}
                >
                  {def}
                </button>
              );
            })}
          </div>
        </div>

        {/* Correct answers on failure */}
        {submitted && score < pairs.length && (
          <div className="mt-5 p-4 rounded-xl text-sm animate-fade-in-up" style={{
            background: "rgba(255,166,2,0.06)", border: "1px solid rgba(255,166,2,0.15)",
          }}>
            <p className="font-display font-bold mb-2" style={{ color: "#FFD166" }}>💡 Correct Matches:</p>
            {pairs.map((p) => (
              <p key={p.term} className="text-xs mt-1.5 flex items-center gap-2">
                <span className="font-medium" style={{ color: "#F0EFEB" }}>{p.term}</span>
                <span className="text-white/20">→</span>
                <span style={{ color: "rgba(240,239,235,0.6)" }}>{p.definition}</span>
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allMatched}
            className="group font-display font-bold px-6 py-3 rounded-xl text-white text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 relative overflow-hidden"
            style={{ background: "#FF3EA5", boxShadow: allMatched ? "0 4px 16px rgba(255,62,165,0.3)" : "none" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Check Matches</span>
          </button>
        ) : (
          <button
            onClick={handleRetry}
            className="font-display font-medium px-6 py-3 rounded-xl text-sm border-2 transition-all hover:scale-105 active:scale-95"
            style={{ color: "#FF7EC5", borderColor: "rgba(255,62,165,0.3)", background: "rgba(255,62,165,0.05)" }}
          >
            🔄 Try Again
          </button>
        )}
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {["🔗", "✨", "⭐", "🎯", "💪", "🏆"].map((emoji, i) => (
            <div
              key={i}
              className="absolute quiz-emoji-float"
              style={{
                left: `${10 + i * 16}%`,
                bottom: "-20px",
                fontSize: "24px",
                animationDelay: `${i * 0.12}s`,
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

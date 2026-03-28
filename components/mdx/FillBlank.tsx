"use client";

import { useState, useRef } from "react";
import { FillBlankIllustration } from "@/components/ui/InteractiveIllustrations";

interface Blank {
  id: string;
  answer: string;
  acceptedAnswers: string[];
}

interface Props {
  id?: string;
  template: string;
  blanks: Blank[];
}

export default function FillBlank({ template, blanks }: Props) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const parts = template.split("___");

  function setInput(blankId: string, value: string) {
    if (checked) return;
    setInputs((prev) => ({ ...prev, [blankId]: value }));
  }

  function isCorrect(blank: Blank): boolean {
    const val = (inputs[blank.id] ?? "").trim().toLowerCase();
    return blank.acceptedAnswers.some((a) => a.toLowerCase() === val);
  }

  const allFilled = blanks.every((b) => (inputs[b.id] ?? "").trim().length > 0);
  const score = checked ? blanks.filter(isCorrect).length : 0;
  const isPerfect = checked && score === blanks.length;

  function handleCheck() {
    if (!allFilled) return;
    setChecked(true);
    if (blanks.every(isCorrect)) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  }

  function handleRetry() {
    setInputs({});
    setChecked(false);
    setShowCelebration(false);
  }

  function handleKeyDown(e: React.KeyboardEvent, blankIndex: number) {
    if (e.key === "Enter") {
      // Focus next blank or check
      const nextBlank = blanks[blankIndex + 1];
      if (nextBlank && inputRefs.current[nextBlank.id]) {
        inputRefs.current[nextBlank.id]?.focus();
      } else if (allFilled) {
        handleCheck();
      }
    }
  }

  return (
    <div className="my-8 rounded-2xl overflow-hidden relative" style={{ background: "#0A0A0A", border: "2px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
      {/* Header */}
      <div className="px-5 py-3.5 flex items-center justify-between relative overflow-hidden" style={{ background: "linear-gradient(135deg, #00C9B7, #009E8F)" }}>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl font-bold text-white/[0.06] select-none">●</div>
        <div className="flex items-center gap-2">
          <FillBlankIllustration className="w-8 h-8 -my-1" />
          <span className="text-white font-display font-bold text-sm tracking-wide">Fill in the Blank</span>
        </div>
        {checked && (
          <span className="text-sm font-display font-bold px-3 py-1 rounded-full" style={{
            background: isPerfect ? "rgba(38,137,12,0.3)" : "rgba(255,255,255,0.15)",
            color: isPerfect ? "#4CD929" : "#fff",
          }}>
            {isPerfect ? "🎯 Perfect!" : `${score}/${blanks.length}`}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="text-sm leading-[2.2] font-medium" style={{ color: "rgba(240,239,235,0.8)" }}>
          {parts.map((part, i) => {
            const blank = blanks[i];
            return (
              <span key={i}>
                <span dangerouslySetInnerHTML={{ __html: part.replace(/`([^`]+)`/g, '<code style="background:rgba(19,104,206,0.15);color:#4DA3FF;padding:2px 6px;border-radius:6px;font-size:0.8125rem;font-family:var(--font-geist-mono)">$1</code>') }} />
                {blank && (
                  <span className="inline-flex flex-col items-start mx-1.5 align-baseline">
                    <input
                      ref={(el) => { inputRefs.current[blank.id] = el; }}
                      type="text"
                      value={inputs[blank.id] ?? ""}
                      onChange={(e) => setInput(blank.id, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      disabled={checked}
                      placeholder="type here..."
                      className={`fillblank-input border-b-2 px-2 py-1 text-sm font-display font-medium bg-transparent outline-none min-w-20 rounded-t-lg transition-all duration-200 ${
                        checked && isCorrect(blank) ? "fillblank-correct" : ""
                      }`}
                      style={{
                        borderColor: checked
                          ? isCorrect(blank) ? "#26890C" : "#E21B3C"
                          : inputs[blank.id] ? "#00C9B7" : "rgba(0,201,183,0.4)",
                        color: checked
                          ? isCorrect(blank) ? "#4CD929" : "#FF6B7A"
                          : "#F0EFEB",
                        background: checked
                          ? isCorrect(blank) ? "rgba(38,137,12,0.06)" : "rgba(226,27,60,0.06)"
                          : inputs[blank.id] ? "rgba(0,201,183,0.04)" : "transparent",
                        boxShadow: !checked && inputs[blank.id] ? "0 2px 0 #00C9B7, 0 0 8px rgba(0,201,183,0.15)" : "none",
                      }}
                    />
                    {checked && isCorrect(blank) && (
                      <span className="text-xs mt-0.5 animate-bounce-in" style={{ color: "#4CD929" }}>✓ Correct</span>
                    )}
                    {checked && !isCorrect(blank) && (
                      <span className="text-xs mt-0.5 animate-fade-in" style={{ color: "#FF6B7A" }}>
                        → {blank.answer}
                      </span>
                    )}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex gap-3">
        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={!allFilled}
            className="group font-display font-bold px-6 py-3 rounded-xl text-white text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 relative overflow-hidden"
            style={{ background: "#00C9B7", boxShadow: allFilled ? "0 4px 16px rgba(0,201,183,0.3)" : "none" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Check Answer</span>
          </button>
        ) : (
          <button
            onClick={handleRetry}
            className="font-display font-medium px-6 py-3 rounded-xl text-sm border-2 transition-all hover:scale-105 active:scale-95"
            style={{ color: "#4DFFE8", borderColor: "rgba(0,201,183,0.3)", background: "rgba(0,201,183,0.05)" }}
          >
            🔄 Try Again
          </button>
        )}
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {["✍️", "✨", "🎯", "⭐", "💪"].map((emoji, i) => (
            <div
              key={i}
              className="absolute quiz-emoji-float"
              style={{
                left: `${12 + i * 20}%`,
                bottom: "-20px",
                fontSize: "24px",
                animationDelay: `${i * 0.13}s`,
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

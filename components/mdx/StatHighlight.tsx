"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  label: string;
}

export default function StatHighlight({ value, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  const numMatch = value.match(/[\d.]+/);
  const numericValue = numMatch ? parseFloat(numMatch[0]) : 0;
  const numericStr = numMatch?.[0] ?? "0";
  const prefix = value.slice(0, value.indexOf(numericStr));
  const suffix = value.slice(value.indexOf(numericStr) + numericStr.length);
  const decimals = numericStr.includes(".") ? (numericStr.split(".")[1]?.length ?? 0) : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const steps = 30;
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;
      setDisplayValue(current.toFixed(decimals));

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(numericStr);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, numericValue, decimals, numericStr]);

  return (
    <div
      ref={ref}
      className={`my-6 flex items-center gap-4 p-5 rounded-xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        background: "rgba(19,104,206,0.06)",
        border: "2px solid rgba(19,104,206,0.2)",
      }}
    >
      <div className="text-3xl md:text-4xl font-display font-extrabold tabular-nums tracking-tight" style={{ color: "var(--module-color, #1368CE)" }}>
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-sm leading-snug" style={{ color: "rgba(240,239,235,0.6)" }}>{label}</div>
    </div>
  );
}

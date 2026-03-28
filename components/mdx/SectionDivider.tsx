"use client";

export default function SectionDivider() {
  return (
    <div className="my-10 flex items-center justify-center gap-3" role="separator">
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--module-color, #1368CE), transparent)", opacity: 0.3 }} />
      <div className="flex gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--module-color, #1368CE)", opacity: 0.5 }} />
        <span className="w-1.5 h-1.5 rounded-full animate-pulse [animation-delay:150ms]" style={{ background: "var(--module-color, #1368CE)", opacity: 0.7 }} />
        <span className="w-1.5 h-1.5 rounded-full animate-pulse [animation-delay:300ms]" style={{ background: "var(--module-color, #1368CE)", opacity: 0.5 }} />
      </div>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--module-color, #1368CE), transparent)", opacity: 0.3 }} />
    </div>
  );
}

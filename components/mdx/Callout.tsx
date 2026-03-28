"use client";

import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
}

const ICONS = {
  tip: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M10 2a5 5 0 00-2 9.58V14a1 1 0 001 1h2a1 1 0 001-1v-2.42A5 5 0 0010 2z" fill="currentColor" opacity="0.2"/>
      <path d="M10 2a5 5 0 00-2 9.58V14a1 1 0 001 1h2a1 1 0 001-1v-2.42A5 5 0 0010 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8.5 17h3M9 15v2M11 15v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M10 3L2 17h16L10 3z" fill="currentColor" opacity="0.15"/>
      <path d="M10 3L2 17h16L10 3z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <path d="M10 8v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  example: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <rect x="2" y="2" width="16" height="16" rx="4" fill="currentColor" opacity="0.15"/>
      <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

const STYLES = {
  tip: {
    border: "rgba(0,201,183,0.25)",
    bg: "rgba(0,201,183,0.06)",
    icon: "#00C9B7",
    title: "#33E8D8",
    text: "rgba(240,239,235,0.7)",
    label: "Tip",
  },
  warning: {
    border: "rgba(255,166,2,0.25)",
    bg: "rgba(255,166,2,0.06)",
    icon: "#FFA602",
    title: "#FFD166",
    text: "rgba(240,239,235,0.7)",
    label: "Warning",
  },
  example: {
    border: "rgba(19,104,206,0.25)",
    bg: "rgba(19,104,206,0.06)",
    icon: "#1368CE",
    title: "#4DA3FF",
    text: "rgba(240,239,235,0.7)",
    label: "Real-World Example",
  },
};

function CalloutBox({ children, variant }: CalloutProps & { variant: "tip" | "warning" | "example" }) {
  const style = STYLES[variant];

  return (
    <div
      className="my-6 rounded-xl overflow-hidden"
      style={{ border: `2px solid ${style.border}`, background: style.bg }}
    >
      <div className="px-4 py-3 flex items-start gap-3">
        <div style={{ color: style.icon }}>{ICONS[variant]}</div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: style.title }}>
            {style.label}
          </div>
          <div className="text-sm leading-relaxed" style={{ color: style.text }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Tip({ children }: CalloutProps) {
  return <CalloutBox variant="tip">{children}</CalloutBox>;
}

export function Warning({ children }: CalloutProps) {
  return <CalloutBox variant="warning">{children}</CalloutBox>;
}

export function Example({ children }: CalloutProps) {
  return <CalloutBox variant="example">{children}</CalloutBox>;
}

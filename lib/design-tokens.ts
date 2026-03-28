/**
 * Design Tokens — epiphany.help
 * Single source of truth for design values used programmatically in components.
 * CSS variables (globals.css) + Tailwind classes are the primary layer.
 * Use these tokens when you need values in JS/TS (e.g. framer-motion, canvas, chart colors).
 */

// ── Colors ──────────────────────────────────────────────────────────────────

export const colors = {
  // Brand — Kahoot Blue
  brand: {
    50: "#E8F1FC",
    100: "#C5DCF8",
    200: "#8DBBF2",
    300: "#5599EB",
    400: "#2B8BF5",
    500: "#1368CE",
    600: "#0F52A0",
    700: "#0B3D78",
    800: "#082A53",
    900: "#041A35",
    950: "#020D1A",
  },

  // Kahoot Accents
  kahoot: {
    red: "#E21B3C",
    blue: "#1368CE",
    gold: "#FFA602",
    green: "#26890C",
    cyan: "#00C9B7",
    magenta: "#FF3EA5",
    orange: "#EB670F",
  },

  // Accent — Cyan
  accent: {
    400: "#33E8D8",
    500: "#00C9B7",
    600: "#009E90",
  },

  // XP / Gold
  xp: {
    300: "#FFD166",
    400: "#FFA602",
    500: "#D98B00",
  },

  // Streak / Fire
  streak: {
    300: "#FF9F5C",
    400: "#EB670F",
    500: "#C7520A",
    600: "#A33F07",
  },

  // Success / Correct
  win: {
    400: "#4CD929",
    500: "#26890C",
    600: "#1D6B0F",
  },

  // Error / Wrong
  lose: {
    400: "#FF4D6A",
    500: "#E21B3C",
    600: "#BD1530",
  },

  // Dark surfaces
  surface: {
    0: "#050505",
    1: "#0A0A0A",
    2: "#111111",
    3: "#1A1A1A",
    4: "#222222",
    5: "#2A2A2A",
    border: "#2A2A2A",
    muted: "#3A3A3A",
  },

  // Text
  text: {
    primary: "#F0EFEB",
    secondary: "rgba(240, 239, 235, 0.7)",
    muted: "rgba(240, 239, 235, 0.4)",
    faint: "rgba(240, 239, 235, 0.2)",
  },
} as const;

// ── Module Color Themes ─────────────────────────────────────────────────────

export const moduleColors: Record<string, {
  id: string;
  name: string;
  primary: string;
  light: string;
  dark: string;
  bg: string;
  border: string;
  gradient: string;
  twFrom: string;
  twTo: string;
}> = {
  "module-1": {
    id: "module-1",
    name: "AI Fundamentals",
    primary: "#1368CE",
    light: "#4DA3FF",
    dark: "#0F52A0",
    bg: "rgba(19, 104, 206, 0.1)",
    border: "rgba(19, 104, 206, 0.35)",
    gradient: "linear-gradient(135deg, #0F52A0 0%, #1368CE 50%, #2B8BF5 100%)",
    twFrom: "from-brand-600",
    twTo: "to-brand-400",
  },
  "module-2": {
    id: "module-2",
    name: "Your First AI Chat",
    primary: "#00C9B7",
    light: "#33E8D8",
    dark: "#009E90",
    bg: "rgba(0, 201, 183, 0.1)",
    border: "rgba(0, 201, 183, 0.35)",
    gradient: "linear-gradient(135deg, #009E90 0%, #00C9B7 50%, #33E8D8 100%)",
    twFrom: "from-accent-500",
    twTo: "to-accent-300",
  },
  "module-3": {
    id: "module-3",
    name: "AI in Your Day",
    primary: "#26890C",
    light: "#4CD929",
    dark: "#1D6B0F",
    bg: "rgba(38, 137, 12, 0.1)",
    border: "rgba(38, 137, 12, 0.35)",
    gradient: "linear-gradient(135deg, #1D6B0F 0%, #26890C 50%, #3CB518 100%)",
    twFrom: "from-win-600",
    twTo: "to-win-400",
  },
  "module-4": {
    id: "module-4",
    name: "Safety & Trust",
    primary: "#EB670F",
    light: "#FF9F5C",
    dark: "#C7520A",
    bg: "rgba(235, 103, 15, 0.1)",
    border: "rgba(235, 103, 15, 0.35)",
    gradient: "linear-gradient(135deg, #C7520A 0%, #EB670F 50%, #FF8A3D 100%)",
    twFrom: "from-streak-500",
    twTo: "to-streak-300",
  },
  "module-5": {
    id: "module-5",
    name: "Buying Smart",
    primary: "#FF3EA5",
    light: "#FF6FC0",
    dark: "#D92D8A",
    bg: "rgba(255, 62, 165, 0.1)",
    border: "rgba(255, 62, 165, 0.35)",
    gradient: "linear-gradient(135deg, #D92D8A 0%, #FF3EA5 50%, #FF6FC0 100%)",
    twFrom: "from-k-magenta",
    twTo: "to-k-magenta-light",
  },
  "module-6": {
    id: "module-6",
    name: "Your First Project",
    primary: "#FFA602",
    light: "#FFD166",
    dark: "#D98B00",
    bg: "rgba(255, 166, 2, 0.1)",
    border: "rgba(255, 166, 2, 0.35)",
    gradient: "linear-gradient(135deg, #D98B00 0%, #FFA602 50%, #FFD166 100%)",
    twFrom: "from-xp-500",
    twTo: "to-xp-300",
  },
} as const;

export function getModuleColor(moduleId: string) {
  return moduleColors[moduleId] ?? moduleColors["module-1"];
}

// ── Gradients ────────────────────────────────────────────────────────────────

export const gradients = {
  brand: "linear-gradient(135deg, #0F52A0 0%, #1368CE 50%, #00C9B7 100%)",
  xp: "linear-gradient(90deg, #FFA602 0%, #FFD166 50%, #FFA602 100%)",
  streak: "linear-gradient(180deg, #FFD166 0%, #EB670F 40%, #E21B3C 100%)",
  win: "linear-gradient(135deg, #1D6B0F 0%, #26890C 100%)",
  lose: "linear-gradient(135deg, #BD1530 0%, #E21B3C 100%)",
  level: "linear-gradient(135deg, #1368CE 0%, #00C9B7 100%)",
  hero: "radial-gradient(ellipse at top, #111111 0%, #050505 70%)",

  // Achievement tiers
  bronze: "linear-gradient(135deg, #92400e 0%, #d97706 100%)",
  silver: "linear-gradient(135deg, #475569 0%, #94a3b8 100%)",
  gold: "linear-gradient(135deg, #d97706 0%, #fcd34d 50%, #f59e0b 100%)",
  platinum: "linear-gradient(135deg, #0891b2 0%, #a78bfa 50%, #22d3ee 100%)",
  legendary: "linear-gradient(135deg, #7c3aed 0%, #f43f5e 33%, #f97316 66%, #fbbf24 100%)",
} as const;

// ── Glow Colors (for box-shadow) ─────────────────────────────────────────────

export const glows = {
  brand: "rgba(19, 104, 206, 0.4)",
  brandLight: "rgba(43, 139, 245, 0.35)",
  accent: "rgba(0, 201, 183, 0.35)",
  xp: "rgba(255, 166, 2, 0.45)",
  streak: "rgba(235, 103, 15, 0.5)",
  win: "rgba(38, 137, 12, 0.4)",
  lose: "rgba(226, 27, 60, 0.4)",
} as const;

// ── Animation Durations ──────────────────────────────────────────────────────

export const durations = {
  fast: 120,
  base: 200,
  slow: 350,
  spring: 400,
  xpGain: 800,
  levelUp: 700,
  badgeUnlock: 800,
  confettiFall: 2000,
  streakFlame: 1200,
  progressFill: 1000,
  toastAutoDismiss: 5000,
} as const;

// ── Easing Functions ─────────────────────────────────────────────────────────

export const easings = {
  sharp: [0.4, 0, 0.2, 1] as const,
  smooth: [0.22, 1, 0.36, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  decelerate: [0, 0, 0.2, 1] as const,
  bounceIn: [0.36, 0.07, 0.19, 0.97] as const,
} as const;

// ── Framer Motion Variants (ready-to-use) ───────────────────────────────────

export const motionVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: durations.base / 1000, ease: easings.sharp } },
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: durations.slow / 1000, ease: easings.smooth } },
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: durations.base / 1000, ease: easings.spring } },
  },

  popIn: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: durations.spring / 1000, ease: easings.spring } },
  },

  slideInRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0, transition: { duration: durations.slow / 1000, ease: easings.smooth } },
  },

  xpGain: {
    initial: { opacity: 1, y: 0, scale: 1 },
    animate: { opacity: 0, y: -60, scale: 1.1 },
    transition: { duration: durations.xpGain / 1000, ease: easings.smooth },
  },

  badgeUnlock: {
    initial: { opacity: 0, scale: 0.4, rotate: -20 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: durations.badgeUnlock / 1000, ease: easings.spring },
  },

  toastSlideIn: {
    initial: { x: 120, opacity: 0, scale: 0.8 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: 120, opacity: 0, scale: 0.8 },
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },

  staggerContainer: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: durations.slow / 1000, ease: easings.smooth } },
  },
} as const;

// ── Achievement Tier Config ──────────────────────────────────────────────────

export type AchievementTier = "bronze" | "silver" | "gold" | "platinum" | "legendary";

export const achievementTiers: Record<
  AchievementTier,
  { gradient: string; glow: string; label: string; minXP: number }
> = {
  bronze: {
    gradient: gradients.bronze,
    glow: "rgba(180, 83, 9, 0.4)",
    label: "Bronze",
    minXP: 0,
  },
  silver: {
    gradient: gradients.silver,
    glow: "rgba(148, 163, 184, 0.4)",
    label: "Silver",
    minXP: 500,
  },
  gold: {
    gradient: gradients.gold,
    glow: "rgba(251, 191, 36, 0.5)",
    label: "Gold",
    minXP: 1500,
  },
  platinum: {
    gradient: gradients.platinum,
    glow: "rgba(34, 211, 238, 0.5)",
    label: "Platinum",
    minXP: 3500,
  },
  legendary: {
    gradient: gradients.legendary,
    glow: "rgba(167, 139, 250, 0.6)",
    label: "Legendary",
    minXP: 7500,
  },
};

export function getAchievementTier(xp: number): AchievementTier {
  if (xp >= achievementTiers.legendary.minXP) return "legendary";
  if (xp >= achievementTiers.platinum.minXP) return "platinum";
  if (xp >= achievementTiers.gold.minXP) return "gold";
  if (xp >= achievementTiers.silver.minXP) return "silver";
  return "bronze";
}

// ── Level System ─────────────────────────────────────────────────────────────

export const XP_PER_LEVEL = 250;

export function getLevelFromXP(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

export function getXPProgressInLevel(xp: number): number {
  return xp % XP_PER_LEVEL;
}

export function getXPProgressPercent(xp: number): number {
  return Math.round((getXPProgressInLevel(xp) / XP_PER_LEVEL) * 100);
}

export function getXPToNextLevel(xp: number): number {
  return XP_PER_LEVEL - getXPProgressInLevel(xp);
}

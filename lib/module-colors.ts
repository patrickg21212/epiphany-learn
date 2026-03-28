/**
 * Module Color Theming — Kahoot Accent Palette
 * Each module has its own bright accent color for dark canvas.
 */

export interface ModuleColorTheme {
  id: string;
  name: string;
  hex: string;
  tailwind: string;
  gradient: string;
  gradientSubtle: string;
  bgLight: string;
  bgMedium: string;
  textDark: string;
  border: string;
  glow: string;
}

export const MODULE_COLORS: Record<string, ModuleColorTheme> = {
  "module-1": {
    id: "module-1",
    name: "AI Fundamentals",
    hex: "#1368CE",
    tailwind: "blue",
    gradient: "linear-gradient(135deg, #0F52A0 0%, #1368CE 50%, #2B8BF5 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(19,104,206,0.15) 0%, rgba(43,139,245,0.08) 100%)",
    bgLight: "rgba(19,104,206,0.1)",
    bgMedium: "rgba(19,104,206,0.18)",
    textDark: "#4DA3FF",
    border: "rgba(19,104,206,0.35)",
    glow: "rgba(19,104,206,0.45)",
  },
  "module-2": {
    id: "module-2",
    name: "Your First AI Chat",
    hex: "#00C9B7",
    tailwind: "cyan",
    gradient: "linear-gradient(135deg, #009E90 0%, #00C9B7 50%, #33E8D8 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(0,201,183,0.15) 0%, rgba(51,232,216,0.08) 100%)",
    bgLight: "rgba(0,201,183,0.1)",
    bgMedium: "rgba(0,201,183,0.18)",
    textDark: "#33E8D8",
    border: "rgba(0,201,183,0.35)",
    glow: "rgba(0,201,183,0.45)",
  },
  "module-3": {
    id: "module-3",
    name: "AI in Your Day",
    hex: "#26890C",
    tailwind: "green",
    gradient: "linear-gradient(135deg, #1D6B0F 0%, #26890C 50%, #3CB518 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(38,137,12,0.15) 0%, rgba(60,181,24,0.08) 100%)",
    bgLight: "rgba(38,137,12,0.1)",
    bgMedium: "rgba(38,137,12,0.18)",
    textDark: "#4CD929",
    border: "rgba(38,137,12,0.35)",
    glow: "rgba(38,137,12,0.45)",
  },
  "module-4": {
    id: "module-4",
    name: "Safety & Trust",
    hex: "#EB670F",
    tailwind: "orange",
    gradient: "linear-gradient(135deg, #C7520A 0%, #EB670F 50%, #FF8A3D 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(235,103,15,0.15) 0%, rgba(255,138,61,0.08) 100%)",
    bgLight: "rgba(235,103,15,0.1)",
    bgMedium: "rgba(235,103,15,0.18)",
    textDark: "#FF9F5C",
    border: "rgba(235,103,15,0.35)",
    glow: "rgba(235,103,15,0.45)",
  },
  "module-5": {
    id: "module-5",
    name: "Buying Smart",
    hex: "#FF3EA5",
    tailwind: "pink",
    gradient: "linear-gradient(135deg, #D92D8A 0%, #FF3EA5 50%, #FF6FC0 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(255,62,165,0.15) 0%, rgba(255,111,192,0.08) 100%)",
    bgLight: "rgba(255,62,165,0.1)",
    bgMedium: "rgba(255,62,165,0.18)",
    textDark: "#FF6FC0",
    border: "rgba(255,62,165,0.35)",
    glow: "rgba(255,62,165,0.45)",
  },
  "module-6": {
    id: "module-6",
    name: "Your First Project",
    hex: "#FFA602",
    tailwind: "amber",
    gradient: "linear-gradient(135deg, #D98B00 0%, #FFA602 50%, #FFD166 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(255,166,2,0.15) 0%, rgba(255,209,102,0.08) 100%)",
    bgLight: "rgba(255,166,2,0.1)",
    bgMedium: "rgba(255,166,2,0.18)",
    textDark: "#FFD166",
    border: "rgba(255,166,2,0.35)",
    glow: "rgba(255,166,2,0.45)",
  },
  "module-7": {
    id: "module-7",
    name: "AI Anxiety Is Normal",
    hex: "#E21B3C",
    tailwind: "red",
    gradient: "linear-gradient(135deg, #B3152F 0%, #E21B3C 50%, #FF4757 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(226,27,60,0.15) 0%, rgba(226,27,60,0.08) 100%)",
    bgLight: "rgba(226,27,60,0.1)",
    bgMedium: "rgba(226,27,60,0.18)",
    textDark: "#FF6B7A",
    border: "rgba(226,27,60,0.35)",
    glow: "rgba(226,27,60,0.45)",
  },
};

export function getModuleColor(moduleId: string): ModuleColorTheme {
  return MODULE_COLORS[moduleId] ?? MODULE_COLORS["module-1"];
}

/** CSS variable string for use in style attributes */
export function getModuleColorVars(moduleId: string): Record<string, string> {
  const c = getModuleColor(moduleId);
  return {
    "--module-color": c.hex,
    "--module-gradient": c.gradient,
    "--module-gradient-subtle": c.gradientSubtle,
    "--module-bg-light": c.bgLight,
    "--module-bg-medium": c.bgMedium,
    "--module-text-dark": c.textDark,
    "--module-border": c.border,
    "--module-glow": c.glow,
  };
}

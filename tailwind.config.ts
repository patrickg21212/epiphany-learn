import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      // ─── Brand / Primary ─────────────────────────────────────────────────
      // Electric Violet — the main identity color
      colors: {
        // ─── Brand (Kahoot Blue) ──────────────────────────────────────────
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

        // ─── Kahoot Accents ────────────────────────────────────────────────
        "k-red":    { DEFAULT: "#E21B3C", light: "#FF4D6A", dim: "rgba(226,27,60,0.12)" },
        "k-blue":   { DEFAULT: "#1368CE", light: "#4DA3FF", dim: "rgba(19,104,206,0.12)" },
        "k-gold":   { DEFAULT: "#FFA602", light: "#FFD166", dim: "rgba(255,166,2,0.12)" },
        "k-green":  { DEFAULT: "#26890C", light: "#4CD929", dim: "rgba(38,137,12,0.12)" },
        "k-cyan":   { DEFAULT: "#00C9B7", light: "#33E8D8", dim: "rgba(0,201,183,0.12)" },
        "k-magenta":{ DEFAULT: "#FF3EA5", light: "#FF6FC0", dim: "rgba(255,62,165,0.12)" },
        "k-orange": { DEFAULT: "#EB670F", light: "#FF9F5C", dim: "rgba(235,103,15,0.12)" },

        // ─── Accent: Cyan ─────────────────────────────────────────────────
        accent: {
          50: "#E6FBF9",
          100: "#B3F3ED",
          200: "#66E8DC",
          300: "#33E8D8",
          400: "#00C9B7",
          500: "#009E90",
          600: "#007A6F",
          700: "#005750",
          800: "#003B36",
          900: "#001E1B",
          950: "#000F0D",
        },

        // ─── XP / Gold ────────────────────────────────────────────────────
        xp: {
          50: "#FFF8E6",
          100: "#FFECB3",
          200: "#FFD166",
          300: "#FFBF33",
          400: "#FFA602",
          500: "#D98B00",
          600: "#B37100",
          700: "#8C5800",
          800: "#664000",
          900: "#402800",
          950: "#1A1000",
        },

        // ─── Streak / Fire ────────────────────────────────────────────────
        streak: {
          50: "#FFF0E6",
          100: "#FFD9B3",
          200: "#FF9F5C",
          300: "#FF8A3D",
          400: "#EB670F",
          500: "#C7520A",
          600: "#A33F07",
          700: "#7F2F05",
          800: "#5C2104",
          900: "#381302",
          950: "#1A0901",
        },

        // ─── Success / Correct ────────────────────────────────────────────
        win: {
          50: "#EAFDE5",
          100: "#C5F9BA",
          200: "#7AEF63",
          300: "#4CD929",
          400: "#3CB518",
          500: "#26890C",
          600: "#1D6B0F",
          700: "#155010",
          800: "#0E380C",
          900: "#072007",
          950: "#031003",
        },

        // ─── Error / Wrong ────────────────────────────────────────────────
        lose: {
          50: "#FDE8EC",
          100: "#FACAD2",
          200: "#F58DA0",
          300: "#FF4D6A",
          400: "#E21B3C",
          500: "#BD1530",
          600: "#991025",
          700: "#740C1C",
          800: "#500813",
          900: "#2B040A",
          950: "#150205",
        },

        // ─── Dark Surfaces ────────────────────────────────────────────────
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
      },

      // ─── Typography ───────────────────────────────────────────────────
      /* Kahoot CSS ref: font-family: 'Montserrat', sans-serif */
      fontFamily: {
        sans: ["var(--font-montserrat)", "'Montserrat'", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-montserrat)", "'Montserrat'", "system-ui", "sans-serif"],
      },

      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
      },

      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        "game-label": "0.12em",
      },

      // ─── Spacing ──────────────────────────────────────────────────────
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },

      // ─── Border Radius ────────────────────────────────────────────────
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        pill: "9999px",
      },

      // ─── Shadows / Glows ─────────────────────────────────────────────
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.08)",
        sm: "0 2px 4px 0 rgb(0 0 0 / 0.12)",
        md: "0 4px 16px 0 rgb(0 0 0 / 0.16)",
        lg: "0 8px 32px 0 rgb(0 0 0 / 0.24)",
        xl: "0 16px 48px 0 rgb(0 0 0 / 0.32)",
        "2xl": "0 24px 64px 0 rgb(0 0 0 / 0.40)",
        "glow-brand": "0 0 20px 4px rgba(19,104,206,0.35), 0 0 40px 8px rgba(19,104,206,0.15)",
        "glow-brand-sm": "0 0 10px 2px rgba(19,104,206,0.3)",
        "glow-accent": "0 0 20px 4px rgba(0,201,183,0.35), 0 0 40px 8px rgba(0,201,183,0.15)",
        "glow-xp": "0 0 16px 3px rgba(255,166,2,0.4), 0 0 32px 6px rgba(255,166,2,0.15)",
        "glow-streak": "0 0 16px 3px rgba(235,103,15,0.45), 0 0 32px 8px rgba(235,103,15,0.2)",
        "glow-win": "0 0 16px 3px rgba(38,137,12,0.4), 0 0 32px 6px rgba(38,137,12,0.15)",
        "glow-lose": "0 0 16px 3px rgba(226,27,60,0.4), 0 0 32px 6px rgba(226,27,60,0.15)",
        "card-dark": "0 4px 24px 0 rgba(0,0,0,0.5), 0 1px 0 0 rgba(255,255,255,0.03) inset",
        "card-dark-lg": "0 8px 40px 0 rgba(0,0,0,0.6), 0 1px 0 0 rgba(255,255,255,0.05) inset",
        "card-hover": "0 8px 32px 0 rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
      },

      // ─── Gradients ────────────────────────────────────────────────────
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0F52A0 0%, #1368CE 50%, #00C9B7 100%)",
        "gradient-brand-soft": "linear-gradient(135deg, rgba(19,104,206,0.15) 0%, rgba(0,201,183,0.1) 100%)",
        "gradient-hero": "radial-gradient(ellipse at top, #111111 0%, #050505 70%)",
        "gradient-card": "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)",
        "gradient-xp": "linear-gradient(90deg, #FFA602 0%, #FFD166 50%, #FFA602 100%)",
        "gradient-xp-shimmer": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
        "gradient-streak": "linear-gradient(180deg, #FFD166 0%, #EB670F 40%, #E21B3C 100%)",
        "gradient-win": "linear-gradient(135deg, #1D6B0F 0%, #26890C 100%)",
        "gradient-level": "linear-gradient(135deg, #1368CE 0%, #00C9B7 100%)",
        "gradient-bronze": "linear-gradient(135deg, #92400e 0%, #d97706 100%)",
        "gradient-silver": "linear-gradient(135deg, #475569 0%, #94a3b8 100%)",
        "gradient-gold": "linear-gradient(135deg, #D98B00 0%, #FFD166 50%, #FFA602 100%)",
        "gradient-platinum": "linear-gradient(135deg, #009E90 0%, #1368CE 50%, #00C9B7 100%)",
        "gradient-legendary": "linear-gradient(135deg, #1368CE 0%, #E21B3C 33%, #EB670F 66%, #FFA602 100%)",
        "shimmer": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
      },

      // ─── Animations ──────────────────────────────────────────────────
      animation: {
        "fade-in": "fadeIn 0.4s ease-out both",
        "fade-in-up": "fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-down": "fadeInDown 0.4s ease-out both",
        "slide-up": "slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-in-right": "slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "bounce-in": "bounceIn 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
        "pop-in": "popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "xp-gain": "xpGain 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "level-up": "levelUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "badge-unlock": "badgeUnlock 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "streak-flame": "streakFlame 1.2s ease-in-out infinite alternate",
        "fire-flicker": "fireFlicker 1.2s ease-in-out infinite alternate",
        "float-up-fade": "floatUpFade 1.2s ease-out forwards",
        "confetti-fall": "confettiFall var(--duration, 2s) ease-in var(--delay, 0s) forwards",
        "star-burst": "starBurst 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "progress-shimmer": "progressShimmer 1.8s linear infinite",
        "shimmer": "shimmer 1.5s infinite",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
        "glow-pulse-fast": "glowPulse 1.2s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "orbit-slow": "orbitSlow 8s ease-in-out infinite",
        "spin-slow": "spin 4s linear infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "correct-flash": "correctFlash 0.5s ease-out forwards",
        "wrong-shake": "wrongShake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
        "tap-feedback": "tapFeedback 0.15s ease-out both",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(24px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.85)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.12)", opacity: "1" },
          "75%": { transform: "scale(0.94)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "70%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        xpGain: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "30%": { transform: "translateY(-8px) scale(1.2)", opacity: "1" },
          "100%": { transform: "translateY(-48px) scale(0.9)", opacity: "0" },
        },
        levelUp: {
          "0%": { transform: "scale(0.5) rotate(-10deg)", opacity: "0" },
          "50%": { transform: "scale(1.2) rotate(3deg)", opacity: "1" },
          "75%": { transform: "scale(0.95) rotate(-1deg)" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        badgeUnlock: {
          "0%": { transform: "scale(0.4) rotate(-20deg)", opacity: "0" },
          "60%": { transform: "scale(1.15) rotate(5deg)", opacity: "1" },
          "80%": { transform: "scale(0.96) rotate(-2deg)" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        streakFlame: {
          "0%": { transform: "scaleY(1) scaleX(1) rotate(-3deg)", filter: "brightness(1) saturate(1)" },
          "25%": { transform: "scaleY(1.06) scaleX(0.96) rotate(2deg)", filter: "brightness(1.15) saturate(1.2)" },
          "50%": { transform: "scaleY(0.96) scaleX(1.04) rotate(-1deg)", filter: "brightness(0.9) saturate(0.9)" },
          "75%": { transform: "scaleY(1.08) scaleX(0.95) rotate(3deg)", filter: "brightness(1.2) saturate(1.3)" },
          "100%": { transform: "scaleY(1.02) scaleX(0.98) rotate(-2deg)", filter: "brightness(1.05) saturate(1.1)" },
        },
        fireFlicker: {
          "0%": { transform: "scaleY(1) scaleX(1) rotate(-2deg)", filter: "brightness(1)" },
          "33%": { transform: "scaleY(1.05) scaleX(0.97) rotate(1deg)", filter: "brightness(1.1)" },
          "66%": { transform: "scaleY(0.97) scaleX(1.02) rotate(-1deg)", filter: "brightness(0.95)" },
          "100%": { transform: "scaleY(1.03) scaleX(0.98) rotate(2deg)", filter: "brightness(1.05)" },
        },
        floatUpFade: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(-80px) scale(1.1)", opacity: "0" },
        },
        confettiFall: {
          "0%": { transform: "translateY(-20px) rotate(0deg)", opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(var(--rotation, 720deg))", opacity: "0" },
        },
        starBurst: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "50%": { transform: "scale(1.3) rotate(180deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(360deg)", opacity: "1" },
        },
        progressShimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(400%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.03)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        orbitSlow: {
          "0%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
          "25%": { transform: "translateY(-8px) translateX(6px) rotate(5deg)" },
          "50%": { transform: "translateY(-2px) translateX(-4px) rotate(-3deg)" },
          "75%": { transform: "translateY(6px) translateX(8px) rotate(4deg)" },
          "100%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
        },
        correctFlash: {
          "0%": { backgroundColor: "rgba(34, 197, 94, 0)" },
          "30%": { backgroundColor: "rgba(34, 197, 94, 0.25)" },
          "100%": { backgroundColor: "rgba(34, 197, 94, 0)" },
        },
        wrongShake: {
          "0%, 100%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(-8px) rotate(-1deg)" },
          "30%": { transform: "translateX(7px) rotate(1deg)" },
          "45%": { transform: "translateX(-6px)" },
          "60%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-3px)" },
          "90%": { transform: "translateX(2px)" },
        },
        tapFeedback: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },

      // ─── Easing ───────────────────────────────────────────────────────
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.2, 1)",
        decelerate: "cubic-bezier(0, 0, 0.2, 1)",
      },

      // ─── Backdrop Blur ────────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
      },

      // ─── Z-Index ──────────────────────────────────────────────────────
      zIndex: {
        modal: "100",
        toast: "200",
        overlay: "300",
        tooltip: "400",
      },
    },
  },
  plugins: [],
};

export default config;

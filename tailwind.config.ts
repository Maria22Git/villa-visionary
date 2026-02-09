import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Victoria Villas — Architectural Palette
        navy: {
          deep: "hsl(var(--navy-deep))",
          main: "hsl(var(--navy-main))",
          900: "hsl(var(--navy-deep))",
          800: "hsl(var(--navy-main))",
          600: "hsl(var(--blue-architect))",
        },
        blue: {
          architect: "hsl(var(--blue-architect))",
          soft: "hsl(var(--blue-soft))",
          air: "hsl(var(--blue-air))",
        },
        teal: {
          500: "hsl(var(--blue-soft))",
          400: "hsl(var(--blue-air))",
        },
        sky: {
          400: "hsl(var(--sky-light))",
          200: "hsl(var(--mist))",
        },
        red: {
          DEFAULT: "hsl(var(--accent-red))",
          hover: "hsl(var(--accent-red-hover))",
          light: "hsl(var(--accent-red-light))",
        },
        green: {
          muted: "hsl(var(--green-muted))",
          light: "hsl(var(--green-muted-light))",
        },
      },
      fontFamily: {
        editorial: ["Playfair Display", "Georgia", "serif"],
        architectural: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["10rem", { lineHeight: "0.85", letterSpacing: "-0.04em" }],
        "display-xl": ["8rem", { lineHeight: "0.85", letterSpacing: "-0.03em" }],
        "display-lg": ["6rem", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "display-md": ["4.5rem", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-sm": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(60px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "reveal-text": {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, -20px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-up": "fade-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-up": "slide-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "reveal-text": "reveal-text 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        drift: "drift 20s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 4px 30px -4px rgba(0, 29, 57, 0.06)",
        medium: "0 12px 40px -8px rgba(0, 29, 57, 0.1)",
        large: "0 25px 80px -15px rgba(0, 29, 57, 0.15)",
        cinematic: "0 40px 100px -20px rgba(0, 29, 57, 0.25)",
        "glow-red": "0 0 50px -15px rgba(180, 70, 70, 0.35)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(165deg, hsl(210 100% 11%) 0%, hsl(210 80% 25%) 40%, hsl(210 35% 46%) 100%)",
        "gradient-ocean": "linear-gradient(180deg, hsl(192 35% 47%) 0%, hsl(210 80% 25%) 100%)",
        "gradient-atmosphere": "linear-gradient(180deg, hsl(204 55% 82% / 0.3) 0%, hsl(210 20% 99%) 100%)",
        "gradient-liquid": "linear-gradient(135deg, hsl(192 35% 47% / 0.15) 0%, hsl(204 75% 70% / 0.1) 50%, hsl(204 55% 82% / 0.2) 100%)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.4, 0, 0.2, 1)",
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

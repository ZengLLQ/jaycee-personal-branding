/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2EEE3",
        paper: "#FAF8F2",
        ink: "#0F1117",
        night: "#161822",
        vermilion: "#8E8CD8",
        "vermilion-dark": "#5552B9",
      },
      fontFamily: {
        // Inter first; CJK fallbacks so "曾令强" renders crisply on every OS.
        sans: [
          "var(--font-inter)",
          "Inter",
          "Noto Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        // Headline tracking
        tightest: "-0.05em",
        ultra: "-0.065em",
        // Micro-label tracking
        label: "0.22em",
        wideish: "0.32em",
      },
      fontSize: {
        // Giant editorial display sizes (fluid)
        display: ["clamp(4.5rem, 19vw, 22rem)", { lineHeight: "0.82" }],
        "display-sm": ["clamp(3rem, 9vw, 9rem)", { lineHeight: "0.88" }],
        "display-xs": ["clamp(2.25rem, 5.5vw, 5rem)", { lineHeight: "0.95" }],
      },
      backgroundImage: {
        // Technical / blueprint grid on light surfaces
        blueprint:
          "linear-gradient(to right, rgba(15,17,23,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,17,23,0.07) 1px, transparent 1px)",
        "blueprint-fine":
          "linear-gradient(to right, rgba(15,17,23,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,17,23,0.045) 1px, transparent 1px)",
        // Same grid for dark surfaces
        "blueprint-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "80px 80px",
        "grid-fine": "16px 16px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.7)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "pulse-dot": "pulseDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

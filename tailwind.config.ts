import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#0B0C0E", // base background
          900: "#111214", // app shell
          800: "#17181B", // surfaces / rows
          700: "#1D1F22", // hover surface
          600: "#26282C", // borders
          500: "#34363B", // stronger borders / dividers
        },
        ink: {
          100: "#ECEAE4", // primary text (warm off-white)
          300: "#B9B9B7",
          500: "#8B8D92", // secondary text
          700: "#5B5D62", // tertiary / disabled
        },
        signal: {
          DEFAULT: "#C9A227", // brass / amber accent
          soft: "#C9A22733",
          line: "#C9A22766",
        },
        priority: {
          low: "#5B5D62",
          medium: "#7C93A8",
          high: "#C9A227",
          urgent: "#C24E3A",
        },
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        micro: ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.06em" }],
      },
      boxShadow: {
        row: "inset 1px 0 0 0 var(--tw-shadow-color)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
        noise: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGZpbHRlciBpZD0nbicgeD0nMCcgeT0nMCc+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuOScgbnVtT2N0YXZlcz0nMicgc3RpdGNoVGlsZXM9J3N0aXRjaCcvPjxmZUNvbG9yTWF0cml4IHR5cGU9J3NhdHVyYXRlJyB2YWx1ZXM9JzAnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHk9JzAuMDMnLz48L3N2Zz4=')",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050506",
        panel: "#121214",
        panel2: "#1b1b1e",
        line: "#2c2c30",
        bone: "#f2f2f1",
        muted: "#9a9a9f",
        bronze: "#e11d2e",
        bronze2: "#ff4d5e",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        heavy: ["var(--font-heavy)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      maxWidth: {
        content: "1320px",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
export default config;

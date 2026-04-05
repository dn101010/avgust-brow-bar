import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        "warm-white": "#FEFCF9",
        ink: "#2A2420",
        "ink-soft": "#4A4440",
        stone: "#8A857E",
        gold: "#C5A47E",
        "gold-hover": "#B08D68",
        "gold-light": "rgba(197,164,126,0.12)",
        "gold-glow": "rgba(197,164,126,0.25)",
        linen: "#F3EDE4",
        petal: "#E8DFD4",
        bloom: "#D4C4B0",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        body: ["Nunito Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        soft: "0px 2px 12px rgba(42,36,32,0.06)",
        standard: "0px 4px 28px rgba(42,36,32,0.08)",
        elevated: "0px 12px 48px rgba(42,36,32,0.12), 0px 2px 8px rgba(42,36,32,0.06)",
        "gold-glow": "0px 8px 28px rgba(197,164,126,0.30)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        accent: "#C5A47E",
        "accent-hover": "#B08D68",
        "bg-main": "#FAFAF8",
        "bg-alt": "#F5F0EB",
        "text-main": "#333333",
        "text-muted": "#888888",
        border: "#E8E0D8",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

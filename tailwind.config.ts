import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark-mode"], // Fixed syntax
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2371ba",
        secondary: "#d6f7f0",
        gold: "#fcbd3f",
      },
    },
  },
  plugins: [],
};

export default config;

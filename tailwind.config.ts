import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937", // Gray 800 - Text Utama
        secondary: "#4b5563", // Gray 600 - Text Secondary
        accent: "#4f46e5", // Indigo 600 - Tombol/Link
        background: "#ffffff",
        surface: "#f9fafb", // Gray 50 - Background Section
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D2E27",      // Deep Forest Green
        secondary: "#2C3E3A",    // Slate Green/Dark Gray for body text
        accent: "#E88358",       // Terracotta Orange for main Call-to-Actions
        background: "#F4F7F6"    // Soft Off-White/Greenish Light background
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out"
      }
    }
  }
};

export default config;
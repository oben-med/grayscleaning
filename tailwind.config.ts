import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#032B44",
        secondary: "#FFFFFF",
        accent: "#FFA07A",
        background: "#F7F7F7"
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
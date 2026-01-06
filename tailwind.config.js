// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#033E8C",
        orange: "#FF6F00",
        graphite: "#2B2B2B",
        pastel: "#ffebb0",
        pastelDark: "#ffd89a",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(255, 216, 154, 0.4)",
        softHover: "0 12px 32px rgba(255, 216, 154, 0.6)",
      },
    },
  },
  plugins: [],
};

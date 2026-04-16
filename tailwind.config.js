/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brief: {
          bg: "#0d0f14",
          panel: "#151922",
          ink: "#f3f4f6",
          muted: "#b8bfcc",
          accent: "#c7a56f",
          line: "#2a3040",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "0.12em",
      },
      boxShadow: {
        panel: "0 10px 40px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
}


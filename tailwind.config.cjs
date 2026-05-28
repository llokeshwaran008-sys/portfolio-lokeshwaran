// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}" // for legacy Vite files during migration
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // cyan-500
        secondary: "#7c3aed", // violet-600
        "primary-glow": "rgba(14,165,233,0.4)"
      },
      fontFamily: {
        heading: ["'Inter', sans-serif"],
        body: ["'Inter', sans-serif"]
      }
    }
  },
  plugins: []
};


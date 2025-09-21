/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#0ea5e9",
      },
    },
  },
  plugins: [
    require("tailwindcss-container-queries"),
  ],
}
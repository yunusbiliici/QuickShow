/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ef4444", // kırmızı
        "primary-dull": "#f87171", // açık kırmızı
      },
    },
  },
  plugins: [],
}
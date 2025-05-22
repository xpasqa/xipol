/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", 
    "./admin/**/*.html",
    "./components/**/*.js",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#450a0a",
          900: "#7f1d1d",
          700: "#b91c1c",
          300: "#fca5a5",
          400: "#f87171",
          600: "#dc2626",
        }
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      }
    },
  },
  plugins: [],
};

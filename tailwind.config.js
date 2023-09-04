/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f9f9f9',
          800: '#202124',
        }
      }
    },
    fontFamily: {
      main: "Comfortaa",
    },
  },
  plugins: [],
}


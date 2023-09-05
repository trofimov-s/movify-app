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
        },
        turquise: {
          100: "#06d1de",
          400: "#0fbac5",
        },
        blue: {
          200: "#2cbaff",
        }
      },
      height: {
        30: "7.5rem" // 120px
      }
    },
    fontFamily: {
      main: "Comfortaa",
    },
  },
  plugins: [],
}


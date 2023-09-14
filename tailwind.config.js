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
          200: '#dddddd',
          500: '#6b7280',
          800: '#202124',
        },
        turquise: {
          100: "#06d1de",
          400: "#0fbac5",
          900: "#006b72",
        },
        blue: {
          200: "#2cbaff",
        }
      },
      spacing: {
        30: "7.5rem", // 120px
        37.5: "9.375rem", // 150px
      },
      maxWidth: {
        315: "78.75rem", // 1260px
      },
    },
    fontFamily: {
      main: "Comfortaa",
    },
  },
  plugins: [],
}


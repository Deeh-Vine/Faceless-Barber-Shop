/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.html"],
  theme: {
    extend: {
      screens:{
        tab: "800px",
      },
      fontFamily: {
        'mona': ['Mona Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

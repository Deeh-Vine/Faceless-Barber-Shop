/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.html"],
  theme: {
    extend: {
      screens:{
        tab: "850px",
      },
      fontFamily: {
        'mona': ['Mona Sans', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'dm-serif': ['"DM Serif Display"', 'serif'],
      }
    },
  },
  plugins: [],
};

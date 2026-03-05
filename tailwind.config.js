/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'mona': ['Mona Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

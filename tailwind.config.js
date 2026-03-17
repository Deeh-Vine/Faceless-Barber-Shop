/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.html"],
  theme: {
    extend: {
      screens: {
        tab: "800px",
      },
      keyframes: {
        bounces: {
          "0%": {
            transform: "scaleY(0)",
          },
          "80%": {
            transform: "scaleY(1.3)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
      animation:{
        'bounces': 'bounces 0.5s ease-in-out forwards',
      },
      fontFamily: {
        mona: ["Mona Sans", "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
        "dm-serif": ['"DM Serif Display"', "serif"],
      },
    },
  },
  plugins: [],
};

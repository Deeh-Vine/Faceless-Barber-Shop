/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.html"],
  theme: {
    extend: {
      screens: {
        tab: "850px",
      },
      colors: {
              barber: {
                light: '#F8FAFC', // Crisp Light Background
                navy: '#1A2235',  
                deepnavy: '#020618', // Deep Flyer Blue
                gold: {
                  DEFAULT: '#B68E5C', // Standard Gold
                  light: '#CFA06D',   // Hover Gold
                },
                espresso: {
                  700: '#634433', // Soft text (paragraphs)
                  800: '#4A3123', // Button hover
                  900: '#362319', // Main headings & buttons
                }
              }
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

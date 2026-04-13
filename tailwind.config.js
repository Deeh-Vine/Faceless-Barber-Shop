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
          light: "#F8FAFC", // Crisp Light Background
          navy: "#1A2235",
          deepnavy: "#020618", // Deep Flyer Blue
          gold: {
            DEFAULT: "#B68E5C", // Standard Gold
            light: "#CFA06D", // Hover Gold
          },
          espresso: {
            700: "#634433", // Soft text (paragraphs)
            800: "#4A3123", // Button hover
            900: "#362319", // Main headings & buttons
          },
        },
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
        scrolling: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        bounces: "bounces 0.5s ease-in-out forwards",
        scrolling: "scrolling 20s infinite linear"
      },
      fontFamily: {
        mona: ["Mona Sans", "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
        "dm-serif": ['"DM Serif Display"', "serif"],
      },
      maskImage: {
        "fade-edges":
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      },
      webkitMaskImage: {
        "fade-edges":
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".fade-edges-window": {
          "-webkit-mask-image":
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          "mask-image":
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        },
      });
    },
  ],
};

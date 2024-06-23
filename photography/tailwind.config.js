// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        orange:
          "0 4px 6px -1px rgba(255, 140, 0, 0.7), 0 2px 4px -1px rgba(255, 140, 0, 0.06)", // Darker orange shadow
      },
      textShadow: {
        grey: "2px 2px 4px rgba(128, 128, 128, 0.7)", // Custom grey text shadow
        darkOrange: "2px 2px 4px rgba(255, 140, 0, 0.7)", // Darker orange text shadow
      },
      colors: {
        darkOrange: "#ff8c00", // Darker orange color
      },
    },
  },
  variants: {
    extend: {
      textShadow: ["hover"], // Enable hover variants for text shadows
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".glow-effect": {
          filter: "drop-shadow(0 0 10px rgba(255,140,0,0.7))",
        },
        ".text-shadow-grey": {
          textShadow: "2px 2px 4px rgba(128, 128, 128, 0.7)",
        },
        ".hover\\:text-shadow-grey:hover": {
          textShadow: "2px 2px 4px rgba(128, 128, 128, 0.7)",
        },
        ".text-shadow-darkOrange": {
          textShadow: "2px 2px 4px rgba(255, 140, 0, 0.7)",
        },
        ".hover\\:text-shadow-darkOrange:hover": {
          textShadow: "2px 2px 4px rgba(255, 140, 0, 0.7)",
        },
        ".hover\\:text-darkOrange:hover": {
          color: "#ff8c00",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

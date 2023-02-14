const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layout/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1140px",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#b3ccd8",
          DEFAULT: "#4c7c94",
          dark: "#1e323b",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        "grid-area": (value) => ({
          "grid-area": value.split(" ").join(" / "),
        }),
      });
    }),
  ],
};

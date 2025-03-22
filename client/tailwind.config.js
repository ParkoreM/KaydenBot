/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "550px",
      md: "768px",
      lg: "1080px",
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      blue: "#037E93",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      red: "#d1001f",
      yellow: "#e5de00",
      gray: {
        100: "#C9C9C9",
        200: "#8D8D8D",
        300: "#EBEBEB",
        400: "#636363",
      },
      purple: {
        100: "#6320EE",
        200: "#7236EF",
      },
      200: "#7236EF",
    },
    fontFamily: {
      pf: ["Playfair Display", "serif"],
    },
  },

  extend: {
    spacing: {
      128: "60rem",
    },

    gridTemplateColumns: {
      "auto-fill-100": "repeat(auto-fill, minmax(150px, 1fr))",
      "auto-fit-100": "repeat(auto-fit, minmax(150px, 1fr))",
    },
  },
  plugins: [],
};

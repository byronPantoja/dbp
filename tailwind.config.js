/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        pink: {
          main: "#ff8482",
          light: "#ff9d9b",
          lighter: "#ffdada",
          dark: "#e67775",
          darker: "#994f4e",
          dropshadow: "#ffdada30",
        },
        blue: {
          main: "#403b8f",
          light: "#534f9a",
          lighter: "#8c89bc",
          dark: "#332f72",
          darker: "#201e48",
        },
        grey: {
          main: "#f2f2f2",
          secondary: "#cacaca",
          dark: "#656565",
          darker: "#4c4c4c",
        },
        fill: {
          mainbg: "#fcfcfc",
          black: "#191919",
          white: "#fefefe",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "DM-sans, sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};

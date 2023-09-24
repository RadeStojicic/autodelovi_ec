const { addDynamicIconSelectors } = require("@iconify/tailwind");
/**@type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/*.html",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        checkBoxColor: "rgb(59 113 202 / 1)",
        navbarText: "#878787;",
        primary: "#032443",
        secondary: "#f1c607",
        blueColor: "#183aa1",
      },
      height: {
        18: "4.5rem",
        100: "28rem",
        104: "32rem",
        108: "36rem",
        112: "40rem",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};

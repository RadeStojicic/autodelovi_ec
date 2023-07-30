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
        footerBackground: "#0e0d12",
        footerHr: "#1c1b22",
        checkBoxColor: "rgb(59 113 202 / 1)",
      },
      height: {
        104: "32rem",
        108: "36rem",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};

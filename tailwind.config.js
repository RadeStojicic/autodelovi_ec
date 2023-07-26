const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'footerBackground':'#0e0d12',
        'footerHr': '#1c1b22'
      },
      height: {
        '104': '32rem',
      },
    
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    iconsPlugin({
      collections: getIconCollections(["prime"]),
    }),
    
  ],
}



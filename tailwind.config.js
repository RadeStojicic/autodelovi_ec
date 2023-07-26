const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
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
    iconsPlugin({
      collections: getIconCollections(["prime"]),
    }),
  ],
}



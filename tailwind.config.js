const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'primary': "#1d57dc",
        'priceColor': "#fe7335"
      },
     
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["prime"]),
    }),
  ],
}



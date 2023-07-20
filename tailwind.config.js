const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindcss: {
    jit: true,
  },
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["prime"]),
    }),
  ],
}



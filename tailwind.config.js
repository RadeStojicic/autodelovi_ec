const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindcss: {
    jit: true,
  },
  theme: {
    extend: {
      colors: {
        'primary': "#ed2724"
      },
     
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["prime"]),
    }),
  ],
}



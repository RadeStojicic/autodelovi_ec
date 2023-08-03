// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@vue-macros/nuxt",
  ],
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  macros: {
    defineModels: {
      unified: false,
    },
  },
  router: {
    options: {
      linkActiveClass: "active",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
});

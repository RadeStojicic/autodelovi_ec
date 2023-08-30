// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  app: {
    head: {
      title: "AutoParts - Prodaja autodelova",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Naša platforma nudi korisnički prijateljsko iskustvo koje vam omogućava laku pretragu i pronalaženje željenih delova..",
        },
      ],
    },
  },
  nitro: {
    preset: "vercel-edge",
  },
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },
  vue: {
    defineModel: true,
    propsDestructure: true,
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

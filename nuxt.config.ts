// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/fonts",
    "@hypernym/nuxt-gsap",
  ],
  css: [`assets/styles/main.css`],
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});

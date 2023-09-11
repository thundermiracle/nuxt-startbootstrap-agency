// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/image"],
  css: ["~/assets/styles/bootstrap.scss", "~/assets/styles/global.css"],
});

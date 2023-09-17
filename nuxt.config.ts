// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/image", "@vite-pwa/nuxt"],
  css: ["~/assets/styles/bootstrap.scss", "~/assets/styles/global.css"],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "vue-startbootstrap-agency",
      short_name: "vue-startbootstrap-agency",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#fed136",
      display: "minimal-ui",
      icons: [
        {
          src: "icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon-256x256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/images/ub.png" }],
    },
  },
  plugins: [{ src: "~/plugins/vue-konva", mode: "client" }],
});

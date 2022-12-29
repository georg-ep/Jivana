export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jivana Spices',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.jpeg' }
    ]
  },

  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/global.scss"],

  target: 'static',


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/shopify.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  googleFonts: {
    download: true,
    families: {
      "Space Grotesk": true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

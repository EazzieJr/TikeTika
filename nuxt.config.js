export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/tailwind/tailwind.css', '@/assets/main.css'],

  // Customize scroll behavior
  router: {
    scrollBehavior() {
      return { x: 0, y: 0 };
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-html-secure.client',
    '~/plugins/cookie',
    '~/plugins/moment.js',
    { src: '~/plugins/clickaway.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-route-meta',
    '@nuxtjs/i18n',
  ],

  axios: {
    // Axios options
    baseURL: 'https://tiketika.co.tz/api/',
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "en",
    },
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "sw",
        name: "Swahili",
        file: "sw-SW.json",
      }
    ],
    lazy: true,
    langDir: "internationalization",
    defaultLocale: "sw",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}

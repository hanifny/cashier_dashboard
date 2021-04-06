export default {
  // ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cashier Dashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // vendors
    '@/static/css/vendors/vendors.min.css',
    '@/static/css/vendors/chartist.css',
    '@/static/css/vendors/chartist-plugin-tooltip.css',

    // themes
    '@/static/css/themes/colors.min.css',
    '@/static/css/themes/bootstrap.min.css',
    '@/static/css/themes/bootstrap-extended.min.css',
    '@/static/css/themes/components.min.css',

    // pages
    // '@/static/css/pages/login-register.min.css',
    '@/static/css/pages/vertical-menu.min.css',
    '@/static/css/pages/palette-gradient.min.css',
    '@/static/css/pages/chat-application.min.css',
    '@/static/css/pages/dashboard-analytics.min.css',

    // custom
    '@/static/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.pms-dev.sanbersy.com',
    headers: {
      common: {
        'apiKey': 'kunciaksesrahasiakeapi'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/users/get-detail-user/demo', method: 'get' }
        },
      },
    },
    redirect: {
      login: '/login',
      home: '/',
    }
  }
}

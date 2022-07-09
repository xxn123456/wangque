export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   
   */
  target: 'server',
  mode: 'universal',
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  router: {
    base: '/'
  },
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0'
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '忘却之都-博客',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'baidu-site-verification',
        content: 'code-Dt2NssqXu2'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: 'http://shutiaogege.top/jianli/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/element-ui',
      ssr: false
    },
    {
      src: '~/plugins/mavon-editor',
      ssr: false
    },
    {
      src: '~plugins/swiper.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-baberrage.js',
      ssr: false
    },
    

  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
   axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },


  proxy: {
    '/api': {
        // target: 'http://shutiaogege.top:3000', // 目标接口域名
        target: 'http://localhost:3000', // 目标接口域名
        changeOrigin: true, // 表示是否跨域
        pathRewrite: {
          '^/api': '', // 把 /api 替换成‘’
        }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
  }
}

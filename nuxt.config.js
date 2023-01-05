import webpack from 'webpack';
require('dotenv').config();
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // generate: {
  //   exclude: [/^\/login/, /^\/messages/, /^\/reviews/, /^\/profile/, /^\/users/, /^\/password/, /^\/categories/, /^\//,]
  // },
  // // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'at-admin',
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
      {
        rel: 'icon',
        type:'image/png',
        href: '/assets/images/logo.png'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'
      }
    ],

    script: [
      {
        type: 'application/javascript',
        src: '~/static/libs/bundle.js'
      },
      {
        type: 'application/javascript',
        src: '~/static/libs/charts/apex/apexcharts.min.js'
      },
      {
        type: 'application/javascript',
        src: '~/static/libs/slick/slick.min.js'
      },
      {
        type: 'application/javascript',
        src: '~/static/distn/js/examples/dashboard.js'
      },
     
     
      {
        type: 'application/javascript',
        src: '~/static/distn/js/examples/customers.js'
      },
      {
        type: 'application/javascript',
        src: '~/static/distn/js/examples/product-detail.js'
      },
      {
        type: 'application/javascript',
        src: '~/static/libs/rating/jquery.rating.min.js'
      },
     
      {
        type: 'application/javascript',
        src: '~/static/distn/js/app.min.js'
      },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/distn/icons/bootstrap-icons-1.4.0/bootstrap-icons.min.css',
    '~/static/distn/css/bootstrap-docs.css',
    '~/static/libs/slick/slick.css',
    '~/static/libs/slick/slick-theme.css',
    '~/static/libs/rating/rating.min.css',
    '~/static/distn/css/app.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/date-fns'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/auth'
  ],

  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
 },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://at-tareeq-server.herokuapp.com/api/v1',
  // baseURL: 'http://localhost:8080/api/v1',
    
    
  },
 
  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader?name=[name].[ext]?[hash]'
      }
    ],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
  },


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/users/login', method: 'post', propertyName: 'token'},
          logout: { url: '/users/logout', method: 'get'} ,
          user: { url: '/users/me', method: 'get', propertyName: false}
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/login',
      user:'/profile'

    }
  }
}

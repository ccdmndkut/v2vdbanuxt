const pkg = require('./package')

module.exports = {
  // mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    FIREBASE: {
      API_KEY: 'AIzaSyDMbILM1a366tYFM3-nOLwCUXapJ8ETqmw',
      DATABASE_NAME: 'test',
      PROJECT_ID: 'vaclaims-194006',
      SENDER_ID: '524576132881'
    }
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  router: {},
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt'
    // [
    //   'nuxt-fire',
    //   {
    //     useOnly: ['auth'],
    //     config: {
    //       development: {
    //         apiKey: 'AIzaSyDMbILM1a366tYFM3-nOLwCUXapJ8ETqmw',
    //         authDomain: 'vaclaims-194006.firebaseapp.com',
    //         databaseURL: 'https://vaclaims-194006.firebaseio.com',
    //         projectId: 'vaclaims-194006',
    //         storageBucket: 'vaclaims-194006.appspot.com',
    //         messagingSenderId: '524576132881',
    //         timestampsInSnapshots: true
    //       },
    //       production: {
    //         apiKey: 'AIzaSyDMbILM1a366tYFM3-nOLwCUXapJ8ETqmw',
    //         authDomain: 'vaclaims-194006.firebaseapp.com',
    //         databaseURL: 'https://vaclaims-194006.firebaseio.com',
    //         projectId: 'vaclaims-194006',
    //         storageBucket: 'vaclaims-194006.appspot.com',
    //         messagingSenderId: '524576132881',
    //         timestampsInSnapshots: true
    //       }
    //     }
    //   }
    // ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // debug: true,
    // proxy: {
    //   api: 'https://nuxt-fireauth-v5.now.sh'
    // }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (isDev) {
        config.resolve.alias['config'] = '~/config/development'
      } else {
        config.resolve.alias['config'] = '~/config/production'
      }
    }
  }
}

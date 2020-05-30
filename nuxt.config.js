const pkg = require('./package');

export default {
  mode: 'universal',

  generate: {},

  // Headers of the page
  head: {
    title: 'Pang | A New Type of Social Media',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: ''
        // for font-awesome?
      }
    ]
  },

  // Customize the progress bar color
  loading: {
    color: '#fff'
  },

  // Global CSS
  css: [
    ''
  ],

  // Plugins to load before mounting the App
  plugins: [],

  // Nuxt.js dev-modules
  buildModules: [],

  // Nuxt.js modules
  modules: [],

  // Build configuration
  build: {
    // You can extend webpack config here
    // extend(config, ctx) {}
  }
}
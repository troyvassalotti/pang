const pkg = require('./package');

export default {
  components: true,
  target: 'static',
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
      },
      {
        name: 'twitter:title',
        content: 'Pang | A New Type of Social Media'
      },
      {
        name: 'twitter:description',
        content: 'Welcome to Pang: a new type of social media where it\'s just you and only you.'
      },
      {
        name: 'twitter:image',
        content: '~/assets/img/pang.png'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Customize the progress bar color
  loading: {
    color: '#fff'
  },

  // Global CSS
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to load before mounting the App
  plugins: [],

  // Nuxt.js dev-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: ['faGamepad'],
      regular: ['faNewspaper', 'faComments', 'faUser']
    }
  },

  // Nuxt.js modules
  modules: [],

  // Build configuration
  build: {
    // html.minify: {
    //   collapseBooleanAttributes: true,
    //   decodeEntities: true,
    //   minifyCSS: true,
    //   minifyJS: true,
    //   processConditionalComments: true,
    //   removeEmptyAttributes: true,
    //   removeRedundantAttributes: true,
    //   trimCustomFragments: true,
    //   useShortDoctype: true
    // }
  }
}
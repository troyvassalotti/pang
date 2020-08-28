export default {
  target: "static",
  components: true,
  generate: {
    fallback: "404.html"
  },

  // Headers of the page
  head: {
    title: "Pang | A New Type of Social Media",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      },
      {
        name: "twitter:title",
        content: "Pang | A New Type of Social Media"
      },
      {
        name: "twitter:description",
        content: "Welcome to Pang: a new type of social media where it's just you and only you."
      },
      {
        name: "twitter:image",
        content: "~/assets/img/pang.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }, {
      rel: "preconnect",
      href: "https://d33wubrfki0l68.cloudfront.net"
    }, {
      rel: "dns-prefetch",
      href: "https://d33wubrfki0l68.cloudfront.net"
    }]
  },

  // Global CSS
  css: [
    "~/assets/css/main.scss"
  ],

  modules: [
    "@nuxtjs/axios",
  ],

  // Configure the axios module
  axios: {
    baseURL: "https://jsonplaceholder.typicode.com"
  },

  // Customize the progress bar color
  loading: false
}
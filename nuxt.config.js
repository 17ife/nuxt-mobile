module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script:[
      { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.slim.min.js' },
      { src: 'https://cdn.bootcss.com/bootstrap/4.1.0/js/bootstrap.min.js' },
      { src: 'https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css' , href: 'https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  plugins: [
    { src: "~plugins/mint-ui", ssr: true }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

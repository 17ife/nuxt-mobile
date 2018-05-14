module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script:[
      { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js' },
      { src: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js' },
      { src: 'https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js' },
      { src: '/js/adminlte.min.js' },
      // { src: '/js/pages/dashboard2.js' },
      { src: '/components/jvectormap/jquery-jvectormap.js'},
      { src: '/components/jquery-slimscroll/jquery.slimscroll.min.js' },
      { src: '/components/datatables.net/js/jquery.dataTables.min.js'},
      { src: '/components/datatables.net-bs/js/dataTables.bootstrap.min.js'},
      { src: '/components/fastclick/lib/fastclick.js'},
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css' , href: '/components/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css' , href: '/components/Ionicons/css/ionicons.min.css' },
      { rel: 'stylesheet', type: 'text/css' , href: '/components/datatables.net-bs/css/dataTables.bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css' , href: 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css' , href: '/css/AdminLTE.css' },
      { rel: 'stylesheet', type: 'text/css' , href: '/css/all-skins.css' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  vender:[
    'element-ui'
  ],
  babel:{
    "plugins": [["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },

  css: [
    // 全部引用的时候需要用到
    // 'element-ui/lib/theme-default/index.css'
  ],

  plugins: [
    // { src: "~plugins/mint-ui", ssr: true }
    // { src: '~plugins/element-ui', ssr: true }
  ],

  // modules: [
  //   '@nuxtjs/axios',
  //   '@nuxtjs/proxy'
  // ],
  // proxy: [
  //   ['/', { target: 'http://localhost:7001' }]
  // ],
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

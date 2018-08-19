module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '算力多',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no'
    }, {
      hid: 'description',
      name: 'description',
      content: '算力多描述 算力多交易平台'
    }, {
      hid: 'keywords',
      name: 'keywords',
      content: '算力多关键字 比特币 挖矿'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  css: [
    '~assets/styles/reset.scss',
    '~assets/styles/_variable.scss',
    '~assets/styles/_mixin.scss',
    '~assets/styles/index.scss',
    'swiper/dist/css/swiper.css'
  ],
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    BASE_API: process.env.NODE_ENV === 'production' ? 'http://www.suanliduo.cn' : 'http://127.0.0.1:3000'
    //BASE_API: 'http://127.0.0.1:3000'
  },
  // plugins
  plugins: [{
    src: '~plugins/utils.js',
    ssr: true
  }, {
    src: '~plugins/filters.js',
    ssr: true
  }, {
    src: '~plugins/common.js',
    ssr: false
  }, {
    src: '~plugins/nuxt-swiper-plugin.js',
    ssr: false
  }, {
    src: '~plugins/clipboard.js',
    ssr: false
  }, {
    src: '~plugins/waves.js',
    ssr: false
  }, {
    src: '~plugins/qrcode.js',
    ssr: false
  }, {
    src: '~plugins/storage.js',
    ssr: false
  }, {
    src: '~plugins/tools.js',
    ssr: true
  }, {
    src: '~plugins/component.js',
    ssr: true
  }],
  router: {
    middleware: ['user-agent'],
    scrollBehavior: function(to, from, savedPosition) {
      let position = {
        x: 0,
        y: 0
      };
      if (to.hash) {
        position = {
          selector: to.hash
        }

      }
      return position
    }
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: {
      allChunks: true
    },
    vendor: [
      'axios',
      'vue-qr',
      '~/plugins/storage',
      '~/plugins/waves.js',
      'vuex-persistedstate',
      '~/components/Common/Toast/toast',
      '~/components/Common/Alert/alert'
    ],
    /*
     ** Run ESLint on save
     */
    /*extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
  },
  render: {
    resourceHints: false,
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api', {
        target: 'http://admin.suanliduo.cn', // api主机
        // pathRewrite: { '^/api' : '/' }
      }
    ]
  ]
}

'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 需要 proxyTable 代理的接口（可跨域）
    proxyTable: { '/api': { 
      target: 'https://www.runoob.com', //源地址 
      changeOrigin: true, //是否跨域
      pathRewrite: { 
        '^/api': 'https://www.runoob.com' //路径重写 
        } 
    } },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html 模板
    index: path.resolve(__dirname, '../../h5/index.html'),

    // Paths打包后文件要存放的路径
    assetsRoot: path.resolve(__dirname, '../../h5'),
    //除了 index.html 之外的静态资源要存放的路径， 
    assetsSubDirectory: 'static',
	  //assetsPublicPath属性作用是指定编译发布的根目录，‘/‘指的是项目的根目录 ，’./‘指的是当前目录。
    // assetsPublicPath: './',
    // 代表打包后，index.html里面引用资源的的相对地址
    assetsPublicPath: '',

    /**
     * Source Maps
     */
    // 是否开启 cssSourceMap
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
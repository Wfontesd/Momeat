const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const merge = require('webpack-merge')
/**
 * Environment type
 */
const DEV = process.env.NODE_ENV === 'development'
const PROD = process.env.NODE_ENV === 'production'
const STAGING = process.env.NODE_ENV === 'staging'

let config = {
  name: 'frontPage'
}

config.output = {
  path: path.resolve(__dirname, './dist'),
  filename: 'build.js',
  publicPath: '/'
}

config.resolve = {
  alias: {
    vue: 'vue/dist/vue.common.js',
    icons: path.resolve(__dirname, './public/icons'),
    styles: path.resolve(__dirname, './public/styles'),
    components: path.resolve(__dirname, './client/component')
  }
}

config.module = {
  rules: [
    /**
     * Linting
     */
    {
      test: /\.(js|vue)$/,
      use: 'eslint-loader',
      enforce: 'pre'
    },
    /**
     * Compile
     */
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true // webpack@2.x and newer
          }
        }
      ]
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }
  ]
}

config.plugins = [
  new HtmlWebpackPlugin({
    filename: path.join(__dirname, 'dist/index.html'),
    template: path.join(__dirname, 'client/index.html'),
    inject: true
  }),
  new VueLoaderPlugin()
]

if (DEV) {
  config = merge(config, require('./webpack.config.dev.js'))
} else if (PROD || STAGING) {
  config = merge(config, require('./webpack.config.prod.js'))
}
module.exports = [config]

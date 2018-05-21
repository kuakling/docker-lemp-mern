const resolvePath = path => require('path').resolve(__dirname, path)
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const clientConfig = merge( base, {
  name: 'client',
  mode: 'development',
  target: 'web',
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    resolvePath('../src/client/index.js')
  ],
  output: {
    filename: 'mainClient.js',
    chunkFilename: 'mainClient.js',
    path: resolvePath('../dist-dev/client'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'stylus-loader'
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
})

module.exports = clientConfig
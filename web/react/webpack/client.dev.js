const resolvePath = path => require('path').resolve(__dirname, path)
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./client.common.js')

const clientConfig = merge( common, {
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = clientConfig
const resolvePath = path => require('path').resolve(__dirname, path)
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./client.common.js')
const StatsWebpackPlugin = require('stats-webpack-plugin')

const clientConfig = merge( common, {
  name: 'client',
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  entry: [
    resolvePath('../src/client/index.js')
  ],
  output: {
    filename: 'mainClient.js',
    chunkFilename: 'mainClient.js',
    path: resolvePath('../dist/client'),
    publicPath: '/',
  },
  plugins: [
    new StatsWebpackPlugin('stats.json'),
  ]
})

module.exports = clientConfig
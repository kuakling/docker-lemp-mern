const resolvePath = path => require('path').resolve(__dirname, path)
const merge = require('webpack-merge')
const base = require('./base')

const serverConfig = merge( base, {
  name: 'server',
  mode: 'development',
  target: 'web',
  devtool: 'eval',
  entry: [
    resolvePath('../src/server/index.js')
  ],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'mainServer.js',
    chunkFilename: 'mainServer.js',
    path: resolvePath('../dist-dev/server'),
    publicPath: '/',
  },
})

module.exports = serverConfig
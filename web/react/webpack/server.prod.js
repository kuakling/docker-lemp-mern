const resolvePath = path => require('path').resolve(__dirname, path)
const merge = require('webpack-merge')
const common = require('./server.common')

const serverConfig = merge(common, {
  name: 'server',
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  entry: [
    resolvePath('../src/server/index.js')
  ],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'mainServer.js',
    chunkFilename: 'mainServer.js',
    path: resolvePath('../dist/server'),
    publicPath: '/',
  },
})

module.exports = serverConfig
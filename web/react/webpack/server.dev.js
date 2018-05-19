const resolvePath = path => require('path').resolve(__dirname, path)

const serverConfig = {
  name: 'server',
  mode: 'development',
  target: 'web',
  devtool: 'eval',
  entry: [
    resolvePath('../src/server/index.js')
  ],
  output: {
    filename: 'mainServer.js',
    chunkFilename: 'mainServer.js',
    path: resolvePath('../dist-dev/server'),
    publicPath: '/',
  }
}

module.exports = serverConfig
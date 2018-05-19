const resolvePath = path => require('path').resolve(__dirname, path)

const clientConfig = {
  name: 'client',
  mode: 'development',
  target: 'web',
  devtool: 'eval',
  entry: [
    resolvePath('../src/client/index.js')
  ],
  output: {
    filename: 'mainClient.js',
    chunkFilename: 'mainClient.js',
    path: resolvePath('../dist-dev/client'),
    publicPath: '/',
  }
}

module.exports = clientConfig
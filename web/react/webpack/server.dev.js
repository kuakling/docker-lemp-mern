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
    libraryTarget: 'commonjs2',
    filename: 'mainServer.js',
    chunkFilename: 'mainServer.js',
    path: resolvePath('../dist-dev/server'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react'
          ]
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  }
}

module.exports = serverConfig
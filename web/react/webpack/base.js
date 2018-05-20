module.exports = {
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
  },
}
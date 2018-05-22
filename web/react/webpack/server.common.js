const merge = require('webpack-merge')
const base = require('./base')

module.exports = merge( base, {
  module: {
    rules: [
      {
        test: /\.styl$/,
        exclude: [/node_modules/, /\.global\.styl/],
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              module: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.global\.styl$/,
        use: [
          'css-loader/locals',
          'stylus-loader'
        ]
      }
    ]
  }
})
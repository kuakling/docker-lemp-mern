const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const base = require('./base')

module.exports = merge( base, {
  module: {
    rules: [
      {
        test: /\.styl$/,
        exclude: [/node_modules/, /\.global\.styl/],
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
      },
      {
        test: /\.global\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
})
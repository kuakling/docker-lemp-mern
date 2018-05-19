const webpack = require('webpack')
const express = require('express')

const app = express()

let isBuilt = false

const done = () => {
  return !isBuild && app.listen(3000, () => {
    isBuilt = true
    console.log('Listening @ http://localhost:3000')
  })
}

const clientConfig = require('../webpack/client.dev')
const serverConfig = require('../webpack/server.dev')

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const compiler = webpack([clientConfig, serverConfig])
const clientCompiler = compiler.compilers[0]

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(clientCompiler))
app.use(webpackHotServerMiddleware(compiler))

compiler.plugin('done', done)
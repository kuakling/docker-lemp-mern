const webpack = require('webpack')
const express = require('express')

const app = express()

const DEV = process.env.NODE_ENV === 'development'

let isBuild = false

const done = () => {
  return !isBuild && app.listen(3000, () => {
    isBuild = true
    console.log('Listening @ http://localhost:3000')
  })
}

if(DEV){
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
}else{
  const clientConfig = require('../webpack/client.prod')
  const serverConfig = require('../webpack/server.prod')
  const publicpath = clientConfig.output.publicPath
  const outputPath = clientConfig.output.path

  webpack([clientConfig, serverConfig]).run((err, stats) => {
    const clientStats = stats.toJson().children[0]
    const serverRender = require('../dist/server/mainServer.js').default
    app.use(publicpath, express.static(outputPath))
    app.use(serverRender({ clientStats }))

    done()
  })
}
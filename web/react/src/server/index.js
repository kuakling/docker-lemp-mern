import React from 'react'
import ReactDOMServer from 'react-dom/server'
import flushChunks from 'webpack-flush-chunks'
import App from '../shared/components/App'

export default ({ clientStats }) => ( req, res, next ) => {
  const app = (
    <App />
  )

  const chunks = flushChunks(clientStats)
  const {
    js,
    styles,
    cssHash,
    scripts,
    stylesheets
  } = chunks

  const content = ReactDOMServer.renderToString(app)

  res.status(200)
  res.send(`<!doctype html>
<html>
  <head>
    ${styles}
    <title>React SSR</title>
  </head>
  <body>
    <div id="root">${content}</div>
    ${cssHash}
    ${js}
  </body>
</html>
`)
}
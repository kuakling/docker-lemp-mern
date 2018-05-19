import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../shared/components/App'

export default () => ( req, res, next ) => {
  const app = (
    <App />
  )

  const content = ReactDOMServer.renderToString(app)

  res.status(200)
  res.send(`<!doctype html>
<html>
  <head>
    <title>React SSR</title>
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
</html>
`)
}
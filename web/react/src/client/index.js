import React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/components/App'

const render = App => {
  ReactDOM.hydrate(
    <App />
  )
}

render(App)
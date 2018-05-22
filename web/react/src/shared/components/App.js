import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './style.global.styl'
import css from './app.styl'

class App extends Component {
  render() {
    return (
      <div className={css.test}>
        <label htmlFor="test">TEST: </label>
        <input type="text" name="" id="test"/>
        Hello React { React.version }
      </div>
    )
  }
}

export default hot(module)(App)
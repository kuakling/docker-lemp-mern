import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="test">TEST: </label>
        <input type="text" name="" id="test"/>
        Hello React { React.version }
      </div>
    )
  }
}

export default hot(module)(App)
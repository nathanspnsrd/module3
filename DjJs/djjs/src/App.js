import React from 'react'
import Buttons from "./Buttons"
import AllSquares from "./AllSquares"

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>DJ JS</h1>
        <header>
          <AllSquares />
        </header>
        <Buttons />
      </div>
    )
  }
}

export default App;

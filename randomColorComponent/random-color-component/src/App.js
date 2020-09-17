import React from 'react';
import BackGroundColor from "./BackGround"
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      backgroundColor: {}
    }
  }

  componentDidMount() {
    fetch(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          backgroundColor: `#${data.new_color}`
        })
      })
  }

  render() {
    return (
      <div className="App">
        <BackGroundColor newColor={this.state.backgroundColor} />
      </div>
    )
  }
}

export default App;

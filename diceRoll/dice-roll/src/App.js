import React from "react"
import Dice from "./Dice"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        numbers: [0, 0, 0, 0, 0, 0]
    }
    this.shuffleDice = this.shuffleDice.bind(this)
  }

  shuffleDice() {
    let newNumbers = this.state.numbers
    newNumbers = [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)]
    this.setState(prevState => {
      return {
        numbers: newNumbers
      }
    })
  }

  render() {
    return (
      <div className="allDice">
        <div className="threeDice">
          <div className="diceContainer">
            <Dice number={this.state.numbers[0]} />
            <h2>Dice 1</h2>
          </div>
          <div className="diceContainer">
            <Dice number={this.state.numbers[1]} />
            <h2>Dice 2</h2>
          </div>
          <div className="diceContainer">
            <Dice number={this.state.numbers[2]} />
            <h2>Dice 3</h2>
          </div>
        </div>
        <div className="threeDice">
          <div className="diceContainer">
            <Dice number={this.state.numbers[3]} />
            <h2>Dice 4</h2>
          </div>
          <div className="diceContainer">
            <Dice number={this.state.numbers[4]} />
            <h2>Dice 5</h2>
          </div>
          <div className="diceContainer">
            <Dice number={this.state.numbers[5]} />
            <h2>Dice 6</h2>
          </div>
        </div> 
        <div className="diceContainer">
          <button onClick={this.shuffleDice} className="shuffle">Shuffle Dice</button>
        </div>
      </div>
    )
  }
}

export default App;

import React from "react"
import Square from "./Square"
import "./allSquares.css"

class AllSquares extends React.Component {
    render() {
        return (
        <div className="squares">
            <div>
            <Square color={this.state.colors[0]}/>
            <Square color={this.state.colors[1]}/>
          </div>
          <div>
            <Square color={this.state.colors[2]}/>
            <Square color={this.state.colors[3]}/>
          </div>
        </div>
        )
    }
}

export default AllSquares
import React from "react"
import "./Dice.css"

class Dice extends React.Component {
    render() {
        return (
            <div className="dice">
                {this.props.number}
            </div>
        )
    }
}

export default Dice
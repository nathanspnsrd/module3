import React from "react"
import "./buttons.css"

class Buttons extends React.Component {

    render() {
        return (
            <button className={"buttons"} onClick={this.handleClick}>Black or White</button>
        )
    }
}

export default Buttons
import React from "react"
import "./buttons.css"

class Buttons extends React.Component {
    constructor() {
        super()
        this.state ={
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                colors: ["black", "black", "black", "black"]
            }
        })
    }

    render() {
        return (
            <button className={"buttons"} onClick={this.handleClick}>Black or White</button>
        )
    }
}

export default Buttons
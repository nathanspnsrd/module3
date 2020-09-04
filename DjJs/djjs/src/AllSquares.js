import React from "react"
import Square from "./Square"
import "./buttons.css"
import "./allSquares.css"

function play() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
}

//Factory that creates objects
class AllSquares extends React.Component {
    constructor() {
        super()
        this.state ={
            colors: ["white", "white", "white", "white"],
            shapes: ["square", "square", "square", "square"],
            shows: ["appear", "appear", "appear", "appear"]
        }
        this.handleBlackClick = this.handleBlackClick.bind(this)
        this.handlePurpleClick = this.handlePurpleClick.bind(this)
        this.handleBottomLeftBlue = this.handleBottomLeftBlue.bind(this)
        this.handleBottomRightBlue = this.handleBottomRightBlue.bind(this)
        this.getBig = this.getBig.bind(this)
        this.turnToCircle = this.turnToCircle.bind(this)
        this.disapear = this.disapear.bind(this)
        this.lucky = this.lucky.bind(this)
    }


    //Color Functions
    handleBlackClick() {
        let newColors = ["white", "white", "white", "white"]
        if (this.state.colors[0] === "white") {
            newColors = ["black", "black", "black", "black"]
        }
        this.setState(prevState => {
            return {
                colors: newColors
            }
        })
    }

    handlePurpleClick() {
        let newColors = this.state.colors
        if (this.state.colors[0] !== "purple") {
            newColors = ["purple", "purple", this.state.colors[2], this.state.colors[3]]
        }
        this.setState(prevState => {
            return {
                colors: newColors
            }
        })
    }

    handleBottomLeftBlue() {
        let newColors = this.state.colors
        if (this.state.colors[2] !== "blue") {
            newColors = [this.state.colors[0], this.state.colors[1], "blue", this.state.colors[3]]
        }
        this.setState(prevState => {
            return {
                colors: newColors
            }
        })
    }

    handleBottomRightBlue() {
        let newColors = this.state.colors
        if (this.state.colors[3] !== "blue") {
            newColors = [this.state.colors[0], this.state.colors[1], this.state.colors[2], "blue"]
        }
        this.setState(prevState => {
            return {
                colors: newColors
            }
        })
    }


    //Size and Shape Functions
    getBig() {
        let newShapes = this.state.shapes
        if (this.state.shapes[3] === "square") {
            newShapes = [this.state.shapes[0], this.state.shapes[1], this.state.shapes[2], "bigSquare"]
        } else if (this.state.shapes[3] === "bigSquare") {
            newShapes = [this.state.shapes[0], this.state.shapes[1], this.state.shapes[2], "square"]
        }
        this.setState(prevState => {
            return {
                shapes: newShapes
            }
        })
    }

    turnToCircle() {
        let newShapes = this.state.shapes
        if (this.state.shapes[0] === "square") {
            newShapes = ["circle", this.state.shapes[1], this.state.shapes[2], this.state.shapes[3]]
        } else if (this.state.shapes[0] === "circle") {
            newShapes = ["square", this.state.shapes[1], this.state.shapes[2], this.state.shapes[3]]
        }
        this.setState(prevState => {
            return {
                shapes: newShapes
            }
        })
    }

    disapear() {
        let showsNow = this.state.shows
        if (this.state.shows[0] !== "disappear") {
            showsNow = ["disappear" , this.state.shows[1], this.state.shows[2], this.state.shows[3]]
        } else if (this.state.shows[0] === "disappear") {
            showsNow = ["appear", this.state.shows[1], this.state.shows[2], this.state.shows[3]]
        }
        this.setState(prevState => {
            return {
                shows: showsNow
            }
        })
    }


    //Backgournd
    lucky() {
        let newColors = this.state.colors
        if (this.state.colors[3] === "blue") {
            newColors = ["nicholas", "nicholas", "nicholas", "nicholas"]
        } else {
            newColors = ["white", "white", "white", "white"]
            play()
        }
        this.setState(prevState => {
            return {
                colors: newColors
            }
        })
    }
    
    render() {
        return (
            <div>
                <div className="squares">
                    <div className="twoSquares">
                        <Square color={this.state.colors[0]} shape={this.state.shapes[0]} visible={this.state.shows[0]}/>
                        <Square color={this.state.colors[1]} shape={this.state.shapes[1]} visible={this.state.shows[1]}/>
                    </div>
                    <div className="twoSquares">
                        <Square color={this.state.colors[2]} shape={this.state.shapes[2]} visible={this.state.shows[2]}/>
                        <Square color={this.state.colors[3]} shape={this.state.shapes[3]} visible={this.state.shows[3]}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.handleBlackClick} className={"buttons"}>Black or White</button>
                    <button onClick={this.handlePurpleClick} className={"buttons"}>Top Half Purple</button>
                    <button onClick={this.handleBottomLeftBlue} className={"buttons"}>Bottom Left Blue</button>
                    <button onClick={this.handleBottomRightBlue} className={"buttons"}>Bottom Right Blue</button>
                    <button onClick={this.getBig} className={"buttons"}>Get Big</button>
                    <button onClick={this.turnToCircle} className={"buttons"}>Round it Out</button>
                    <button onClick={this.disapear} className={"buttons"}>Disapear</button>
                    <button onClick={this.lucky} className={"buttons"}>I'm Feeling Lucky</button>
                </div>
                <audio className="audio-element">
                    <source src="https://www.pacdv.com/sounds/fart-sounds/fart-8.wav"></source>
                </audio>
            </div>
        )
    }
}

export default AllSquares
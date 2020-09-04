import React from "react"

import "./square.css"

class Square extends React.Component {
    render() {
        return ( 
            <div className={`${this.props.shape} ${this.props.color} ${this.props.visible}`}></div>
        )
    }
}

export default Square
import React from "react"
import Pet from "./Pet"

const divStyle = {
    border: "black",
    borderRadius: 10,
    backgroundColor: "tan",
    margin: 10,
    padding: 10,
}

function Friend(props) {
    return (
        <div style={divStyle}>
            <h1> Name: {props.name}</h1>
            <h2> Age: {props.age}</h2>
            <h3><Pet /></h3>
        </div>
    )
}


export default Friend
import React from "react"

function Spot(props) {
    const cardStyle = {
        margin: 20,
        backgroundColor: "red",
        width: 300,
        padding: 20,
    }

    if(props.location.timeToGo === "Spring") {
        cardStyle.backgroundColor = "#3399ff"
    } else if (props.location.timeToGo === "Summer") {
        cardStyle.backgroundColor = "#99ffcc"
    } else if (props.location.timeToGo === "Fall") {
        cardStyle.backgroundColor = "#ff9933"
    } else if (props.location.timeToGo === "Winter") {
        cardStyle.backgroundColor = "#003399"
        cardStyle.color = "white"
    }

    if(props.location.price < 500) {
        props.location.price = "$"
    } else if(props.location.price < 1000) {
        props.location.price = "$$"
    } else if(props.location.price < 2000) {
        props.location.price = "$$$"
    }

    return (
        <div style={cardStyle}>
            <h2>{props.location.place}</h2>
            <p>{props.location.price}</p>
            <p>{props.location.timeToGo}</p>
        </div>
    )
}

export default Spot
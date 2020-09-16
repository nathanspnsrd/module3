import React from "react"
import "./Hit.css"

export default function Hit(props) {
    return (
        <div className="hit">
            <h2>Name: {props.name}</h2>
            <img src={props.image}></img>
        </div>
    )
}


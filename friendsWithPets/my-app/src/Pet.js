import React from "react"

function Pet(props) {
    return (
        <div>
            <h3>Pet Name: {props.petName}</h3>
            <h3>Pet Breed: {props.petBreed}</h3>
        </div>
    )
}

export default Pet
import React from "react"

function Pet(props) {
    return (
        <div>
            <h3>Name - {props.petName}, Breed - {props.petBreed}</h3>
        </div>
    )
}

export default Pet
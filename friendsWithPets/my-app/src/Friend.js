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
    const petData = props.pets.map(pets => <Pet petName={pets.name} petBreed={pets.breed} />)

    return (
        <div style={divStyle}>
            <h1> Name: {props.name}</h1>
            <h2> Age: {props.age}</h2>
            <h3>---- Pets ----</h3>
            <h3>{petData}</h3>
        </div>
    )
}


export default Friend
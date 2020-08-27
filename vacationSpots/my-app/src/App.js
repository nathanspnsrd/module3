import React from "react"
import Spot from "./Spot"
import vacationSpots from "./vacationSpots"



function App() {
    const vacationSpotsComponents = vacationSpots.map(item => <Spot location={item}/>)

    const pageStyle = {
        textAlign: "center",
        margin: 100,
        padding: 10,
        backgroundColor: "tan",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div style={pageStyle}>
            {vacationSpotsComponents}
        </div>
    )
}

export default App
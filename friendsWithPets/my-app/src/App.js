import React from "react"
import Friend from "./Friend"
import FriendList from "./FriendList"

const background = {
  backgroundColor: "brown",
  padding: 10,
}

function App() {
  const friendData = FriendList.map(friend => <Friend {...friend}/>)

  return (
      <div style={background}>
          {friendData}         
      </div>
  )
}

export default App
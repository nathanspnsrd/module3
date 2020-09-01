import React from "react"
import Friend from "./Friend"
import FriendList from "./FriendList"

const background = {
  backgroundColor: "brown",
  padding: 10,
}

function App() {
  const FriendData = FriendList.map(friend => <Friend name={friend.name} age={friend.age} petName={friend.pets.name} petBreed={friend.pets.breed}/>)
  
  return (
      <div style={background}>
          {FriendData}            
      </div>
  )
}

export default App
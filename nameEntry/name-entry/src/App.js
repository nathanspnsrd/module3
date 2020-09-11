import React from "react"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      fullNames: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({firstName: "", lastName: ""})

    let newFullName = `${this.state.firstName} ${this.state.lastName}`
    this.setState(prevState => ({
      fullNames: [...prevState.fullNames, newFullName]
    }))
  }

  render() {
    return (
      <div className="container">
        <h1>Please Enter Your Name</h1>
        <form className="form">
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            className="input"
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            className="input"
          />
          <button className="input" onClick={this.handleSubmit}>Add Name</button>
        </form>
        <h1 className="newName">{this.state.firstName} {this.state.lastName}</h1>
        <div className="names">
          {this.state.fullNames.map(fullName => 
            <h1>{fullName}</h1>
          )}
        </div>
      </div>
    )
  }
}

export default App;

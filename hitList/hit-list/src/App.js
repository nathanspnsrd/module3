import React from 'react';
import Hit from "./Hit"
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hits: []
    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          hits: data
        })
        console.log(data)
      })
  }
  
  render() {
    console.log(this.state.hits)
    return (
      <div className="container">
        <div class="app">
          <h1>Our Hit List</h1>
          {this.state.hits.map(hit => <Hit {...hit} />)}
        </div>
      </div>
    )
  }
}

export default App;

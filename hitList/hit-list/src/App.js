import React from 'react';
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
        this.setState([{
          hits: data
        }])
      })
  }
  
  render() {
    return (
      <div>
        {this.state.hits.map(hit => <this.state.hits {...hit} />)}
      </div>
    )
  }
}

export default App;

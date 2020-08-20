import React, { Component } from 'react'
import logo from "./logo.svg"
import "./App.css"
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://i.pinimg.com/originals/90/3f/e8/903fe804be186d13b56dc92601c14263.jpg"} />
      </div>
    );
  }
}

export default App
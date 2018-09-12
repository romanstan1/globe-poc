import React, { Component } from 'react';
import {init} from './d3-module.js'
class App extends Component {
  componentDidMount() {
    init()
  }
  render() {
    return (
      <div className="App">
        <svg></svg>
      </div>
    );
  }
}

export default App;

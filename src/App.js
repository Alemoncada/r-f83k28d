import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    value: 0,
  };

  counter = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button onClick={this.counter} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;

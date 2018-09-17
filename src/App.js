import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getLocationDetails } from './api/api';

class App extends Component {
    componentDidMount(){
        getLocationDetails()
            .then(data => console.log(data))
    }
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;

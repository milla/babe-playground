import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Todo from './Todo'
import Projects from './Components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;

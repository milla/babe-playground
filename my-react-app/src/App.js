import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        </p>
        <Todo text="I will be alright" onclick={
          () => { console.log('clicked'); }}
          list={
            [
              { id: 0, value: 'val1' },
              { id: 1, value: 'vals' }
            ]} />

      </div>
    );
  }
}

export default App;

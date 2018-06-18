import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Todo from './Todo'
import Projects from './Components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo text="I will be alright" onclick={
          () => { console.log('clicked'); }}
          list={
            [
              { id: 0, value: 'val1' },
              { id: 1, value: 'vals' }
            ]} />

            <Projects/>
            
      </div>
    );
  }
}

export default App;

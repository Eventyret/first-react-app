import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects'
class App extends Component {
  render() {
    return (
      <div className="App">
          My App
          <Projects />
      </div>
    );
  }
}

export default App;

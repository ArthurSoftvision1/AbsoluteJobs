import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ContainerComponent from './ContainerComponent.js'

class App extends Component {
  render() {
    return (
      <div className="app-header">
        <header>
          <ContainerComponent />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent.js'

class App extends Component {
  render() {
    return (
      <div className="app-header">
        <header>
          <HeaderComponent />
        </header>

      </div>
    );
  }
}

export default App;

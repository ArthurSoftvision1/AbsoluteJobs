import React, {Component} from 'react';
// import logo from './logo.svg';
import '../src/styles/App.css';
import ContainerComponent from './core/components/ContainerComponent.jsx'

export default class App extends Component {

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

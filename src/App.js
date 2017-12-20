import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ContainerComponent from './ContainerComponent.js'

class App extends Component {
  render() {

let myImages = {
  images: [
    { firstImage:  "<img src='https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/images/2017/12/15/b9de3a7abdb7ac6ba4b3d317.jpeg' alt='Happy New Year - Work hard, party harder'>"},
    { secondImage: "<img src='https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/images/2017/12/15/a4f67c13209e197793bf18ab.jpeg' alt='Nieuwe kantoren'>" },
    { thirdImage:  "<img src='https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/images/2016/12/22/7f8a131245ebd3795e2eb10e.jpeg' alt='photo'>"}
  ]
}

    return (
      <div className="app-header">
        <header>
          <ContainerComponent {...myImages}/>
        </header>
      </div>
    );
  }
}

export default App;

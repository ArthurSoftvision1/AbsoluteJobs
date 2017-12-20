import React, { Component } from 'react';
import './App.css';
import './slider.css';

import HeaderMenuComponent from './HeaderMenuComponent.js'
import HeaderTextComponent from './HeaderTextComponent.js'
import SignFormComponent from './SignFormComponent.js'
import BodyTextComponent from './BodyTextComponent.js'
import EmployeesDetailsComponent from './EmployeesDetailsComponent.js'
import VacanciesComponent from './VacanciesComponent.js'
import CentralTextComponent from './CentralTextComponent.js'
import RegisterInputComponent from './RegisterInputComponent.js'
import FooterComponent from './FooterComponent.js'

class Container extends Component {

  render() {
    this.props.images.forEach(function (el, i) {
      console.log(el);
    });

    return (
      <div className="header-section">
          <div className="background">

            <img className="header-background-image" src="https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/images/2017/12/15/b9de3a7abdb7ac6ba4b3d317.jpeg" />
            <HeaderMenuComponent />
            <HeaderTextComponent />
            <SignFormComponent />
            <BodyTextComponent />
            <EmployeesDetailsComponent />
            <VacanciesComponent />
            <CentralTextComponent />
            <RegisterInputComponent />
            <FooterComponent /> 
          </div>
      </div>
    );
  }
}

export default Container;
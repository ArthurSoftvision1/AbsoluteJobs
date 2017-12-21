import React, {Component} from 'react';
import '../../styles/App.css';
import '../../styles/slider.css';

import HeaderMenuComponent from './HeaderMenuComponent.jsx'
import HeaderTextComponent from './HeaderTextComponent.jsx'
import SignFormComponent from './SignFormComponent.jsx'
import BodyTextComponent from './BodyTextComponent.jsx'
import EmployeesDetailsComponent from './EmployeesDetailsComponent.jsx'
import VacanciesComponent from './VacanciesComponent.jsx'
import CentralTextComponent from './CentralTextComponent.jsx'
import RegisterInputComponent from './RegisterInputComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import CarouselWrapper from "./CarouselWrapper";

export default class Container extends Component {

  render() {

    return (
      <div className="header-section">
        <div className="background">
          <CarouselWrapper/>
          <HeaderMenuComponent/>
          <HeaderTextComponent/>
          <SignFormComponent/>
          <BodyTextComponent/>
          <EmployeesDetailsComponent/>
          <VacanciesComponent/>
          <CentralTextComponent/>
          <RegisterInputComponent/>
          <FooterComponent/>
        </div>
      </div>
    );
  }
}

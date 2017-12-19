import React, { Component } from 'react';
import './App.css';

class SignForm extends Component {
  render() {
    return (
      <div className="sign-section">
         <form className="job-search-form">
            <h2><span>Vind een job die bij u past</span></h2>
            <div className="inputs">
                <input className="form-control input" type="text" placeholder="sector / functie" />
                <input className="form-control input" type="text" placeholder="stad / regio" />
            </div>
            <ul className="links">
                <li><a>toon alle 751 vacatures </a></li>
                <li><a>spontaan solliciteren </a></li>
            </ul>
            <button className="zoeken-button" type="submit">
                <i class="fa fa-search"></i>
                zoeken
            </button>
         </form>
      </div>
    );
  }
}

export default SignForm;
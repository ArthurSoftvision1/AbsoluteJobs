import React, { Component } from 'react';
import './App.css';

class SignForm extends Component {
  render() {
    return (
      <div className="sign-section">
        <div className="col-md-12">
         <form className="job-search-form">
            <h2><span>Vind een job die bij u past</span></h2>
            <div className="inputs">
                <input className="form-control input sector" type="text" placeholder="sector / functie" />
                <input className="form-control input regio" type="text" placeholder="stad / regio" />
            </div>
          
            <ul className="links">
                <li><a>toon alle 751 vacatures </a></li>
                <li><a className="form-link">spontaan solliciteren </a></li>
            </ul>
          
            <button className="zoeken-button" type="submit">
                <span class="search-image"></span>
                zoeken
            </button>
            
         </form>
         </div>
      </div>
    );
  }
}

export default SignForm;
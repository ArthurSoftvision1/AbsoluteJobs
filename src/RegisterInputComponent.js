import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class RegisterInput extends Component {
  render() {
    return (
       <div className="register-input container bottom">
        <form className="base-form subscribe-form">
            <div className="left-section">
                <div className="field email-field">
                    <div className="field-input-wrap">
                        <input type="email" className="field-input" placeholder="Uw e-mailadres..."/>
                        <div> 
                            <button type="submit" className="main-action">Inschrijven</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
  }
}

export default RegisterInput;
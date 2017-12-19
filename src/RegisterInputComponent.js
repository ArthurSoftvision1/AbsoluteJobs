import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class RegisterInput extends Component {
  render() {
    return (
       <div className="register-input">
        <form>
            <input type="email" className="field-input" placeholder="Uw e-mailadres..."/>
            <div className="right"> 
                <button type="submit" className="main-action">Inschrijven</button>
            </div>
        </form>
        </div>
    );
  }
}

export default RegisterInput;
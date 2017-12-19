import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class HeaderText extends Component {
  render() {
    return (
       <div className="main-text">
            <div className="under-text">
                <div className="text-color">
                    <span class="pink-text">Fijne feestdagen</span>
                    <h4 class="black-text">
                        <span>Work hard,<br/>party harder!</span>
                    </h4>
                </div>
            </div>
        </div>
    );
  }
}

export default HeaderText;
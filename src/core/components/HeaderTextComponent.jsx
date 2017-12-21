import React, {Component} from 'react';
// import logo from './logo.svg';
import '../../styles/App.css';

export default class HeaderText extends Component {
  render() {
    return (
      <div className="main-text">
        <div className="under-text">
          <div className="text-color">
            <span className="pink-text">Fijne feestdagen</span>
            <h4 className="black-text">
              <span>Work hard,<br/>party harder!</span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

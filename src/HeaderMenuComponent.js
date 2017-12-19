import React, { Component } from 'react';
import './App.css';

class HeaderMenu extends Component {
  render() {
    return (
      <div className="header-menu">
        <div className="logo-absolute">
            <img src="./absolute_jobs_rgb.png"  alt="Logo"/>
        </div>
        <div className="main-menu">
            <ul className="menu-list">
                <li className="link-item"><a>over uns</a></li>
                <li className="link-item"><a>werken bij absolute jobs</a></li>
                <li className="link-item"><a>contact</a></li>
                <li className="link-item"><a>login</a></li>
            </ul>
        </div>

        <div className="dropdown language-switcher">
            <div className="active-lang">
                <i className="flag flag-be"> </i>
                <span className="label">Belgium</span>
                <i className="fa fa-caret-down"> </i>
            </div>
            <div className="dropdown-body">
                <ul className="langs">
                    <li><a href="#">Belgium - NL</a></li>
                    <li><a href="#">Belgium - EN</a></li>
                    <li><a href="#">Romania - RO</a></li>
                    <li><a href="#">Romania - EN</a></li>
                </ul>
            </div>
        </div>

        <div className="secondary-menu">
            <ul className="secondary-list">
                <li className="link-item"><a>jobs<sup>751</sup></a></li>
                <li className="link-item"><a>voor werknemers</a></li>
                <li className="link-item"><a>voor werkgevers</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
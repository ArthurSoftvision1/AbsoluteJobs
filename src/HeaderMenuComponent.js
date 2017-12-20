import React, { Component } from 'react';
import './App.css';

class HeaderMenu extends Component {
  render() {
    return (
    <div className="row">
        <div className="header-menu">
            <div className="col-md-6">
                <div className="logo-absolute">
                    <img src="./absolute_jobs_rgb.png"  alt="Logo"/>
                </div>
                <a className="burger-nav"> </a>
            </div>
            <div id="hamb" className="col-md-6 wrapper">
                <div className="wrap-menu open">
                    <div className="main-menu visible-lg">
                        <ul className="menu-list">
                            <li className="link-item"><a>over uns</a></li>
                            <li className="link-item"><a>werken bij absolute jobs</a></li>
                            <li className="link-item"><a>contact</a></li>
                            <li className="link-item"><a>login</a></li>
                        </ul>
                    </div>
                    <div className="dropdown language-switcher visible-lg">
                        <div className="active-lang">
                            <i className="flag flag-be"> </i>
                            <span id="country" className="label country">Belgium</span>
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
                    <nav role="navigation hidden-small">
                        <div id="menuToggle" class="hidden-small">
                            <input type="checkbox" />
                            <div className="style-hamburger">
                                <span class="hidden-small"></span>
                                <span class="hidden-small"></span>
                                <span class="hidden-small"></span>
                            </div>
                            <ul id="menu">
                            <li className="link-item "><a className="jobs">jobs<sup>751</sup></a></li>
                            <li className="link-item "><a className="jobs">voor werknemers</a></li>
                            <li className="link-item "><a className="jobs">voor werkgevers</a></li>
                            <li className="link-item"><a className="menu-color">over uns</a></li>
                            <li className="link-item"><a className="menu-color">werken bij absolute jobs</a></li>
                            <li className="link-item"><a className="menu-color">contact</a></li>
                            <li className="link-item"><a className="menu-color">login</a></li>
                            <li className="link-item"> <div className="dropdown language-switcher-mobile">
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
                    </div></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="secondary-menu visible-lg">
                <ul className="secondary-list">
                    <li className="link-item"><a>jobs<sup>751</sup></a></li>
                    <li className="link-item"><a>voor werknemers</a></li>
                    <li className="link-item"><a>voor werkgevers</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}

export default HeaderMenu;
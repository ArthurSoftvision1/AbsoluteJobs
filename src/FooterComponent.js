import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
          <div className="footer">
            <div className="social-wrap">
                <ul className="socials">
                    <li className="social-item first-contact"><a className="phone"><i className="i i-phone contact"></i><span>Contact</span></a></li>
                    <li className="social-item fb"><a className="facebook"><i className="i i-facebook face"> </i> </a></li>
                    <li className="social-item lkdn"><a className="linkedin"><i className="i i-linkedin lin"> </i> </a></li>
                </ul>
            </div> 
            <div className="row footer-links">
                <div className="container ">
                    <div className="col-md-3">
                        <h4 className="pink-links">top jobs per sector</h4>
                        <a className="white-links">jobs administratie</a> <br/>
                        <a className="white-links">jobs bouw</a> <br/>
                        <a className="white-links">jobs logistiek</a> <br/>
                        <a className="white-links">jobs voeding</a><br/>
                        <a className="white-links">jobs techniek</a><br/>
                        <a className="white-links">jobs automobielsector</a><br/>
                        <a className="white-links">jobs metaalindustrie</a><br/>
                        <a className="grey-link">bekijk alle functies</a>
                    </div>
                    <div className="col-md-3">
                        <h4 className="pink-links">top jobs per regio</h4>
                        <a className="white-links">jobs in regio Brugge</a> <br/>
                        <a className="white-links">jobs in regio Roeselare</a> <br/>
                        <a className="white-links">jobs in regio Kortrijk</a> <br/>
                        <a className="white-links">jobs in regio Waregem</a> <br/>
                        <a className="white-links">jobs in regio Gent</a> <br/>
                        <a className="white-links">jobs in regio Oostende</a> <br/>
                        <a className="white-links">jobs in regio Veurne</a> <br/>
                        <a className="grey-link">bekijk alle regio’s</a> 
                    </div>
                    <div className="col-md-3">
                        <h4 className="pink-links">absolute jobs</h4>
                        <a className="white-links">contact</a> <br/>
                        <a className="white-links">over ons</a> <br/>
                        <a className="white-links">werken bij absolute jobs</a> <br/>
                        <a className="white-links">voor werknemers </a> <br/>
                        <a className="white-links">voor werkgevers </a> <br/>
                        <a className="white-links">contract online tekenen</a>
                    </div>
                    <div className="col-md-3">
                        <h4 className="pink-links">bedrijfsgegevens</h4>
                        <p className="rows-space"> bvba absolute@work</p> <br/>
                        <p className="rows-space"> VG. 2019/U - W.DISP.999</p> <br/>
                        <p className="rows-space">BHG.00558-406-20160504 </p> <br/>
                        <p> </p>
                        <p className="rows-space"> bvba absolute@construct</p> <br/>
                        <p className="rows-space"> VG. 2020/C - W.DISP.1000</p> <br/>
                        <p className="rows-space"> BHG.00578-406-20160504</p>
                     </div>
                     <div className="row ">
                         <div className="col-md-6 down-area">
                            <ul className="footer-list">
                                <li>© 2017 Absolute Jobs</li>
                                <li><a>Algemene voorwaarden</a></li>
                                <li><a>Privacybeleid</a></li>
                                <li><a>Disclaimer</a></li>
                                <li> </li>
                            </ul>
                         </div>
                         <div className="made-by col-md-6 down-area">
                            <span> 
                                made by <a className="pink-links">SKINN</a> and <a className="pink-links">Aray51</a>
                            </span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
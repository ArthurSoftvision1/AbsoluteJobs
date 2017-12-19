import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
          <div className="footer">
            <div className="social-wrap">
                <ul className="socials">
                    <li className="social-item"><a className="phone"><i className="i i-phone"> </i>Contact</a></li>
                    <li className="social-item"><a className="facebook"><i className="i i-facebook"> </i> </a></li>
                    <li className="social-item"><a className="linkedin"><i className="i i-linkedin"> </i> </a></li>
                </ul>
            </div> 
            <div className="row footer-links">
                <div className="container ">
                    <div className="col-md-3">
                        <h4 className="pink-links">top jobs per sector</h4>
                            <a>jobs administratie</a>
                            <a>jobs bouw</a>
                            <a>jobs logistiek</a>
                            <a>jobs voeding</a>
                            <a>jobs techniek</a>
                            <a>jobs automobielsector</a>
                            <a>jobs metaalindustrie</a>
                            <a>bekijk alle functies</a>
                    </div>
                    <div className="col-md-3">
                        <h4 className="pink-links">top jobs per regio</h4>
                            <a>jobs in regio Brugge</a>
                            <a>jobs in regio Roeselare</a>
                            <a>jobs in regio Kortrijk</a>
                            <a>jobs in regio Waregem</a>
                            <a>jobs in regio Gent</a>
                            <a>jobs in regio Oostende</a>
                            <a>jobs in regio Veurne</a>
                            <a>bekijk alle regio’s</a>
                    </div>
                    <div className="col-md-3">
                        <h4 className="pink-links">absolute jobs</h4>
                        <a>contact</a>
                        <a>over ons</a>
                        <a>werken bij absolute jobs</a>
                        <a>voor werknemers </a>
                        <a>voor werkgevers </a>
                        <a> contract online tekenen</a>
                    </div>
                    <div className="col-md-3">
                        <h4 className="pink-links">bedrijfsgegevens</h4>
                        <p> bvba absolute@work</p>
                        <p> VG. 2019/U - W.DISP.999</p>
                        <p>BHG.00558-406-20160504 </p>
                        <br/>
                        <p> bvba absolute@construct</p>
                        <p> VG. 2020/C - W.DISP.1000</p>
                        <p> BHG.00578-406-20160504</p>
                     </div>
                     <div className="row">
                         <div className="col-md-12">
                            <ul>
                                <li>© 2017 Absolute Jobs</li>
                                <li><a>Algemene voorwaarden</a></li>
                                <li><a>Privacybeleid</a></li>
                                <li><a>Disclaimer</a></li>
                                <li> </li>
                            </ul>
                         </div>
                         <div className="made-by">
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
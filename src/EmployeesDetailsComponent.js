import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class EmployeesDetails extends Component {
  render() {
    return (
       <div className="emloyees-details">
           <div className="row bottom-distance">
                <div className="col-md-6 left">
                    <h2 className="left-align">voor werknemers</h2>
                    <p className="left-align text-size">Tijdens het rekruteringsproces maken we het verschil met een win-win partnership voor zowel de werknemer als de werkgever.</p>
                    <p className="left-align text-size">We zijn gespecialiseerd in het het vinden van kandidaten voor moeilijk in te vullen vacatures en dat doen we met 100% legale arbeid.</p>
                    <p className="left-align text-size"><strong><a className="pink-links">less meer</a></strong></p>
                </div>

                <div className="col-md-6 left-border right">
                    <h2 className="left-align">voor werkgevers</h2>
                    <p className="left-align text-size">Wij zorgen ervoor dat de communicatie tussen werkgever en (buitenlandse) werknemer perfect verloopt.</p>
                    <p className="left-align text-size">We gaan letterlijk dat stapje verder: we gaan op zoek naar technische talenten waar we weten waar we ze kunnen vinden... in België en in het buitenland</p>
                    <p className="left-align text-size"><strong><a className="pink-links">less meer</a></strong></p>
                </div>
            </div>
        </div>
    );
  }
}

export default EmployeesDetails;
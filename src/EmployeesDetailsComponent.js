import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class EmployeesDetails extends Component {
  render() {
    return (
       <div className="emloyees-details">
           <div className="row">
                <div className="col-md-6">
                    <h2>voor werknemers</h2>
                    <p>Tijdens het rekruteringsproces maken we het verschil met een win-win partnership voor zowel de werknemer als de werkgever.</p>
                    <p>We zijn gespecialiseerd in het het vinden van kandidaten voor moeilijk in te vullen vacatures en dat doen we met 100% legale arbeid.</p>
                    <p><strong><a className="pink-links">less meer</a></strong></p>
                </div>

                <div className="col-md-6 left-border">
                    <h2>voor werkgevers</h2>
                    <p>Wij zorgen ervoor dat de communicatie tussen werkgever en (buitenlandse) werknemer perfect verloopt.</p>
                    <p>We gaan letterlijk dat stapje verder: we gaan op zoek naar technische talenten waar we weten waar we ze kunnen vinden... in België en in het buitenland</p>
                    <p><strong><a className="pink-links">less meer</a></strong></p>
                </div>
            </div>
        </div>
    );
  }
}

export default EmployeesDetails;
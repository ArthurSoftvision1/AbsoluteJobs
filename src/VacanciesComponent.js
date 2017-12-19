import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Vacancies extends Component {
  render() {
    return (
       <div className="emloyees-vacancies">
           <div className="row">
              <div className="col-md-6 vacancies-section">
                <h2 className="recent-title">recente vacatures</h2>
                <div className="locations">
                  <a className="pink-links">Bullman vaste namlddag!(m/v)</a>
                  <p>Brugge - Dagwerk</p>

                  <a className="pink-links">Afwasser (M/V)</a>
                  <p>Brugge - Dagwerk</p>

                  <a className="pink-links">Afwasser</a>
                  <p>Zwevegem-Dagwerk</p>

                  <a className="pink-links">Metaalplooier</a>
                  <p>Kortrijk-Dagwerk</p>

                  <a className="pink-links">Installateur sanitair</a>
                  <p>Torhout-Dagwerk</p>

                   <a className="pink-links">Bekijk alle vacatures</a>
                </div>
              </div>

               <div className="col-md-6 no-padding">
                <img className="vacancy-image" src="https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/2016/11/03/0d4b75e9a0054c3299d16178.jpeg" alt="interview image" />
              </div>
            </div>

            <div className="row bottom-distance">
              <div className="col-md-6 no-padding">
                  <img className="vacancy-image" src="https://s3.eu-central-1.amazonaws.com/absolutejobs-files-dev/2016/11/03/69b43db90ccb5f31d5bf232c.jpeg" alt="team" />
                </div>

                 <div className="col-md-6 left-side">
                   <h2 className="heading-jobs right">werken bij absolute jobs</h2>
                   <p className="jobs-text">We investeren in non-stop training en moedigen onze werknemers aan om via een intensieve begeleiding hun loopbaan verder te ontwikkelen binnen de lokale arbeidsmarkt. Wij geloven dat een tevreden werknemer een betere werknemer is.</p>

                   <a className="pink-links left-button">Kom meer te weten</a>
                </div>
            </div>
        </div>
    );
  }
}

export default Vacancies;
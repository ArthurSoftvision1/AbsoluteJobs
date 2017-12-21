import React, {Component} from 'react';
import '../../styles/App.css';

export default class SignForm extends Component {
  render() {
    return (
      <div className="sign-section">
        <div className="col-md-12">
          <form className="job-search-form">
            <h2><span>Vind een job die bij u past</span></h2>
            <div className="inputs">
              <input className="form-control input sector" type="text" placeholder="sector / functie"/>
              <input className="form-control input regio" type="text" placeholder="stad / regio"/>
            </div>

            <ul className="links">
              <li><a>toon alle 751 vacatures </a></li>
              <li><a className="form-link">spontaan solliciteren </a></li>
            </ul>

            <button className="zoeken-button" type="submit">
              <span className="search-image"/>
              zoeken
            </button>
          </form>

          <div className="mobile">
            <div class="row center-list">
                <div class="col-md-6">
                  <a className="form-link">toon alle 751 vacatures </a>
                </div>

                <div class="col-md-6">
                    <a className="form-link">spontaan solliciteren </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

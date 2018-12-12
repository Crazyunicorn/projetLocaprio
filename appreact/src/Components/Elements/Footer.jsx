import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="content ">
            <div className="columns">
              <div className="column .footerCss">
                <h2>Contact</h2>
                <ul>
                  <li>Tel : 01.48.34.09.12</li>
                  <li>8 rue du colisée</li>
                  <li>Paris, 75008</li>
                </ul>
              </div>
              <div className="column">
                <h2>Aide</h2>
                <ul>
                  <li>Politique de confidentialité</li>
                  <li>Mentions légales</li>
                  <li>RGPD</li>
                </ul>
              </div>
              <div className="column">
                <h2>Partenaires</h2>
                <ul>
                  <li>Iron hack</li>
                  <li>Elon Musk</li>
                  <li>Seloger.com</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

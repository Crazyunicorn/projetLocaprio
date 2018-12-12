import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  getOneAppart = () => {
    axios
      .get(
        "http://localhost:5000/api/description/" + this.props.match.params.id
      )
      .then(responseFromApi => {
        console.log(responseFromApi.data);
        this.setState({
          appart: responseFromApi.data.appart
        });
      });
  };

  render() {
    return (
      <div>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title" />
              <h2 className="title">
                <br />
                Plateforme de mise en relation 2.0 pour trouver son logement.
                <br />
              </h2>
              <h2 className="subtitle">
                Plus qu'un site immobilier, une vériable agence immobilière pour
                particulier en ligne.
              </h2>
            </div>
          </div>
        </section>
        <section>
          <section className="section">
            <div className="container">
              <div className="columns wrapperHome">
                <div className="column homecss">
                  <h1 className="subtitle">
                    <strong>
                      Trouver un logement n'a jamais été aussi simple
                    </strong>
                  </h1>
                  <ul>
                    <li> 1 Créez votre dossier de locataire.</li>
                    <li> 2 Choisissez parmi des centaines de biens.</li>
                    <li> 3 Postulez en un clic avec votre dossier.</li>
                    <li> 4 Aménagez dans votre appartement.</li>
                  </ul>
                </div>
                <div className="column">
                  <img
                    src="/images/home.jpg
            "
                    alt=""
                  />
                </div>
              </div>{" "}
              <br />
              <br />
              <div className="columns wrapperHome">
                <div className="column">
                  <img
                    src="/images/people2.jpg
            "
                    alt=""
                  />
                </div>
                <div className="column homecss">
                  <h2 className="subtitle">
                    <strong>Louer votre bien sans contraintes</strong>
                  </h2>
                  <ul>
                    <li> 1 Fin des agences hors de prix.</li>
                    <li> 2 Tous les profils locataires sont vérifiés.</li>
                    <li> 3 Centralisez vos démarches au même endroit.</li>
                    <li> 4 Restez informez en temps réel des candidatures.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;

//<img className="logonav" src="./images/logo.png" alt=""/>
//<img className="logotext" src="./images/logotext.png" alt=""/>

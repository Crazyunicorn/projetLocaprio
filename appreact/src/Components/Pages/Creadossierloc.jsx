import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router";
import Upload from "../Elements/Upload";
import Dossierloccomplet from "../Elements/Dossierloccomplet";
import Navprofil from "../Elements/navProfil";

class Creadossierloc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user = this.props.loggedUser;
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Mon dossier. </h1>
              <h2 className="subtitle">
                Préparez vos justificatifs pour louer rapidement un bien.
              </h2>
            </div>
          </div>
        </section>
        <section className="wrapper2">
          <nav className="panel" id="crea3">
            <Navprofil loggedUser={user} />
            <div className="columns">
              <div className="cardGarant column">
                <h2>Créez mon dossier de candidature</h2>
                <br />
                {user.dossier ? (
                  <Dossierloccomplet />
                ) : (
                  <Upload userid={user._id} />
                )}
              </div>

              <div className="cardGarant column">
                <h2>
                  <strong>Mes Pièces</strong>
                </h2>
                <p>
                  Vous rendez accessibles vos justificatifs à un propriètaire
                  dès que vous candidatez à un logement afin de gagner du temps
                  sans prendre le risque de transmettre votre dossier à des fins
                  frauduleuses.
                </p>
              </div>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}

export default Creadossierloc;
// <nav className="panel" id="crea3">
//   <div className="panel-heading">
//     <div className="tabs" />
//   </div>
//   <div />
// </nav>

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router";
// import Upload from "../Elements/Upload";
// import Dossierloccomplet from "../Elements/Dossierloccomplet";
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
              <h1 className="title">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="/images/avatarloc.png"
                    alt="Placeholder image"
                  />
                </figure>
              </h1>
            </div>
          </div>
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

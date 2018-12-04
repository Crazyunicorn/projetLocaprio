import React, { Component } from "react";
import axios from "axios";
import Card from "../Elements/Card";
import { Link } from "react-router-dom";
import Navprofil from "../Elements/navProfil";

class Profil extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const user = this.props.loggedUser;
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src="/images/avatarproprio.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </section>
        <section id="wrapperProfil">
          <nav id="profil">
            <Navprofil loggedUser={user} />
          </nav>

          <p className="panel-block">
            <h3>Prénom : </h3>
            <p>{user.firstName ? user.firstName : ""}</p>
          </p>
          <p className="panel-block">
            <h3>Nom : </h3> <p>{user.lastName ? user.lastName : ""}</p>
          </p>
          <p className="panel-block">
            <h3>Email : </h3> <p>{user.email ? user.email : ""}</p>
          </p>

          <div className="panel-block">
            <a
              href="/editProfil"
              className="button is-link is-outlined btnform"
            >
              Editer
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Profil;

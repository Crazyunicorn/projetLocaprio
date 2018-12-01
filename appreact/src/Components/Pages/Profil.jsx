import React, { Component } from "react";
import axios from "axios";
import Card from "../Elements/Card";
import { Link } from "react-router-dom";

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
              <h1 className="title">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="/images/avatarproprio.png"
                    alt="Placeholder image"
                  />
                </figure>
              </h1>
            </div>
          </div>
        </section>

        <nav className="panel" id="crea3">
          <div className="panel-heading">
            <div className="tabs">
              <ul>
                <li className="is-active">
                  <a>Mes informations</a>
                </li>

                {user.role == "Locataire" ? (
                  <Link to="/creadossierloc">Mon dossier</Link>
                ) : (
                  <Link to="/candidatures">Candidatures reçues</Link>
                )}
              </ul>
            </div>{" "}
          </div>

          <a className="panel-block is-active">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true" />
            </span>
            <h4>Prénom : </h4>
            <p>{user.firstName ? user.firstName : ""}</p>
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true" />
            </span>
            <h4>Nom : </h4> <p>{user.lastName ? user.lastName : ""}</p>
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true" />
            </span>
            <h4>Email : </h4> <p>{user.email ? user.email : ""}</p>
          </a>

          <div className="panel-block">
            <a
              href="/editProfil"
              className="button is-link is-outlined btnform"
            >
              Editer
            </a>
          </div>
        </nav>

        <div className="panel-block">
          <a href="/editProfil" className="button is-link is-outlined btnform">
            Editer
          </a>
        </div>
      </div>
    );
  }
}

export default Profil;

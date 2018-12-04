import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navprofil from "../Elements/navProfil";

class Candidatures extends Component {
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
          <Navprofil loggedUser={user} />
        </nav>

        <article className="media">
          <figure className="media-left">
            &nbsp;&nbsp;&nbsp;
            <p className="image is-44x44">
              <img
                class="is-rounded"
                src="/images/juliensmall.jpg"
                alt="Placeholder image"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              &nbsp;&nbsp;&nbsp;
              <p>
                <strong>Paul Fabre</strong> <small>@paulfabre</small>{" "}
                <small>31m</small>
                <br />
                Bonjour, je suis très intérressé par votre appartement...
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-reply" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-retweet" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-heart" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <div className="media-right">
            <button className="delete" />
          </div>
        </article>

        <article className="media">
          <figure className="media-left">
            &nbsp;&nbsp;&nbsp;
            <p className="image is-44x44">
              <img
                class="is-rounded"
                src="/images/marie.png"
                alt="Placeholder image"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              &nbsp;&nbsp;&nbsp;
              <p>
                <strong>Chloé Joli</strong> <small>@cjoli</small>{" "}
                <small>1sem</small>
                <br />
                Bonjour, n'hésitez pas à jeter un oeil à mon dossier de
                candidature...
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-reply" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-retweet" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-heart" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <div className="media-right">
            <button className="delete" />
          </div>
        </article>
      </div>

      //______________________
    );
  }
}

export default Candidatures;

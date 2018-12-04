import React, { Component } from "react";
import { Link } from "react-router-dom";


class Candidatures extends Component {
  render() {
    return(
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
                <li className="is-not-active">
                  <a>Mes informations</a>
                </li>


                <li className="is-active">
                  <a>Candidatures reçues</a>
                </li>
        
                  
              </ul>
            </div>
          </div>
          </nav>

<article className="media">
  <figure className="media-left">
  &nbsp;&nbsp;&nbsp;

    <p className="image is-44x44">
    <img class="is-rounded" src="/images/juliensmall.jpg" alt="Placeholder image"/>
    </p>
  </figure>
  <div className="media-content">
    <div className="content">
    &nbsp;&nbsp;&nbsp;

      <p>
        <strong>Paul Fabre</strong> <small>@paulfabre</small> <small>31m</small>
        <br/>
Bonjour, je suis très intérressé par votre appartement...
      </p>
    </div>
    <nav className="level is-mobile">
      <div className="level-left">
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-reply"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-retweet"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div className="media-right">
    <button className="delete"></button>
  </div>
</article>

<article className="media">
  <figure className="media-left">
  &nbsp;&nbsp;&nbsp;

    <p className="image is-44x44">
    <img class="is-rounded" src="/images/marie.png" alt="Placeholder image"/>
    </p>
  </figure>
  <div className="media-content">
    <div className="content">
    &nbsp;&nbsp;&nbsp;

      <p>
        <strong>Chloé Joli</strong> <small>@cjoli</small> <small>1sem</small>
        <br/>
Bonjour, n'hésitez pas à jeter un oeil à mon dossier de candidature...
      </p>
    </div>
    <nav className="level is-mobile">
      <div className="level-left">
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-reply"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-retweet"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div className="media-right">
    <button className="delete"></button>
  </div>
</article>
</div>

    );
  }
}

export default Candidatures;

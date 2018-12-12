import React, { Component } from "react";
import axios from "axios";
import Card from "../Elements/Card";
import SweetAlert from "sweetalert2-react";

class Description extends Component {
  constructor() {
    super();
    this.state = { appart: {} };
  }

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

  componentDidMount() {
    this.getOneAppart();
  }

  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Détails du logement. </h1>
              <h2 className="subtitle">
                Retrouvez toutes les informations utiles sur ce bien.
              </h2>
            </div>
          </div>
        </section>
        <div className="cardcloseup">
          <div className="tile is-parent">
            <div className="tile is-3 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">
                  {" "}
                  {this.state.appart && this.state.appart.user
                    ? this.state.appart.user.firstName
                    : ""}{" "}
                  {this.state.appart && this.state.appart.user
                    ? this.state.appart.user.lastName
                    : ""}
                </p>
                <figure className="imageuser">
                  <img
                    src="/images/rsz_julienbig.jpg"
                    alt="Placeholder image"
                  />
                </figure>
                <br />
                <p>
                  {this.state.appart && this.state.appart.adresse
                    ? this.state.appart.adresse.city
                    : ""}{" "}
                  {this.state.appart && this.state.appart.adresse
                    ? this.state.appart.adresse.zip_code
                    : ""}{" "}
                  <br />
                  {this.state.appart && this.state.appart.adresse
                    ? this.state.appart.prix
                    : ""}
                  {"€ "}
                  <br />
                  {this.state.appart && this.state.appart.adresse
                    ? this.state.appart.description
                    : ""}
                </p>
                <div>
                  {" "}
                  <br /> <br />
                  <p
                    className="button is-primary is-outlined btnMargin"
                    onClick={() => this.setState({ show: true })}
                  >
                    Postuler
                  </p>
                  <SweetAlert
                    show={this.state.show}
                    title="Well done"
                    text="Votre dossier est en route."
                    onConfirm={() => this.setState({ show: false })}
                  />
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title" />
                <figure className="imageap">
                  <img src="/images/apartment.jpg" alt="Placeholder image" />
                </figure>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;

// <li>{{apparts.adresse.city}} {{apparts.adresse.zip_code}}</li>
// <li> {{apparts.surface}}m2 - {{apparts.prix}}€</li>

// {{apparts.description}}

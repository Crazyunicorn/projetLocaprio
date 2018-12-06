import React, { Component } from "react";
import axios from "axios";
import api from "../api.js";

class CreationAppart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surface: "",
      prix: "",
      availability: "",
      description: "",
      title: "",
      adresse: {
        street: "",
        number: "",
        zip_code: "",
        city: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    //let { value } = event.target;

    this.setState({ [name]: value });
    //this.props.updateUser()
  }

  handleSubmit(event) {
    event.preventDefault();
    // const { firstName, lastName, email, role, password } = this.state;
    console.log(this.state);
    api
      .post("/api/route/annonce", this.state)

      .then(respond => {
        this.setState({});
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Créez votre annonce. </h1>
              <h2 className="subtitle">
                Mettez votre bien à la location en quelques clics
              </h2>
            </div>
          </div>
        </section>
        <div id="annonce">
          <div className="annonce-card ">
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <div className="columns">
                  <div className="column">
                    <h3>Informations Génériques</h3>
                    <input
                      className="special-input"
                      id="title"
                      type="text"
                      name="title"
                      title="title"
                      placeholder="Titre"
                      required
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                    <input
                      className="special-input"
                      id="description"
                      type="textarea"
                      name="description"
                      title="description"
                      placeholder="Description du logement"
                      required
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                    <input
                      className="special-input"
                      id="surface"
                      type="number"
                      name="surface"
                      title="surface"
                      placeholder="Surface habitable"
                      required
                      value={this.state.surface}
                      onChange={this.handleChange}
                    />
                    <input
                      className="special-input"
                      id="availability"
                      type="date"
                      name="availability"
                      title="availability"
                      placeholder="Disponible à partir du ... "
                      required
                      value={this.state.availability}
                      onChange={this.handleChange}
                    />
                    <input
                      className="special-input"
                      id="prix"
                      type="number"
                      name="prix"
                      title="prix"
                      placeholder="loyer mensuel"
                      required
                      value={this.state.prix}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="column">
                    <h3>Localisation du logement </h3>
                    <input
                      className="special-input"
                      id="street"
                      type="text"
                      name="street"
                      title="street"
                      placeholder="Nom de rue"
                      required
                      value={this.state.street}
                      onChange={this.handleChange}
                    />
                    <input
                      className="special-input"
                      id="number"
                      type="number"
                      name="number"
                      title="number"
                      placeholder="Numéro de rue"
                      required
                      value={this.state.number}
                      onChange={this.handleChange}
                    />
                    <input
                      className="special-input"
                      id="prix"
                      type="number"
                      name="zip_code"
                      title="prix"
                      placeholder="Code postal"
                      required
                      value={this.state.zip_code}
                      onChange={this.handleChange}
                    />

                    <input
                      className="special-input"
                      id="city"
                      type="text"
                      name="city"
                      title="city"
                      placeholder="Ville"
                      required
                      value={this.state.city}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn button btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreationAppart;

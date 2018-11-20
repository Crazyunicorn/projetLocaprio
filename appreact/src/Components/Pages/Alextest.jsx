import React, { Component } from "react";
import axios from "axios";
import api from "../api.js";

class Alextest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: "Proprietaire",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    //let { value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const { firstName, lastName, email, role, password } = this.state;
    console.log(this.state);
    api
      .post("/creacompte", this.state)
      // {
      //   firstName,
      //   lastName,
      //   email,
      //   role,
      //   password
      // }
      .then(respond => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          password: ""
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="columns">
            <div className="column">
              <label>
                Nom:
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="column">
              <label>
                Prénom:
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="column">
              <label>
                Mot de passe :
                <input
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <label>
                Vous êtes :
                <select
                  name="role"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="Proprietaire">Proprietaire </option>
                  <option value="Locataire"> Locataire </option>
                </select>
              </label>
            </div>
          </div>

          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    );
  }
}

export default Alextest;

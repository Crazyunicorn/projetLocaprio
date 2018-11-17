import React, { Component } from "react";
import Axios from "axios";
const cors = require("cors");
class Alextest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Votre compte est crée");
    event.preventDefault();
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
                  value={this.state.value}
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
                  value={this.state.value}
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
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
            </div>
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

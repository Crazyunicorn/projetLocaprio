import React, { Component } from "react";
import axios from "axios";
import api from "../api.js";

class Alextest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const { firstName, lastName, email, role, password } = this.state;
    console.log(this.state);
    api
      .post("/connexion", this.state)

      .then(respond => {
        this.setState({
          email: "",
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
                Email:
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>

          <div className="columns">
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

          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    );
  }
}

export default Alextest;

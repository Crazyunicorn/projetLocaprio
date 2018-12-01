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
    this.props.updateUser()
  }

  handleSubmit(event) {
    event.preventDefault();
    // const { firstName, lastName, email, role, password } = this.state;
    console.log(this.state);
    api
      .post("/api/route/user", this.state)
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
          role: "Proprietaire",
          password: ""
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div id="login">
          <div className="login-card">
            <div className="card-title">
              <h1>Please Sign Up</h1>
            </div>

            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="special-input"
                  id="name"
                  type="name"
                  name="lastName"
                  title="name"
                  placeholder="Name"
                  required
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <input
                  className="special-input"
                  id="firstname"
                  type="firstname"
                  name="firstName"
                  title="firstname"
                  placeholder="Firstname"
                  required
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <input
                  className="special-input"
                  id="email"
                  type="email"
                  name="email"
                  title="email"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  className="special-input"
                  id="password"
                  type="password"
                  name="password"
                  title="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <select
                  className="select is-rounded special-input"
                  type="role"
                  name="role"
                  title="role"
                  placeholder="Vous êtes"
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="Proprietaire">Proprietaire </option>
                  <option value="Locataire"> Locataire </option>
                </select>

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

export default Alextest;

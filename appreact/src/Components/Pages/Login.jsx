import React, { Component } from "react";
import api from "../api.js";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      userDoc: {}
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
    const userObject = {
      email: this.state.email,
      password: this.state.password
    };
    api
      .post("/api/route/login", userObject)

      .then(respond => {
        let retrievedUserDoc = respond.data.userDoc;
        const moduleUser = this.props.moduleUser;
        moduleUser(retrievedUserDoc);

        // this.setState({
        //   email: "",
        //   password: "",
        //   log: true
        // });
      })
      .catch(error => {
        console.log(error);
        alert("something went wrong");
      });
  }

  render() {
    let logged = this.state.log;
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

export default Login;

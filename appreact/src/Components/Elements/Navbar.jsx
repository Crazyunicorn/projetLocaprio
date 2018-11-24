import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedUser: this.props.loggedUser
    };
  }
  render() {
    return (
      <div>
        <nav
          className="navbar is-dark "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a href="http://localhost:3000">
              <img className="logohouse" src="/images/house.png" alt="" />
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>
            {this.props.loggedUser.email ? "your logged" : "not logged"}
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button " to="/test">
                    <strong>test</strong>
                  </Link>
                  <Link className="button is-primary" to="/signup">
                    <strong>Sign up</strong>
                  </Link>
                  <Link className="button is-light" to="/login">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

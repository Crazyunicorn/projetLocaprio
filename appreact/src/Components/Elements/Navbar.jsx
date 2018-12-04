import React, { Component } from "react";
import { Link } from "react-router-dom";

function LogInNav(props) {
  const user = props.loggedUser;
  const logout = props.logout;
  return (
    <div>
      <div className="navbar-item has-dropdown  is-hoverable">
        <a className="navbar-link">{user.firstName}</a>

        <div className="navbar-dropdown is-right">
          <Link className="navbar-item" to="/profil">
            Profil
          </Link>
          <Link className="navbar-item" to="/test">
            Messages
          </Link>
          <Link className="navbar-item" to="/test">
            Mes favoris
          </Link>

          <hr className="navbar-divider" />
          <Link onClick={logout} className="navbar-item" to="/">
            <strong>Log out</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

function LogOutNav() {
  return (
    <div>
       
      <Link className="button is-primary" to="/signup">
        <strong>Sign up</strong>
      </Link>
      <Link className="button is-light" to="/login">
        Log in
      </Link>
    </div>
  );
}

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let user = this.props.loggedUser;
    let userIsLogged;

    userIsLogged =
      Object.keys(this.props.loggedUser).length === 0 ? false : true;

    console.log(Object.keys(this.props.loggedUser).length);
    console.log(user, userIsLogged);

    return (
      <div>
        <nav
          className="navbar is-dark "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/">
              <img className="logohouse" src="/images/homewhite.png" alt="" />
            </Link>

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
            <div className="navbar-end">
              <div className="navbar-item">
              <Link className="navbar-link" to="/annonces">
        Appartements
      </Link>
                <div className="buttons">
                  {!userIsLogged ? (
                    <LogOutNav />
                  ) : (
                    <LogInNav logout={this.props.logout} loggedUser={user} />
                  )}
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

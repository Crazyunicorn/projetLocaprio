import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <section id="crea1">
          <div className="panel">
            <div className="panel-heading ">
              <h1>Créer votre Compte</h1>
            </div>
            <div className="panel-block">
              <div className="container">
                <form className="" action="/creacompte" method="POST">
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">Prénom</label>
                        <div className="control">
                          <input
                            id="firstName"
                            className="input"
                            type="text"
                            placeholder="ex : Alex"
                            name="firstName"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label">Nom</label>
                        <div className="control">
                          <input
                            id="lastName"
                            className="input"
                            type="text"
                            placeholder="ex : Smith"
                            name="lastName"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <p className="control has-icons-left has-icons-right">
                          <label className="label">Email</label>
                          <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            name="email"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                          </span>
                          <span className="icon is-small is-right">
                            <i className="fas fa-check" />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <p className="control has-icons-left">
                          <label className="label">Mot de passe</label>
                          <input
                            className="input"
                            type="password"
                            placeholder="Mot de passe"
                            name="password"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="colums">
                    <div className="column">
                      <label className="label">Vous êtes ?</label>
                      <div className="select">
                        <select name="role">
                          <option>Locataire</option>
                          <option>Proprietaire</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="field">
                    <p className="control">
                      <button
                        className="button is-info is-outlined btnform"
                        type="submit"
                      >
                        Créez son compte
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;

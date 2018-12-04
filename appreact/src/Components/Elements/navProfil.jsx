import React, { Component } from "react";
import { Link } from "react-router-dom";

function Navloc(props) {
  let user = props.loggedUser;
  return (
    <div>
      <ul>
        <li>
          <Link to="/profil">Mes informations</Link>
        </li>
        <li>
          <Link to="/creadossierloc">Mon dossier</Link>
        </li>
        <li>
          <Link to="/creadossierloc">Mes Garants</Link>
        </li>
      </ul>
    </div>
  );
}

function Navpro(props) {
  let user = props.loggedUser;
  return (
    <div>
      <ul>
        <li>
          <Link to="/profil">Mes informations</Link>
        </li>
        <li>
          <Link to="/creation-annonce">Mon annonce</Link>
        </li>
        <li>
          <Link to="/candidatures">Candidatures reçues</Link>
        </li>
      </ul>
    </div>
  );
}

class Navprofil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = this.props.loggedUser;

    return (
      <div>
        <div className="panel-heading">
          <div className="tabs">
            {user.role == "Locataire" ? <Navloc /> : <Navpro />}
          </div>
        </div>
      </div>
    );
  }
}
export default Navprofil;

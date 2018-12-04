import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Upload from "../Elements/Upload";
import Dossierloccomplet from "../Elements/Dossierloccomplet";
import { Switch, Route } from 'react-router';

class Creadossierloc extends Component {
  render() {
    return (
      <div>
        
        <section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
      <figure class="image is-128x128">
      <img class="is-rounded" src="/images/avatarloc.png" alt="Placeholder image"/>
      </figure>      
      </h1>
    </div>
  </div>
</section>

  <nav className="panel" id="crea3">
    <div className="panel-heading">
    <div className="tabs">
    <ul>
    <Link to="/profilprivloc">
    Mes informations
    </Link>
    <li className="is-active"><a>Dossier de candidature</a></li>
  </ul>
</div>    
</div>
<div>

 { this.props.user.dossier ? <Dossierloccomplet></Dossierloccomplet> : <Upload userid={this.props.user._id}></Upload>}

</div>

  </nav>
      </div>
    );
  }
}

export default Creadossierloc;

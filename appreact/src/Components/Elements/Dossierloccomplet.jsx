import React, { Component } from "react";
import { Link } from "react-router-dom";



class Dossierloccomplet extends Component {
  render() {
    return (
      <div>
        <figure class="image is-128x128">
      <img class="is-rounded" src="/images/roundedicon.png" alt="Placeholder image"/>
      </figure>
<div className="panel-block">
      <a href='/editProfil' className="button is-link is-outlined btnform">
       Editer
       </a>
    </div>
      </div>
    )
  }
};

export default Dossierloccomplet;

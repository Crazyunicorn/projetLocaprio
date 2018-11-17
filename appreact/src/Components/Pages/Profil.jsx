import React, { Component } from "react";
import axios from "axios";
import Card from "../Elements/Card";


class Profil extends Component {
  constructor() {
    super();
    this.state = { myUser: {} };
  }


  getOneUser = () => {
    axios
      .get(
        "http://localhost:5000/api/creacompte/" 
      )
      .then(responseFromApi => {
        console.log(responseFromApi.data);
        this.setState({
          myUser: responseFromApi.data.myUser
        });
      });
  };

  componentDidMount () {
    this.getOneUser();
  }

  render() {
    return (

      <div>
<section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Bienvenue { this.state.user ? this.state.user.firstName : ''}
      </h1>
      <h2 className="subtitle">
        Modifier vos informations.
      </h2>
    </div>
  </div>
</section>

  <nav className="panel" id="crea3">
    <div className="panel-heading">
      Mes informations
    </div>
    <div className="panel-block">
       <h4>Prénom : </h4>  <p> { this.state.appart && this.state.appart.user ? this.state.appart.user.firstName : ''}</p>
    </div>
    <div className="panel-block">
    <h4>Nom : </h4> <p>{ this.state.appart && this.state.appart.user ? this.state.appart.user.lasttName : ''}</p>
    </div>
    <div className="panel-block">
      <h4>Email : </h4>  <p> { this.state.appart && this.state.appart.user ? this.state.appart.user.email : ''}</p>
    </div>

  <div className="panel-block">
      <a href='/editProfil' className="button is-link is-outlined btnform">
       Editer
       </a>
    </div>
  </nav>

      </div>
      

    ); 
  }
}

export default Profil;
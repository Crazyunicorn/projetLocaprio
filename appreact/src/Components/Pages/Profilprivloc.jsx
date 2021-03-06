import React, { Component } from "react";
import axios from "axios";
import Card from "../Elements/Card";
import Creadossierloc from '../Pages/Creadossierloc';
import { Link, Redirect } from "react-router-dom";



class Profilprivloc extends Component {
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
    if (this.props.loggedUser.dossier) {
      return <Redirect to="/profilprivloc/complet"></Redirect>
    }
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
    <li className="is-active"><a>Mes informations</a></li>
    <Link to="/creadossierloc">
    Dossier de candidature
    </Link>
  </ul>
</div>    </div>
  

  <a className="panel-block is-active">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    <h4>Prénom : </h4>  <p> { this.state.appart && this.state.appart.user ? this.state.appart.user.firstName : ''}</p>
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    <h4>Nom : </h4> <p>{ this.state.appart && this.state.appart.user ? this.state.appart.user.lasttName : ''}</p>
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    <h4>Email : </h4>  <p> { this.state.appart && this.state.appart.user ? this.state.appart.user.email : ''}</p>
  </a>

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

export default Profilprivloc;
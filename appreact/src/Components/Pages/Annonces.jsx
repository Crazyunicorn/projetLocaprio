import React, { Component } from "react";
import axios from 'axios';
import Card from '../Elements/Card';


class Annonces extends Component {
  constructor(){
    super();
    this.state = {apparts: [] };
  }

  getAllapparts = () =>{
    axios.get('http://localhost:5000/api/apparts')
    .then(responseFromApi => {
      console.log(responseFromApi.data)
      this.setState({
        apparts: responseFromApi.data.apparts
      })
    })
  }

  componentDidMount() {
    this.getAllapparts();
  }

  render() {
    return(
<div>
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
     
        <button className="button is-primary is-inverted is-outlined">Prix</button>&nbsp;&nbsp;&nbsp;
        <button className="button is-primary is-inverted is-outlined">Ville</button>&nbsp;&nbsp;&nbsp;
        <button className="button is-primary is-inverted is-outlined">Surface</button> 
        <button className="button is-primary is-focused">+ de filtres</button> 
      </div>
    </div>
  </section>
  <section>
    <div className="columns">
      <div className="column">
        <div className="table">
{this.state.apparts.map((appart, index) => {
  return (
    <Card appart={appart} key={appart._id }></Card>
    //<h1>{appart.description}/</h1>
    )
  })
} 

        <div className="">
          <nav className="pagination" role="navigation" aria-label="pagination">
    <a className="pagination-previous" title="This is the first page" disabled>Précédent</a>
    <a className="pagination-next">Suivant</a>
    <ul className="pagination-list">
      <li>
        <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
      </li>
      <li>
        <a className="pagination-link" aria-label="Goto page 2">2</a>
      </li>
      <li>
        <a className="pagination-link" aria-label="Goto page 3">3</a>
      </li>
    </ul>
  </nav>
        </div>

      </div>


    </div>
    </div>
  </section>
</div>
    );
  }
}

export default Annonces;
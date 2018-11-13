import React, { Component } from "react";

class Card extends Component {

  render() {
    console.log(this.props)
    return(
      <div>

<div className="columns card-container">
  <div className="column">

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <a href={'/description/'+ this.props.appart._id}>
            <img src="/images/apartment.png" alt=""/>
          </a>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-38x38">
              <img src="/images/juliensmall.jpg" alt=""/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-5">{this.props.appart.firstName} {this.props.appart.lastName}</p>
          </div>
        </div>
      </div>
      <div className="contenta">
        <div className="colums">
          <h3>{this.props.appart.title}</h3>
          <div className="colum">
            <ul>
              <li>{this.props.appart.adresse ? this.props.appart.adresse.city :''} {this.props.appart.adresse ? this.props.appart.adresse.zip_code :''}</li>
              <li> {this.props.appart.surface}m2 - {this.props.appart.prix}€</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
    );
  }

}

export default Card;


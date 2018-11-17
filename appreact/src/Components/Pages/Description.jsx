import React, { Component } from "react";
import axios from "axios";
import Card from "../Elements/Card";


class Description extends Component {
  constructor() {
    super();
    this.state = { appart: {} };
  }


  getOneAppart = () => {
    axios
      .get(
        "http://localhost:5000/api/description/" + this.props.match.params.id
      )
      .then(responseFromApi => {
        console.log(responseFromApi.data);
        this.setState({
          appart: responseFromApi.data.appart
        });
      });
  };

  componentDidMount () {
    this.getOneAppart();
  }

  render() {
    return (
      <div className="cardcloseup">
        <div className="tile is-parent">
          <div className="tile is-3 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title"> { this.state.appart && this.state.appart.user ? this.state.appart.user.firstName : ''} { this.state.appart && this.state.appart.user ? this.state.appart.user.lastName : ''}</p>
              <figure className="imageuser">
                <img src="/images/rsz_julienbig.jpg" alt="Placeholder image"/>
              </figure>
              <br /> 
              <p>{ this.state.appart && this.state.appart.adresse ? this.state.appart.adresse.city : ''} { this.state.appart && this.state.appart.adresse ? this.state.appart.adresse.zip_code : ''} </p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title" />
              <figure className="imageap">

              <a className="button is-primary is-outlined btnMargin">Postuler</a>

                <img src="/images/apartment.png" alt="Placeholder image"/>
              </figure>
              <br /> 
              <p>{ this.state.appart ? this.state.appart.description : ''}</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Description;

// <li>{{apparts.adresse.city}} {{apparts.adresse.zip_code}}</li>
// <li> {{apparts.surface}}m2 - {{apparts.prix}}€</li>

// {{apparts.description}}

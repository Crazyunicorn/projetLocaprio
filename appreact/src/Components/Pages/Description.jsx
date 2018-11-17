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

  render() {
    return (
      <div className="cardcloseup">
        <div className="tile is-parent">
          <div className="tile is-3 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title"> // comm 1</p>
              <figure className="imageuser">
                <img src="/images/rsz_julienbig.jpg" alt="Placeholder image" />
              </figure>
              <br /> // comm 2
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title" />
              <figure className="imageap">
                <img src="/images/apartment.png" alt="Placeholder image" />
              </figure>
              <br /> //comm 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
// {{apparts.user.firstName}} {{apparts.user.lastName}}

// <li>{{apparts.adresse.city}} {{apparts.adresse.zip_code}}</li>
// <li> {{apparts.surface}}m2 - {{apparts.prix}}€</li>

// {{apparts.description}}

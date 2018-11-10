import React, { Component } from "react";

class Home extends Component {

  render() {
    return(
<div>
<section className="hero is-medium is-primary is-bold">
  <div className="hero-body">
<img className="logonav" src="./images/logo.png" alt=""/>
<img className="logotext" src="./images/logotext.png" alt=""/>
    <div className="container">
      <h1 className="title"></h1>
      <h2 className="title">
        <br/>
        Plateforme de mise en relation 2.0 pour trouver son logement.
        <br/>
      </h2>
      <h2 className="subtitle">
        Plus qu'un site immobilier, une vériable agence immobilière en ligne pour se loger.
      </h2>
    </div>
  </div>
</section>

</div>
    );
  }
}

export default Home;



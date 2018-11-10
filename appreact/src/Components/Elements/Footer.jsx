import React, { Component } from "react";

class Footer extends Component {

  render() {
    return(
<div>
<footer className="footer">
  <div className="content has-text-centered">
    <div className="columns">
      <div className="column">
      <a href="https://jgthms.com">Contact</a>
      </div>
      <div className="column">
      <a href="http://opensource.org/licenses/mit-license.php">Aide</a>
      </div>
      <div className="column">
      <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Politique de confidentialité</a>
      </div>
    </div>
  </div>
</footer>
</div>
    );
  }
}

export default Footer;

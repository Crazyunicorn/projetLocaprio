import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
      dossierOK: false
    };
  }

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    this.setState({
      dossierOK: true
    });
  };

  render() {
    if (this.state.dossierOK) {
      return <Redirect to="/creadossierloc/complet" />;
    }
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          action="http://localhost:5000/api/file/image"
          method="post"
          encrype="multipart/form-data"
        >
          &nbsp;&nbsp;&nbsp;
          <div className="file has-name is-fullwidth">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">carteid.png</span>
            </label>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="file has-name is-fullwidth">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">bulletinsdesalaire.pdf</span>
            </label>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="file has-name is-fullwidth">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">justificatifdomicile.pdf</span>
            </label>
          </div>
          <input className="button is-primary" type="submit" value="Créer" />
        </form>
      </div>
    );
  }
}

export default Upload;

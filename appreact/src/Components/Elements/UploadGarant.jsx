import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navprofil from "../Elements/navProfil";
import axios from "axios";

class UploadGarant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
      carteid: "",
      bulletinssalaire: "",
      justificatifdomicile: "",
      dossierOK: false
    };
  }

  loadFile = (event, name) => {
    console.log(event);
    event.preventDefault();
    let form = new FormData();
    form.append("file", event.target.files[0]);
    axios({
      method: "post",
      url: "http://localhost:5000/api/file/image",
      data: form,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        //handle success
        this.setState({ [name]: response.data.imageUrl });
        console.log(response);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
    // this.setState({
    //   dossierOK: true
    // })
  };

  handleSubmit = () => {
    axios
      .post(
        "http://localhost:5000/api/route/update_dossier/" + this.props.userid,
        {
          carteid: this.state.carteid,
          bulletinssalaire: this.state.bulletinssalaire,
          justificatifdomicile: this.state.justificatifdomicile
        }
      )
      .then(_ => {
        this.setState({
          dossierOK: true
        });
      });
  };

  render() {
    const user = this.props.loggedUser;
    if (this.state.dossierOK) {
      return <Redirect to="/creadossierloc/complet" />;
    }
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Mes Garants. </h1>
              <h2 className="subtitle">
                Téléchargez les dossiers de vos garants en 2 minutes
              </h2>
            </div>
          </div>
        </section>
        <div className="wrapper2">
          <nav id="profil">
            <Navprofil loggedUser={user} />
          </nav>
          <div className="columns">
            <div className="cardGarant column">
              <h2>Garant 2</h2>
              <br />
              <div className="file has-name is-fullwidth">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    onChange={e => this.loadFile(e, "carteid")}
                  />
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
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    onChange={e => this.loadFile(e, "bulletinssalaire")}
                  />
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
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    onChange={e => this.loadFile(e, "justificatifdomicile")}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload" />
                    </span>
                    <span className="file-label">Choose a file…</span>
                  </span>
                  <span className="file-name">justificatifdomicile.pdf</span>
                </label>
              </div>
            </div>

            <div className="cardGarant column">
              <h2>Garant 2</h2>
              <br />
              <div className="file has-name is-fullwidth">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    onChange={e => this.loadFile(e, "carteid")}
                  />
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
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    onChange={e => this.loadFile(e, "bulletinssalaire")}
                  />
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
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    onChange={e => this.loadFile(e, "justificatifdomicile")}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload" />
                    </span>
                    <span className="file-label">Choose a file…</span>
                  </span>
                  <span className="file-name">justificatifdomicile.pdf</span>
                </label>
              </div>
            </div>
          </div>
          <input
            className="button is-primary"
            type="submit"
            value="Créer"
            onClick={() => this.handleSubmit()}
          />
        </div>
      </div>
    );
  }
}

export default UploadGarant;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";


class Upload extends Component {
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
    console.log(event)
    event.preventDefault()
    let form = new FormData()
    form.append('file', event.target.files[0])
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/file/image',
      data: form,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
          //handle success
          this.setState({[name]: response.data.imageUrl})
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });    
    // this.setState({
    //   dossierOK: true
    // })
  }

  handleSubmit = () => {
    axios.post('http://localhost:5000/api/route/update_dossier/'+this.props.userid, {
      carteid: this.state.carteid,
      bulletinssalaire: this.state.bulletinssalaire,
      justificatifdomicile: this.state.justificatifdomicile,
    })
    .then(_=>{
      this.setState({
        dossierOK: true
      })
    })
  }

  render() {
    if(this.state.dossierOK) {
      return <Redirect to='/creadossierloc/complet'></Redirect>
    }
    return (
      <div>

        &nbsp;&nbsp;&nbsp;
      <div className="file has-name is-fullwidth">
        <label className="file-label">
          <input className="file-input" type="file" name="file" onChange={(e) => this.loadFile(e, 'carteid')}/>
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
              Choose a file…
            </span>
          </span>
          <span className="file-name">
            carteid.png
          </span>
        </label>
      </div>
      &nbsp;&nbsp;&nbsp;

      <div className="file has-name is-fullwidth">
        <label className="file-label">
          <input className="file-input" type="file" name="file" onChange={(e) => this.loadFile(e, 'bulletinssalaire')}/>
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
              Choose a file…
            </span>
          </span>
          <span className="file-name">
            bulletinsdesalaire.pdf
          </span>
        </label>
      </div>
      &nbsp;&nbsp;&nbsp;

      <div className="file has-name is-fullwidth">
        <label className="file-label">
          <input className="file-input" type="file" name="file" onChange={(e) => this.loadFile(e, 'justificatifdomicile')}/>
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
              Choose a file…
            </span>
          </span>
          <span className="file-name">
            justificatifdomicile.pdf
          </span>
        </label>
      </div>
      <input className="button is-primary"type="submit" value="Créer" onClick={() => this.handleSubmit()}/> 

      </div>
    );
  }
}

export default Upload;

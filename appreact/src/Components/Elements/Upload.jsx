import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: ""
    };
  }

  render() {
    return (
      <div>
        <form
          action="http://localhost:5000/api/upload-image"
          method="post"
          enctype="multipart/form-data"
        >
          <label>Photo de profil :</label>
          <input className="button" type="file" name="file" />

          <input className="button" type="submit" value="Envoyer" />
        </form>
      </div>
    );
  }
}

export default Upload;

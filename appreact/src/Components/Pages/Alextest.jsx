import React, { Component } from "react";
import Uload from "../Elements/Uload";
const cors = require("cors");

class Alextest extends Component {
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
          <label>Fichier à importer :</label>
          <input className="button" type="file" name="file" />

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Alextest;

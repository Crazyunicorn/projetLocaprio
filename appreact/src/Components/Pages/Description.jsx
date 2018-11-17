import React, { Component } from "react";
import axios from 'axios';
import Card from '../Elements/Card';



class Description extends Component {
  constructor(){
    super();
    this.state = {appart:{}};
  }

  getOneAppart = () =>{
    axios.get('http://localhost:5000/api/description/'+this.props.match.params._id)
    .then(responseFromApi => {
      console.log(responseFromApi.data)
      this.setState({
        appart: responseFromApi.data.appart
      })
    })
  }

  
  render() {
    return(
      <div>
    <Card appart={this.state.appart}></Card>
</div>
    );
  }
}

export default Description;

import React, { Component } from "react";

class Alextest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedUser: this.props.loggedUser
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   let { name, value } = event.target;
  //   this.setState({ [name]: value });
  // }

  render() {
    return (
      <div>
        <section>
          <p>hello test </p>
        </section>

        {this.props.loggedUser.email ? "your logged" : "not logged"}
      </div>
    );
  }
}
export default Alextest;

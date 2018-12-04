import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Navbar from "./Elements/Navbar.jsx";
import Footer from "./Elements/Footer.jsx";
import Alextest from "./Pages/Alextest.jsx";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Annonces from "./Pages/Annonces.jsx";
import Description from "./Pages/Description.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup";
import Profil from "./Pages/Profil";
import CreationAppart from "./Pages/CreationAppart";
import Profilprivloc from "./Pages/Profilprivloc";
import Creadossierloc from "./Pages/Creadossierloc";
import Notificationproprio from "./Pages/Notificationproprio";
import Candidatures from "./Pages/Candidatures";
import api from "./api.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: {}
    };
  }

  onLogin(user) {
    console.log("hi from onLogin in app.js");
    this.setState({
      loggedUser: user
    });
  }

  logout = () => {
    console.log("logout");
    api
      .delete("api/route/logout")
      .then(() => {
        this.setState({ loggedUser: {} });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong. 💩");
      });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Navbar logout={this.logout} loggedUser={this.state.loggedUser} />
            )}
          />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/test"
            render={() => <Alextest loggedUser={this.state.loggedUser} />}
          />
          <Route exact path="/annonces" component={Annonces} />
          <Route exact path="/description/:id" component={Description} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/description/:id" component={Description} />
          <Route
            exact
            path="/login"
            render={() =>
              !this.state.loggedUser.email ? (
                <Login moduleUser={this.onLogin.bind(this)} />
              ) : (
                <Redirect to="/" />
              )
            }
          />

          <Route
            exact
            path="/profil"
            render={() => <Profil loggedUser={this.state.loggedUser} />}
          />

          <Route
            exact
            path="/profilprivloc"
            render={() => <Profilprivloc loggedUser={this.state.loggedUser} />}
          />
          <Route
            exact
            path="/candidatures"
            render={() => <Candidatures loggedUser={this.state.loggedUser} />}
          />
          <Route
            exact
            path="/creation-annonce"
            render={() => <CreationAppart loggedUser={this.state.loggedUser} />}
          />
          <Route
            path="/creadossierloc"
            render={() => <Creadossierloc user={this.state.loggedUser} />}
          />
          <Route path="/candidatures" component={Candidatures} />
          <Route
            exact
            path="/notificationproprio"
            component={Notificationproprio}
          />
        </Switch>
        <Switch>
          <Route path="/" component={Footer} />
        </Switch>
      </div>
    );
  }
}

export default App;

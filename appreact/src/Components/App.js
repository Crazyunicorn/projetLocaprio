import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Navbar from "./Elements/Navbar.jsx";
import Footer from "./Elements/Footer.jsx";
import Alextest from "./Pages/Alextest.jsx";
import { Switch, Route } from "react-router-dom";
import Annonces from "./Pages/Annonces.jsx";
import Description from "./Pages/Description.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup";
import Profil from "./Pages/Profil";
import Profilprivloc from "./Pages/Profilprivloc";
import Creadossierloc from "./Pages/Creadossierloc";
import Notificationproprio from "./Pages/Notificationproprio";
import Candidatures from "./Pages/Candidatures";

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


  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => <Navbar loggedUser={this.state.loggedUser} />}
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
         
          <Route exact path="/signup" render={()=><Signup updateUser={this.updateUser.bind(this)}></Signup>} />

          <Route path="/description/:id" component={Description} />
          <Route
            exact
            path="/login"
            render={() =>
              !this.state.loggedUser.email ? (
                <Login moduleUser={this.onLogin.bind(this)} />
              ) : (
                <Profil loggedUser={this.state.loggedUser} />
              )
            }
          />
        

          <Route exact path="/profil" component={Profil} />
          <Route exact path="/profilprivloc" component={Profilprivloc} />
          <Route path="/creadossierloc" render={()=> <Creadossierloc user={this.state.user}></Creadossierloc>} />
          <Route exact path="/candidatures" component={Candidatures} />


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

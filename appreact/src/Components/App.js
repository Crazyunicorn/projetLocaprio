import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.jsx';
import Navbar from './Elements/Navbar.jsx';
import Footer from './Elements/Footer.jsx';
import Alextest from "./Pages/Alextest.jsx";
import { Switch, Route } from 'react-router-dom';
import Annonces from './Pages/Annonces.jsx';
import Description from './Pages/Description.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup';
import Profilproprio from './Pages/Profilproprio';
import Profilloc from './Pages/Profilloc';
import Profilprivloc from './Pages/Profilprivloc';
import Creadossierloc from './Pages/Creadossierloc';
import Notificationproprio from './Pages/Notificationproprio';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Navbar} />
          <Route exact path='/testupload' component={Navbar} />
          <Route exact path='/annonces' component={Navbar} />
          <Route exact path='/description' component={Navbar} />
          <Route exact path='/login' component={Navbar} />
          <Route exact path='/signup' component={Navbar} />
          <Route exact path='/profilproprio' component={Navbar} />
          <Route exact path='/profilloc' component={Navbar} />
          <Route exact path='/profilprivloc' component={Navbar} />
          <Route exact path='/creadossierloc' component={Navbar} />
          <Route exact path='/notificationproprio' component={Navbar} />
        </Switch>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/testupload' component={Alextest} />
          <Route exact path='/annonces' component={Annonces} />
          <Route exact path='/description' component={Description} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/profilproprio' component={Profilproprio} />
          <Route exact path='/profilloc' component={Profilloc} />
          <Route exact path='/profilprivloc' component={Profilprivloc} />
          <Route exact path='/creadossierloc' component={Creadossierloc} />
          <Route exact path='/notificationproprio' component={Notificationproprio} />
        </Switch>
        <Switch>
          <Route exact path='/' component={Footer} />
          <Route exact path='/testupload' component={Footer} />
          <Route exact path='/annonces' component={Footer} />
          <Route exact path='/description' component={Footer} />
          <Route exact path='/login' component={Footer} />
          <Route exact path='/signup' component={Footer} />
          <Route exact path='/profilproprio' component={Footer} />
          <Route exact path='/profilloc' component={Footer} />
          <Route exact path='/profilprivloc' component={Footer} />
          <Route exact path='/creadossierloc' component={Footer} />
          <Route exact path='/notificationproprio' component={Footer} />
        </Switch>
      </div>
    );
  }
}

export default App;
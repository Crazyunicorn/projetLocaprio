import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.jsx';
import Navbar from './Elements/Navbar.jsx';
import Footer from './Elements/Footer.jsx';
import Alextest from "./Pages/Alextest";
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/testupload' component={Alextest} />
        </Switch>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;


//<Switch>
         //<Route exact path='/' component={Navbar} />
         //<Route  path='/studies' component={Navbar} />
         //<Route  path='/business' component={Navbar} />
         //<Route  path='/freelance-experimenté' component={Navbar} />
         //<Route  path='/contact/devis-gratuit' component={Navbar} />
       //</Switch>

       //<Switch>
         //<Route exact path='/' component={Home} />
       //</Switch>

       //<Switch>
         //<Route exact path='/' component={Footer} />
         //<Route  path='/studies' component={Footer} />
         //<Route  path='/business' component={Footer} />
         //<Route  path='/freelance-experimenté' component={Footer} />
         //<Route  path='/contact/devis-gratuit' component={Footer} />
       //</Switch>
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import NavBar from './Navbar.js'
import Home from './Home.js'
import Gallery from './Gallery'



class App extends Component {

  render() {
  
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
          <Route path ='/' exact component = {Home}/>
          </Switch>
          <Route path= '/portfolio'>
            <Gallery />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

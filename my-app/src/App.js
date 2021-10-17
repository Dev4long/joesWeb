import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar'



class App extends Component {

  render() {
  
    return (
      <div>
        <Router>
          <Switch>
       <Navbar />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

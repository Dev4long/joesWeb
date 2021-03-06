import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import NavBar from './Navbar.js'
import Home from './Home.js'
import Slider from './Slider.js'
import { ProjectData, ProjectData2 } from './ProjectData.js'



class App extends Component {

  render() {
  
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/portfolio'>
              <Slider project1 = {[ProjectData,ProjectData2]} project2 = {ProjectData2}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

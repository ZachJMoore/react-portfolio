import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import Landing from './Landing';
import Work from './Work';
import Contact from './Contact';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Route render={({location})=><Navigation location={location}/>} />
        <Route exact path="/" render={()=><Landing />} />
        <Route exact path="/work" render={()=><Work />} />
        <Route exact path="/contact" render={()=><Contact />} />
      </div>
    );
  }
}

export default App;

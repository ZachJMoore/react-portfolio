import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Landing from './Landing';
import Work from './Work';
import Contact from './Contact';
import Navigation from './Navigation';
import projects from "../projects.js"
import ProjectItemPage from "./ProjectItemPage"

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Route render={({location})=><Navigation location={location}/>} />
        <Route exact path="/" render={()=><Landing />} />
        <Route exact path="/work" render={()=><Work />} />
        <Route exact path="/contact" render={()=><Contact />} />
        {projects.map((project, index)=>{
          return (
            <Route exact path={"/work/" + project.pathname} render={()=><ProjectItemPage project={project}/>} key={index} />
          )
        })}
      </div>
    );
  }
}

export default App;

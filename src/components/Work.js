import React, { Component } from 'react';
import code from "../images/code.jpg"
import smartKilnImg from "../images/smart-kiln.jpg"

class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <div src={code} className="work-header-image">
            <h2>Work</h2>
        </div>
        <div className="work-projects">
            <ProjectItem imgSrc={smartKilnImg} title="Smart Kiln" description="Creating a computer controlled kiln thats accessible from anywhere in the world."/>
        </div>
      </div>
    );
  }
}

let ProjectItem = (props)=>{
    return (
        <div className="work-project-item">
            <div className="work-project-image" style={{backgroundImage: `url(${props.imgSrc})`}}/>
            <span className="work-project-title">{props.title}</span>
            <span className="work-project-description">{props.description}</span>
        </div>
    )
}

export default Work;
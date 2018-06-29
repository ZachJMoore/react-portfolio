import React, { Component } from 'react';
import code from "../images/code.jpg"
import smartKilnImg from "../images/smart-kiln.jpg";
import redCeramicBowl from "../images/red-ceramic-bowl.jpg"

class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <div src={code} className="work-header-image"><span>Work</span></div>
        <div className="work-projects">
            <ProjectItem imgSrc={smartKilnImg} title="Smart Kiln" description="Creating a computer controlled kiln thats accessible from anywhere in the world."/>
            <ProjectItem imgSrc={redCeramicBowl} title="Crystalline" description="Growing Zinc Silicate crystals at 2225°F"/>
        </div>
      </div>
    );
  }
}

let ProjectItem = (props)=>{
    return (
        <div className="work-project-item">
            <div className="work-project-image" style={{backgroundImage: `url(${props.imgSrc})`}}></div>
            <span className="work-project-title">{props.title}</span>
            <span className="work-project-description">{props.description}</span>
        </div>
    )
}

export default Work;
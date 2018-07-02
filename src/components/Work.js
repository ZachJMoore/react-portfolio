import React, { Component } from 'react';
import code from "../images/code.jpg"
import raspberryPi from "../images/device.jpg";
import redCeramicBowl from "../images/red-ceramic-bowl.jpg"
import marbledCeramicPlate from "../images/marbled-ceramic-plate.jpg"
import moldedCup from "../images/molded-cup.jpg"


let ceramicProjects = [
  {
    imgSrc: redCeramicBowl,
    title: "Crystalline",
    description: "Growing Zinc Silicate crystals at 2225°F",
    link: "crystalline-ceramics"
  },
  {
    imgSrc: marbledCeramicPlate,
    title: "Marbled Ceramics",
    description: "Visualizing the flow of black and white"
  },
  {
    imgSrc: moldedCup,
    title: "3D Print Molding",
    description: "Making precision molds from digital models"
  }
]

let softwareProjects = [
  {
    imgSrc: raspberryPi,
    title: "Smart Kiln",
    description: "Creating a computer controlled kiln thats accessible from anywhere in the world.",
    link: "smart-kiln"
  }
]


class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <div src={code} className="work-header-image"><span>Work</span></div>

        {/* <h4 className="work-projects-title">Software</h4> */}
        <div className="work-projects">
          {softwareProjects.map(project => <ProjectItem imgSrc={project.imgSrc} title={project.title} description={project.description}/>)}
        </div>

        {/* <h4 className="work-projects-title">Ceramics</h4> */}
        <div className="work-projects">
          {ceramicProjects.map(project => <ProjectItem imgSrc={project.imgSrc} title={project.title} description={project.description}/>)}
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
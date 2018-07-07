import React, { Component } from 'react';
import { Link } from "react-router-dom"

import smartKilnHeader from "../images/software/smart-kiln-header.jpg";
import weatherAppHeader from "../images/software/weather-app-header.jpg";
import neighborhoodRestaurantsHeader from "../images/software/neighborhood-restaurant-header.jpg";
import memoryMatchHeader from "../images/software/memory-match-header.jpg";
import pomodoroTimerHeader from "../images/software/pomodoro-timer-header.jpg";
import crystallineCeramicsHeader from "../images/ceramics/crystalline-ceramics-header.jpg"
import marbledCeramicHeader from "../images/ceramics/marbled-ceramics-header.jpg"
import PrintMoldingHeader from "../images/ceramics/3d-print-molding-header.jpg"

let projects = [
  {
    headerImgSrc: smartKilnHeader,
    title: "Smart Kiln",
    shortDescription: "Creating a computer controlled kiln that's accessible from anywhere in the world",
    pathname: "smart-kiln",
    projectBody: [
      {
        description: ""
      }
    ]
  },
  {
    headerImgSrc: weatherAppHeader,
    title: "Weather App",
    shortDescription: "Utilizing the OpenWeatherMap API",
    pathname: "weather-app"
  },
  {
    headerImgSrc: neighborhoodRestaurantsHeader,
    title: "Neighborhood Restaurants",
    shortDescription: "Building a neighborhood restaurants app",
    pathname: "weather-app"
  },
  {
    headerImgSrc: memoryMatchHeader,
    title: "Memory Match",
    shortDescription: "Matching game built with vanilla Javascript",
    pathname: "weather-app"
  },
  {
    headerImgSrc: pomodoroTimerHeader,
    title: "Pomodoro Timer",
    shortDescription: "Simple timer to help stay on task",
    pathname: "weather-app"
  },
  {
    headerImgSrc: crystallineCeramicsHeader,
    title: "Crystalline",
    shortDescription: "Growing Zinc Silicate crystals at 2225°F",
    pathname: "crystalline-ceramics"
  },
  {
    headerImgSrc: marbledCeramicHeader,
    title: "Marbled Ceramics",
    shortDescription: "Visualizing the flow of black and white",
    pathname: "marbled-ceramics"
  },
  {
    headerImgSrc: PrintMoldingHeader,
    title: "3D Print Molding",
    shortDescription: "Making precision molds from digital models",
    pathname: "3d-printed-molds"
  }
]

class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <div className="work-header-image"><span>Work</span></div>

        <div className="work-projects">
          {projects.map((project, index) => <ProjectItem project={project} key={index}/>)}
        </div>

      </div>
    );
  }
}

let ProjectItem = (props)=>{

  let { headerImgSrc, pathname, title, shortDescription } = props.project

  return (
      <Link to={`work/${pathname}`} className="work-project-item">
          <div className="work-project-image" style={{backgroundImage: `url(${headerImgSrc})`}}>
            <span className="work-project-description">{shortDescription}</span>
          </div>
          <span className="work-project-title">{title}</span>
      </Link>
  )
}

export default Work;
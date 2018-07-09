import React, { Component } from 'react';
import { Link } from "react-router-dom"
import projects from "../projects.js"

class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <div className="work-header-image">
          {/* <span>Work</span> */}
        </div>

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
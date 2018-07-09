import React, { Component } from "react"

class ProjectItemPage extends Component{
    render(){
        return (
            <div className="project-page">
                <div className="project-header-image" style={{backgroundImage: `url(${this.props.project.headerImgSrc})`}}>
                    <span>{this.props.project.title}</span>
                </div>
                <div className="project-body-container">
                    <div className="project-body-links">
                        {this.props.project.links.demo && <a href={this.props.project.links.demo}>Demo</a>}
                        {this.props.project.links.source && <a href={this.props.project.links.source}>Source code</a>}
                    </div>
                    {this.props.project.projectBody.map((data, index)=><ProjectBody data={data} key={index}/>)}
                </div>
            </div>
        )
    }
}

let ProjectBody = (props)=>{

    let { imgSrc, imgDesc, paragraphs } = props.data;

    return (
        <div className="project-body-segment">
            {imgSrc && <img src={imgSrc} />}
            {imgDesc && <small>{imgDesc}</small>}
            {paragraphs.map((paragraph, index)=><p key={index}>{paragraph}</p>)}
        </div>
    )
}

export default ProjectItemPage
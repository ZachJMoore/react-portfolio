import React, { Component } from 'react';
import code from "../images/code.jpg"

class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <img src={code} className="work-header-image"/>
      </div>
    );
  }
}

export default Work;
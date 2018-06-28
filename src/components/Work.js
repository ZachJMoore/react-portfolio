import React, { Component } from 'react';
import code from "../images/code.jpg"

class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <div src={code} className="work-header-image">
            <h2>Work</h2>
        </div>
      </div>
    );
  }
}

export default Work;
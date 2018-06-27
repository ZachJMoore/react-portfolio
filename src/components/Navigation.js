import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navigation extends Component {
  render() {
    return (
        <nav className={`navigation${this.props.location.pathname !== "/" ? " dark" : ""}`}>
            <Link to="/" className="navigation-header">Zach Moore</Link>
            <Link to="/work" className="navigation-work">Work</Link>
            <Link to="/contact" className="navigation-contact">Contact</Link>
        </nav>
    );
  }
}

export default Navigation;
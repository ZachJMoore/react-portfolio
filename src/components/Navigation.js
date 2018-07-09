import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navigation extends Component {

  constructor(props){
    super(props);
    this.state = { classes: "navigation"}
    this.getClasses = (pathname)=>{
      if (
        pathname === "/contact"
      ){
        return "navigation dark"
      }

      return "navigation"
    }
  }

  componentDidMount(){
    let classes = this.getClasses(this.props.location.pathname)
    if (this.state.classes !== classes){
      this.setState({classes: classes})
    }
  }

  componentDidUpdate(){
    let classes = this.getClasses(this.props.location.pathname)
    if (this.state.classes !== classes){
      this.setState({classes: classes})
    }
  }


  render() {
    return (
        <nav className={this.state.classes}>
            <Link to="/" className="navigation-header">Zach Moore</Link>
            <Link to="/work" className="navigation-work">Work</Link>
            <Link to="/contact" className="navigation-contact">Contact</Link>
        </nav>
    );
  }
}

export default Navigation;
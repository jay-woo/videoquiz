import React, { Component } from 'react';
import logo from '../images/pearson_logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
	      <img className="Navbar-logo" src={logo} alt="Pearson" />

        <div className="Navbar-links">
		      <a className="Navbar-icon" href=""><p>Bell</p></a>
		      <a className="Navbar-icon" href=""><p>Question</p></a>
		      <a className="Navbar-name" href=""><p>{this.props.username}</p></a>
        </div>
      </div>
    );
  }
}

export default Navbar;

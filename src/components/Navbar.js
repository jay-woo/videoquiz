import React, { Component } from 'react';
import logo from '../images/pearson_logo.png';
import bell from '../images/bell.png';
import question from '../images/question.png';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
	      <img className="Navbar-logo" src={logo} alt="Pearson" />

        <div className="Navbar-links">
		      <a className="Navbar-icon">
            <img src={bell} alt="Alerts" />
          </a>
		      <a className="Navbar-icon">
            <img src={question} alt="Help" />
          </a>
		      <a className="Navbar-name">
            <p>{this.props.username}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;

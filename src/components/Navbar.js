import React, { Component } from 'react';
import logo from '../images/pearson_logo.png';
import bell from '../images/bell.png';
import question from '../images/question.png';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar" role="navigation">
	      <img className="Navbar-logo" src={logo} alt="Pearson logo" aria-hidden="true"/>

        <div className="Navbar-links">
		      <a className="Navbar-icon" tabIndex="1">
            <img src={bell} alt="Alerts" />
          </a>
		      <a className="Navbar-icon" tabIndex="2">
            <img src={question} alt="Get help" />
          </a>
		      <a className="Navbar-name" tabIndex="3" >
            <p alt="Username">{this.props.username}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;

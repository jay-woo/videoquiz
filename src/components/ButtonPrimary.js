import React, { Component } from 'react';

class ButtonPrimary extends Component {
	render() {
		return (
			<div className="ButtonPrimary">
      	<button tabIndex={this.props.tabIndex} type="button" onClick={this.props.onClick} alt={this.props.alt}><p>{this.props.buttonText}</p></button>
      </div>
    );
	}
}

export default ButtonPrimary;
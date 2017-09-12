import React, { Component } from 'react';

class ButtonSecondary extends Component {
	render() {
		return (
			<div className="ButtonSecondary">
      	<button type="button" onClick={this.props.onClick}>{this.props.buttonText}</button>
      </div>
    );
	}
}

export default ButtonSecondary;
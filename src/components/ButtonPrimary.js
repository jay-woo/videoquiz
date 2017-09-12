import React, { Component } from 'react';

class ButtonPrimary extends Component {
	render() {
		return (
			<div className="ButtonPrimary">
      	<button type="button" onClick={this.props.onClick}><p>{this.props.buttonText}</p></button>
      </div>
    );
	}
}

export default ButtonPrimary;
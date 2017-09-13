import React, { Component } from 'react';

class ButtonSecondary extends Component {
	render() {
		return (
			<div className="ButtonSecondary">
      	<button
      		tabIndex={this.props.tabIndex}
      		type="button"
      		onClick={this.props.onClick}
      		alt={this.props.alt}
      		aria-label={this.props.ariaLabel}
      	>
      		<p>{this.props.buttonText}</p>
      	</button>
      </div>
    );
	}
}

export default ButtonSecondary;
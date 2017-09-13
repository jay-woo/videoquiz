import React, { Component } from 'react';

class SubmitError extends Component {
	render() {
		return (
			<div className="SubmitError" role="alert">
				<span className="SubmitError-heading">Error</span>
    		<button aria-label="Close error message" className="SubmitError-close" onClick={this.props.toggleError}>&times;</button>
    		<p className="SubmitError-content">Please answer all the questions before submitting your quiz.</p>
			</div>
		);
	}
}

export default SubmitError
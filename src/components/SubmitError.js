import React, { Component } from 'react';

class SubmitError extends Component {
	render() {
		return (
			<div className="SubmitError">
				<span className="SubmitError-heading">Error</span>
    		<span className="SubmitError-close" onClick={this.props.toggleError}>&times;</span>
    		<p className="SubmitError-content">Please answer all the questions before submitting your quiz.</p>
			</div>
		);
	}
}

export default SubmitError
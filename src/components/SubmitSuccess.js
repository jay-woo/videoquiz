import React, { Component } from 'react';

class SubmitSuccess extends Component {
	render() {
		return (
			<div className="SubmitSuccess" role="alert">
				<span className="SubmitSuccess-heading">Success</span>
    		<button aria-label="Close success message" className="SubmitSuccess-close" onClick={this.props.toggleSuccess}>&times;</button>
    		<p className="SubmitSuccess-content">Success! You've submitted your quiz.</p>
			</div>
		);
	}
}

export default SubmitSuccess
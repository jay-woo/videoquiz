import React, { Component } from 'react';

class SubmitSuccess extends Component {
	render() {
		return (
			<div className="SubmitSuccess">
				<span className="SubmitSuccess-heading">Success</span>
    		<span className="SubmitSuccess-close" onClick={this.props.toggleSuccess}>&times;</span>
    		<p className="SubmitSuccess-content">Success! You've submitted your quiz.</p>
			</div>
		);
	}
}

export default SubmitSuccess
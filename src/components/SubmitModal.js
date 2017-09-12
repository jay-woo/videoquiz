import React, { Component } from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

class SubmitModal extends Component {
	render() {
		return (
			<div className="SubmitModal">
				<div className="SubmitModal-content">
					<div className="SubmitModal-header">
						<p>Submit Quiz</p>
    				<span className="SubmitModal-header-close" onClick={this.props.toggleModal}>&times;</span>
					</div>
					<div className="SubmitModal-message">
						<p>Are you sure you're ready to submit? You won't be able to change your answers.</p>
					</div>
					<div className="SubmitModal-buttons">
						<ButtonPrimary buttonText="Submit Quiz" onClick={this.props.finalSubmitQuiz}/>
						<ButtonSecondary buttonText="Review" onClick={this.props.toggleModal}/>
					</div>
				</div>
			</div>
		);
	}
}

export default SubmitModal
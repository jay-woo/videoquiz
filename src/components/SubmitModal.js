import React, { Component } from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

class SubmitModal extends Component {
	render() {
		return (
			<div className="SubmitModal" role="alertdialog" >
				<div className="SubmitModal-content">
					<div className="SubmitModal-header">
						<p>Submit Quiz</p>
    				<button className="SubmitModal-header-close" onClick={this.props.toggleModal} aria-label="Close">&times;</button>
					</div>
					<div className="SubmitModal-message">
						<p>Are you sure you're ready to submit? You won't be able to change your answers.</p>
					</div>
					<div className="SubmitModal-buttons">
						<div className="clear"></div>
						<ButtonSecondary buttonText="Review" onClick={this.props.toggleModal} />
						<ButtonPrimary buttonText="Submit Quiz" onClick={this.props.finalSubmitQuiz} />
					</div>
				</div>
			</div>
		);
	}
}

export default SubmitModal
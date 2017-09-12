import React, { Component } from 'react';
import checkmark from '../images/check-mark.png';

class ResultsItemDetails extends Component {
	render() {
		let choicesTemplate = this.props.choices.map((choice, i) => {
			if (choice === this.props.answer) {
				return (
					<span key={choice} className="ResultsItemDetails-choice-correct">
						<img className="ResultsItemDetails-mark" src={checkmark} alt="correct" /> {choice}
					</span>
				);
			}
			if (i === this.props.selectedChoice && choice !== this.props.answer) {
				return (
					<span key={choice} className="ResultsItemDetails-choice-incorrect">
						{choice}
					</span>
				);
			} else {
				return (
					<span key={choice} className="ResultsItemDetails-choice">
						{choice}
					</span>
				);
			}
		});

		return (
			<div className="ResultsItemDetails">
				<span className="ResultsItemDetails-question">{this.props.question}</span>
				<div className="ResultsItemDetails-choices">{choicesTemplate}</div>
			</div>
		);
	}
}

export default ResultsItemDetails
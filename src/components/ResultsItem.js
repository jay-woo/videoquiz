import React, { Component } from 'react';
import ResultsItemDetails from './ResultsItemDetails';
import checkmark from '../images/check-mark.png';
import xmark from '../images/x-mark.png';

class ResultsItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleDetails();

		let seconds = this.props.calculateTimeStampInSeconds(this.props.timeStamp);
		this.props.videoSeekTo(seconds);
	}

	render() {
		let mark = null;
		if (this.props.hasCorrectAnswer) {
			mark = <img className="ResultsItem-mark" src={checkmark} alt="correct" />
		}
		else {
			mark = <img className="ResultsItem-mark" src={xmark} alt="incorrect" />
		}

		let details = null;
		if (this.props.showDetails) {
			details = 
				<ResultsItemDetails 
	        question={this.props.question}
	        choices={this.props.choices}
	        answer={this.props.answer}
	        selectedChoice={this.props.selectedChoice}
				/>;
		}

		return (
			<div className="ResultsItem" onClick={this.handleClick}>
				<span className="ResultsItem-question">
					{this.props.showDetails ? '▾' : '▸'} Question {this.props.questionNum}
				</span>
				<span className="ResultsItem-timeStamp">[{this.props.timeStamp}]</span>
				{mark}
				{details}
			</div>
		);
	}
}

export default ResultsItem
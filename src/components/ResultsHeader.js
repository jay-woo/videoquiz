import React, { Component } from 'react';
import Score from './Score';

class ResultsHeader extends Component {
	render() {
		return (
			<div className="ResultsHeader">
				<Score score={this.props.score}/>
				<span className="ResultsHeader-message">Your quiz score!</span>
				<span className="ResultsHeader-details">
					{this.props.numQuestions} Questions / {this.props.numCorrect} Correct / {this.props.numIncorrect} Incorrect - Score {this.props.score}%
				</span>
			</div>
		);
	}
}

export default ResultsHeader
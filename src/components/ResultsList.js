import React, { Component } from 'react';
import ResultsItem from './ResultsItem';
import ButtonPrimary from './ButtonPrimary';

class ResultsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: this.props.questions.map((question, i) => false),
			currentlyOpen: 0
		};

		this.toggleDetails = this.toggleDetails.bind(this);
	}

	toggleDetails(i) {
		let showDetails = this.state.showDetails.slice();

		if (i !== this.state.currentlyOpen) {
			showDetails[this.state.currentlyOpen] = false;
			showDetails[i] = true;
		}
		else {
			showDetails[i] = !showDetails[i];
		}

		this.setState({
			showDetails: showDetails,
			currentlyOpen: i
		});
	}

	render() {
  	let resultTemplate = this.props.questions.map((choice, i) => (
  			<ResultsItem 
  				key={this.props.questions[i]}
          hasCorrectAnswer={this.props.hasCorrectAnswer[i]}
          question={this.props.questions[i]}
          choices={this.props.choices[i]}
          answer={this.props.answers[i]}
          timeStamp={this.props.timeStamps[i]}
          selectedChoice={this.props.selectedChoices[i]}
          questionNum={i+1}
          showDetails={this.state.showDetails[i]}
          toggleDetails={() => this.toggleDetails(i)}
          calculateTimeStampInSeconds={this.props.calculateTimeStampInSeconds}
          videoSeekTo={this.props.videoSeekTo}
  			/>
  		)
  	);

		return (
			<div className="ResultsList">
				{resultTemplate}
				<ButtonPrimary buttonText="Back To Assignments" />
			</div>
		);
	}
}

export default ResultsList
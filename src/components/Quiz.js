import React, { Component } from 'react';

class Quiz extends Component {
  render() {
  	if (!this.props.quizStarted) {
  		return (
  			<div className="Quiz-notStarted">
  				<p>Select the play button to begin your quiz.</p>
  			</div>
  		);
  	}

    return (
      <div className="Quiz">
      	This is where the quiz goes.
      </div>
    );
  }
}

export default Quiz;

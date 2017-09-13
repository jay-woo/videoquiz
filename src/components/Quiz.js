import React, { Component } from 'react';
import QuizChoices from './QuizChoices';
import ButtonPrimary from './ButtonPrimary';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.handleResumeClick = this.handleResumeClick.bind(this);
  }

  handleResumeClick() {
    this.props.nextQuestion();
    this.props.playVideo();
  }

  render() {
  	if (!this.props.quizStarted) {
  		return (
  			<div className="Quiz-notStarted">
  				<p aria-label="Press space or enter to begin your quiz">
            Select the play button to begin your quiz.
          </p>
  			</div>
  		);
  	}

    let currentQuestion = this.props.currentQuestion;
    let button = null;

    let currentVideoTime = this.props.getVideoTime();
    let currentTimeStamp = this.props.calculateTimeStampInSeconds(this.props.timeStamp);

    if (this.props.selectedChoice == null || currentVideoTime < currentTimeStamp) {
      button = <div></div>;
    }
    else if (this.props.currentQuestion < this.props.numQuestions - 1) {
      button = <ButtonPrimary onClick={this.handleResumeClick} buttonText="Resume" tabIndex="11"/>;
    }
    else {
      button = <ButtonPrimary onClick={this.props.submitQuiz} buttonText="Submit Quiz" tabIndex="11"/>;
    }

    return (
      <div className="Quiz">
        <div className="Quiz-question" aria-label={`Question ${currentQuestion+1}: ${this.props.question}`} >
          <span>{this.props.question}</span>
        </div>

        <div className="Quiz-content">
          <QuizChoices 
            choices={this.props.choices}
            timeStamp={this.props.timeStamp}
            currentQuestion={currentQuestion}
            selectedChoice={this.props.selectedChoice}
            selectChoice={this.props.selectChoice}
          />

          {button}
        </div>
      </div>
    );
  }
}

export default Quiz;

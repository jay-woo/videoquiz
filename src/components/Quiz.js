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
  				<p>Select the play button to begin your quiz.</p>
  			</div>
  		);
  	}

    let currentQuestion = this.props.currentQuestion;
    let button = null;

    if (this.props.selectedChoice == null || this.props.currentTimeout != null) {
      button = <div></div>;
    }
    else if (this.props.currentQuestion < this.props.numQuestions - 1) {
      button = <ButtonPrimary onClick={this.handleResumeClick} buttonText="Resume" />;
    }
    else {
      button = <ButtonPrimary onClick={this.props.submitQuiz} buttonText="Submit Quiz"/>;
    }

    return (
      <div className="Quiz">
        <div className="Quiz-question">
          <p>{this.props.question}</p>
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

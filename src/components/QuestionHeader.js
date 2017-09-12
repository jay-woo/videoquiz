import React, { Component } from 'react';
import QuestionSelector from './QuestionSelector';

class QuestionHeader extends Component {
  render() {
  	if (!this.props.quizStarted) {
  		return <div></div>;
  	}

    return (
      <div className="QuestionHeader">
        <QuestionSelector
          quizStarted={this.props.quizStarted}
          gotoQuestion={this.props.gotoQuestion}
          selectedChoices={this.props.selectedChoices}
          currentQuestion={this.props.currentQuestion}
          numQuestions={this.props.numQuestions}
          currentTimeStamp={this.props.currentTimeStamp}
        />

        <p>Worth {this.props.points} {this.props.points === 1 ? 'point' : 'points'}</p>
      </div>
    );
  }
}

export default QuestionHeader;

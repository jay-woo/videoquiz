import React, { Component } from 'react';

class QuizChoices extends Component {
	constructor(props) {
    super(props);
    this.handleChoiceChange = this.handleChoiceChange.bind(this);
  }

  handleChoiceChange(choice) {
    this.props.selectChoice(choice, this.props.currentQuestion);
  }

  render() {
  	let choicesTemplate = this.props.choices.map((choice, i) => (
      <div key={choice}>
        <label onClick={() => this.handleChoiceChange(i)}>
          <input
            type="radio"
            name={"question" + this.props.currentQuestion}
            value={"choice" + i}
            checked={i === this.props.selectedChoice ? "checked" : ""}
          />
          {choice}
        </label>
      </div>
      )
  	);

  	return (
  		<div className="QuizChoices">
        <p>Question {this.props.currentQuestion + 1} [{this.props.timeStamp}]</p>

        <form>
          {choicesTemplate}
        </form>
      </div>
		);
  }
}

export default QuizChoices;
import React, { Component } from 'react';

class QuestionSelector extends Component {
  render() {
  	if (!this.props.quizStarted) {
  		return <div></div>;
  	}

    let points = this.props.points;

    return (
      <div className="QuestionSelector">
        <select name="select" defaultValue="value1">
          <option value="value1">Value 1</option> 
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        <p>{points} {points == 1 ? 'point' : 'points'}</p>
      </div>
    );
  }
}

export default QuestionSelector;

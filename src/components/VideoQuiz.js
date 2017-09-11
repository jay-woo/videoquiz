import React, { Component } from 'react';
import Video from './Video';
import Quiz from './Quiz';
import QuestionSelector from './QuestionSelector';

class VideoQuiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quizStarted: false,
			quizComplete: false,
			selectedQuestion: 0
		}

		this.startQuiz = this.startQuiz.bind(this);
	}

	startQuiz() {
		this.setState({
			quizStarted: true
		});
	}

	selectQuestion(i) {
		this.setState({
			selectedQuestion: i
		});
	}

  render() {
  	let points = this.props.quiz.points;

    return (
      <div className="VideoQuiz">
      	<QuestionSelector
      		quizStarted={this.state.quizStarted}
      		selectQuestion={this.state.selectQuestion}
      		points={points[this.state.selectedQuestion]}
      	/>
      	<Video startQuiz={this.startQuiz}/>
      	<Quiz quizStarted={this.state.quizStarted}/>
      </div>
    );
  }
}

export default VideoQuiz;

import React, { Component } from 'react';
import VideoQuiz from './VideoQuiz';
import VideoQuizHeader from './VideoQuizHeader';

class Content extends Component {
  render() {
    return (
    	<div className="Content">
	    	<VideoQuizHeader quizInfo={this.props.quizInfo}/>
	    	<VideoQuiz quiz={this.props.quiz}/>
    	</div>
    );
  }
}

export default Content;

import React, { Component } from 'react';
import Navbar from './Navbar';
import VideoQuiz from './VideoQuiz';
import VideoQuizHeader from './VideoQuizHeader';

class Content extends Component {
  render() {
    return (
    	<div className="Content">
	    	<VideoQuizHeader quizInfo={this.props.quizInfo}/>
	    	<VideoQuiz />
    	</div>
    );
  }
}

export default Content;

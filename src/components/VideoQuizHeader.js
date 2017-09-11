import React, { Component } from 'react';

class VideoQuizHeader extends Component {
  render() {
  	if (!this.props.quizInfo) {
  		return (
  			<div>Loading...</div>
  		);
  	}

  	let {title, points, dueStart, dueEnd, objective, description} = this.props.quizInfo;
    return (
    	<div className="VideoQuizHeader">
    		<div className="VideoQuizHeader-title">
    			<p><strong>Title:</strong> {title}</p>
    		</div>
    		<div className="VideoQuizHeader-points">
    			<p><strong>{points} Points</strong></p>
    		</div>
    		<div className="VideoQuizHeader-due">
    			<p><strong>Due: </strong>{dueStart} - {dueEnd}</p>
    		</div>
        <div className="clear"></div>
    		<div className="VideoQuizHeader-objective">
    			<p><strong>Learning Objective:</strong> {objective}</p>
    		</div>
    		<div className="VideoQuizHeader-description">
    			<p><strong>Description:</strong> {description}</p>
    		</div>
    	</div>
    );
  }
}

export default VideoQuizHeader;

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
    	<div className="VideoQuizHeader" >
    		<div className="VideoQuizHeader-title" >
    			<p><b>Title:</b> {title}</p>
    		</div>
    		<div className="VideoQuizHeader-points" >
    			<p><b>{points} Points</b></p>
    		</div>
    		<div className="VideoQuizHeader-due" >
    			<p><b>Due: </b>{dueStart} - {dueEnd}</p>
    		</div>
        <div className="clear"></div>
    		<div className="VideoQuizHeader-objective" >
    			<p><b>Learning Objective:</b> {objective}</p>
    		</div>
    		<div className="VideoQuizHeader-description" >
    			<p><b>Description:</b> {description}</p>
    		</div>
    	</div>
    );
  }
}

export default VideoQuizHeader;

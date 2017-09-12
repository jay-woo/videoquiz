import React, { Component } from 'react';
import YouTube from 'react-youtube';

const VIDEO_UNSTARTED = -1;
const VIDEO_PLAYING = 1;
const VIDEO_PAUSED = 2;

class Video extends Component {
	constructor(props) {
		super(props);

		this.onStateChange = this.onStateChange.bind(this);
		this.pauseVideoAtTimeStamp = this.pauseVideoAtTimeStamp.bind(this);
	}

	onStateChange(e) {
		if (e.data !== VIDEO_UNSTARTED) {
			this.props.startQuiz();
		}
		if (e.data === VIDEO_PAUSED) {
			clearTimeout(this.props.currentTimeout);
			this.props.setCurrentTimeout(null);
		}
		if (e.data === VIDEO_PLAYING && !this.currentTimeout) {
			this.props.gotoQuestion(this.props.currentTimeStamp);
			let timeStamps = this.props.timeStamps;
			let currentTimeStamp = this.props.currentTimeStamp;

			if (currentTimeStamp < timeStamps.length) {
				let timeStampInSeconds = this.props.calculateTimeStampInSeconds(timeStamps[currentTimeStamp]);
				let currentTime = e.target.getCurrentTime() - 0.5; // Accounts for ~0.5 second delay in API
				let rate = e.target.getPlaybackRate();
				let remainingTime = (timeStampInSeconds - currentTime) / rate;

				this.props.setCurrentTimeout(
					setTimeout(this.pauseVideoAtTimeStamp, remainingTime * 1000)
				);
			}
		}
	}

	pauseVideoAtTimeStamp() {
		this.props.pauseVideo();
		this.props.gotoQuestion(this.props.currentTimeStamp);
		this.props.setCurrentTimeStamp(this.props.currentTimeStamp + 1);
	}

  render() {
    return (
    	<div className="Video">
				<YouTube 
					className="YouTube"
					videoId="-FOCpMAww28"
					onStateChange={this.onStateChange}
					onReady={this.props.onPlayerReady}
				/>
    	</div>
    );
  }
}

export default Video;

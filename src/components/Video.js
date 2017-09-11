import React, { Component } from 'react';
import vid from '../images/mov_bbb.mp4';

class Video extends Component {
  render() {
    return (
      <video className="Video" controls onPlay={this.props.startQuiz}>
  			<source src={vid} type="video/mp4" />
      </video>
    );
  }
}

export default Video;

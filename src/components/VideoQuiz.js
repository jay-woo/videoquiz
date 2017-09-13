import React, { Component } from 'react';
import Video from './Video';
import Quiz from './Quiz';
import QuestionHeader from './QuestionHeader';
import ResultsList from './ResultsList';

class VideoQuiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quizComplete: false,
			currentQuestion: 0,
      currentTimeStamp: 0,
      currentTimeout: null
		}

    this.setCurrentTimeStamp = this.setCurrentTimeStamp.bind(this);
    this.setCurrentTimeout = this.setCurrentTimeout.bind(this);
		this.gotoQuestion = this.gotoQuestion.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
    this.submitQuiz = this.submitQuiz.bind(this);
	}

  setCurrentTimeStamp(i) {
    this.setState({
      currentTimeStamp: i
    });
  }

  setCurrentTimeout(timeout) {
    this.setState({
      currentTimeout: timeout
    });
  }

	gotoQuestion(i) {
		this.setState({
			currentQuestion: Math.min(i, this.props.quiz.questions.length - 1)
		});
	}

	nextQuestion() {
		this.setState({
			currentQuestion: this.state.currentQuestion + 1
		});
	}

	submitQuiz() {
		if (this.props.selectedChoices.some((choice) => choice === null)) {
			this.props.showError();
		}
		else {
      this.props.pauseVideo();
			this.props.toggleModal();
		}
	}

  // Converts time string in the format 'hhh:mm:ss' to a number
  calculateTimeStampInSeconds(str) {
    let seconds = str.slice(-2);
    let minutes = str.slice(-5, -3);
    let hours = (str.length > 5) ? str.slice(0, -6) : 0;

    return parseInt(seconds, 10) + (minutes * 60) + (hours * 3600);
  }

  render() {
  	let { questions, choices, points, timeStamps, answers } = this.props.quiz;
  	let currentQuestion = this.state.currentQuestion;

  	let questionHeader = null;
  	let sideContent = null;

  	if (!this.props.submitted) {
  		questionHeader = 
  			<QuestionHeader
      		quizStarted={this.props.quizStarted}
      		gotoQuestion={this.gotoQuestion}
      		points={points[currentQuestion]}
      		selectedChoices={this.props.selectedChoices}
      		currentQuestion={currentQuestion}
      		numQuestions={questions.length}
          currentTimeStamp={this.state.currentTimeStamp}
      	/>;
      sideContent = 
				<Quiz
      		quizStarted={this.props.quizStarted}
      		question={questions[currentQuestion]}
      		choices={choices[currentQuestion]}
      		timeStamp={timeStamps[currentQuestion]}
      		currentQuestion={currentQuestion}
      		nextQuestion={this.nextQuestion}
      		selectedChoice={this.props.selectedChoices[currentQuestion]}
      		selectChoice={this.props.selectChoice}
      		numQuestions={questions.length}
      		submitQuiz={this.submitQuiz}
          playVideo={this.props.playVideo}
          currentTimeout={this.state.currentTimeout}
          getVideoTime={this.props.getVideoTime}
          calculateTimeStampInSeconds={this.calculateTimeStampInSeconds}
      	/>;
  	}
  	else {
  		sideContent =
  			<ResultsList
          hasCorrectAnswer={this.props.hasCorrectAnswer}
          questions={questions}
          choices={choices}
          answers={answers}
          timeStamps={timeStamps}
          selectedChoices={this.props.selectedChoices}
          videoSeekTo={this.props.videoSeekTo}
          calculateTimeStampInSeconds={this.calculateTimeStampInSeconds}
  			/>;
  	}

    return (
      <div className="VideoQuiz" aria-live="polite">
      	{questionHeader}

      	<Video
          quizStarted={this.props.quizStarted}
          startQuiz={this.props.startQuiz}
          timeStamps={timeStamps}
          currentTimeStamp={this.state.currentTimeStamp}
          setCurrentTimeStamp={this.setCurrentTimeStamp}
          gotoQuestion={this.gotoQuestion}
          player={this.props.player}
          onPlayerReady={this.props.onPlayerReady}
          pauseVideo={this.props.pauseVideo}
          playVideo={this.props.playVideo}
          currentTimeout={this.state.currentTimeout}
          setCurrentTimeout={this.setCurrentTimeout}
          calculateTimeStampInSeconds={this.calculateTimeStampInSeconds}
        />

      	{sideContent}
      </div>
    );
  }
}

export default VideoQuiz;

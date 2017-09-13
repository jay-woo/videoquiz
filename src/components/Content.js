import React, { Component } from 'react';
import VideoQuiz from './VideoQuiz';
import VideoQuizHeader from './VideoQuizHeader';
import SubmitModal from './SubmitModal';
import SubmitError from './SubmitError';
import SubmitSuccess from './SubmitSuccess';
import ResultsHeader from './ResultsHeader';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizStarted: false,
      selectedChoices: this.props.quiz.questions.map((question, i) => null),
      submitted: false,
      showSubmitModal: false,
      showSubmitError: false,
      showSubmitSuccess: false,
      score: 0,
      hasCorrectAnswer: this.props.quiz.questions.map((question, i) => false),
      numCorrect: 0,
      numIncorrect: 0,
      player: null,
    }

    this.startQuiz = this.startQuiz.bind(this);
    this.selectChoice = this.selectChoice.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleError = this.toggleError.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.finalSubmitQuiz = this.finalSubmitQuiz.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.videoSeekTo = this.videoSeekTo.bind(this);
    this.getVideoTime = this.getVideoTime.bind(this);

    window.addEventListener('keypress', ((e) => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.playVideo();
      }
    }));

  }

  startQuiz() {
    this.setState({
      quizStarted: true
    });
  }

  selectChoice(choice, currentQuestion) {
    let newChoices = this.state.selectedChoices.slice();
    newChoices[currentQuestion] = choice;

    this.setState({
      selectedChoices: newChoices
    });
  }

  toggleModal() {
    this.setState({
      showSubmitModal: !this.state.showSubmitModal
    });
  }

  toggleError() {
    this.setState({
      showSubmitError: !this.state.showSubmitError
    });
  }

  toggleSuccess() {
    this.setState({
      showSubmitSuccess: !this.state.showSubmitSuccess
    });
  }

  showError() {
    this.setState({
      showSubmitError: true
    });
  }

  showSuccess() {
    this.setState({
      showSubmitSuccess: true
    });
  }

  finalSubmitQuiz() {
    let { questions, points, choices, answers } = this.props.quiz;
    let { selectedChoices } = this.state;

    // Calculate score
    let totalPoints = points.reduce((sum, value) => sum + value, 0);
    let earnedPoints = 0;
    let hasCorrectAnswer = this.state.hasCorrectAnswer.slice();

    for (let i = 0; i < questions.length; i++) {
      let currentChoices = choices[i];
      let selectedChoice = selectedChoices[i];
      let currentAnswer = answers[i];

      if (currentChoices[selectedChoice] === currentAnswer) {
        earnedPoints += points[i];
        hasCorrectAnswer[i] = true;
      }
    }

    let score = Math.round(earnedPoints / totalPoints * 100);
    let numCorrect = hasCorrectAnswer.reduce((sum, value) => sum + value);
    let numIncorrect = questions.length - numCorrect;

    // Set video to the beginning
    this.videoSeekTo(0);

    // Then show results screen w/ success alert
    this.setState({
      submitted: true,
      showSubmitModal: false,
      showSubmitSuccess: true,
      score: score,
      hasCorrectAnswer: hasCorrectAnswer,
      numCorrect: numCorrect,
      numIncorrect: numIncorrect
    });
  }

  // Video control functions
  onPlayerReady(e) {
    this.setState({
      player: e.target
    });
  }

  pauseVideo() {
    if (this.state.player) {
      this.state.player.pauseVideo();
    }
  }

  playVideo() {
    if (this.state.player) {
      this.state.player.playVideo();
    }
  }

  getVideoTime() {
    if (this.state.player) {
      return this.state.player.getCurrentTime();
    }
  }

  videoSeekTo(seconds) {
    if (this.state.player) {
      this.state.player.seekTo(seconds, false);
    }
  }

  render() {
    let submitModal = null;
    let submitError = null;
    let submitSuccess = null;
    let contentHeader = null;

    // Popups
    if (this.state.showSubmitModal) {
      submitModal = <SubmitModal toggleModal={this.toggleModal} finalSubmitQuiz={this.finalSubmitQuiz} />
    }
    if (this.state.showSubmitError) {
      submitError = <SubmitError toggleError={this.toggleError} />
    }
    if (this.state.showSubmitSuccess) {
      submitSuccess = <SubmitSuccess toggleSuccess={this.toggleSuccess} />
    }

    // Content header
    if (this.state.submitted) {
      contentHeader = 
        <ResultsHeader 
          score={this.state.score}
          numQuestions={this.state.selectedChoices.length}
          numCorrect={this.state.numCorrect}
          numIncorrect={this.state.numIncorrect}
        />;
    }
    else {
      contentHeader = <VideoQuizHeader quizInfo={this.props.quizInfo} quizStarted={this.state.quizStarted}/>;
    }

    // Combined divs
    return (
    	<div className="Content">
        {submitError}
        {submitSuccess}
        {submitModal}

	    	{contentHeader}
	    	<VideoQuiz
	    		quiz={this.props.quiz}
      		toggleModal={this.toggleModal}
      		toggleError={this.toggleError}
          showError={this.showError}
          selectedChoices={this.state.selectedChoices}
          selectChoice={this.selectChoice}
          submitted={this.state.submitted}
          hasCorrectAnswer={this.state.hasCorrectAnswer}
          player={this.state.player}
          onPlayerReady={this.onPlayerReady}
          pauseVideo={this.pauseVideo}
          playVideo={this.playVideo}
          videoSeekTo={this.videoSeekTo}
          quizStarted={this.state.quizStarted}
          startQuiz={this.startQuiz}
          getVideoTime={this.getVideoTime}
	    	/>
    	</div>
    );
  }
}

export default Content;

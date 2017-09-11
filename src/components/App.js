import React, { Component } from 'react';
import Navbar from './Navbar';
import Content from './Content';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'Casey',
			quizInfo: {
				title: "Learning The Keys To Physical Delivery Skills",
				points: 15,
				dueStart: "Oct 18, 2016",
				dueEnd: "Oct 30, 2016",
				objective: "To develop knowledge and skills related to the student's understanding of rehearsal techniques, and his/her abilities in the ensemble performance as well as the knowledge of music literature and conducting skills.",
				description: "As you watch the video, quiz questions will appear. You must answer all questions to submit the quiz."
			}
		};
	}

  render() {
    return (
    	<div className="App">
      	<Navbar username={this.state.username} />
      	<Content quizInfo={this.state.quizInfo} />
      </div>
    );
  }
}

export default App;

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
			},
			quiz: {
				questions: [
					'What is the best way to feel more physically comfortable when delivering a speech?',
					'Why is it important to have good posture?',
					'How does standing with your feet shoulder width apart help you have a better delivery?',
					'Why are gestures an important delivery skill to learn?',
					'What is the outcome of learning correct posture, body movement, and gestures?'
				],
				choices: [
					[
						'Take a course about self esteem',
						'Learn meditation skills',
						'Learn specific skills on what to do with your body',
						'Take a course about ignoring the audience'
					],
					[
						'More impressive looking',
						'You avoid stomach cramping',
						'Easier to see the back of the room',
						'Keeps the body open for others'
					],
					[
						'Eliminate distracting movement',
						'You avoid falling over',
						'You can see the back of the room better',
						'You can breathe better'
					],
					[
						'Helps the audience from seeing you nervous you might be',
						'Helps communicate the message',
						'Teaches you that fewer gestures make a better speech',
						'Teaches you that more gestures make a better speech'
					],
					[
						'Make you look like you have prepared for your speech',
						'Make you look powerful',
						'Helps you avoid stomach cramping',
						'Make you look and feel more comfortable'
					]
				],
				points: [1, 3, 3, 1, 3],
				timeStamps: [
					'0:12',
					'1:21',
					'1:45',
					'2:48',
					'3:38'
				],
				answers: [
					'Learn specific skills on what to do with your body',
					'Keeps the body open for others',
					'Eliminate distracting movement',
					'Teaches you that more gestures make a better speech',
					'Make you look and feel more comfortable'	
				]
			}
		};
	}

  render() {
    return (
    	<div className="App">
      	<Navbar username={this.state.username} />
      	<Content
      		quizInfo={this.state.quizInfo}
      		quiz={this.state.quiz}
      	/>
      </div>
    );
  }
}

export default App;

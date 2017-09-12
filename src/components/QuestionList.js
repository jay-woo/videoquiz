import React, { Component } from 'react';
import checkmark from '../images/check-mark.png'

class QuestionList extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(index) {
		this.props.toggleMenu();
		this.props.gotoQuestion(index);
	}

	render() {
		let listItems = this.props.selectedChoices.map((choice, i) => {
			let isPastTimeStamp = i <= this.props.currentTimeStamp;

			return (
				<div 
					key={"question" + i}
					className={"QuestionList-item " + (isPastTimeStamp ? "enabled" : "disabled")}
					onClick={isPastTimeStamp ? () => this.handleClick(i) : null}
				>
					<div className="QuestionList-item-number">{i+1}. </div>
					<div className="QuestionList-item-info">
						<div className="QuestionList-item-checkmark">
							{choice && isPastTimeStamp
								? <img src={checkmark} alt="check"/>
								: <div className="QuestionList-item-empty">&nbsp;</div>
							}
						</div>
						<div className="QuestionList-item-complete">{(choice && isPastTimeStamp) ? "Complete" : "Incomplete"}</div>
					</div>
				</div>
			)
		});

		return (
			<div className="QuestionList">
				{listItems}
			</div>
		);
	}
}

export default QuestionList;
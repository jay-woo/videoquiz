import React, { Component } from 'react';

const STROKE_MAX_VALUE = 283;

class Score extends Component {
	componentDidMount() {
		let pieChart = document.getElementById('pie');
		let strokeMinValue = this.props.score / 100 * STROKE_MAX_VALUE;
		let strokeArray = strokeMinValue + ' ' + STROKE_MAX_VALUE;
		pieChart.style.strokeDasharray = strokeArray;
	}

	render() {
		return (
			<div className="Score">
			  <svg width="100" height="100">
			    <circle r="45" cx="50" cy="50" className="Score-orangecircle"/>
			    <circle r="45" cx="50" cy="50" className="Score-tealcircle" id="pie"/>
			    <text x="50" y="60" className="Score-text">
			    	{this.props.score}%
			    </text>
			  </svg>
			</div>
		);
	}
}

export default Score
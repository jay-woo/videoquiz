import React, { Component } from 'react';
import QuestionList from './QuestionList';
import ButtonSecondary from './ButtonSecondary';

class QuestionSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }

    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  onSelectionChange() {
    let selection = document.getElementById('QuestionSelector-menu').selectedIndex;
    this.props.gotoQuestion(selection);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {

    return (
      <div className="QuestionSelector">
        <ButtonSecondary
          onClick={this.toggleMenu}
          buttonText={`Question ${this.props.currentQuestion+1} of ${this.props.numQuestions} ▾`}
          ariaLabel={"Change current question"}
          tabIndex="4"
        />

        {this.state.menuOpen
          ? <QuestionList 
              selectedChoices={this.props.selectedChoices}
              gotoQuestion={this.props.gotoQuestion}
              toggleMenu={this.toggleMenu}
              toggleError={this.toggleError}
              currentTimeStamp={this.props.currentTimeStamp}
            /> 
          : <div></div>
        }
      </div>
    );
  }
}

export default QuestionSelector;

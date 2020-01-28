import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   quiz_position: 1
    };
  }

  handleClick = (e) => {
      console.log('clicked the button----', e.target.value);
      console.log(this.props.clickHandler());
  }

  render() {
      return (
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;

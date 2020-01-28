import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
class QuizEnd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   quiz_position: 1
    };
  }

  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href="">Reset Quiz</a>
      </div>
    );
  }
}

export default QuizEnd;

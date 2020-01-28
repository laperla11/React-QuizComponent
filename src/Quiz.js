import React, { Component } from "react";
let quizData  = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {
            quiz_position: 1
        };
    };


  render() {
    const { quiz_questions } = quizData;
    return (
      <div className="QuizQuestion">
        <p>{quiz_questions[0].instruction_text}</p>
      </div>
    );
  }
}

export default Quiz;
import React, { Component } from "react";
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';
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
    const isQuizEnd = this.state.quiz_position-1 === quiz_questions.length
    return (
      <div className="QuizQuestion">
        {isQuizEnd ? (
          <QuizEnd />
        ) : (
          <QuizQuestion
            quiz_question={quiz_questions[this.state.quiz_position - 1]}
          />
        )}
      </div>
    );
  }
}

export default Quiz;
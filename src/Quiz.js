import React, { Component, useState, Fragment } from "react";
let quizData  = require('./quiz_data.json');

function Quiz () {
const [quiz_question, setQuiz_question] = useState(1);
    const { quiz_questions } = quizData;
    return (
        <div>
            <p>{quiz_questions[0].instruction_text}</p>
        </div>
    )

}

export default Quiz;
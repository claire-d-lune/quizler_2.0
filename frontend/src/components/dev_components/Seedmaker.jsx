import React, { useState, useEffect } from "react";

const Seedmaker = () => {


  // let infoStack = []

  // let counter = 0


  // while (counter < 10) {
  //   infoStack.push(<p>{`QuizQuestion.create(quiz_id: vg_quiz_hard1.id, question_id: vg_hard_${counter}.id, weight: 1)`}</p>)
  //   counter += 1
  // }







  //Question Seeder Below: 
  const [questions, setQuestions] = useState()

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=30&category=18&difficulty=hard&type=multiple")
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, []);

  const formatQuestion = (object, counter) => {
    return (
  `computers_hard_${counter} = Question.create(category: "${object.category}", format: "${object.type}", question: "${object.question}", correct_answer: "${object.correct_answer}", difficulty: "${object.difficulty}", incorrect_answer_1: "${object.incorrect_answers[0]}", incorrect_answer_2: "${object.incorrect_answers[1]}", incorrect_answer_3: "${object.incorrect_answers[2]}")`
      )
  }

  let myGoal
  let infoStack 

  if (questions !== undefined){
    let counter = 0 
    myGoal = questions.results.map( q => {
    let response = formatQuestion(q, counter)
    counter += 1
    return response
    })
    infoStack = myGoal.map(element => <p>{element}</p>)
  }

  return (
    <div>
        <div class="radial-progress" style={{"--value":70}}>70%</div>
        {infoStack}
    </div>
  )
}

export default Seedmaker
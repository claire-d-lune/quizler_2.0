import React from "react";

const QuestionBox = ({number, question, quizResults}) => {

    const handleSelect = (e) => {
        //if the answer is correct, update the results array at the appropriate index
        e.target.id === question.correct_answer ? quizResults[number - 1] = true : quizResults[number - 1] = false
        console.log(quizResults)
    }

    //assign answers to array and use a shuffle so the correct choice is not predictable. 
    let choices = [question.correct_answer, question.incorrect_answer_1, question.incorrect_answer_2, question.incorrect_answer_3]
    //shuffling the order of the the possible answers below:
    choices.sort((a, b) => 0.5 - Math.random())

    return <div className="card w-4/5 place-self-center bg-neutral text-neutral-content my-4">
                <div className="card-body items-center text-left pt-4">
                    <div className="divider my-2">{number}</div>
                    <p>{question.category}</p>
                    <h2 className="card-title">{`${question.question}`}</h2>
                        <div onChange={handleSelect}className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text mr-3">{choices[0]}  </span> 
                                {/*
                                    This is a little bit strange, but I am using the answer itself as the id instead of "correct" or not, 
                                    so it is less visible which answer is correct from inspect element.
                                */}
                                <input type="radio"  name={`radio-${number}`} id={`${choices[0]}`}className="radio checked:bg-purple-300" />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text mr-3">{choices[1]}</span> 
                                <input type="radio" name={`radio-${number}`} id={`${choices[1]}`} className="radio checked:bg-purple-300" />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text mr-3">{choices[2]}</span> 
                                <input type="radio"  name={`radio-${number}`} id={`${choices[2]}`} className="radio checked:bg-purple-300"  />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text mr-3">{choices[3]}</span> 
                                <input type="radio" name={`radio-${number}`} id={`${choices[3]}`} className="radio checked:bg-purple-300" />
                            </label>
                        </div>
                </div>
            </div>

}

export default QuestionBox
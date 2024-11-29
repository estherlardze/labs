import Header from "./Header";
import { useState, useEffect, useContext } from "react";
import OptionCard from "./OptionCard";
import { QuizProps, Question, QuestionsProps, QuizContextType } from "../types";

import { QuizContext } from "../context/app-context";
import { filteredQuiz } from "../utils/helper";


const Quiz = ({ quizTitle, onGoback }: QuizProps) => {
  const {
    quizzes, isCorrect, setIsCorrect, setIsButtonClicked,
    isButtonClicked, setCheck
  } = useContext<QuizContextType>(QuizContext)
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState("")
  const [isSelect, setIsSelect] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null)
  
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number | null>(null);
  
  const [currentQuestion, setCurrentQuestion] = useState<QuestionsProps | null>(null);
  const [score, setScore] = useState(0)


useEffect(() => {
  const quizQuestions = filteredQuiz(quizzes, quizTitle)
  setFilteredQuestions(quizQuestions)
}, [])

const correct = filteredQuestions[0]?.questions[activeQuestionIndex]?.answer;

const onSubmit = () => {
  setCorrectAnswer(correct)
  setIsCorrect(selectedOption === correct)
  setIsButtonClicked(true)

  if (selectedOption === correct) {
    // update score
    setScore((prev) => prev + 1)   
  }

}

console.log(score) 

function onNext() {
  setActiveQuestionIndex(prev => prev + 1)
  setIsCorrect(null)
  setSelectedOption("")
  setIsButtonClicked(false)
  setCurrentOptionIndex(null)
}

useEffect(() => {
  if(activeQuestionIndex >= filteredQuestions[0]?.questions.length){
    alert("quiz complete")
    console.log("hello", score)
    return
  }
}, [activeQuestionIndex])

const handleOptionClick = (id:number, option: string) => {
  setCurrentOptionIndex(id);
  setSelectedOption(option) // -> user selected
  setCurrentQuestion(filteredQuestions[0].questions[activeQuestionIndex])
  setCheck(selectedOption === correctAnswer)
}

useEffect(() => console.log(selectedOption), [selectedOption])



  if (!filteredQuestions.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header logo={quizTitle} />
      <div className="quiz__body">
        <p className="quiz__question">
          {filteredQuestions[0]?.questions[activeQuestionIndex]?.question}
        </p>
        <div>
          {filteredQuestions[0]?.questions[activeQuestionIndex]?.options?.map(
            (option: string, index: number) => (
              <OptionCard
                icon={String.fromCharCode(65 + index)}
                text={option}
                index={index}
                correctAnswer={correctAnswer}
                selectedOption={selectedOption}
                option={option}
                key={index}
                isSelected={index === currentOptionIndex}
                handleOptionClick={handleOptionClick}
              />
            )
          )}
          { isButtonClicked 
            ? (selectedOption 
              ? <button className="quiz__submit" onClick={onNext}>Next</button>
              : <button className="quiz__submit" onClick={onSubmit}>Submit Answer</button>)
            : <button className="quiz__submit" onClick={onSubmit}>Submit Answer</button>
          }

        </div>
      </div>
      <button onClick={onGoback}>Go Back</button>
    </div>
  );
};

export default Quiz;
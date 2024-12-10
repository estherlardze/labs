import { useState, useEffect, useContext } from "react";
import OptionCard from "./OptionCard";
import { QuizProps, Question, QuizContextType } from "../types";
import { QuizContext } from "../context/app-context";
import { filteredQuiz } from "../utils/helper";
import ScoreCard from "./ScoreCard";

const Quiz = ({ quizTitle, onGoback }: QuizProps) => {
  const context = useContext<QuizContextType | null>(QuizContext);

  if (!context) {
    throw new Error("QuizContext is not available");
  }
  const {
    quizzes,
    setIsCorrect,
    setIsButtonClicked,
    isButtonClicked,
    setCheck,
  } = context;

  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(() => {
    const storedIndex = localStorage.getItem("activeQuestionIndex");
    return storedIndex ? JSON.parse(storedIndex) : 0;
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number | null>(
    null
  );
  const [errormessage, setErrorMessage] = useState("");
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem("quizScore");
    return storedScore ? JSON.parse(storedScore) : 0;
  });

  useEffect(() => {
    const quizQuestions = filteredQuiz(quizzes, quizTitle);
    setFilteredQuestions(quizQuestions);
  }, [quizzes, quizTitle]);

  useEffect(() => {
    localStorage.setItem(
      "activeQuestionIndex",
      JSON.stringify(activeQuestionIndex)
    );
  }, [activeQuestionIndex]);

  useEffect(() => {
    localStorage.setItem("quizScore", JSON.stringify(score));
  }, [score]);

  const correct = filteredQuestions[0]?.questions[activeQuestionIndex]?.answer;

  const onSubmit = () => {
    if (!selectedOption) {
      setErrorMessage("Please select an option");
      return;
    }

    setCorrectAnswer(correct);
    setIsCorrect(selectedOption === correct);
    setIsButtonClicked(true);

    if (selectedOption === correct) {
      setScore((prev: number) => prev + 1);
    }
  };

  const onNext = () => {
    setActiveQuestionIndex((prev: number) => prev + 1);
    setIsCorrect(null);
    setSelectedOption("");
    setIsButtonClicked(false);
    setCurrentOptionIndex(null);
  };

  const handleOptionClick = (id: number, option: string) => {
    setCurrentOptionIndex(id);
    setSelectedOption(option); // User-selected option
    setCheck(option === correct);
  };

  return (
    <div>
      <div className="quiz__body">
        <div>
          {activeQuestionIndex >= filteredQuestions[0]?.questions.length ? (
            <div>
              <p className="complete__coment">Question Complete</p>
              <p className="quiz__question">Your Score is...</p>
            </div>
          ) : (
            <div className="quiz__header">
              <p>
                Question {activeQuestionIndex + 1} of{" "}
                {filteredQuestions[0]?.questions.length}
              </p>
              <p className="quiz__question">
                {filteredQuestions[0]?.questions[activeQuestionIndex]?.question}
              </p>
              <div className="quiz__progress-bar"></div>
            </div>
          )}
        </div>

        <div>
          {activeQuestionIndex >= filteredQuestions[0]?.questions.length ? (
            <ScoreCard score={score} filteredQuestions={filteredQuestions} />
          ) : (
            <div>
              {filteredQuestions[0]?.questions[
                activeQuestionIndex
              ]?.options?.map((option: string, index: number) => (
                <OptionCard
                  icon={String.fromCharCode(65 + index)}
                  text={option}
                  index={index}
                  correctAnswer={correctAnswer ?? ''}                  selectedOption={selectedOption}
                  option={option}
                  key={index}
                  isSelected={index === currentOptionIndex}
                  handleOptionClick={handleOptionClick}
                />
              ))}
            </div>
          )}

          {isButtonClicked ? (
            selectedOption ? (
              <button className="quiz__submit" onClick={onNext}>
                Next
              </button>
            ) : (
              <button className="quiz__submit" onClick={onSubmit}>
                Submit Answer
              </button>
            )
          ) : (
            <div>
              {activeQuestionIndex >= filteredQuestions[0]?.questions.length ? (
                <button className="quiz__submit" onClick={onGoback}>
                  Play Again
                </button>
              ) : (
                <button className="quiz__submit" onClick={onSubmit}>
                  Submit Answer
                </button>
              )}
            </div>
          )}

          {errormessage && (
            <div className="error">
              <p>{errormessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

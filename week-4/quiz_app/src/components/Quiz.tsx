import Header from "./Header";
import { useState, useEffect } from "react";
import OptionCard from "./OptionCard";

type QuizProps = {
  subject: string | null;
  onGoback: () => void;
  logo: string | null;
};

type Question = {
  title: string;
  icon: string;
  questions: string[];
};

const Quiz = ({ subject, onGoback }: QuizProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  let [currentOptionIndex, setCurrentOptionIndex] = useState(-1);

  useEffect(() => {
    if (!subject) {
      return;
    }

    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(data.quizzes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [subject]);

  useEffect(() => {
    if (questions.length > 0 && subject) {
      const filteredData = questions.filter(
        (question) => question.title === subject
      );
      setFilteredQuestions(filteredData);
    }
  }, [subject, questions]);

  // console.log(filteredQuestions);

  const handleOptionClick = (id:number) => {
    setCurrentOptionIndex(id);
  }

  if (!filteredQuestions.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header logo={subject} />
      <div className="quiz__body">
        <p className="quiz__question">
          {filteredQuestions[0].questions[0]?.question}
        </p>
        <div>
          {filteredQuestions[0].questions[0]?.options.map(
            (option: string, index: number) => (
              <OptionCard
                icon={String.fromCharCode(65 + index)}
                text={option}
                key={index}
                index={index}
                isSelected={index === currentOptionIndex}
                handleOptionClick={handleOptionClick}
              />
            )
          )}
          <button className="quiz__submit">Submit Answer</button>
        </div>
      </div>
      <button onClick={onGoback}>Go Back</button>
    </div>
  );
};

export default Quiz;

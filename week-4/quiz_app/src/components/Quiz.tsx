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
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [newIndex, setNewIndex] = useState(-1);
  const [defaultBorder, setDefaultBorder] = useState("");

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

  if (!filteredQuestions.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header logo={subject} />
      <div className="quiz__body">
        <p className="quiz__question">
          {filteredQuestions[0].questions[0].question}
        </p>
        <div>
          {filteredQuestions[0].questions[0].options.map(
            (option: string, index: number) => (
              <OptionCard
                icon={String.fromCharCode(65 + index)}
                text={option}
                key={index}
                selected={`${defaultBorder}`}
                handleSelectOption={() => {
                  newIndex = index;
                  setNewIndex(index);
                  console.log(newIndex);
                  if (newIndex === index) {
                    setDefaultBorder("selected");
                  }
                  else{
                    setDefaultBorder("");
                  }
                }}
                index={index}
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

import CourseCard from "./CourseCard";
import { courseInfo } from "../utils/constants";
import { filteredQuiz } from "../utils/helper"; 
import { useContext } from "react";
import { QuizContext } from "../context/app-context";
import { QuizContextType } from "../types";

type HomeProp = {
  onSelectChange: (subject: string) => void;
};

const Home = ({ onSelectChange }: HomeProp) => {

  const {quizzes} = useContext<QuizContextType>(QuizContext)
 

  const handleSubjectSelect = (subject: string) => {
    const filteredQuestions = filteredQuiz(quizzes, subject);

    sessionStorage.setItem("filteredQuestions", JSON.stringify(filteredQuestions));
    onSelectChange(subject);
  };

  return (
    <section className="home">
      <div className="home__text">
        <h1 className="home__title-light">Welcome to the</h1>
        <h1 className="home__title-bold">Frontend Quiz!</h1>
        <p className="home__description">Pick a subject to get started.</p>
      </div>

      <div className="home__cards">
        {courseInfo.map((course) => (
          <CourseCard
            icon={course.icon}
            text={course.text}
            onSelectChange={() => handleSubjectSelect(course.text)} // Pass filtered subject
            key={course.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

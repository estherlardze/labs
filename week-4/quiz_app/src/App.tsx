import Home from "./components/Home";
import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import { useContext } from "react";
import { QuizContext } from "./context/app-context";
import Header from "./components/Header";

const App = () => {
  const quizContext = useContext(QuizContext);
  const [currentPage, setCurrentPage] = useState(() => sessionStorage.getItem("currentPage") || "home");

  useEffect(() => {
    const storedPage = sessionStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []);
  

  useEffect(() => {
    if (currentPage) {
      sessionStorage.setItem("currentPage", currentPage);
    }
  }, [currentPage]);



  return (
    <main className="app">
      <Header logo={quizContext?.quizTitle || ""}/>
      {currentPage === "home" && (
        <Home
           onSelectChange={(course: string) => {
            quizContext?.setQuizTitle(course);
            setCurrentPage("quiz");
          }}
        />
      )}

      {currentPage === "quiz" && (
        <Quiz
          onGoback={() => setCurrentPage("home")}
        />
      )}
    </main>
  );
};

export default App;

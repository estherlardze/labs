import Home from "./components/Home";
import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import { useContext } from "react";
import { QuizContext } from "./context/app-context";
import Header from "./components/Header";

const App = () => {
  const quizContext = useContext(QuizContext);
  const [logo, setLogo] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(() => localStorage.getItem("currentPage") || "home");

  // Sync with localStorage on page load
  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []);

  // Update localStorage when currentPage changes
  useEffect(() => {
    if (currentPage) {
      localStorage.setItem("currentPage", currentPage);
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
          logo={logo}
          setLogo={setLogo}
        />
      )}

      {currentPage === "quiz" && (
        <Quiz
          logo={logo}
          quizTitle={quizContext?.quizTitle}
          onGoback={() => setCurrentPage("home")}
        />
      )}
    </main>
  );
};

export default App;

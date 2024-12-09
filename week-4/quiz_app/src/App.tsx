import Home from "./components/Home";
import { useState } from "react";
import Quiz from "./components/Quiz";
import { useContext } from "react";
import { QuizContext } from "./context/app-context";


const App = () => {
  const quizContext = useContext(QuizContext)
  const [logo, setLogo] = useState<string | null>({text: "", imgage: ""});
  
  
  return (
    <main className="app">
      {quizContext?.currentPage === "home" && (
        <Home
          onSelectChange={(course: string) => {
            quizContext.setQuizTitle(course);
            quizContext?.setCurrentPage("quiz");
          }}
          logo={logo} setLogo={setLogo}
        />
      )}

      {quizContext?.currentPage === "quiz" && (
        <Quiz
          logo={logo} setLogo={setLogo}
          quizTitle={quizContext.quizTitle}
          onGoback={() => quizContext.setCurrentPage("home")}
        />
      )}
    </main>
  );
};

export default App;

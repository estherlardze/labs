import Home from "./components/Home";
import { useState } from "react";
import Quiz from "./components/Quiz";

type View = "home" | "quiz";
const App = () => {
  const [currentPage, setCurrentPage] = useState<View>("home");
  const [logo] = useState<string | null>("");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <main className="app">
      {currentPage === "home" && (
        <Home
          onSelectChange={(course: string) => {
            setSelectedCourse(course);
            setCurrentPage("quiz");
          }}
          logo={logo}
        />
      )}

      {currentPage === "quiz" && (
        <Quiz
          logo={logo}
          subject={selectedCourse}
          onGoback={() => setCurrentPage("home")}
        />
      )}
    </main>
  );
};

export default App;

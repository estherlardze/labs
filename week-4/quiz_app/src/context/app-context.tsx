import { createContext, useState } from "react"
import { View, QuizContextType} from "../types";
import Data from "../data.json"

export const QuizContext = createContext<QuizContextType | null>(null)


export default function QuizContextProvider({ children }: { children: React.ReactNode }) {
    const [currentPage, setCurrentPage] = useState<View>("home");
    const [quizTitle, setQuizTitle] = useState("")
    const [quizzes, setQuizzes] = useState(Data)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [darkMode, setDarkMode] = useState(false);

    const [check, setCheck] = useState<boolean | null>(null)

    return (
        <QuizContext.Provider value={{
            currentPage, setCurrentPage,
            quizTitle, setQuizTitle,
            quizzes,
            isCorrect, setIsCorrect,
            isButtonClicked, setIsButtonClicked,
            check, setCheck, darkMode, setDarkMode
        }}>
         {children}
        </QuizContext.Provider>
    )
}
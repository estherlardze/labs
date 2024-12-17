import { createContext, useState } from "react"
import {  QuizContextType} from "../types";
import Data from "../data.json"

export const QuizContext = createContext<QuizContextType | null>(null)


export default function QuizContextProvider({ children }: { children: React.ReactNode }) {
    const [quizTitle, setQuizTitle] = useState("")
    const [quizzes, setQuizzes] = useState(Data)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

    const [check, setCheck] = useState<boolean | null>(null)

    
    return (
        <QuizContext.Provider value={{
            quizTitle, setQuizTitle,
            quizzes,
            isCorrect, setIsCorrect,
            isButtonClicked, setIsButtonClicked,
            check, setCheck,
        }}>
         {children}
        </QuizContext.Provider>
    )
}
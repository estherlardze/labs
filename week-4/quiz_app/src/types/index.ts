import { SetStateAction } from "react";

export type View = "home" | "quiz";

export type QuizContextType = {
    quizTitle: string;
    setQuizTitle: React.Dispatch<React.SetStateAction<string>>;
    quizzes: unknown;
    setQuizzes: React.Dispatch<SetStateAction<{ quizzes: { title: string; icon: string; questions: { question: string; options: string[]; answer: string; }[]; }[]; }>>;
    isCorrect: boolean | null;
    setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
    isButtonClicked: boolean;
    setIsButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
    check: boolean | null;
    setCheck: React.Dispatch<React.SetStateAction<boolean | null>>;

}
export type OptionProps = {
    icon: string;
    text: string;
    isSelected: boolean;
    index: number;
    isCorrectAnswer: boolean;
    checkSelOption: boolean;
    correctAnswer: string;
    option: string;
    selectedOption: string;
    handleOptionClick: (index: number, text: string) => void;
  };

export type QuizProps = {
    quizTitle: string | null;
    onGoback: () => void;
};

export type QuestionsProps = {
    question: string;
    options: string[];
    answer: string;
}

export type Question = {
    title: string;
    icon: string;
    questions: QuestionsProps[];
};


export type ScoreCardProps = {
    filteredQuestions: Question[];
    score: number;
  }
  
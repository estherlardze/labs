export type View = "home" | "quiz";

export type QuizContextType = {
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<View>>;
    quizTitle: string;
    setQuizTitle: React.Dispatch<React.SetStateAction<string>>;
    quizzes: unknown;
    isCorrect: boolean | null;
    setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
    isButtonClicked: boolean;
    setIsButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
    check: boolean | null;
    setCheck: React.Dispatch<React.SetStateAction<boolean | null>>;

}

export type QuizProps = {
    quizTitle: string | null;
    onGoback: () => void;
    logo: string | null;
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
  
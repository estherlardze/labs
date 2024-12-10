export function filteredQuiz(quizzes:any, quizTitle: string | null) {
    const filteredData = quizzes["quizzes"].filter(
        (question: any) => question.title === quizTitle        
    );

    return filteredData
}
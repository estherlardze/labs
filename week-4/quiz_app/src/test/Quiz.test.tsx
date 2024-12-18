import { render, fireEvent, screen } from '@testing-library/react';
import Quiz from '../components/Quiz';
import { QuizContext } from '../context/app-context';
import '@testing-library/jest-dom';

const mockContextValue = {
  quizTitle: 'Sample Quiz',
  setQuizTitle: jest.fn(),
  quizzes: [],
  setQuizzes: jest.fn(),
  setIsCorrect: jest.fn(),
  isCorrect: false,
  setIsButtonClicked: jest.fn(),
  isButtonClicked: false,
  setCheck: jest.fn(),
  check: false,
};

const mockOnGoback = jest.fn();

describe('Quiz Component', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('renders correctly with initial state', () => {
    render(
      <QuizContext.Provider value={mockContextValue}>
        <Quiz quizTitle="Sample Quiz" onGoback={mockOnGoback} />
      </QuizContext.Provider>
    );

    expect(screen.getByText('Question 1 of 1')).toBeInTheDocument();
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument();
  });

  it('displays error when submitting without selecting an option', () => {
    render(
      <QuizContext.Provider value={mockContextValue}>
        <Quiz quizTitle="Sample Quiz" onGoback={mockOnGoback} />
      </QuizContext.Provider>
    );

    fireEvent.click(screen.getByText('Submit Answer'));
    expect(screen.getByText('Please select an option')).toBeInTheDocument();
  });

  it('selects an option and submits correctly', () => {
    render(
      <QuizContext.Provider value={mockContextValue}>
        <Quiz quizTitle="Sample Quiz" onGoback={mockOnGoback} />
      </QuizContext.Provider>
    );

    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('Submit Answer'));

    expect(mockContextValue.setIsCorrect).toHaveBeenCalledWith(true);
    expect(mockContextValue.setIsButtonClicked).toHaveBeenCalledWith(true);
  });

  it('goes to the next question when clicking Next', () => {
    render(
      <QuizContext.Provider value={{ ...mockContextValue, isButtonClicked: true }}>
        <Quiz quizTitle="Sample Quiz" onGoback={mockOnGoback} />
      </QuizContext.Provider>
    );

    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('Next'));

    expect(screen.getByText('Question Complete')).toBeInTheDocument();
  });

  it('restarts the quiz when clicking Play Again', () => {
    render(
      <QuizContext.Provider value={{ ...mockContextValue, isButtonClicked: true }}>
        <Quiz quizTitle="Sample Quiz" onGoback={mockOnGoback} />
      </QuizContext.Provider>
    );

    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Play Again'));

    expect(mockOnGoback).toHaveBeenCalled();
  });
});

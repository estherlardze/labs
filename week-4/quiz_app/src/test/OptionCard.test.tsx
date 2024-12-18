import { render, fireEvent, screen } from '@testing-library/react';
import OptionCard from '../components/OptionCard'; 
import { QuizContext } from '../context/app-context';
import { QuizContextType, OptionProps } from '../types';
import '@testing-library/jest-dom';

const mockContextValue: QuizContextType = {
  quizTitle: '', 
  setQuizTitle: () => {}, 
  quizzes: [], 
  isCorrect: true,
  setIsCorrect: () => {}, 
  isButtonClicked: true,
  setIsButtonClicked: () => {}, 
  check: null, 
  setCheck: () => {}, 
  setQuizzes: jest.fn(),  
};

const mockHandleOptionClick = jest.fn();

const defaultProps: OptionProps = {
  icon: 'A',
  text: 'Option A',
  isSelected: false,
  index: 0,
  option: 'A',
  selectedOption: '',
  handleOptionClick: mockHandleOptionClick,
  correctAnswer: 'A',
  isCorrectAnswer: false,
  checkSelOption: false,
};

describe('OptionCard', () => {
  it('renders correctly with default props', () => {
    render(
      <QuizContext.Provider value={mockContextValue}>
        <OptionCard {...defaultProps} />
      </QuizContext.Provider>
    );

    expect(screen.getByText('Option A')).toBeInTheDocument();
  });

  it('calls handleOptionClick when clicked', () => {
    render(
      <QuizContext.Provider value={mockContextValue}>
        <OptionCard {...defaultProps} />
      </QuizContext.Provider>
    );

    fireEvent.click(screen.getByText('Option A'));
    expect(mockHandleOptionClick).toHaveBeenCalledWith(defaultProps.index, defaultProps.text);
  });

  it('displays the correct border color when the option is selected and button clicked', () => {
    render(
      <QuizContext.Provider value={mockContextValue}>
        <OptionCard {...defaultProps} isSelected={true} />
      </QuizContext.Provider>
    );

    const optionCard = screen.getByText('Option A').closest('div');
    expect(optionCard).toHaveStyle('border: 2px solid #26D782');
  });


  it('displays the correct icon based on whether the answer is correct or incorrect', () => {
    const { rerender } = render(
      <QuizContext.Provider value={mockContextValue}>
        <OptionCard {...defaultProps} isSelected={true} />
      </QuizContext.Provider>
    );

    // Check icon when answer is correct
    expect(screen.getByRole('img')).toBeInTheDocument();

    // Rerender with incorrect answer
    rerender(
      <QuizContext.Provider value={{ ...mockContextValue, isCorrect: false }}>
        <OptionCard {...defaultProps} isSelected={true} />
      </QuizContext.Provider>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

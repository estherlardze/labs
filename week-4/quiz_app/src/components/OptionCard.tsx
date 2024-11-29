import { useContext } from "react";
import { QuizContext } from "../context/app-context";
import { QuizContextType } from "../types";

type OptionProps = {
  icon: string;
  text: string;
  isSelected: boolean;
  index: number;
  isCorrectAnswer: boolean;
  checkSelOption: boolean
  correctAnswer: string
  option: string;
  selectedOption: string;
  handleOptionClick: (index: number, text: string) => void;
};

const OptionCard = ({
 icon,
  text,
  isSelected,
  index,
  option,
  selectedOption,
  handleOptionClick,
  correctAnswer,
}: OptionProps) => {

const { isCorrect, isButtonClicked } = useContext<QuizContextType | null>(QuizContext)

console.log(`option: ${option}`,  `selected Option: ${selectedOption}`)
console.log(isButtonClicked)

 return (

    <div
      className={`option-card `}
      onClick={() => handleOptionClick(index, text)}
      style={{
        border: isSelected && isButtonClicked && isCorrect
          ? "4px solid #26D782"
          : isSelected && isButtonClicked
          ? "4px solid #EE5454" : isSelected
          ? "4px solid #A729F5"
          : "4px solid #ffffff"
      }}
    >
      <p
        className="option-card__question"
        style={{
          color: `${isSelected ? "white" : "black" }`,
          backgroundColor: `${isSelected && isButtonClicked && isCorrect
            ? "#26D782"
            : isSelected && isButtonClicked
            ? "#EE5454" : isSelected
            ? "#A729F5"
            : "#ffffff"}`,
        }}
      >
        {icon}
      </p>
      <p className="op &&tion-card__answer">{text}</p>
      {
        selectedOption === option && isButtonClicked && isCorrect
        ? "correct"
        : selectedOption === option && isButtonClicked
        ? "wrong"
        : option === correctAnswer && "correct"
      }
      </div>
  );
};

export default OptionCard;

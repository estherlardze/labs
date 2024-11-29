type OptionProps = {
  icon: string;
  text: string;
  isSelected: boolean;
  index: number;
  handleOptionClick: (index: number) => void;
};

const OptionCard = ({
 icon,
  text,
  isSelected,
  index,
  handleOptionClick,
}: OptionProps) => {
  return (
    <div
      className={`option-card `}
      onClick={() => handleOptionClick(index)}
      style={{ border: `2px solid ${isSelected ? "#a729f5" : "white"}` }}
    >
      <p
        className="option-card__question"
        style={{
          color: `${isSelected ? "white" : "black"}`,
          backgroundColor: `${isSelected ? "#a729f5" : ""}`,
        }}
      >
        {icon}
      </p>
      <p className="option-card__answer">{text}</p>
    </div>
  );
};

export default OptionCard;

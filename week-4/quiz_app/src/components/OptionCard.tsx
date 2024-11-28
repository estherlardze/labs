import { useState, useEffect } from "react";

type OptionProps = {
  icon: string;
  text: string;
  handleSelectOption: () => void;
  index: number;
  selected: string;
};

const OptionCard = ({ icon, text, index, selected, handleSelectOption}: OptionProps) => {


  return (
    <div
      className={`option-card ${selected}`}
      onClick={handleSelectOption}
    >
      <p className="option-card__question">{icon}</p>
      <p className="option-card__answer">{text}</p>
    </div> 
  );
};

export default OptionCard;

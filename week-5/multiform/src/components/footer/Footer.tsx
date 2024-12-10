import { FooterType } from "../../types";
import { FormContext } from "../../context/form-context";
import { useContext } from "react";

const Footer = ({ handleNextStep, handlePreviousStep, currentStepId, resetForm }: FooterType) => {
  const { currentStepIndex, setConFirm} = useContext(FormContext);

  return (
    <footer className="main-footer">
      {currentStepIndex > 0 && (
        <button type="button" className="previous" onClick={handlePreviousStep}>
          Previous Step
        </button>
      )}
      <button onClick={resetForm}>reset form</button>
      {currentStepId === 4 ? (
        <button type="button" className="next" onClick={() => setConFirm(true)}>
          Confirm
        </button>
      ) : (
        <button type="submit" className="next" onClick={handleNextStep}>
          Next Step
        </button>
      )}
    </footer>
  );
};


export default Footer;

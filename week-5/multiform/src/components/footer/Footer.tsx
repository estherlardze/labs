import { FooterType } from "../../types";
import { FormContext } from "../../context/form-context";
import { useContext } from "react";
import {
  validateForm,
  validateStepTwo,
  validateAddOns,
} from "../../utils/utilfunctions";
import { multiStepFormData } from "../../constants";

const Footer = ({ currentStepId }: FooterType) => {
  const { currentStepIndex, setConFirm, formData, setErrorMessage, userData, setCurrentStepIndex} = useContext(FormContext);

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

   const handleNextStep = () => {
      if (currentStepId === 1 && !validateForm(userData, setErrorMessage)) {
        return;
      }
  
      if (currentStepId === 2 && !validateStepTwo(formData)) {
        return;
      }
  
      if (currentStepId === 3 && !validateAddOns(formData)) {
        return;
      }
  
      if (currentStepIndex < multiStepFormData.steps.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      }
    };

    const handleConfirm = () => {
      if(!validateForm(userData, setErrorMessage)) return
      if(!validateStepTwo(formData)) return
      if(!validateAddOns(formData))
      setConFirm(true);
    };

  return (
    <footer className="main-footer">
      {currentStepIndex > 0 && (
        <button type="button" className="previous" onClick={handlePreviousStep}>
          Goback
        </button>
      )}
      {currentStepId === 4 ? (
        <button type="button" className="next" onClick={handleConfirm}>
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

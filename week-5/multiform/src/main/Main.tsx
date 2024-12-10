import { useContext } from "react";
import Header from "./Header";
import UserInfo from "../components/userinfo/UserInfo";
import Addon from "../components/adson/Addon";
import SelectPlan from "../components/selectplan/SelectPlan";
import Footer from "../components/footer/Footer";
import FinishUp from "../components/finishup/FinishUp";
import Thankyou from "../components/thankyou/Thankyou";
import { FormContext } from "../context/form-context";
import Sidebar from "../components/sidebar/Sidebar";
import { multiStepFormData } from "../constants";
import {
  validateForm,
  validateStepTwo,
  validateAddOns,
} from "../utils/utilfunctions";

const Main = () => {
  const {
    currentStepIndex,
    setCurrentStepIndex,
    confirm,
    errorMessage,
    formData,
    setUserData,
    setErrorMessage,
    setFormData,
    userData,
  } = useContext(FormContext);

  const currentStep = multiStepFormData.steps[currentStepIndex];
  let currentStepId = currentStep.id;

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

  const handleSidebarClick = (stepId: number) => {
    if (confirm) return;
    if (stepId - 1 <= currentStepIndex) {
      setCurrentStepIndex(stepId - 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  if (confirm) {
    currentStepId = currentStepId + 1;
  }

  const renderStep = () => {
    switch (currentStepId) {
      case 1:
        return (
          <UserInfo
            userData={userData}
            setUserData={setUserData}
            currentStep={currentStep}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        );
      case 2:
        return (
          <SelectPlan
            formData={formData}
            // @ts-ignore
            setFormData={setFormData}
            // @ts-ignore
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <Addon
            formData={formData}
            // @ts-ignore
            setFormData={setFormData}
            // @ts-ignore
            currentStep={currentStep}
          />
        );
      case 4:
        return (
          <FinishUp
            // @ts-ignore
            formData={formData}
            setFormData={setFormData}
            currentStep={currentStep}
            currentStepId={currentStepId}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="container">
      <Sidebar
        currentStepId={currentStepId}
        handleSidebarClick={handleSidebarClick}
      />

      <div className="main">
        {currentStepId <= 4 ? (
          <Header
            title={currentStep.title}
            description={currentStep.description}
          />
        ) : null}

        <div className="main-form">{renderStep()}</div>
        <div>{confirm && currentStepId === 5 && <Thankyou />}</div>
        {currentStepId <= 4 ? (
          <Footer
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            currentStepId={currentStepId}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Main;

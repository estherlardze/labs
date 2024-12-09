import { useState, useContext } from "react";
import Header from "./Header";
import UserInfo from "../components/userinfo/UserInfo";
import Addon from "../components/adson/Addon";
import SelectPlan from "../components/selectplan/SelectPlan";
import Footer from "../components/footer/Footer";
import FinishUp from "../components/finishup/FinishUp";
import Thankyou from "../components/thankyou/Thankyou";
import multiStepFormData from "../constants";
import { FormContext } from "../context/app-context";
import Sidebar from "../components/sidebar/Sidebar";
import { formProps } from "../types";

const Main = () => {
  
  const { currentStepIndex, setCurrentStepIndex, confirm } = useContext(FormContext);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const currentStep = multiStepFormData.steps[currentStepIndex];

  let currentStepId = currentStep.id;
  const [formData, setFormData] = useState<formProps>({
    selectedPlan: null,
    selectedBilling: "Monthly",
    selectedAddOns: [],
  });



  const validateForm = () => {
    const newErrors = {
      name: userData.name ? "" : "Name is required",
      email: userData.email ? "" : "Email is required",
      phone: userData.phone ? "" : "Phone number is required",
    };

    setErrorMessage(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const validatrStepTwo = () => {
    if (formData.selectedPlan) {
      return true;
    }
    alert("Please select a plan");
    return false;
  };

  const validateAddOns = () => {
    if (formData.selectedAddOns.length > 0) {
      return true;
    }
    alert("Please select at least one add-on");
    return false;
  };

const handleNextStep = () => {
  if (currentStepId === 1 && !validateForm()) {
    return;
  }

  if (currentStepId === 2 &&!validatrStepTwo()) {
    return;
  }

  if (currentStepId === 3 &&!validateAddOns()) {
    return;
  }

  if (currentStepIndex < multiStepFormData.steps.length - 1) {
    setCurrentStepIndex((prev) => prev + 1);
  }
};

const handleSidebarClick = (stepId: number) => {
  setCurrentStepIndex(stepId - 1);
};

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

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
            setFormData={setFormData}
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <Addon
            formData={formData}
            setFormData={setFormData}
            currentStep={currentStep}
          />
        );
      case 4:
        return (
          <FinishUp
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

if(confirm){
  currentStepId = currentStepId + 1;
}

  return (
    <section className="container">
      <Sidebar currentStepId={currentStepId} handleSidebarClick={handleSidebarClick}/>

      <div className="main">
        {currentStepId <= 4 ? (
          <Header
            title={currentStep.title}
            description={currentStep.description}
          />
        ) : null}

        <div className="main-form">{renderStep()}</div>
        <div>{confirm && <Thankyou />}</div>
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

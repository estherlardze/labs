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
import { CuurentStep } from "../types";

const Main = () => {
  const { currentStepIndex, confirm } = useContext(FormContext);

  const currentStep: CuurentStep = multiStepFormData.steps[currentStepIndex];
  let currentStepId = currentStep.id;

  const renderStep = () => {
    switch (currentStepId) {
      case 1:
        return <UserInfo currentStep={currentStep} />;
      case 2:
        return <SelectPlan currentStep={currentStep} />;
      case 3:
        return <Addon currentStep={currentStep} />;
      case 4:
        return (
          <FinishUp  />
        );
      default:
        return null;
    }
  };

  return (
    <section className="container">
      <Sidebar currentStepId={currentStepId} />

      <div className="main">
        {currentStepId <= 4 ? (
          <Header
            title={currentStep.title}
            description={currentStep.description}
          />
        ) : null}

        <div className="main-form">{renderStep()}</div>
        <div>{confirm && currentStepId === 5 && <Thankyou />}</div>
        {currentStepId <= 4 ? <Footer currentStepId={currentStepId} /> : null}
      </div>
    </section>
  );
};

export default Main;

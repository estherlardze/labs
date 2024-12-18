import { useState } from "react";
import Header from "../../components/header/Header";
import UserInfo from "../../components/user-info/UserInfo";
import Addon from "../../components/ads-on/Addon";
import SelectPlan from "../../components/select-plan/SelectPlan";
import Footer from "../../components/footer/Footer";
import FinishUp from "../../components/finish-up/FinishUp";
import Thankyou from "../../components/thank-you/Thankyou";
import Sidebar from "../../components/sidebar/Sidebar";
import { multiStepFormData } from "../../constants";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Main = () => {
  const {currentStepIndex, confirm} = useSelector(
    (state: RootState) => state.form
  );

  const currentStep = multiStepFormData.steps[currentStepIndex];

//  const [currentStepId, setCurrentStepId] = useState(currentStep.id);
  console.log("id", currentStepIndex);
   

  const renderStep = () => {
    switch (currentStepIndex) {
      case 0:
        return <UserInfo />;
      case 1:
        return (
          <SelectPlan
            // @ts-ignore
            currentStep={currentStep}
          />
        );
      case 2:
        return (
          <Addon
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <FinishUp
            // @ts-ignore
            currentStep={currentStep}
            currentStepIndex={currentStepIndex}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="container">
      <Sidebar currentStepIndex={currentStepIndex} />

      <div className="main">
        {currentStepIndex <= 3 ? (
          <Header
            title={currentStep.title}
            description={currentStep.description}
          />
        ) : null}

        <div className="main-form">{renderStep()}</div>
        <div>{confirm && currentStepIndex === 4 && <Thankyou />}</div>
        {currentStepIndex <= 4 ? <Footer /> : null}
      </div>
    </section>
  );
};

export default Main;

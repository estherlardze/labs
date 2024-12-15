import "./selectplan.css";
import { formProps, Plan } from "../../types";
import { FormContext } from "../../context/form-context";
import { useContext } from "react";
import { CuurentStep } from "../../types";


interface SelectPlanProps {
  currentStep: CuurentStep;
}

const SelectPlan = ({ currentStep }: SelectPlanProps) => {
  const { formData, setFormData } = useContext(FormContext);

  
  return (
    <section className="select">
      <div className="select-plan-container">
        {currentStep.plans?.map((plan: Plan) => (
          <div
            key={plan.id}
            className={`select-plan-card ${
              // @ts-ignore
              formData.selectedPlan?.id === plan.id ? "active" : ""
            }`}
            onClick={() =>
              // @ts-ignore
              setFormData((prev: unknown) => ({ ...prev, selectedPlan: plan }))
            }
          >
            <div>
              <div
                className="select-plan-icon"
                dangerouslySetInnerHTML={{ __html: plan.icon }}
              />
            </div>
            <div className="select-plan-title">
              <h3 className="title">{plan.name}</h3>
              <p className="price">
                $
                {formData.selectedBilling === "Monthly"
                  ? `${plan.monthlyPrice}/mo`
                  : `${plan.monthlyPrice}/yr`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <label className="select-plan-toggle">
        <p>Monthly</p>
        <label className="switch" htmlFor="toggle">
          <input
            type="checkbox"
            id="toggle"
            className="checkbox"
            checked={formData.selectedBilling === "Yearly"}
            onChange={(e) =>
              // @ts-ignore
              setFormData((prev: formProps) => ({
                ...prev,
                selectedBilling: e.target.checked ? "Yearly" : "Monthly",
              }) as formProps)
            }
          />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </label>
    </section>
  );
};

export default SelectPlan;

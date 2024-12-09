import "./selectplan.css";
import { Plan, SelectPlanProps } from "../../types";

// type formProps = {
//   selectedPlan: Plan | null;
//   selectedBilling: string;
//   selectedAddOns: {
//     id: string;
//     name: string;
//     description: string;
//     monthlyPrice: number;
//     yearlyPrice: number;
//   }[];
// };

const SelectPlan = ({ formData, setFormData, currentStep }: SelectPlanProps) => {
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
              setFormData((prev: unknown) => ({...prev, selectedPlan: plan }))
            }
          >
            <div
              className="select-plan-icon"
              dangerouslySetInnerHTML={{ __html: plan.icon }}
            />
            <div className="select-plan-title">
              <h3 className="title">{plan.name}</h3>
              <p className="price">
                $
                {formData.selectedBilling === "Monthly"
                  ? `${plan.monthlyPrice}/mo` : `${plan.monthlyPrice}/yr` }
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
              setFormData((prev) => ({
                ...prev,
                selectedBilling: e.target.checked ? "Yearly" : "Monthly",
              }))
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

import "./selectplan.css";
import { Plan, SelectPlanProps } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setSelectedPlan, setBillingPlan } from "../../features/formSlice";

const SelectPlan = ({ currentStep }: SelectPlanProps) => {
  const { formData } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const handlePlanSelect = (plan: Plan) => {
    dispatch(setSelectedPlan(plan));
  };

  const handleBillingSelect = () => {
    dispatch(setBillingPlan(formData.selectedBilling === "Monthly" ? "Yearly" : "Monthly"));
  };

  console.log(formData)

  return (
    <section className="select">
      <div className="select-plan-container">
        {currentStep.plans?.map((plan: Plan) => (
          <div
            key={plan.id}
            className={`select-plan-card ${formData?.selectedPlan?.id === plan.id ? "active" : ""}`}
            onClick={() => handlePlanSelect(plan)}
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
            onChange={() =>(handleBillingSelect())}
          />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </label>
    </section>
  );
};

export default SelectPlan;

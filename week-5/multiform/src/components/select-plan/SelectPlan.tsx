import "./selectplan.css";
import { Plan, SelectPlanProps } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { formProps } from "../../types";

const SelectPlan = ({
  setFormData,
  currentStep,
}: SelectPlanProps) => {

  const {formData} = useSelector((state: RootState) => state.form.formData)
  
  return (
    <section className="select">
      <div className="select-plan-container">
        {currentStep.plans?.map((plan: Plan) => (
          <div
            key={plan.id}
            className={`select-plan-card `}
            // onClick={() =>
            //   // @ts-ignore
            //   setFormData((prev: unknown) => ({ ...prev, selectedPlan: plan }))
            // }
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
                {/* {formData.selectedBilling === "Monthly"
                  ? `${plan.monthlyPrice}/mo`
                  : `${plan.monthlyPrice}/yr`} */}
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
           // checked={formData.selectedBilling === "Yearly"}
            // onChange={(e) =>
            //   setFormData((prev) => ({
            //     ...prev,
            //     selectedBilling: e.target.checked ? "Yearly" : "Monthly",
            //   }))
            // }
          />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </label>
    </section>
  );
};

export default SelectPlan;

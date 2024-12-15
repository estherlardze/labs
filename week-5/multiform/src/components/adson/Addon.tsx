import "./addson.css";
import {  AddonType, CuurentStep } from "../../types";
import { formProps } from "../../types";
import { FormContext } from "../../context/form-context";
import { useContext } from "react";

interface AdOnProps{
  currentStep: CuurentStep
}
const Addon = ({ currentStep }: AdOnProps) => {

  const {formData, setFormData} = useContext(FormContext)

  return (

    <section className="addon">
      {currentStep.addOns?.map((addOn: AddonType) => (
        <div key={addOn.id} className={`addon-card ${formData.selectedAddOns.includes(addOn) ? "selectedAddOn" : ""}`}>
          <input
            type="checkbox"
            id={addOn.id}
            value={addOn.id}
            onChange={(e) => {
              const isChecked = e.target.checked;
              // @ts-ignore
              setFormData((prev) => {
                const updatedAddOns = isChecked
                  ? [...prev.selectedAddOns, addOn]
                  // @ts-ignore
                  : prev.selectedAddOns.filter((a) => a.id !== addOn.id);
                return { ...prev, selectedAddOns: updatedAddOns } as formProps;
              });
            }}
          />
          <div>
            <h3>{addOn.name}</h3>
            <p>{addOn.description}</p>
          </div>
          <label htmlFor={addOn.id}>
            +$
            {formData.selectedBilling === "Monthly"
              ? `${addOn.monthlyPrice}/mo`
              : `${addOn.yearlyPrice}/yr`}
          </label>
        </div>
      ))}
    </section>
  );
};

export default Addon;

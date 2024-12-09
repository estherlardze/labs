import "./addson.css";
import { AddonType } from "../../types";
import { AddonContextType } from "../../types";
import { formProps } from "../../types";

const Addon = ({ currentStep, formData, setFormData }: AddonContextType) => {
  return (
    <section className="addon">
      {currentStep.addOns?.map((addOn: AddonType) => (
        <div key={addOn.id} className="addon-card">
          <input
            type="checkbox"
            id={addOn.id}
            value={addOn.id}
            onChange={(e) => {
              const isChecked = e.target.checked;
              setFormData((prev) => {
                const updatedAddOns = isChecked
                  ? [...prev.selectedAddOns, addOn]
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

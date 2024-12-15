import "./addson.css";
import { AddonContextType, AddonType } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setAddOn } from "../../features/formSlice";

const Addon = ({ currentStep }: AddonContextType) => {
  const { formData } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  console.log(formData);

  const handleAddOnSelect = (addOn: AddonType, isChecked: boolean) => {
    dispatch(setAddOn({ addOn, isChecked }));
  };

  return (
    <section className="addon">
      {currentStep.addOns?.map((addOn: AddonType) => (
        <div
          key={addOn.id}
          className={`addon-card ${
            formData.selectedAddOns.some((a) => a.id === addOn.id)
              ? "selectedAddOn"
              : ""
          }`}
        >
          <input
            type="checkbox"
            id={addOn.id}
            checked={formData.selectedAddOns.some((a) => a.id === addOn.id)}
            onChange={(e) => handleAddOnSelect(addOn, e.target.checked)}
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

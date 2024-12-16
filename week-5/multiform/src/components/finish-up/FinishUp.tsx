import { formProps } from "../../types";
import "./finishup.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const FinishUp = () => {

  const {formData} = useSelector((state: RootState) => state.form.formData)
  // const total = formData.selectedAddOns.reduce(
  //   (sum: number, addOn: { monthlyPrice: number; yearlyPrice: number }) =>
  //     sum +
  //     (formData.selectedBilling === "Monthly"
  //       ? addOn.monthlyPrice
  //       : addOn.yearlyPrice),
  //   formData.selectedPlan
  //     ? formData.selectedBilling === "Monthly"
  //       ? formData.selectedPlan.monthlyPrice
  //       : formData.selectedPlan.yearlyPrice
  //     : 0
  // );

  // Select
  const changeBilling = () => {
    formData.setFormData((prev: formProps) => ({
      ...prev,
      selectedBilling: prev.selectedBilling === "Monthly" ? "Yearly" : "Monthly",
    }));
  };
  

  return (
    <div className="finishup-container">
      <div className="addon-container">
        <div className="addon-list plan">
          <div>
            <p>
              {/* hello {formData.selectedPlan?.name} ({formData.selectedBilling}) */}
              hello
            </p>
            <p className="change-link" onClick={() => {}}>
              Change
            </p>
          </div>
          {/* <p>${formData.selectedBilling === "Monthly" ? `${formData.selectedPlan?.monthlyPrice}/mo` :  `${formData.selectedPlan?.yearlyPrice}/yr`}</p> */}
          hello
        </div>
        <div className="addon-line"></div>
        <ul>
          {/* {formData.selectedAddOns.map((addOn: { id: string; name: string; monthlyPrice: number; yearlyPrice: number }) => (
            <li className="addon-list" key={addOn.id}>
              <span>{addOn.name}</span>
              <span>+${formData.selectedBilling === "Monthly" ? `${addOn.monthlyPrice}/mo` : `${addOn.yearlyPrice}/yr`}</span>
            </li>
          ))} */}
        </ul>
      </div>
      <div className="total-container">
        {/* <p>Total (per {formData.selectedBilling})</p> */}
        <p>total</p>
        {/* <h2>{formData.selectedBilling === "Monthly" ? `+$${total}/mo` : `+$${total}/yr`}</h2> */}
      </div>

     
    </div>
  );
};

export default FinishUp;

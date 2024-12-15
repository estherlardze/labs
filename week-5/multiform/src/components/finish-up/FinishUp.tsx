import { useDispatch, useSelector } from "react-redux";
import { setBillingPlan } from "../../features/formSlice";
import { RootState } from "../../store";
import './finishup.css'

const FinishUp = () => {
  const { formData } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const changeBilling = () => {
    dispatch(
      setBillingPlan(
        formData.selectedBilling === "Monthly" ? "Yearly" : "Monthly"
      )
    );
  };


  const total = formData.selectedAddOns.reduce(
    (sum: number, addOn: { monthlyPrice: number; yearlyPrice: number }) =>
      sum +
      (formData.selectedBilling === "Monthly"
        ? addOn.monthlyPrice
        : addOn.yearlyPrice),
    formData.selectedPlan
      ? formData.selectedBilling === "Monthly"
        ? formData.selectedPlan.monthlyPrice
        : formData.selectedPlan.yearlyPrice
      : 0
  );

  return (
    <div className="finishup-container">
      <div className="addon-container">
        <div className="addon-list plan">
          <div>
            <p>
              {formData.selectedPlan?.name} ({formData.selectedBilling})
            </p>
            <p className="change-link" onClick={changeBilling}>
              Change
            </p>
          </div>
          <p>
            $
            {formData.selectedBilling === "Monthly"
              ? `${formData.selectedPlan?.monthlyPrice}/mo`
              : `${formData.selectedPlan?.yearlyPrice}/yr`}
          </p>
        </div>

        <div className="addon-line"></div>
        <ul>
          {formData.selectedAddOns.map(
            (addOn: {
              id: string;
              name: string;
              monthlyPrice: number;
              yearlyPrice: number;
            }) => (
              <li className="addon-list" key={addOn.id}>
                <span>{addOn.name}</span>
                <span>
                  +$
                  {formData.selectedBilling === "Monthly"
                    ? `${addOn.monthlyPrice}/mo`
                    : `${addOn.yearlyPrice}/yr`}
                </span>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="total-container">
        <p>Total (per {formData.selectedBilling})</p>
        <h2>
          {formData.selectedBilling === "Monthly"
            ? `+$${total}/mo`
            : `+$${total}/yr`}
        </h2>
      </div>
    </div>
  );
};

export default FinishUp;

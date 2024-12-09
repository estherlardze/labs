import { useState } from 'react';
import multiStepFormData from '../../constants';
import Header from '../../main/Header';


const MultiStepForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0); 
  const [formData, setFormData] = useState({
    personalInfo: {},
    selectedPlan: null,
    selectedBilling: 'Monthly',
    selectedAddOns: [],
  });

  const currentStep = multiStepFormData.steps[currentStepIndex];

  // Handle navigation between steps
  const goToNextStep = () => {
    if (currentStepIndex < multiStepFormData.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep.id) {
      case 1: // Personal Info
        return (
          <div>
            {currentStep.fields.map((field) => (
              <div key={field.id}>
                <label>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, [field.id]: e.target.value },
                    }))
                  }
                />
              </div>
            ))}
          </div>
        );

      case 2: // Select Your Plan
        return (
          <div>
            <div>
              <label>
                Billing:
                <select
                  value={formData.selectedBilling}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      selectedBilling: e.target.value,
                    }))
                  }
                >
                  {currentStep.billingOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              {currentStep.plans.map((plan) => (
                <div key={plan.id}>
                  <input
                    type="radio"
                    id={plan.id}
                    name="plan"
                    value={plan.id}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, selectedPlan: plan }))
                    }
                  />
                  <label htmlFor={plan.id}>
                    {plan.name} - $
                    {formData.selectedBilling === 'Monthly'
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 3: // Pick Add-ons
        return (
          <div>
            {currentStep.addOns.map((addOn) => (
              <div key={addOn.id}>
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
                      return { ...prev, selectedAddOns: updatedAddOns };
                    });
                  }}
                />
                <label htmlFor={addOn.id}>
                  {addOn.name} - $
                  {formData.selectedBilling === 'Monthly'
                    ? addOn.monthlyPrice
                    : addOn.yearlyPrice}
                </label>
              </div>
            ))}
          </div>
        );

      case 4: // Finishing Up
        return (
          <div>
            <p>Plan: {formData.selectedPlan?.name}</p>
            <p>Billing: {formData.selectedBilling}</p>
            <p>Add-ons:</p>
            <ul>
              {formData.selectedAddOns.map((addOn) => (
                <li key={addOn.id}>{addOn.name}</li>
              ))}
            </ul>
            <p>
              Total: $
              {formData.selectedAddOns.reduce(
                (sum, addOn) =>
                  sum +
                  (formData.selectedBilling === 'Monthly'
                    ? addOn.monthlyPrice
                    : addOn.yearlyPrice),
                formData.selectedPlan
                  ? formData.selectedBilling === 'Monthly'
                    ? formData.selectedPlan.monthlyPrice
                    : formData.selectedPlan.yearlyPrice
                  : 0
              )}
            </p>
          </div>
        );

      case 5: // Thank You
        return (
          <div>
            <h2>{currentStep.title}</h2>
            <p>{currentStep.message}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
      <div>
        {currentStepIndex > 0 && <button onClick={goToPreviousStep}>Back</button>}
        {currentStepIndex < multiStepFormData.steps.length - 1 && (
          <button onClick={goToNextStep}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;

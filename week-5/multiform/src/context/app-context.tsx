import { useState, useEffect } from "react";
import { FormContextType, formProps, InitialStateType } from "../types";
import { loadStateFromStorage } from "../utils/loadState";
import { FormContext } from "./form-context";

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState: InitialStateType = loadStateFromStorage();

  const [currentStepIndex, setCurrentStepIndex] = useState(
    initialState.currentStepIndex
  );
  const [confirm, setConFirm] = useState(initialState.confirm);
  const [userData, setUserData] = useState(initialState.userData);
  const [errorMessage, setErrorMessage] = useState(initialState.errorMessage);

  const [formData, setFormData] = useState<formProps>(initialState.formData);

  useEffect(() => {
    const stateToSave = {
      currentStepIndex,
      confirm,
      userData,
      errorMessage,
      formData,
    };
    localStorage.setItem("form-state", JSON.stringify(stateToSave));
  }, [currentStepIndex, confirm, userData, errorMessage, formData]);

  const resetForm = () => {
    setCurrentStepIndex(0);
    setConFirm(false);
    setUserData({ name: "", email: "", phone: "" });
    setErrorMessage({ name: "", email: "", phone: "" });
    setFormData({
      selectedPlan: null,
      selectedBilling: "Monthly",
      selectedAddOns: [],
    });
    localStorage.removeItem("form-state");
  };

  const state: FormContextType = {
    currentStepIndex,
    setCurrentStepIndex,
    confirm,
    setConFirm,
    errorMessage,
    setErrorMessage,
    formData,
    setFormData,
    userData,
    setUserData,
    resetForm,
  };
  return <FormContext.Provider value={state}>{children}</FormContext.Provider>;
}

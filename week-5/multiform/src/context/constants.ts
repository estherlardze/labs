import { InitialStateType } from "../types";

export const initialState: InitialStateType = {
  currentStepIndex: 0,
  confirm: false,
  userData: {
    name: "",
    email: "",
    phone: "",
  },
  errorMessage: {
    name: "",
    email: "",
    phone: "",
  },
  formData: {
    selectedPlan: null,
    selectedBilling: "Monthly",
    selectedAddOns: [],
  },
};



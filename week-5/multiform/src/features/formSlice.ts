import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../constants";
import {
  validateForm,
  validateStepTwo,
  validateAddOns,
} from "../utils/utilfunctions";
import { multiStepFormData } from "../constants";


const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handlePrevStep(state) {
      state.currentStepIndex = state.currentStepIndex - 1;
    },

    handleNextStep(state) {
      if (
        state.currentStepIndex === 0 &&
        !validateForm(state.userData, (errors: any) => {
          state.errorMessage = errors;
        })
      ) {
        return;
      }

      if (state.currentStepIndex === 1 && !validateStepTwo(state.formData)) {
        return;
      }

      if (state.currentStepIndex === 2 && !validateAddOns(state.formData)) {
        return;
      }

      if (state.currentStepIndex < multiStepFormData.steps.length - 1) {
        state.currentStepIndex = state.currentStepIndex + 1;
      }
    },

    handleSidebarClick(state, action) {
      state.currentStepIndex = action.payload;
    },

    setSelectedPlan(state, action) {
      state.formData.selectedPlan = action.payload;
    },

    setBillingPlan(state, action) {
      state.formData.selectedBilling = action.payload;
    },

    setAddOn(state, action) {
      const { addOn, isChecked } = action.payload;
      if (isChecked) {
        state.formData.selectedAddOns.push(addOn);
      } else {
        state.formData.selectedAddOns = state.formData.selectedAddOns.filter(
          (a) => a.id !== addOn.id
        );
      }
    },

    setConfirm(state) {
      if ( !validateStepTwo(state.formData)){
       alert("Please select a plan");
       return;
      } 
      if (!validateAddOns(state.formData)){
        alert("Please select at least one add-on");
        return;
      };
      if (state.userData.name === "" || state.userData.email === "" || state.userData.phone === ""){
        alert("Please fill in all required fields");
        return;
      }
      state.currentStepIndex = state.currentStepIndex + 1;
      state.confirm = true;
    },

    setUserData(state, action) {
      const { name, value } = action.payload;
      state.userData = { ...state.userData, [name]: value };
    },
    setErrorMessage(state, action) {
      const { name, value } = action.payload;
      state.errorMessage = { ...state.errorMessage, [name]: value };
    },

    resetForm(state) {
      state.formData = initialState.formData;
      state.errorMessage = initialState.errorMessage;
      state.userData = initialState.userData;
      state.currentStepIndex = initialState.currentStepIndex;
      state.confirm = initialState.confirm;
    },
  },
});

export const {
  handlePrevStep,
  handleNextStep,
  setAddOn,
  setUserData,
  setErrorMessage,
  setConfirm,
  setBillingPlan,
  setSelectedPlan,
  resetForm,
  handleSidebarClick,
} = formSlice.actions;
export default formSlice.reducer;

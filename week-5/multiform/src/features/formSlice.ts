import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../constants";
import {
  validateForm,
  validateStepTwo,
  validateAddOns,
} from "../utils/utilfunctions";
import { multiStepFormData } from "../constants";

//   const initialState: InitialStateType = {
//    currentStepIndex: 0,
//    confirm: false,
//    userData: {
//      name: "",
//      email: "",
//      phone: "",
//    },
//    errorMessage: {
//      name: "",
//      email: "",
//      phone: "",
//    },
//    formData: {
//      selectedPlan: null,
//      selectedBilling: "Monthly",
//      selectedAddOns: [],
//    },
//  };

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handlePrevStep(state) {
      state.currentStepIndex = state.currentStepIndex - 1;
    },

    handleNextStep(state) {
    //   if (
    //     state.currentStepIndex === 0 &&
    //     !validateForm(state.userData, (errors: any) => {
    //       state.errorMessage = errors;
    //     })
    //   ) {
    //     return;
    //   }

    //   if (state.currentStepIndex === 1 && !validateStepTwo(state.formData)) {
    //     return;
    //   }

    //   if (state.currentStepIndex === 2 && !validateAddOns(state.formData)) {
    //     return;
    //   }

      if (state.currentStepIndex < multiStepFormData.steps.length - 1) {
        state.currentStepIndex = state.currentStepIndex + 1;
      }
    },
    setFormData(state, action){ 
      state.formData = {...state.formData, ...action.payload};
    },

    setConfirm(state) {
        state.currentStepIndex = state.currentStepIndex + 1;
        state.confirm =!state.confirm;
    },

    setUserData(state, action) {
        const {name, value} = action.payload;
        state.userData = {...state.userData, [name]: value};
    },
    setErrorMessage(state, action) {
        const {name, value} = action.payload;
        state.errorMessage = {...state.errorMessage, [name]: value};
    }
  },
});

export const { handlePrevStep, handleNextStep, setUserData, setErrorMessage, setConfirm } = formSlice.actions;
export default formSlice.reducer;

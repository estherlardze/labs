import { createContext, useState } from "react";
import { FormContextType } from "../types";

export const FormContext = createContext({} as FormContextType)

export default function FormContextProvider({ children }: { children: React.ReactNode }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [confirm, setConFirm] = useState(false);
  
  const state: FormContextType = {
    currentStepIndex,
    setCurrentStepIndex,
    confirm,
    setConFirm
  }
  return (
    <FormContext.Provider value={state}>
      {children}
    </FormContext.Provider>
  );
}

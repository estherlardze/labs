

export type FooterType = {
  currentStepId: number;
};

export type SidebarProps = {
  currentStepId: number;
};

export type FormContextType = {
  currentStepIndex: number;
  resetForm: () => void;
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>;
  confirm: boolean;
  setConFirm: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: { name: string; email: string; phone: string };
  setErrorMessage: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
    }>
  >;
  formData: formProps;
  setFormData: React.Dispatch<formProps>;
  userData: {
    name: string;
    email: string;
    phone: string;
  };
  setUserData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
    }>
  >;
};



export type UserInfoType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
};


export type UserDataType = {
  currentStep: unknown;
};

export type AddonType = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type Plan = {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: string;
}
export type Summary = {
    selectedPlan: null | Plan,
    selectedAddOns: AddonType[],
    totalPrice: number, 
}
export type CuurentStep = {
  id: number;
  title: string;
  description: string;
  plans?: Plan[];
  billingOptions?: string[],
  addOns?: AddonType[]
  summary?: Summary
}

export type AddonCurrentStep = {
  id: string;
  title: string;
  description: string;
  addOns: AddonType[];
};
export type formProps = {
  selectedBilling: string;
  selectedPlan: null | Plan;
  selectedAddOns: {
    id: string;
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
  }[];
};

export type AddonContextType = {
  currentStep: AddonCurrentStep;
  formData: formProps;
  setFormData: React.Dispatch<React.SetStateAction<formProps>>;
};

export type InitialStateType = {
  currentStepIndex: number;
  confirm: boolean;
  userData: {
    name: string;
    email: string;
    phone: string;
  };
  errorMessage: {
    name: string;
    email: string;
    phone: string;
  };
  formData: {
    selectedPlan: null;
    selectedBilling: string;
    selectedAddOns: {
      id: string;
      name: string;
      description: string;
      monthlyPrice: number;
      yearlyPrice: number;
    }[]
  };
};

export type SelectPlanProps = {
  formData: formProps;
  setFormData: React.Dispatch<React.SetStateAction<formProps>>
  currentStep: {
    id: string;
    title: string;
    description: string;
    plans: Plan[]
  };
  }
  
 
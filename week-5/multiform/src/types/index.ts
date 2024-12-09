
export type SelectPlan = {
    title: string,
    price: string,
    icon: string
  }[]

export type FooterType = {
  handleNextStep:  () => void,
  handlePreviousStep: () => void
}

export type FormContextType = {
  currentStepIndex: number;
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type formProps = {
  selectedBilling: string;
  selectedPlan: null | string;
  selectedAddOns: [];
}

export type UserInfoType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
};

type UserInfo = {
  name: string;
  email: string;
  phone: string;
}

export type UserDataType = {
  errorMessage: UserInfo;
  setErrorMessage: React.Dispatch<React.SetStateAction<UserInfo>>;
  currentStep: any;
  userData: UserInfo;
  setUserData: React.Dispatch<React.SetStateAction<UserInfo>>
};

export type AddonType = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number,
       
}

export type AddonCurrentStep = {
  id: string;
  title: string;
  description: string;
  addOns: AddonType[];
}

export type AddonContextType = {
  currentStep: AddonCurrentStep;
  formData: formProps;
  setFormData: React.Dispatch<React.SetStateAction<formProps>>;
};
// Utility function to validate form data
export const validateForm = (userData: any, setErrorMessage: any) => {
    const newErrors = {
      name: userData.name ? "" : "Name is required",
      email: userData.email ? "" : "Email is required",
      phone: userData.phone ? "" : "Phone number is required",
    };
  
    setErrorMessage(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };
  
  // Validate selected plan
  export const validateStepTwo = (formData: any) => {
    if (formData.selectedPlan) {
      return true;
    }
    alert("Please select a plan");
    return false;
  };
  
  // Validate selected add-ons
  export const validateAddOns = (formData: any) => {
    if (formData.selectedAddOns.length > 0) {
      return true;
    }
    alert("Please select at least one add-on");
    return false;
  };
  
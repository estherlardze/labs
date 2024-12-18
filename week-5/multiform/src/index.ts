const renderStep = () => {
    switch (currentStepId) {
      case 1:
        return (
          <UserInfo
            setUserData={setUserData}
            currentStep={currentStep}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        );
      case 2:
        return (
          <SelectPlan
            formData={formData}
            setFormData={setFormData}
            // @ts-ignore
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <Addon
            formData={formData}
            // @ts-ignore
            setFormData={setFormData}
            // @ts-ignore
            currentStep={currentStep}
          />
        );
      case 4:
        return (
          <FinishUp
            // @ts-ignore
            formData={formData}
            setFormData={setFormData}
            currentStep={currentStep}
            currentStepId={currentStepId}
          />
        );
      default:
        return null;
    }
  };
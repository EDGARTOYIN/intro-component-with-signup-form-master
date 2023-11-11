const validateForm = (selectorForm) => {
  const validationOptions = [
    {
      attribute: "required",
      isValid: (formInput) => formInput.value.trim() !== "",
      errorMessage: (formInput) => `${formInput.placeholder} is required`,
    },
  ];

  const singleInputValidation = (inputProps) => {
    const input = inputProps.querySelector("input");
    const errorContainer = inputProps.querySelector(".error");
    const errorIcon = inputProps.querySelector(".error-icon");

    for (const rule of validationOptions) {
      if (input.hasAttribute(rule.attribute) && !rule.isValid(input)) {
        errorContainer.textContent = rule.errorMessage(input);
        errorContainer.classList.remove("hidden");
        input.classList.add("border-red-custom");
        errorIcon.classList.remove("hidden");
      } else {
        errorContainer.classList.add("hidden");
        input.classList.remove("border-red-custom");
        errorIcon.add("hidden");
      }
    }
  };

  const form = document.querySelector(selectorForm);
  form.setAttribute("novalidate", "");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm(form);
  });

  const validateForm = (formToValidate) => {
    const formGroup = Array.from(formToValidate.querySelectorAll(".formGroup"));

    formGroup.forEach((node) => {
      singleInputValidation(node);
    });
  };
};

validateForm("#registration-form");

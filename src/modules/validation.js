// lets start with the individual checks
// invalid: outline + instructions
// valid: outline + instructions
export function addEmailInputValidation() {
  const emailInput = document.querySelector(
    ".email-container .container-input",
  );

  emailInput.addEventListener("change", validateEmail);
}

function validateEmail() {
  const emailInput = document.querySelector(
    ".email-container .container-input",
  );
  const emailInstructions = document.querySelector(
    ".email-container .instructions",
  );

  if (emailInput.validity.valid) {
    emailInstructions.textContent = "";
    emailInstructions.className = "instructions valid";
  } else {
    if (emailInput.validity.valueMissing) {
      emailInstructions.textContent =
        "Required field. Please, enter an email address.";
    } else if (emailInput.validity.typeMismatch) {
      emailInstructions.textContent =
        "Invalid format. Please, enter a valid email address. e.g. test@test.com";
    }

    emailInstructions.className = "instructions invalid";
  }
}

export function addCountryInputValidation() {
  const countryInput = document.querySelector(
    ".country-container .container-input",
  );

  countryInput.addEventListener("change", validateCountry);
}

function validateCountry() {
  const countryInput = document.querySelector(
    ".country-container .container-input",
  );
  const countryInstructions = document.querySelector(
    ".country-container .instructions",
  );

  if (countryInput.validity.valid) {
    countryInstructions.textContent = "";
    countryInstructions.className = "instructions valid";
  } else if (countryInput.validity.valueMissing) {
    countryInstructions.textContent =
      "Required field. Please, enter a country.";
    countryInstructions.className = "instructions invalid";
  }
}

export function addZipInputValidation() {
  const zipInput = document.querySelector(".zip-container .container-input");

  zipInput.addEventListener("change", validateZip);
}

function validateZip() {
  const zipInput = document.querySelector(".zip-container .container-input");
  const zipInstructions = document.querySelector(
    ".zip-container .instructions",
  );

  if (zipInput.validity.valid) {
    zipInstructions.textContent = "";
    zipInstructions.className = "instructions valid";
  } else if (zipInput.validity.valueMissing) {
    zipInstructions.textContent = "Required field. Please, enter a zip code.";
    zipInstructions.className = "instructions invalid";
  }
}

export function addPasswordInputValidation() {
  const passwordInput = document.querySelector(
    ".password-container .container-input",
  );

  passwordInput.addEventListener("change", validatePassword);
}

function validatePassword() {
  const passwordInput = document.querySelector(
    ".password-container .container-input",
  );
  const passwordInstructions = document.querySelector(
    ".password-container .instructions",
  );

  if (passwordInput.validity.valid) {
    passwordInstructions.textContent = "";
    passwordInstructions.className = "instructions valid";
  } else if (passwordInput.validity.valueMissing) {
    passwordInstructions.textContent =
      "Required field. Please, enter a password.";
    passwordInstructions.className = "instructions invalid";
  }
}

export function addPasswordConfirmationInputValidation() {
  const passwordConfirmationInput = document.querySelector(
    ".password-confirmation-container .container-input",
  );

  passwordConfirmationInput.addEventListener(
    "change",
    validatePasswordConfirmation,
  );
}

function validatePasswordConfirmation() {
  const passwordConfirmationInput = document.querySelector(
    ".password-confirmation-container .container-input",
  );
  const passwordConfirmationInstructions = document.querySelector(
    ".password-confirmation-container .instructions",
  );

  if (passwordConfirmationInput.validity.valid) {
    passwordConfirmationInstructions.textContent = "";
    passwordConfirmationInstructions.className = "instructions valid";
  } else if (passwordConfirmationInput.validity.valueMissing) {
    passwordConfirmationInstructions.textContent =
      "Required field. Please, enter the password again.";
    passwordConfirmationInstructions.className = "instructions invalid";
  }
}

// a general check off all the input fields
export function addFormValidation() {
  const submitButton = document.querySelector(".submit-button");
  const form = document.querySelector("form");

  submitButton.addEventListener("click", (event) => {
    if (validateForm()) {
      const successfulCreationDialog = document.querySelector(
        ".successful-creation",
      );
      event.preventDefault();
      successfulCreationDialog.showModal();
      form.reset();
      validateForm();
    } else {
      event.preventDefault();
    }
  });
}

export function validateForm() {
  const emailInput = document.querySelector(
    ".email-container .container-input",
  );

  if (!emailInput.validity.valid) {
    validateEmail();
    validateCountry();
    validateZip();
    validatePassword();
    validatePasswordConfirmation();
    return false;
  } else {
    return true;
  }
}

export function closeDialog() {
  const successfulCreationDialog = document.querySelector(
    ".successful-creation",
  );

  successfulCreationDialog.addEventListener("click", (event) => {
    if (event.target === successfulCreationDialog) {
      successfulCreationDialog.close();
    }
  });
}

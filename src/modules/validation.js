export function addEmailInputValidation() {
  const emailInput = document.querySelector(
    ".email-container .container-input",
  );

  emailInput.addEventListener("input", validateEmail);
}

function validateEmail() {
  const emailInput = document.querySelector(
    ".email-container .container-input",
  );
  const emailInstructions = document.querySelector(
    ".email-container .instructions",
  );
  const hint = document.querySelector(".email-container h2");

  if (emailInput.validity.valid) {
    emailInstructions.textContent = "";
    hint.className = "valid";
  } else {
    if (emailInput.validity.valueMissing) {
      emailInstructions.textContent =
        "Required field. Please, enter an email address.";
    } else if (emailInput.validity.typeMismatch) {
      emailInstructions.textContent =
        "Invalid format. Please, enter a valid email address. e.g. test@test.com";
    }

    hint.className = "invalid";
  }
}

export function addCountryInputValidation() {
  const countryInput = document.querySelector(
    ".country-container .container-input",
  );

  countryInput.addEventListener("input", validateCountry);
}

function validateCountry() {
  const countryInput = document.querySelector(
    ".country-container .container-input",
  );
  const countryInstructions = document.querySelector(
    ".country-container .instructions",
  );
  const hint = document.querySelector(".country-container h2");

  if (countryInput.validity.valid) {
    countryInstructions.textContent = "";
    hint.className = "valid";
  } else if (countryInput.validity.valueMissing) {
    countryInstructions.textContent =
      "Required field. Please, enter a country.";
    hint.className = "invalid";
  }
}

export function addZipInputValidation() {
  const zipInput = document.querySelector(".zip-container .container-input");

  zipInput.addEventListener("input", validateZip);
}

function validateZip() {
  const zipInput = document.querySelector(".zip-container .container-input");
  const zipInstructions = document.querySelector(
    ".zip-container .instructions",
  );
  const hint = document.querySelector(".zip-container h2");

  if (zipInput.validity.valid) {
    zipInstructions.textContent = "";
    hint.className = "valid";
  } else if (zipInput.validity.valueMissing) {
    zipInstructions.textContent = "Required field. Please, enter a zip code.";
    hint.className = "invalid";
  }
}

export function addPasswordInputValidation() {
  const passwordInput = document.querySelector(
    ".password-container .container-input",
  );

  passwordInput.addEventListener("input", validatePassword);
}

function validatePassword() {
  const passwordInput = document.querySelector(
    ".password-container .container-input",
  );
  const passwordInstructions = document.querySelector(
    ".password-container .instructions",
  );
  const hint = document.querySelector(".password-container h2");

  if (passwordInput.validity.valid) {
    passwordInstructions.textContent = "";
    hint.className = "valid";
  } else if (passwordInput.validity.valueMissing) {
    passwordInstructions.textContent =
      "Required field. Please, enter a password.";
    hint.className = "invalid";
  }
}

export function addPasswordConfirmationInputValidation() {
  const passwordConfirmationInput = document.querySelector(
    ".password-confirmation-container .container-input",
  );

  passwordConfirmationInput.addEventListener(
    "input",
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
  const hint = document.querySelector(".password-confirmation-container h2");

  if (passwordConfirmationInput.validity.valid) {
    passwordConfirmationInstructions.textContent = "";
    hint.className = "valid";
  } else if (passwordConfirmationInput.validity.valueMissing) {
    passwordConfirmationInstructions.textContent =
      "Required field. Please, enter the password again.";
    hint.className = "invalid";
  }
}

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

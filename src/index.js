import "./style.css";
import * as validation from "./modules/validation.js";

validation.addEmailInputValidation();
validation.addCountryInputValidation();
validation.addZipInputValidation();
validation.addPasswordInputValidation();
validation.addPasswordConfirmationInputValidation();
validation.addFormValidation();
validation.validateForm();
validation.closeDialog();

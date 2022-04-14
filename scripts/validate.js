function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, submitButton, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute('disabled', '');
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  }
};

function showInputError(profileEditFormElement, inputElement, inputErrorClass, errorClass, errorMessage) {
  const errorElement = profileEditFormElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (profileEditFormElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = profileEditFormElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const isValid = (profileEditFormElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(profileEditFormElement, inputElement, inputErrorClass, errorClass, inputElement.validationMessage);
  } else {
    hideInputError(profileEditFormElement, inputElement, inputErrorClass, errorClass);
  }
}

function setEventListeners(profileEditFormElement, inputSelector, inputErrorClass, errorClass, submitButtonSelector, inactiveButtonClass) {
  const inputList = Array.from(profileEditFormElement.querySelectorAll(inputSelector));
  const submitButton = profileEditFormElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, submitButton, inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(profileEditFormElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, submitButton, inactiveButtonClass);
    });
  });
};

function enableValidation(validParams) {
  const forms = Array.from(document.querySelectorAll(validParams.formSelector));
  forms.forEach(profileEditFormElement => setEventListeners(
    profileEditFormElement,
    validParams.inputSelector,
    validParams.inputErrorClass,
    validParams.errorClass,
    validParams.submitButtonSelector,
    validParams.inactiveButtonClass
  ));
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

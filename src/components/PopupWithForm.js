import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler.bind(this);
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._saveButton = this._form.querySelector(".popup__button");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  renderLoading(isLoading) {
    this._saveButton.disabled = isLoading ? true : false;
    this._saveButton.textContent = isLoading ? "Сохранение..." : "Сохранить";
    isLoading ? this._saveButton.classList.add("popup__button_disabled") : this._saveButton.classList.remove("popup__button_disabled");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

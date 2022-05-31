import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._saveButton = this._form.querySelector(".popup__button");
  }

  renderLoading(isLoading) {
    this._saveButton.disabled = isLoading ? true : false;
    this._saveButton.textContent = isLoading ? "Удаление..." : "Да";
    isLoading ? this._saveButton.classList.add("popup__button_disabled") : this._saveButton.classList.remove("popup__button_disabled");
  }

  setSubmit(submitCallback) {
    this._submitHandler = submitCallback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler();
    });
  }
}

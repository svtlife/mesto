import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".popup__image");
    this._imageCaption = this._popup.querySelector(".popup__signature");
  }

  open({ name, link }) {
    super.open();
    this._imageElement.alt = name;
    this._imageElement.src = link;
    this._imageCaption.textContent = name;
  }
}

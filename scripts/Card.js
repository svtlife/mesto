import { popupElementZoom, popupImage, popupText } from "./index.js";
import { openPopup } from "./utils.js";
export class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._cardLike = this._element.querySelector(".element__like");
    this._setEventListeners();
    this._element.querySelector(".element__text").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;
    return this._element;
  }

  _setEventListeners() {
    this._cardLike.addEventListener("click", () => {
      this._handleLike();
    });
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._handleRemoveCard();
      });
    this._cardImage.addEventListener("click", () => {
      this._handleOpenCard();
    });
  }

  _handleLike() {
    this._cardLike.classList.toggle("element__like_active");
  }

  _handleRemoveCard() {
    this._element.closest(".element").remove();
    this._element = null;
  }

  _handleOpenCard() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupText.textContent = this._name;
    openPopup(popupElementZoom);
  }
}

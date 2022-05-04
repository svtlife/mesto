import { openPopup, popupElementZoom, popupImage, popupText } from "./index.js";
export  class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__text').textContent = this._name;
    const cardImage = this._element.querySelector('.element__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
    this._handleLike()
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
    this._handleRemoveCard()
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
    this._handleOpenCard()
    })
  }

  _handleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handleRemoveCard() {
    this._element.closest('.element').remove();
  }

  _handleOpenCard() {
    const cardImg = this._element.querySelector('.element__image');
    popupImage.src = cardImg.src;
    popupImage.alt = cardImg.alt;
    popupText.textContent = cardImg.alt;
    openPopup(popupElementZoom);
  }
};

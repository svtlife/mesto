export default class Card {
  constructor(data, cardSelector, showCardPreview) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._showCardPreview = showCardPreview;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  createCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".element__image");
    this._cardTitle = this._cardElement.querySelector(".element__text");
    this._cardDeleteBtn = this._cardElement.querySelector(".element__delete");
    this._cardLikeBtn = this._cardElement.querySelector(".element__like");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _toggleLike() {
    this._cardLikeBtn.classList.toggle("element__like_active");
  }

  _setEventListeners() {
    this._cardDeleteBtn.addEventListener("click", () => this._deleteCard());
    this._cardLikeBtn.addEventListener("click", () => this._toggleLike());
    this._cardImage.addEventListener("click", () =>
      this._showCardPreview(this._name, this._link)
    );
  }
}

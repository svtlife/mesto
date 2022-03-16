const popupElement = document.querySelector('.popup');
const profileButton = document.querySelector('.profile__button');
const closeButton = popupElement.querySelector('.popup__close');

function openPopup() {
  popupElement.classList.add('popup__opened');
  nameInput.value = document.querySelector(".profile__info-title").textContent;
  jobInput.value = document.querySelector(".profile__info-subtitle").textContent;
}

function closePopup() {
  popupElement.classList.remove('popup__opened');
}

profileButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);





let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');

function formSubmitHandler(evt) {
  evt.preventDefault();
  document.querySelector(".profile__info-title").textContent = nameInput.value;
  document.querySelector(".profile__info-subtitle").textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

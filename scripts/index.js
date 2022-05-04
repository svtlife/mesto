import { Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {initialCards, enableValidation} from "./data.js"

const profileInfoTitle = document.querySelector(".profile__info-title");
const prorifleInfoSubtitle = document.querySelector(".profile__info-subtitle");

const popupElement = document.querySelector('.popup');
const elementList = document.querySelector('.elements');
const popups = Array.from(document.querySelectorAll('.popup'));


const popupElementAdd = document.querySelector('.popup_add');
const newPlaceFormElement = popupElementAdd.querySelector(".popup__form");
const profileAddButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close_add');
const formElementAdd = document.querySelector('.popup__container_add');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link')


const popupElementProfile = document.querySelector('.popup_profile');
const profileFormElement = popupElementProfile.querySelector(".popup__form");
const profileButton = document.querySelector('.profile__button');
const closeButton = popupElement.querySelector('.popup__close');
const profileEditFormElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');


export const popupElementZoom = document.querySelector('.popup_zoom');
export const popupImage = popupElementZoom.querySelector('.popup__image');
export const popupText = popupElementZoom.querySelector('.popup__signature')
const closeZoomButton = document.querySelector('.popup__close-zoom');


const profileFormValidator = new FormValidator(enableValidation, profileFormElement);
const newPlaceFormValidator = new FormValidator(enableValidation, newPlaceFormElement);


/* Загрузка 6 карточек из массива */
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.element-template');
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});

/* Функция создания карточки */
function createCard(name, link) {
  const card = new Card(name, link, '.element-template');
  return card.generateCard();
}

/* Закрытие попапа на esc */
 function handleCloseOnEscape(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}


/* Открывает попап */
export function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseOnEscape);
}

/* Закрывает попап */
 function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseOnEscape);
}


 /* сохранить add form */
  function saveSubmitForm(evt) { // введённые пользователем  новые данные (nameInput.value и jobInput.value)
  evt.preventDefault();        // заменяются вместо старых данных в profile__info-title и profile__info-subtitle
  profileInfoTitle.textContent = nameInput.value;
  prorifleInfoSubtitle.textContent = jobInput.value;
  closePopup(popupElementProfile);
}

/* функция для добавления новых карт */
  function saveSubmitAddForm(evt)  {
  evt.preventDefault();
  elementList.prepend(createCard(titleInput.value, linkInput.value));
  closePopup(popupElementAdd);
  titleInput.value = '';
  linkInput.value = '';
  }

 /*  Попап редактирования профиля */
  profileButton.addEventListener('click', function() {
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = prorifleInfoSubtitle.textContent;
  profileFormValidator.clearFormErrors;
  openPopup(popupElementProfile);
});

closeButton.addEventListener('click', function() {
  closePopup(popupElementProfile)
});

profileEditFormElement.addEventListener('submit', saveSubmitForm);

/* Попап добавления нового места */
profileAddButton.addEventListener('click', function() {
  newPlaceFormValidator.clearErrors();
  openPopup(popupElementAdd);
})

closeAddButton.addEventListener('click', function() {
  closePopup(popupElementAdd)
})

formElementAdd.addEventListener('submit', saveSubmitAddForm);


/* Закрытие зум попап */
closeZoomButton.addEventListener('click', function() {
  closePopup(popupElementZoom)
})


/* Закрытие попапов по клику на темный фон */
 popups.forEach(popup => {
  popup.addEventListener('click', evt => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
});


/* Включаем валидацию форм */
profileFormValidator.enableCardValidation();
newPlaceFormValidator.enableCardValidation();


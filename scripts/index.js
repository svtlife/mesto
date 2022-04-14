const popupElement = document.querySelector('.popup');
const profileButton = document.querySelector('.profile__button');
const closeButton = popupElement.querySelector('.popup__close');
const profileEditFormElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileInfoTitle = document.querySelector(".profile__info-title");
const prorifleInfoSubtitle = document.querySelector(".profile__info-subtitle");
const popupElementAdd = document.querySelector('.popup_add');
const profileAddButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close_add');
const formElementAdd = document.querySelector('.popup__container_add');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link')
const elementList = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const popupElementZoom = document.querySelector('.popup_zoom');
const popupImage = popupElementZoom.querySelector('.popup__image');
const popupText = popupElementZoom.querySelector('.popup__signature')
const closeZoomButton = document.querySelector('.popup__close-zoom');
const popupElementProfile = document.querySelector('.popup_profile');
const popups = Array.from(document.querySelectorAll('.popup'));


/* Функция для показа ошибок */
function clearFormErrors(profileEditFormElement) {
  const inputList = Array.from(profileEditFormElement.querySelectorAll(".popup__input"));
  const submitButton = profileEditFormElement.querySelector('.popup__button');

  inputList.forEach(inputElement => {
    hideInputError(profileEditFormElement, inputElement, 'popup__input_type_error', 'popup__error_visible');
  });

  toggleButtonState(inputList, submitButton, 'popup__button_disabled');
}

function handleCloseOnEscape(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

/* попап */

function openPopup (popup) { // открывает popup
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseOnEscape);
}


 function closePopup(popup) { // закрывает popup
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


/* функция для создания карты */
function createCard(name, link) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__text').textContent = name;

  const cardImg = cardElement.querySelector('.element__image');
  cardImg.src = link;
  cardImg.alt = name;
  cardImg.addEventListener('click', () => {
    popupImage.src = cardImg.src;
    popupImage.alt = cardImg.alt;
    popupText.textContent = cardImg.alt;
    openPopup(popupElementZoom);
  });

  cardElement.querySelector('.element__like').addEventListener('click', function(evt) { // переключение сердечка для карточки
    evt.target.classList.toggle('element__like_active');
    });

    cardElement.querySelector('.element__delete').addEventListener('click', function(evt) { // удаление карточки по клику
      evt.target.closest('.element').remove();
    });

    return cardElement
}


/* функция для добавления новых карт */
function saveSubmitAddForm(evt) {
  evt.preventDefault();
  elementList.prepend(createCard(titleInput.value, linkInput.value));
  closePopup(popupElementAdd);
  titleInput.value = '';
  linkInput.value = '';
}


/* загрузка изначальных карт из массива */
initialCards.forEach(function(item) {
  elementList.append(createCard(item.name, item.link))
});


/* Кнопки */
profileButton.addEventListener('click', function() {
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = prorifleInfoSubtitle.textContent;
  clearFormErrors(popupElementProfile);
  openPopup(popupElementProfile);
});

closeButton.addEventListener('click', function() {
  closePopup(popupElementProfile)
});

profileEditFormElement.addEventListener('submit', saveSubmitForm);

profileAddButton.addEventListener('click', function() {
  clearFormErrors(popupElementAdd);
  openPopup(popupElementAdd)
})

closeAddButton.addEventListener('click', function() {
  closePopup(popupElementAdd)
})

formElementAdd.addEventListener('submit', saveSubmitAddForm);

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

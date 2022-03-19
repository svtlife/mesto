const popupElement = document.querySelector('.popup');
const profileButton = document.querySelector('.profile__button');
const closeButton = popupElement.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileInfoTitle = document.querySelector(".profile__info-title");
let prorifleInfoSubtitle = document.querySelector(".profile__info-subtitle");




function openPopup() { // открывает popup
  popupElement.classList.add('popup_opened');
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = prorifleInfoSubtitle.textContent;
}


function closePopup() { // закрывает popup
  popupElement.classList.remove('popup_opened');
}


function saveSubmitForm(evt) { // введённые пользователем  новые данные (nameInput.value и jobInput.value)
  evt.preventDefault();        // заменяются вместо старых данных в profile__info-title и profile__info-subtitle
  profileInfoTitle.textContent = nameInput.value;
  prorifleInfoSubtitle.textContent = jobInput.value;
  closePopup();
}




profileButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', saveSubmitForm);

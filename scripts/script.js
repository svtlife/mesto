const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const popupElement = document.querySelector('.popup');
const profileButton = document.querySelector('.profile__button');
const closeButton = popupElement.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileInfoTitle = document.querySelector(".profile__info-title");
let prorifleInfoSubtitle = document.querySelector(".profile__info-subtitle");


const popupElementAdd = document.querySelector('.popup_add');
const profileaddButton = document.querySelector('.profile__add-button');
const closeaddButton = document.querySelector('.popup__close_add');
let formElementadd = document.querySelector('.popup__container_add');
let titleInput = document.querySelector('.popup__input_type_title');
let linkInput = document.querySelector('.popup__input_type_link')
let elementTitle = document.querySelector('.element__text');
let elementImage = document.querySelector('.element__image');


const elementList = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
let popupElementZoom = document.querySelector('.popup_zoom');
let img = popupElementZoom.querySelector('.popup__image');
let text = popupElementZoom.querySelector('.popup__signature')
const closeZoomButton = document.querySelector('.popup__close-zoom');

/* Загружаем 6 карточек из массива */

initialCards.forEach(function (element) {
  const elementCard = elementTemplate.cloneNode(true);
  let cardText = elementCard.querySelector('.element__text')
  cardText.textContent = element.name;
  let cardImg = elementCard.querySelector('.element__image')
  cardImg.src = element.link;
  cardImg.addEventListener('click', function() {
    text.textContent = cardText.textContent;
    img.src = cardImg.src;
    openPopupImg()
  })

  elementCard.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  })

  elementCard.querySelector('.element__delete').addEventListener('click', function(evt) {
    evt.target.parentNode.remove();
  })

  elementList.append(elementCard);
});


/* Первый попап */

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


/* Второй попап */

function openPopupadd() { // открывает popup с добавлением карточек
  popupElementAdd.classList.add('popup_opened');
}

function closePopupadd() { // закрывает popup с добавлением карточек
  popupElementAdd.classList.remove('popup_opened');
}

function saveSubmitAddForm(evt) { // ввёденные пользователем название места и ссылка на него при клике добавляются в новую карточку вместо element__text и element__like и закрывают попап
  evt.preventDefault();
  const CardElement = elementTemplate.cloneNode(true);
  let cardText = CardElement.querySelector('.element__text');
  let cardImg = CardElement.querySelector('.element__image');
  cardText.textContent = titleInput.value;
  cardImg.alt = cardText.textContent;
  cardImg.src = linkInput.value;
  cardImg.addEventListener('click', function() { // открывает созданую карточку на полный экран
    text.textContent = cardText.textContent;
    img.src = cardImg.src;
    openPopupImg()
  })

  CardElement.querySelector('.element__like').addEventListener('click', function(evt) { // переключение сердечка для карточки
  evt.target.classList.toggle('element__like_active');
  });

  CardElement.querySelector('.element__delete').addEventListener('click', function(evt) { // удаление карточки по клику
    evt.target.parentNode.remove();
  });

  elementList.prepend(CardElement); // новую карточку вперёд
  closePopupadd();
}


/* Третий попап */

function openPopupImg() {
  popupElementZoom.classList.add('popup_opened');
};

function closePopupImg() {
  popupElementZoom.classList.remove('popup_opened');
}



profileButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', saveSubmitForm);
profileaddButton.addEventListener('click', openPopupadd);
closeaddButton.addEventListener('click', closePopupadd);
formElementadd.addEventListener('submit', saveSubmitAddForm);
closeZoomButton.addEventListener('click', closePopupImg);

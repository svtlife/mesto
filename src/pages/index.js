import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import { validationConfig, profileFormElement, newPlaceFormElement, avatarFormElement, nameInput, jobInput, profileButton, profileAddButton, avatarEditButton, baseUrl, apiToken } from "../utils/const.js";

// Api
const api = new Api({
  baseUrl,
  headers: {
    authorization: apiToken,
    "Content-Type": "application/json",
  },
});

// User info object
const userData = new UserInfo({
  nameSelector: ".profile__info-title",
  jobSelector: ".profile__info-subtitle",
  avatarSelector: ".profile__avatar",
});

// Popup with card image preview
const cardPreviewPopup = new PopupWithImage(".popup_zoom");

// Popup with card add form
const cardAddPopup = new PopupWithForm(".popup_add", (item) => {
  cardAddPopup.renderLoading(true);
  api
    .postCard(item)
    .then((card) => {
      cardList.addItem(createCardElement(card, ".element-template"));
      cardAddPopup.close();
    })
    .catch((err) => console.error(err))
    .finally(() => {
      cardAddPopup.renderLoading(false, "Создать");
    });
});

// Popup with card delete confirm
const cardDeletePopup = new PopupWithConfirm(".popup_delete-confirm");

// Popup with user profile edit form
const profileEditPopup = new PopupWithForm(".popup_profile", (data) => {
  profileEditPopup.renderLoading(true);
  api
    .editUserData({ name: data.name, about: data.job })
    .then((user) => editUserInfo(user))
    .catch((err) => console.error(err))
    .finally(() => profileEditPopup.renderLoading(false, "Сохранить"));
});

// Popup with user avatar edit form
const avatarEditPopup = new PopupWithForm(".popup_avatar", ({ link }) => {
  avatarEditPopup.renderLoading(true);
  api
    .editUserAvatar(link)
    .then((user) => {
      userData.setUserAvatar(user.avatar);
      avatarEditPopup.close();
    })
    .catch((err) => console.error(err))
    .finally(() => {
      avatarEditPopup.renderLoading(false, "Сохранить");
    });
});

// Form validators
const profileFromValidator = new FormValidator(validationConfig, profileFormElement);
const cardFromValidator = new FormValidator(validationConfig, newPlaceFormElement);
const avatarFromValidator = new FormValidator(validationConfig, avatarFormElement);

// Functions
// Rendering user data and cards from the API
let cardList;
const renderApiData = function () {
  Promise.all([api.getUserData(), api.getInitialCards()])
    .then(([user, cardsArr]) => {
      renderUserInfo(user);
      cardList = new Section(
        {
          items: cardsArr,
          renderer: (card) => {
            cardList.addItem(createCardElement(card, ".element-template"));
          },
        },
        ".elements"
      );
      cardList.renderElements();
    })
    .catch((err) => console.error(`Что-то пошло не так: (${err})`));
};

const renderUserInfo = function (user) {
  userData.setUserInfo({ name: user.name, job: user.about }).setUserAvatar(user.avatar).setUserId(user._id);
};

const editUserInfo = function (user) {
  userData.setUserInfo({ name: user.name, job: user.about });
  profileEditPopup.close();
};

const createCardElement = function (data, cardSelector) {
  const card = new Card(
    {
      data: { ...data, userId: userData.getUserId() },
      handleCardClick: () => cardPreviewPopup.open(data),
      handleLikeClick: (isLiked, id) =>
        api
          .likeCard(isLiked, id)
          .then((cardData) => card.toggleLike(cardData))
          .catch((err) => console.error(err)),
      handleDeleteClick: (cardId) => {
        cardDeletePopup.open().setSubmit(() => {
          cardDeletePopup.renderLoading(true);
          api
            .deleteCard(cardId)
            .then(() => {
              card.deleteCard(cardId);
              cardDeletePopup.close();
            })
            .catch((err) => console.error(err))
            .finally(() => cardDeletePopup.renderLoading(false));
        });
      },
    },
    cardSelector
  );

  return card.createCard();
};

const handleOpenProfilePopup = function () {
  const user = userData.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
  profileFromValidator.resetValidator();
  profileEditPopup.open();
};

const registerOpenPopupEventsListeners = function () {
  profileButton.addEventListener("click", handleOpenProfilePopup);
  avatarEditButton.addEventListener("click", () => {
    avatarEditPopup.open();
    avatarFromValidator.resetValidator();
  });
  profileAddButton.addEventListener("click", () => {
    cardAddPopup.open();
    cardFromValidator.resetValidator();
  });
};

const init = function () {
  renderApiData();
  registerOpenPopupEventsListeners();
  cardPreviewPopup.setEventListeners();
  cardAddPopup.setEventListeners();
  cardDeletePopup.setEventListeners();
  profileEditPopup.setEventListeners();
  avatarEditPopup.setEventListeners();
  cardFromValidator.enableValidation();
  profileFromValidator.enableValidation();
  avatarFromValidator.enableValidation();
};

init();

import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards } from "../utils/data.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  validationConfig,
  profileInfoTitle,
  prorifleInfoSubtitle,
  profileFormElement,
  newPlaceFormElement,
  nameInput,
  jobInput,
  profileButton,
  profileAddButton,
} from "../utils/const.js";

// обьект User info
const userData = new UserInfo({
  name: profileInfoTitle,
  job: prorifleInfoSubtitle,
});

// секция Card list
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCardElement(item, ".element-template"));
    },
  },
  ".elements"
);
// Popup with card image preview
const cardPreviewPopup = new PopupWithImage(".popup_zoom");

// Popup with card add form
const cardAddPopup = new PopupWithForm(".popup_add", (e, item) => {
  e.preventDefault();
  cardList.addItem(createCardElement(item, ".element-template"));
  cardAddPopup.close();
  cardFromValidator.resetValidator();
});

// Popup with user profile edit form
const profileEditPopup = new PopupWithForm(".popup_profile", (e, data) => {
  e.preventDefault();
  userData.setUserInfo(data);
  profileEditPopup.close();
});

// Form validators
const profileFromValidator = new FormValidator(
  validationConfig,
  profileFormElement
);
const cardFromValidator = new FormValidator(
  validationConfig,
  newPlaceFormElement
);

// Functions
const createCardElement = function (data, cardSelector) {
  return new Card(data, cardSelector, () =>
    cardPreviewPopup.open(data)
  ).createCard();
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
  profileAddButton.addEventListener("click", () => cardAddPopup.open());
};

const init = function () {
  registerOpenPopupEventsListeners();
  cardList.renderElements();
  cardPreviewPopup.setEventListeners();
  cardAddPopup.setEventListeners();
  profileEditPopup.setEventListeners();
  profileFromValidator.enableValidation();
  cardFromValidator.enableValidation();
};
init();

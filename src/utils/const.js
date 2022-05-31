/* Api parameters  */
export const baseUrl = "https://mesto.nomoreparties.co/v1/cohort-42";
export const apiToken = "5809c8c5-df88-44cc-8fd6-1425b3bb4b05";

/* Config for validation */
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

/* Elements */
export const elementList = document.querySelector(".elements");
export const profileInfoTitle = document.querySelector(".profile__info-title");
export const prorifleInfoSubtitle = document.querySelector(".profile__info-subtitle");
export const popups = Array.from(document.querySelectorAll(".popup"));

/* Profile popup */
export const popupElementProfile = document.querySelector(".popup_profile");
export const profileFormElement = popupElementProfile.querySelector(".popup__form_profile");
export const nameInput = popupElementProfile.querySelector(".popup__input_type_name");
export const jobInput = popupElementProfile.querySelector(".popup__input_type_job");
export const profileButton = document.querySelector(".profile__button");
export const profileSaveBtn = popupElementProfile.querySelector(".popup__button");
export const profileCloseButton = popupElementProfile.querySelector(".popup__close");

/* Avatar popup */
export const avatarPopup = document.querySelector(".popup_avatar");
export const avatarFormElement = avatarPopup.querySelector(".popup__form_avatar");
export const avatarEditButton = document.querySelector(".profile__avatar-btn");
export const avatarCloseButton = avatarPopup.querySelector(".popup__close");

/* Add card popup */
export const popupElementAdd = document.querySelector(".popup_add");
export const newPlaceFormElement = popupElementAdd.querySelector(".popup__form_add");
export const titleInput = popupElementAdd.querySelector(".popup__input_type_title");
export const linkInput = popupElementAdd.querySelector(".popup__input_type_link");
export const profileAddButton = document.querySelector(".profile__add-button");
export const cardSaveBtn = popupElementAdd.querySelector(".popup__button");
export const profileCloseAddButton = popupElementAdd.querySelector(".popup__close_add");
/* export const formElementAdd = document.querySelector(".popup__container_add"); */

/* Card delete popup */
export const deleteCardPopup = document.querySelector(".popup_delete-confirm");
export const deleteCardBtn = deleteCardPopup.querySelector(".popup__close");

/* Card image view */
export const popupElementZoom = document.querySelector(".popup_zoom");
export const popupImage = popupElementZoom.querySelector(".popup__image");
export const popupText = popupElementZoom.querySelector(".popup__signature");
export const profileCloseZoomButton = popupElementZoom.querySelector(".popup__close-zoom");

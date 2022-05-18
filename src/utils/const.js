export const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const profileInfoTitle = document.querySelector(".profile__info-title");
export const prorifleInfoSubtitle = document.querySelector(
  ".profile__info-subtitle"
);

export const popupElement = document.querySelector(".popup");
export const elementList = document.querySelector(".elements");
export const popups = Array.from(document.querySelectorAll(".popup"));

export const popupElementAdd = document.querySelector(".popup_add");
export const newPlaceFormElement =
  popupElementAdd.querySelector(".popup__form");
export const profileAddButton = document.querySelector(".profile__add-button");
export const profileCloseAddButton =
  document.querySelector(".popup__close_add");
export const formElementAdd = document.querySelector(".popup__container_add");
export const titleInput = document.querySelector(".popup__input_type_title");
export const linkInput = document.querySelector(".popup__input_type_link");

export const popupElementProfile = document.querySelector(".popup_profile");
export const profileFormElement =
  popupElementProfile.querySelector(".popup__form");
export const profileButton = document.querySelector(".profile__button");
export const profileCloseButton = popupElement.querySelector(".popup__close");
export const profileEditFormElement =
  document.querySelector(".popup__container");
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_job");

export const popupElementZoom = document.querySelector(".popup_zoom");
export const popupImage = popupElementZoom.querySelector(".popup__image");
export const popupText = popupElementZoom.querySelector(".popup__signature");
export const profileCloseZoomButton =
  document.querySelector(".popup__close-zoom");

/* Открывает попап */
export function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseOnEscape);
}

/* Закрывает попап */
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseOnEscape);
}

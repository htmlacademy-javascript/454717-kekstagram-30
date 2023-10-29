import {isEscapeKey} from './utilities';

const modal = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const thumbnails = document.querySelector('.pictures');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modal.classList.add('hidden');
  }
};

const openModal = () => {
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onThumbnailsClick = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    openModal();
  }
};

thumbnails.addEventListener('click', onThumbnailsClick);

closeButton.addEventListener('click', () => closeModal());

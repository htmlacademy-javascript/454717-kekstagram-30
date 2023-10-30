import {isEscapeKey} from '../utilities';

const modal = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
// const thumbnails = document.querySelector('.pictures');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal () {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButton.addEventListener('click', () => closeModal());

const renderPopup = (properties) => {
  console.log(properties);
  openModal();
};

export {renderPopup};

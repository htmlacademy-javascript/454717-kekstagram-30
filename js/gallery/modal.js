import {isEscapeKey} from '../utilities';

const modal = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

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

const renderModal = (properties) => {
  const {url, description, likes, comments} = properties;
  modal.querySelector('.big-picture__img img').src = url;
  modal.querySelector('.likes-count').textContent = likes;
  modal.querySelector('.social__caption').textContent = description;
  modal.querySelector('.social__comment-shown-count').textContent = '2';
  modal.querySelector('.social__comment-total-count').textContent = comments.length;

  openModal();
};

export {renderModal};

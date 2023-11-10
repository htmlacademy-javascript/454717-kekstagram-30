import {renderComments} from './comments.js';

const modal = document.querySelector('.big-picture');
const closeButton = modal.querySelector('.big-picture__cancel');

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc')) {
    closeButton.click();
  }
};

const openModal = () => {
  modal.classList.remove('hidden');
  modal.scroll(0, 0);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.dispatchEvent(new CustomEvent('modalClose'));
};

closeButton.addEventListener('click', () => closeModal());

const renderModal = (properties) => {
  const {url, description, likes, comments} = properties;
  modal.querySelector('.big-picture__img img').src = url;
  modal.querySelector('.big-picture__img img').alt = description;
  modal.querySelector('.likes-count').textContent = likes;
  modal.querySelector('.social__caption').textContent = description;
  renderComments(comments);
  openModal();
};

export {renderModal};

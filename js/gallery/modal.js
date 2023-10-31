import {isEscapeKey} from '../utilities';

const modal = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const commentsTemplate = document.querySelector('#comment');
const commentsContainer = modal.querySelector('.social__comments');
const counter = modal.querySelector('.social__comment-count');
const commentsLoader = modal.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
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
  document.body.classList.remove('modal-open');
}

closeButton.addEventListener('click', () => closeModal());

const createComments = (commentsData) => commentsData.map((properties) => {
  const {avatar, message, name} = properties;
  const comment = commentsTemplate.content.querySelector('.social__comment').cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
});

const renderComments = (commentsData) => {
  commentsContainer.innerHTML = '';
  commentsContainer.append(...createComments(commentsData));
};

const renderModal = (properties) => {
  const {url, description, likes, comments} = properties;
  modal.querySelector('.big-picture__img img').src = url;
  modal.querySelector('.big-picture__img img').alt = description;
  modal.querySelector('.likes-count').textContent = likes;
  modal.querySelector('.social__caption').textContent = description;
  modal.querySelector('.social__comment-shown-count').textContent = comments.length;
  modal.querySelector('.social__comment-total-count').textContent = comments.length;

  counter.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  renderComments(comments);

  document.body.classList.add('modal-open');

  openModal();
};

export {renderModal};

const modal = document.querySelector('.img-upload__overlay');
const closeButton = modal.querySelector('.img-upload__cancel');

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
};

closeButton.addEventListener('click', () => closeModal());

export {openModal};

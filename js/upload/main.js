import {openModal} from './modal.js';
import {checkValidity, resetValidity} from './validation.js';

const form = document.querySelector('.img-upload__form');

form.addEventListener('change', (event) => {
  if (event.target.name === 'filename') {
    openModal();
  }
});

form.addEventListener('submit', (event) => {
  if (!checkValidity()) {
    event.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetValidity();
});

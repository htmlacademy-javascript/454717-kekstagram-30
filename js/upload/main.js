import {openModal} from './modal.js';
import {checkValidity, resetValidity} from './validation.js';
import {setScale} from './scale.js';
import {setEffect} from './effects.js';

const form = document.querySelector('.img-upload__form');
const image = document.querySelector('.img-upload__preview img');

setScale(image);

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      openModal();
      break;
    case 'effect':
      setEffect(event.target.value, image);
      break;
    case 'effect-level':
      break;
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

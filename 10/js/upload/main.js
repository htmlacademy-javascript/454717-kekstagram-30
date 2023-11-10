import {openModal} from './modal.js';
import {checkValidity, resetValidity} from './validation.js';
import {getScale, resetScale} from './scale.js';
import {setEffect, getEffectValue, resetEffect} from './effects.js';

const form = document.querySelector('.img-upload__form');
const preview = document.querySelector('.img-upload__preview img');

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      openModal();
      break;
    case 'scale':
      preview.style.transform = `scale(${getScale() / 100})`;
      break;
    case 'effect':
      setEffect(event.target.value);
      break;
    case 'effect-level':
      preview.style.filter = getEffectValue();
      break;
  }
});

form.addEventListener('submit', (event) => {
  if (!checkValidity()) {
    event.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetScale();
  resetEffect();
  resetValidity();
});

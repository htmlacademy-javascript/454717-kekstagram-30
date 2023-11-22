import {closeModal, openModal} from './modal.js';
import {checkValidity, resetValidity} from './validation.js';
import {getScale, resetScale} from './scale.js';
import {setEffect, getEffectValue, resetEffect} from './effects.js';

const form = document.querySelector('.img-upload__form');
const preview = document.querySelector('.img-upload__preview img');
const submitButton = document.querySelector('.img-upload__submit');

const setSubmitDisabled = (flag) => {
  submitButton.disabled = flag;
  submitButton.textContent = flag ? 'Публикую...' : 'Опубликовать';
};

const resetForm = () => {
  form.reset();
  closeModal();
};

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
  event.preventDefault();
  if (checkValidity()) {
    new FormData(form);
  }
});

form.addEventListener('reset', () => {
  resetScale();
  resetEffect();
  resetValidity();
});

export {setSubmitDisabled, resetForm};

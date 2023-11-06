import {openModal} from './modal.js';

const uploadInput = document.querySelector('.img-upload__input');

const onUploadInputChange = () => {
  openModal();
};

const uploadPhoto = () => {
  uploadInput.addEventListener('change', onUploadInputChange);
};



export {uploadPhoto};

import {renderModal} from './modal.js';

document.addEventListener('thumbnailSelect', (evt) => {
  renderModal(evt.detail);
});

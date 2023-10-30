import {renderModal} from './modal.js';

function initGallery() {
  document.addEventListener('thumbnailSelect', (evt) => {
    renderModal(evt.detail);
  });
}

export {initGallery};

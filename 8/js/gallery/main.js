import {renderThumbnails} from './thumbnails.js';
import {renderModal} from './modal.js';

function renderGallery(picturesData) {
  renderThumbnails(picturesData);
  document.addEventListener('thumbnailSelect', (event) => {
    renderModal(event.detail);
  });
}

export {renderGallery};

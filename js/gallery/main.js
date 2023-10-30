import {renderPopup} from './modal.js';

document.addEventListener('thumbnailSelect', (evt) => {
  renderPopup(evt.detail);
});

import {renderThumbnails} from './thumbnails.js';
import {renderModal} from './modal.js';
import {initFilters, filterData} from './filters.js';

function renderGallery(picturesData) {
  renderThumbnails(picturesData);
  initFilters();
  document.addEventListener('filterChange', (event) => {
    const filteredData = filterData(picturesData, event.detail);
    renderThumbnails(filteredData);
  });
  document.addEventListener('thumbnailSelect', (event) => {
    renderModal(event.detail);
  });
}

export {renderGallery};

import {renderThumbnails} from './thumbnails.js';
import {renderModal} from './modal.js';
import {initFilters, filterData} from './filters.js';
import {debounce} from '../utilities.js';

const renderGallery = (picturesData) => {
  renderThumbnails(picturesData);
  initFilters();
  document.addEventListener('filterChange', debounce((event) => {
    const filteredData = filterData(picturesData, event.detail);
    renderThumbnails(filteredData);
  }, 500));
  document.addEventListener('thumbnailSelect', (event) => {
    renderModal(event.detail);
  });
};

export {renderGallery};

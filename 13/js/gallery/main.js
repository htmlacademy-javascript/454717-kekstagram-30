import {renderThumbnails} from './thumbnails.js';
import {renderModal} from './modal.js';
import {renderFilters} from './filters.js';
import {applyRandomFilter, applyDiscussedFilter} from './data.js';

const renderGallery = (picturesData, reduceFrequency) => {
  renderThumbnails(picturesData);
  renderFilters();
  document.addEventListener('filterSelect', reduceFrequency((event) => {
    switch (event.detail) {
      case 'filter-default':
        renderThumbnails(picturesData);
        break;
      case 'filter-random':
        renderThumbnails(applyRandomFilter(picturesData));
        break;
      case 'filter-discussed':
        renderThumbnails(applyDiscussedFilter(picturesData));
    }
  }));

  document.addEventListener('thumbnailSelect', (event) => {
    renderModal(event.detail);
  });
};

export {renderGallery};

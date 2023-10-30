import {createPicturesData} from './data.js';
import {renderThumbnails} from './gallery/thumbnails.js';
import {initGallery} from './gallery/main.js';

renderThumbnails(createPicturesData());
initGallery();

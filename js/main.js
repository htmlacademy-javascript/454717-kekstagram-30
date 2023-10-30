import {createPicturesData} from './data.js';
import {renderThumbnails} from './gallery/thumbnails.js';
import './gallery/main.js';

renderThumbnails(createPicturesData());

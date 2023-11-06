import {createPicturesData} from './data.js';
import {renderGallery} from './gallery/main.js';
import {uploadPhoto} from './upload/main.js';

renderGallery(createPicturesData());
uploadPhoto();

import {renderGallery} from './gallery/main.js';
import './upload/main.js';
import {renderStatus} from './status.js';

document.addEventListener('formdata', (event) => {
  fetch('https://30.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: event.formData,
    },
  )
    .then((response) => {
      if(!response.ok){
        throw new Error();
      }
      renderStatus('success');
    })
    .catch(() => {
      renderStatus('error');
    });
});

fetch('https://30.javascript.pages.academy/kekstagram/data')
  .then ((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return(response.json());
  })
  .then ((data) => renderGallery(data))
  .catch(() => {
    renderStatus('data-error');
  });

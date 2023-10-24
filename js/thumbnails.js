const container = document.querySelector('.pictures');
const template = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderThumbnails = (createData) => {
  const thumbnails = createData();
  const fragment = document.createDocumentFragment();

  thumbnails.forEach(({url, description, likes, comments}) => {
    const thumbnail = template.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(thumbnail);
  });

  container.appendChild(fragment);
};

export {renderThumbnails};

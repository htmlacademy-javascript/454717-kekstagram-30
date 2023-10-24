const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const buildThumbnails = (createData) => {
  const pictures = createData();
  const fragment = document.createDocumentFragment();

  pictures.forEach(({url, description, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(picture);
  });

  picturesList.appendChild(fragment);
};

export {buildThumbnails};

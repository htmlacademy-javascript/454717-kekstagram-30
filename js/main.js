const getRandomInteger = (min, max) => {
  const fraction = Math.random() * (max - min + 1) + min;
  return Math.floor(fraction);
};

const getRandomItem = (items) =>{
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

const createPicturesData = (itemCount = 25) => {
  const descriptions = ['Описание 1', 'Описание 2', 'Описание 3'];
  return new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(descriptions),
    likes: getRandomInteger(15, 200),
    comments: [], //TODO: createCommentsData
  }));
};

const photos = createPicturesData();
console.table(photos);

const getRandomInteger = (min, max) => {
  const fraction = Math.random() * (max - min + 1) + min;
  return Math.floor(fraction);
};

const getRandomItem = (items) => {
  const lastIndex = items.length - 1;
  const index = getRandomInteger(0, lastIndex);
  return items[index];
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandomItem, isEscapeKey};

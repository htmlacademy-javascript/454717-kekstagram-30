const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createUniqueRandomNumber = (min, max) => {
  const previousValue = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValue.length >= (max - min + 1)) {
      return null;
    }
    while (previousValue.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValue.push(currentValue);
    return currentValue;
  };
};

const generatePhotoId = createUniqueRandomNumber(1, 25);
const generateUrlNumber = createUniqueRandomNumber(1, 25);
const url = 'photos/' + generateUrlNumber() + '.jpg';

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url:  url,
  likes: getRandomInteger(15, 200),
});

console.log(createPhotoDescription());

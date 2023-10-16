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

const createRepeatingRandomNumber = (min, max) => {
  let lastGeneratedNumber = 0;

  return function () {
    lastGeneratedNumber = getRandomInteger(min, max);
    return lastGeneratedNumber;
  };
};

const generatePhotoId = createUniqueRandomNumber(1, 25);
const generateUrlNumber = createUniqueRandomNumber(1, 25);
const url = `photos/${generateUrlNumber()}.jpg`;
const generateLikesNumber = createRepeatingRandomNumber(1, 25);

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url:  url,
  likes: generateLikesNumber(),
});

const photos = Array.from({length: 25}, createPhotoDescription);
console.table(photos);

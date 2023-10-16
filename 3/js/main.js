const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];

const createCommentsData = (length) => {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  const names = ['Сергей', 'Ольга', 'Анна', 'Владимир', 'Николай', 'Артём', 'Виктор', 'Наталья', 'Надежда'];
  return new Array (length).fill(1).map((start, index) => ({
    id: start + index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomItem(messages),
    name: getRandomItem(names),
  }));
};

const createPicturesData = (itemCount = 25) => {
  const descriptions = ['Описание 1', 'Описание 2', 'Описание 3'];
  return new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(descriptions),
    likes: getRandomInteger(15, 200),
    comments: createCommentsData(getRandomInteger(0, 30)),
  }));
};

const photos = createPicturesData();
console.table(photos);
console.table(photos[3].comments);

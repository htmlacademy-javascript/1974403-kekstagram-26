const randomInteger = (min, max) => {
  if (min >= 0 && min < max) {
    return Math.round(min + Math.random() * (max - min) + min);
  }
  if (min < 0 || max < 0) {
    return "Переданные числа не соответствуют условиям";
  }
  if (min >= max) {
    return min;
  }
};

randomInteger(0, 3);

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength("Переданные числа не соответствуют условиям", 50);

const ID = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const PHOTOS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const LIKE = [];

const COMMENT = [];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createObject = () => {
  return {
    id: getRandomArrayElement(ID),
    avatar: getRandomArrayElement(PHOTOS),
    likes: getRandomArrayElement(LIKE),
    comments: getRandomArrayElement(COMMENT),
  };
};

const similarObject = Array.from({ length: 25 }, createObject);

console.log(similarObject);

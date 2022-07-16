const getRandomPositiveInteger = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const isArrayUnique = (elements) => {
  const results = [];
  elements.forEach((element) => {
    if (!results.includes(element)) {
      results.push(element);
    }
  });
  return results.length === elements.length;
};

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const shuffle = (array) => {
  const shuffleArray = array.slice();
  let currentIndex = shuffleArray.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [shuffleArray[currentIndex], shuffleArray[randomIndex]] = [shuffleArray[randomIndex], shuffleArray[currentIndex]];
  }

  return shuffleArray;
};

export {getRandomArrayElement, getRandomPositiveInteger, isEscapeKey, isArrayUnique, debounce, shuffle};

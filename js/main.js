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

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
}

randomInteger(0, 10);

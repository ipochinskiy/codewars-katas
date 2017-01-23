const composeHouse = (left, middle, right) => (n) =>
  left + middle.repeat(2 * n) + right;

const composeBase = composeHouse('|', '_', '|');
const composeFloor = composeHouse('|', ' ', '|');
const composeCeiling = composeHouse('/', '_', '\\');

const composeRoof = (n, index) => {
  const diff = index - n;
  const padOut = ' '.repeat(diff);
  const padIn = ' '.repeat((n - diff) * 2);
  return padOut + '/' + padIn + '\\' + padOut;
};

const myCrib = (n) => Array(2 * n + 1).fill(null).map((_, index) => {
  if (index === 0) {
    return composeBase(n);
  } else if (index < n) {
    return composeFloor(n);
  } else if (index === n) {
    return composeCeiling(n);
  }
  return composeRoof(n, index);
}).reverse().join('\n');

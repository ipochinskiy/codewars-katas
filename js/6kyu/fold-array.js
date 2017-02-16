const fold = (array = []) => {
  if (array.length === 1) {
    return array.slice();
  }

  const odd = array.length % 2 === 0;
  const center = Math.floor(array.length / 2) + (odd ? 0 : 1);

  const left = array.slice(0, center);
  const right = array.slice(center).reverse();
  if (!odd) { right.push(0); }

  return left.map((entry, index) => entry + right[index]);
};

const foldArray = (array = [], runs = 0) => {
  if (array.length === 0) {
    return [];
  }
  if (runs === 0) {
    return array.slice();
  }

  return Array(runs).fill()
    .reduce((m) => fold(m), array);
};

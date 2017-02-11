const NAME = 'BINGO';
const COLUMNS = [
  { min: 1, max: 16 },
  { min: 16, max: 31 },
  { min: 31, max: 46 },
  { min: 46, max: 61 },
  { min: 61, max: 76 },
];

const isSpecial = (row, column) => (row === 2) && (column === 2);

const makeRandomGenerator = ({ min, max }) => () => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};


const initUniqueGenerator = () => {
  const numbers = [];
  return function getUniqueInt(generate) {
    const n = generate();
    if (numbers.includes(n)) {
      return getUniqueInt(generate);
    }
    numbers.push(n);
    return n;
  };
};

const getCard = () => {
  const getUniqueInt = initUniqueGenerator();

  return Array(COLUMNS.length).fill()
    .map((_, column) => {
      const getRandomWithinRange = makeRandomGenerator(COLUMNS[column]);

      return Array(COLUMNS.length).fill()
        .map((_, row) => {
          if (isSpecial(row, column)) {
            return null;
          }
          return getUniqueInt(getRandomWithinRange);
        })
        .filter((number) => !!number)
        .map((number) => NAME[column] + number);
    }).reduce((m, c) => m.concat(c), []);
};

const NAME = 'BINGO';
const COLUMNS = [
  { min: 1, max: 16 },
  { min: 16, max: 31 },
  { min: 31, max: 46 },
  { min: 46, max: 61 },
  { min: 61, max: 76 },
];

const isSpecial = (column) => column === 2;

const makeGenerator = ({ min, max }) =>
  () => Math.floor(Math.random() * (max - min)) + min;

const getUniqueInt = (excludes, generator) => {
  const n = generator();
  return excludes.includes(n) ?
    getUniqueInt(excludes, generator) :
    n;
};

const generateColumn = (generator, amount) => {
  const excludes = [];
  return Array(amount).fill().map(() => {
    const n = getUniqueInt(excludes, generator);
    excludes.push(n);
    return n;
  });
};

const getCard = () => Array(COLUMNS.length).fill()
  .map((_, column) => generateColumn(
    makeGenerator(COLUMNS[column]),
    isSpecial(column) ? 4 : 5
  ).map((number) => NAME[column] + number))
  .reduce((m, c) => m.concat(c), []);

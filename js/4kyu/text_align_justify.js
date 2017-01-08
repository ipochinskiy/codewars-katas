const getLineLength = (...words) => words.join('').length + words.length - 1;

const distribute = (words, maxLength) => {
  const lines = [];

  for (let i = 0; i < words.length; ) {
    let line = [ words[i++] ];

    while(i < words.length && getLineLength(...line, words[i]) <= maxLength) {
      line.push(words[i++]);
    }
    lines.push(line);
  }
  return lines;
};

const calculateSpacesCount = (words, maxLength) => {
  const allSpaces = maxLength - words.join('').length;
  const wordsCount = words.length - 1;

  const perWord = Math.floor(allSpaces / wordsCount);
  const rest = allSpaces - perWord * wordsCount;
  return { perWord, rest };
};

const getSpaces = (n) => Array.from(Array(n)).map((el) => ' ').join('');

const last = (items = []) => items[items.length - 1];

const sliceAndMap = (array = [], mapper, ...rest) => array
  .slice(0, array.length - 1)
  .map(mapper)
  .concat(rest);

const makeWordExtender = ({ perWord, rest }) => (word, i) => {
  let spacesCount = perWord + (i < rest ? 1 : 0);
  return word + getSpaces(spacesCount);
};

const makeExtendLine = (maxLength) => (words) => {
  if (words.length === 1) {
    return words;
  }

  const spaces = calculateSpacesCount(words, maxLength);
  return sliceAndMap(words, makeWordExtender(spaces), last(words)).join('');
};

const justify = (str = '', maxLength = 0) => {
  const lines = distribute(str.split(' '), maxLength);
  const tail = last(lines).join(' ');
  return sliceAndMap(lines, makeExtendLine(maxLength), tail).join('\n');
};

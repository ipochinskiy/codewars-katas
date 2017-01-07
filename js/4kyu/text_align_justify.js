const getLineLength = (...words) => words.join('').length + words.length - 1;

const calculateSpacesCount = (wordsLength, wordsCount, lineLength) => {
  const allSpaces = lineLength - wordsLength;
  const perWord = Math.floor(allSpaces / wordsCount);
  const rest = allSpaces - perWord * wordsCount;
  return { perWord, rest };
};

const getSpaces = (n) => Array.from(Array(n)).map((el) => ' ').join('')

const last = (items = []) => items[items.length - 1];

const foo = (array = [], ...rest) => array.slice(0, array.length - 1).concat(rest);

const justifyLine = (words = [], lineLength) => {
  if (words.length === 1) {
    return words;
  }

  const wordsWithSpaces = words.length - 1;
  const spaces = calculateSpacesCount(words.join('').length, wordsWithSpaces, lineLength);

  return foo(words).map((word, i) => {
      let spacesCount = spaces.perWord + (i < spaces.rest ? 1 : 0);
      return word + getSpaces(spacesCount);
    }).concat(last(words));
};

const justify = (str = '', len = 0) => {
  if (len === 0) {
    return '';
  }

  const words = str.trim().split(' ');
  if (words.length === 1) {
    return words[0];
  }

  let result = [[]];

  words.forEach((word, index) => {
    const line = last(result);

    if (!line || (getLineLength(...line, word) <= len)) {
      return line.push(word);
    }

    result = foo(result, justifyLine(line, len).join(''), [ word ]);
  });

  result = foo(result, last(result).join(' '));

  return result.join('\n');
};

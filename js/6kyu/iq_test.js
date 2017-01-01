const getDeviationIndex = (chunks, check) => {
  for (let i = 1; i < chunks.length - 1; i++) {
    const previous = chunks[i - 1];
    const current = chunks[i];
    const next = chunks[i + 1];

    if (check(current) !== check(previous)) {
      return check(current) === check(next) ? i - 1 : i;
    }
  }

  return chunks.length - 1;
};

const isEven = (arg) => (Number(arg) % 2) === 0;

const iqTest = (numbers) => {
  const chunks = numbers.split(' ');
  const index = getDeviationIndex(chunks, isEven);
  return index + 1;
};

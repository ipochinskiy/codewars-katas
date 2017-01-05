const sum = (numbers) => numbers.reduce((memo, current) => memo + current, 0);

const mean = (numbers, length = null) => sum(numbers) / ( length || numbers.length);

const variance = (numbers) => {
  const m = mean(numbers);
  const subs = numbers.map((el) => Math.pow(el - m, 2));
  return mean(subs, numbers.length);
};

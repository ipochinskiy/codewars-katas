const sum = (numbers) => numbers.reduce((memo, current) => memo + current, 0);

const mean = (numbers, length) => sum(numbers) / length;

const variance = (numbers) => {
  const m = mean(numbers, numbers.length);
  const subs = numbers.map((el) => Math.pow(el - m, 2));
  return mean(subs, numbers.length);
};

const sum = (args = []) => args.slice(-3).reduce((m, c) => m + c, 0);

const tribonacci = (signature = [], n = 0) => {
  if (signature.length === 0 || n === 0) {
    return [];
  }

  if (signature.length >= n) {
    return signature.slice(0, n);
  }

  return tribonacci([ ...signature, sum(signature) ], n).slice(0, n);
};

const updateInventory = (curStock = [], newStock = []) => {
  const accum = curStock
    .concat(newStock)
    .reduce((memo, [ amount, name ]) => {
      if (!memo[name]) {
        memo[name] = 0;
      }
      memo[name] += amount;
      return memo;
    }, {});

  return Object.keys(accum)
    .sort()
    .map(name => [ accum[name], name ]);
};

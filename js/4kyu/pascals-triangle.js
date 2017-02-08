const fillArray = (l = 0, v = null) => Array(l).fill(v);

const pascalsTriangle = (n) => {
  return fillArray(n - 1, null).reduce((memo, current) => {
    const lastLevel = memo[memo.length - 1];
    const newLevel = fillArray(memo.length + 1, 1)
      .map((el, index) => {
        return (index > 0 && index < memo.length) ?
          lastLevel[index - 1] + lastLevel[index] :
          el;
      });
    return [ ...memo, newLevel ];
  }, [ [ 1 ] ]);
};

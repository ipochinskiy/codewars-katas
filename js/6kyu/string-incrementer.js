const incrementString = (strng = '') => {
  const m = strng.match(/^(\w*?)(\d*)$/);
  const next = String(Number('0' + m[2], 10) + 1);
  return m[1] + m[2].slice(0, -next.length) + next;
};

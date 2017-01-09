const makeFilter = (expected) => (actual) => {
  for (let key in expected) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};

const countDevelopers = (list) => list.filter(makeFilter({
  continent: 'Europe',
  language: 'JavaScript',
})).length;

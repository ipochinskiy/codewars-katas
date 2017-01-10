const isLanguageDiverse = (list) => {
  const langs = {};
  list.forEach((dev) => {
    if (langs[dev.language] === undefined) {
      langs[dev.language] = 0;
    }
    langs[dev.language]++;
  });
  
  const values = Object.keys(langs).map((k) => langs[k]);
  return Math.max(...values) / Math.min(...values) <= 2;
};

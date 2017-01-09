const countLanguages = (list) => {
  const langs = {};
  list.forEach((dev) => {
    const lang = dev.language;
    if (langs[lang] === undefined) {
      langs[lang] = 0;
    }
    langs[lang]++;
  });
  return langs;
};

const findSenior = (list) => {
  const maxAge = list.reduce((m, c) => Math.max(m, c.age), 0);
  return list.filter((dev) => dev.age >= maxAge);
};

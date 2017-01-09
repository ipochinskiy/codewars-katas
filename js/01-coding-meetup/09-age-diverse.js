const getAgeGroups = () => [...Array(10).keys()].slice(1);

const calculateAgeGroup = (age) => Math.floor(age / 10);

const isAgeDiverse = (list) => {
  return getAgeGroups().every((age) => {
    return list.some((dev) => calculateAgeGroup(dev.age) === age);
  }) && list.some((dev) => dev.age >= 100);
};

const composeUsername = (dev) => {
  const date = new Date();
  const year = date.getFullYear() - dev.age;
  const username =  dev.firstName + dev.lastName.charAt(0) + year;
  return username.toLowerCase();
};

const addUsername = (list) => list.map((dev) => {
  const username = composeUsername(dev);
  return Object.assign({}, dev, { username });
});

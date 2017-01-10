const orderFood = (list) => {
  const meals = {};
  list.forEach((dev) => {
    if (meals[dev.meal] === undefined) {
      meals[dev.meal] = 0;
    }
    meals[dev.meal]++;
  });
  
  return meals;
};

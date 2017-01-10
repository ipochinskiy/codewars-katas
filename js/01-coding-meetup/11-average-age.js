const getAverageAge = (list) => Math.round(list.reduce((m, c) => m + c.age, 0) / list.length);

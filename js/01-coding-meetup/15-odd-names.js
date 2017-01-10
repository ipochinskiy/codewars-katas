const getCharSum = (text) => text.split('').reduce((m, c) => m + c.charCodeAt(0), 0);

const findOddNames = (list) => list.filter((dev) => getCharSum(dev.firstName) % 2 === 1);

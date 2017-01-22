const getNullProperty = (obj) => {
  const keys = Object.keys(obj);
  return keys.find((key) => obj[key] === null);
};

const composeQuestion = (dev) => {
  const prop = getNullProperty(dev);
  const question = `Hi, could you please provide your ${prop}.`;
  return prop ? Object.assign({}, dev, { question }) : dev;
};

const askForMissingDetails = (list) => list
  .map(composeQuestion)
  .filter((dev) => !!dev.question);

const greetDevelopers = (list) => list
  .map((el) => Object.assign({}, el, {
    greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`,
  }));

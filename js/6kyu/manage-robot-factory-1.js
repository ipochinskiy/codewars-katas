const ROBOT_WEIGHT = 50;

const calculateScrap = (scraps = [], numberOfRobots = 0) => {
  if (scraps.length === 0 || numberOfRobots === 0) {
    return 0;
  }

  const totalWeight = numberOfRobots * ROBOT_WEIGHT;
  const totalScrapPercentage = scraps.reduce((m, c) => m * (1 - c / 100), 1);
  return Math.ceil(totalWeight / totalScrapPercentage);
};

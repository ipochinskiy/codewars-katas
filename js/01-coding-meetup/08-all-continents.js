const allContinents = (list) => list.reduce((m, c) => m.add(c.continent), new Set()).size === 5;

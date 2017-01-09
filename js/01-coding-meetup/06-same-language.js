const isSameLanguage = (list) => list.reduce((m, c) => m.add(c.language), new Set()).size === 1;

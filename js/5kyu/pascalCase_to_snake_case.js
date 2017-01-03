const toUnderscore = (string) => String(string).split(/(?=[A-Z])/).join('_').toLowerCase();

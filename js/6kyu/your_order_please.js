const delimeter = ' ';
const regex = /\d/;

const compare = (a, b) => a.match(regex) - b.match(regex);

const order = (words) => words
	.split(delimeter)
	.sort(compare)
	.join(delimeter)
	.trim();

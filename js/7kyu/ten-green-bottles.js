const chunk = `{{bottlesHanging}} green {{pluralHanging}} hanging on the wall,
{{bottlesHanging}} green {{pluralHanging}} hanging on the wall,
{{andIf}} one green bottle should accidentally fall,
There'll be {{bottlesAfterFall}} green {{pluralAfterFall}} hanging on the wall.
`;

const numberStrings = {
  0: 'no',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
};

const pluralify = (noun, amount) => noun + (amount !== 1 ? 's' : '');

const upperify = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const tenGreenBottles = (n) => Array(n).fill().map((_, index) => {
  const before = upperify(numberStrings[index + 1], index);
  const beforePlural = pluralify('bottle', index + 1);
  const afterPlural = pluralify('bottle', index);
  return chunk
    .replace(/\{\{bottlesHanging\}\}/g, before)
    .replace(/\{\{pluralHanging\}\}/g, beforePlural)
    .replace(/\{\{andIf\}\}/g, index > 0 ? 'And if' : 'If that')
    .replace(/\{\{bottlesAfterFall\}\}/g, numberStrings[index])
    .replace(/\{\{pluralAfterFall\}\}/g, afterPlural);
}).reverse().join('\n');

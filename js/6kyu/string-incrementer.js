const ENDS_WITH_DIGITS_REGEX = /\d*$/;

const incrementString = (textWithDigits = '') => {

  const text = textWithDigits.split(ENDS_WITH_DIGITS_REGEX)[0] || '';
  const oldDigits = textWithDigits.match(ENDS_WITH_DIGITS_REGEX)[0] || '';
  const newDigits = String(Number(oldDigits) + 1);

  const zerosCount = oldDigits.length - newDigits.length;
  let zeros = zerosCount > 0 ?
    Array(zerosCount).fill('0').join('') :
    '';

  return text + zeros + newDigits;
};

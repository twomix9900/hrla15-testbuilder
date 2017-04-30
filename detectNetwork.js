var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var numberStrings = cardNumber.split('');
  var doublePrefix = Number(numberStrings.slice(0, 2).join(''));
  var triPrefix = Number(numberStrings.slice(0, 3).join(''));
  var quadPrefix = Number(numberStrings.slice(0, 4).join(''));

  if ((doublePrefix === 38 || doublePrefix === 39) && cardNumber.length === 14) {
    return 'Diner\'s Club';
  }
  if ((doublePrefix === 34 || doublePrefix === 37) && cardNumber.length === 15) {
    return 'American Express';
  }
  if (cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  }
  if ((doublePrefix > 50 && doublePrefix < 56) && cardNumber.length === 16) {
    return 'MasterCard';
  }
  if ((quadPrefix === 6011 || (triPrefix > 643 && triPrefix < 650) || doublePrefix === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }
  if ((quadPrefix === 5018 || quadPrefix === 5020 || quadPrefix === 5038 || quadPrefix === 6304) && (cardNumber.length > 11 && cardNumber.length < 20)) {
    return 'Maestro'
  }
};


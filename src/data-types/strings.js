
// Find

function getCharacterAtPosition (string, position) {
  return string.charAt(position);
}

function endsWith (string, stringToFind) {
  return string.endsWith(stringToFind);
}

// Manipulation

function combineStrings (string1, string2, separator) {
  return string1.concat(separator, string2);
}

function padStartOfString (string, postFix, mask) {
  const lastXDigits = string.slice(-postFix);
  return lastXDigits.padStart(string.length, mask);
}

function leftFillNumber (number, targetLength, paddingDigit) {
  return number.toString().padStart(targetLength, paddingDigit);
}

// Regex

function getContainedWords(regStart, regEnd) {
  let testString = '{{StoreName}} - Job Card Collection {{JbcdNo}}';

  let resultOpening = null;
  let openingIndices = [];

  let resultClosing = null;
  let closingIndices = [];

  while ((resultOpening = regStart.exec(testString))) {
      openingIndices.push(resultOpening.index);
  }

  while ((resultClosing = regEnd.exec(testString))) {
      closingIndices.push(resultClosing.index);
  }

  let words = [];
  for (let i in openingIndices) {
      words.push(testString.substr(openingIndices[i] + 2, closingIndices[i] - openingIndices[i] - 2));
  }
  return words;
}

const testForNullOrEmpty = () => {
  let testString = '';
  console.log(testString ? testString : 'Empty');
}

function driver() {
  testForNullOrEmpty();
}

module.exports.getCharacterAtPosition = getCharacterAtPosition;

module.exports.combineStrings = combineStrings;
module.exports.padStartOfString = padStartOfString;
module.exports.leftFillNumber = leftFillNumber;

module.exports.getContainedWords = getContainedWords;

module.exports.driver = driver;
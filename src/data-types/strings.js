
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

module.exports.getCharacterAtPosition = getCharacterAtPosition;

module.exports.combineStrings = combineStrings;
module.exports.padStartOfString = padStartOfString;
module.exports.leftFillNumber = leftFillNumber;

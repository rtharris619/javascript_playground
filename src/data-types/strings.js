
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

module.exports.getCharacterAtPosition = getCharacterAtPosition;

module.exports.combineStrings = combineStrings;

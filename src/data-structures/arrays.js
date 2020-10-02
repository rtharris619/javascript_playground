
function loopOverArray (array) {
  array.forEach(function(item, index) {
    console.log(item, index);
  });
}

function getArrayEntries (array) {
  let iterator = array.entries();
  for (let e of iterator) {
    console.log(e);
  }
}

function insertIntoArray (array, insertIndex, itemToInsert) {
  array.splice(insertIndex, 0, itemToInsert);
  return array;
}

function insertAtBeginning (array, itemToInsert) {
  array.unshift(itemToInsert);
  return array;
}

function removeFromBeginning (array) {
  array.shift();
  return array;
}

function combineArrays (array1, array2) {
  return array1.concat(array2);
}

function isAllElementsLessThan (array, lessThanValue) {
  const isBelowThreshold = (currentValue) => currentValue < lessThanValue;
  return array.every(isBelowThreshold);
}

function arrayFromString (string) {
  return Array.from(string);
}

function arrayFromSet (set) {
  // Example: set = new Set(['foo', 'bar', 'baz', 'foo']);
  return Array.from(set);
}

function arrayFromMap (map) {
  // Example: map = new Map([['1', 'a'], ['2', 'b']]);
  return Array.from(map);
}

function arrayValuesFromMap (map) {
  return Array.from(map.values());
}

function arrayKeysFromMap (map) {
  return Array.from(map.keys());
}

function generateSequence (length) {
  return Array.from({length: length}, (_, i) => i);
}

function generateRange (start, stop, step) {
  return Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}

function generateAlphabet () {
  return generateRange('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
}

module.exports.loopOverArray = loopOverArray;
module.exports.getArrayEntries = getArrayEntries;
module.exports.insertIntoArray = insertIntoArray;
module.exports.insertAtBeginning = insertAtBeginning;
module.exports.removeFromBeginning = removeFromBeginning;

module.exports.generateSequence = generateSequence;
module.exports.generateRange = generateRange;
module.exports.generateAlphabet = generateAlphabet;
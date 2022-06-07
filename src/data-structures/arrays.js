
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

function returnSliceOfArray (array, fromIndex, toIndex) {
  return array.slice(fromIndex, toIndex);
}

function stringifyArray() {
  let columns = ['ID', 'IsActive', 'TenantID'];
  return columns.join(",");
}

// Filters

function filterWordLengthGreaterThan (array, wordLength) {
  return array.filter(word => word.length > wordLength);
}

// Find

function findItemGreaterThan (array, value) {
  return array.find(element => element > value);
}

function findItemIndexGreaterThan (array, value) {
  return array.findIndex(element => element > value);
}

function isAllElementsLessThan (array, lessThanValue) {
  const isBelowThreshold = (currentValue) => currentValue < lessThanValue;
  return array.every(isBelowThreshold);
}

function isInArray (array, itemToFind) {
  return array.includes(itemToFind);
}

function indexOfItemInArray (array, itemToFind) {
  return array.indexOf(itemToFind);
}

function lastIndexOfItemInArray (array, itemToFind) {
  return array.lastIndexOf(itemToFind);
}

// Sorting

function sortNumbers (array) {
  return array.sort((a, b) => a - b);
}

function sortObjectArray (array, property) {
  return array.sort((a, b) => {
    let aValue = a[property].toLowerCase();
    let bValue = b[property].toLowerCase();
    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    } else {
      return 0;
    }
  });
}

// Fill Array Methods

function fillArray (array, fillValue, fromIndex, toPosition) {  
  return array.fill(fillValue, fromIndex, toPosition);
}

function fillArrayFromIndex (array, fillValue, fromIndex) {
  return array.fill(fillValue, fromIndex);
}

function fillArrayCompletely (array, fillValue) {
  return array.fill(fillValue);
}

// Maps

function testFlatMap (array) {
  // Let's say we want to remove all the negative numbers
  // and split the odd numbers into an even number and a 1
  // array = [5, 4, -3, 20, 17, -33, -4, 18]
  return array.flatMap((n) => (n < 0) ? [] : (n % 2 == 0) ? [n] : [n-1, 1]);
  // expected output: [4, 1, 4, 20, 16, 1, 18]
}

function removeAllNegatives (array) {
  return array.map(x => x > 0);
}

function multiplyEachItem (array, value) {
  return array.map(x => x * value);
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

// Reducer

function calculateSumOfArray (array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer, 0);
}

function calculateSumOfObjectArray (array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue.x, 0);
}

function calculateMaxOfCoordinateArray (array) {
  const reducer = (maximum, currentValue) => Math.max(maximum, currentValue);
  return array.map(element => element.x).reduce(reducer, -Infinity);
}

function flattenArrayOfArrays (array) {
  return array.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
}

function countObjectInstances (array) {
  return array.reduce(function (accumulator, currentValue) {
    if (currentValue in accumulator) {
      accumulator[currentValue]++;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});
}

function groupObjectArrayBy (objectArray, property) {
  return objectArray.reduce(function (accumulator, currentValue) {
    let key = currentValue[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
  }, {});
}

function getMaximumFromObjectArray (objectArray, property) {
  const reducer = (maximum, currentValue) => Math.max(maximum, currentValue);
  return objectArray.map(function (currentValue) {
    return currentValue[property];
  }).reduce(reducer, -Infinity);
}

function testBondFromObjectArray () {
  let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];
  console.log(bondFromObjectArray(friends));
}

function bondFromObjectArray (objectArray) {
  return objectArray.reduce(function (accumulator, currentValue) {
    return [...accumulator, ...currentValue.books];
  }, []);
}

function removeDuplicateItems (array) {
  return array.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) == -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}

function testCombineFilterAndMap () {
  const numbers = [-5, 6, 2, 0,];
  console.log(combineFilterAndMap(numbers));
}

function combineFilterAndMap (array) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
      const doubled = currentValue * 2;
      accumulator.push(doubled);
    }
    return accumulator;
  }, []);
}

function charArrayFromString (string) {
  return Array.from(string);
}

function arrayFromSet (set) {
  // Example: set = new Set(['foo', 'bar', 'baz', 'foo']);
  return Array.from(set);
}

function arrayToString (array) {
  return array.join('');
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

function generateWordsFromSentences (array) {
  // Example: array = ["it's Sunny in", "", "California"];
  return array.flatMap(x => x.split(" "));
  // Returns: ["it's","Sunny","in", "", "California"]
}

module.exports.loopOverArray = loopOverArray;
module.exports.getArrayEntries = getArrayEntries;
module.exports.insertIntoArray = insertIntoArray;
module.exports.insertAtBeginning = insertAtBeginning;
module.exports.removeFromBeginning = removeFromBeginning;
module.exports.fillArray = fillArray;
module.exports.returnSliceOfArray = returnSliceOfArray;
module.exports.stringifyArray = stringifyArray;

module.exports.arrayToString = arrayToString;
module.exports.charArrayFromString = charArrayFromString;
module.exports.calculateSumOfArray = calculateSumOfArray;
module.exports.calculateSumOfObjectArray = calculateSumOfObjectArray;
module.exports.calculateMaxOfCoordinateArray = calculateMaxOfCoordinateArray;
module.exports.flattenArrayOfArrays = flattenArrayOfArrays;
module.exports.countObjectInstances = countObjectInstances;
module.exports.groupObjectArrayBy = groupObjectArrayBy;
module.exports.getMaximumFromObjectArray = getMaximumFromObjectArray;
module.exports.testBondFromObjectArray = testBondFromObjectArray;
module.exports.removeDuplicateItems = removeDuplicateItems;

module.exports.sortNumbers = sortNumbers;
module.exports.sortObjectArray = sortObjectArray;

module.exports.generateSequence = generateSequence;
module.exports.generateRange = generateRange;
module.exports.generateAlphabet = generateAlphabet;
module.exports.generateWordsFromSentences = generateWordsFromSentences;
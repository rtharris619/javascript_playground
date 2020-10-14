

var Arrays = require('./data-structures/arrays');
var Strings = require('./data-types/strings');

//let fruits = ['Apple', 'Banana'];
//Arrays.loopOverArray(fruits);

// let languages = ['C#', 'Java', 'JavaScript', 'Python'];
// languages = Arrays.insertIntoArray(languages, 1, 'Rust');
//console.log(languages);

//languages = Arrays.insertAtBeginning(languages, 'Clojure');
//console.log(languages);

//languages = Arrays.removeFromBeginning(languages);
//console.log(languages);

//console.log(Arrays.generateSequence(10));

//console.log(Arrays.generateRange(1, 10, 2));

//console.log(Arrays.generateAlphabet());

//Arrays.getArrayEntries(Arrays.generateAlphabet());

//const array1 = [1, 2, 3, 4, 5];
//console.log(Arrays.fillArray(array1, 0, 2, 4));

//let string = 'hello world';
//console.log(Arrays.charArrayFromString(string));

// var array3 = ["I'm telling on you. ", "Only joking.", " I'd never do that."];
// console.log(Arrays.generateWordsFromSentences(array3));

// var array4 = ['Fire', 'Air', 'Water'];
// console.log(Arrays.arrayToString(array4));

// var array5 = [1,2,3,4];
// console.log(Arrays.calculateSumOfArray(array5));

// var array6 = [{x: 22}, {x: 42}];
// console.log(Arrays.calculateMaxOfCoordinateArray(array6));

// var array7 = [{x: 1, y: 0}, {x: 2, y: 2}, {x: 3, y: 4}];
// console.log(Arrays.calculateSumOfObjectArray(array7));

// var array8 = [[0, 1], [2, 3], [4, 5]];
// console.log(Arrays.flattenArrayOfArrays(array8));

// var array9 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// console.log(Arrays.countObjectInstances(array9));

// let people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 }
// ];

// console.log(Arrays.groupObjectArrayBy(people, 'age'));

//Arrays.testBondFromObjectArray();

// var array10 = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// console.log(Arrays.removeDuplicateItems(array10));

// var numbers = [4, 2, 5, 1, 3];
// console.log(Arrays.sortNumbers(numbers));

// var array11 = [{Number: 1, Condition: 'text1'}, {Number: 3, Condition: 'text3'}, {Number: 2, Condition: 'text2'}];
// console.log(Arrays.getMaximumFromObjectArray(array11, 'Number'));

// var string1 = 'cat';
// console.log(Strings.getCharacterAtPosition(string1, 1));

// var stringArray = ['Hello', 'World'];
// console.log(Strings.combineStrings(stringArray[0], stringArray[1], ' '));

//var BinarySearch = require('./algorithms/searching/binary-search');
//BinarySearch.testCase3();

//var QuickSort = require('./algorithms/sorting/quick-sort');
//QuickSort.testCase2();

// let people = [{Name: 'Ryan', age: 37}, {Name: 'Claudene', age: 37}];
// console.log(Arrays.sortObjectArray(people, 'Name'));

// const array12 = [1, 2, 3, 4, 5];
// console.log(Arrays.returnSliceOfArray(array12, 0, 2));

// CODEINGAME

var Codingame = require('./codingame/codingame-easy');
Codingame.solveTemperaturesPuzzle();
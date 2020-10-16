
/* Jaden case Puzzle
--------------------------------------------------------------------------------------------------------------------------- */
function solveJadenPuzzle() {
  String.prototype.toJadenCase = function () {
    
    let words = this.split(/\s/);
    let updatedWords = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let updatedWord = word[0].toUpperCase() + word.slice(1, word.length);
      updatedWords.push(updatedWord);
    }

    return updatedWords.join(' ');
  }
  console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
}

function solveJadenPuzzleAlt () {
  String.prototype.toJadenCase = function () {
    return this.split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  }
}

/* Larger product or sum Puzzle
--------------------------------------------------------------------------------------------------------------------------- */
function solveLargerProductOrSumPuzzle() {
  let array = [10, 20, 3, 30, 5, 4];
  let n = 3;
  
  let sortedArray = array.sort((a, b) => a - b);
  let largestNumbers = sortedArray.slice(-n);
  let smallestNumbers = sortedArray.slice(0, n);
  
  let sum = largestNumbers.reduce((accumulator, currentValue) => currentValue + accumulator);
  let product = smallestNumbers.reduce((accumulator, currentValue) => accumulator * currentValue);

  let result = '';

  if (sum > product) {
    result = 'sum';
  } else if (sum < product) {
    result = 'product';
  } else {
    result = 'same';
  }
  console.log(result);
}

/* Shortest word Puzzle
--------------------------------------------------------------------------------------------------------------------------- */

function solveShortestWordPuzzle () {
  let s = 'bitcoin take over the world maybe who knows perhaps';
  let words = s.split(' ');
  let lengths = words.map(x => x.length);
  console.log(Math.min(...lengths));
}

function solveShortestWordPuzzleAlt () {
  let s = 'bitcoin take over the world maybe who knows perhaps';
  let result = Math.min(...s.split(/\s/).map((w) => w.length));
  console.log(result);
}

/* Sum of Odds Puzzle
--------------------------------------------------------------------------------------------------------------------------- */

function solveSumOfOddsPuzzle () {
  let n = 42;
  console.log(Math.pow(n, 3));
}

// Summation Puzzle
// ---------------------------------------------------------------------------------------------------------------------------

function solveSummationPuzzleMine () {

  let num = 8;
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  console.log(sum);
}

function summationPuzzle (num) {
  return num ? num + summationPuzzle(num - 1) : 0;
}

function solveSummationPuzzle () {
  let num = 8;
  console.log(summationPuzzle(num));
}

module.exports.solveJadenPuzzle = solveJadenPuzzle;
module.exports.solveLargerProductOrSumPuzzle = solveLargerProductOrSumPuzzle;
module.exports.solveShortestWordPuzzle = solveShortestWordPuzzle;
module.exports.solveSumOfOddsPuzzle = solveSumOfOddsPuzzle;
module.exports.solveSummationPuzzle = solveSummationPuzzle;

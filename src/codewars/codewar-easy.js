
/* Equal sides array Problem
--------------------------------------------------------------------------------------------------------------------------- */
function solveEqualSidesArrayProblem() {
  let arr = [20,10,-80,10,10,15,35];

  let result = -1;
  for (let i = 0; i < arr.length - 1; i++) {    

    let leftSum = (i == 0 ? arr[i] : arr.slice(0, i).reduce((accumulator, currentValue) => accumulator + currentValue));
    let rightSum = arr.slice(i + 1).reduce((accumulator, currentValue) => accumulator + currentValue);

    if (i == 0 && rightSum === 0) {
      result = 0;
      break;
    }
    
    if (leftSum === rightSum) {
      result = i;
      break;
    }
  }
  console.log(result);
}

/* Bouncing Balls Problem
--------------------------------------------------------------------------------------------------------------------------- */
function solveBouncingBallProblem() {
  let h = 30;
  let bounce = 0.66;
  let window = 1.5;
  let rebounds = 1;

  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let currentHeight = h * bounce;

    while (currentHeight > window) {
      rebounds += 2;
      currentHeight = currentHeight * bounce;
    }
  } else {
    rebounds = -1;
  }

  console.log(rebounds);
}

/* Counting Duplicates Problem
--------------------------------------------------------------------------------------------------------------------------- */
function solveCountDuplicateProblem() {
  let text = 'aA11'; // i and s => 2
  let textSet = new Set(text.toLowerCase());
  let textArray = Array.from(text.toLowerCase());
  let duplicateCount = 0;

  for (let item of textSet.values()) {
    if (textArray.filter(x => x == item).length > 1) {
      duplicateCount++;
    }
  }
  console.log(duplicateCount);
}

/* Isogram Problem
--------------------------------------------------------------------------------------------------------------------------- */
function caseInsensitiveSort (a, b) {
  let result = 0;
  let aLower = a.toLowerCase();
  let bLower = b.toLowerCase();
  if (aLower > bLower) {
    result = 1;
  } else if (aLower < bLower) {
    result = -1;
  }
  return result;
}

function solveIsIsogramProblem() {
  let str = "Dermatoglyphics";
  let result = true;

  if (str != '') {
    let charArray = Array.from(str).sort(caseInsensitiveSort);
    for (let i = 0; i < charArray.length - 1; i++) {
      if (charArray[i].toLowerCase() == charArray[i + 1].toLowerCase()) {
        result = false;
        break;
      }
    }
  }

  console.log(result);
}

function solveIsIsogramProblemAlt () {
  let str = "Dermatoglyphics";
  let result = new Set(str.toLowerCase()).size == str.length;
  console.log(result);
}

/* Squares Problem
--------------------------------------------------------------------------------------------------------------------------- */
function solveSquaresProblem() {
  let n = 91;
  let result = false;

  if (n > 0) {
    let sqrt = Math.sqrt(n);
    
    if (n % sqrt == 0) {
      result = true;
    }
  } else if (n == 0) {
    result = true;
  }

  console.log(result);
}

function solveSquaresProblemAlt() {
  let n = 81;
  console.log(Math.sqrt(n) % 1 === 0);
}

function solveSquaresProblemAlt2() {
  let n = 81;
  return Number.isInteger(Math.sqrt(n));
}

/* Divisors Problem
--------------------------------------------------------------------------------------------------------------------------- */
function solveDivisorsProblem () {
  let integer = 13;
  let divisors = [];

  for (let divisor = 2; divisor < integer; divisor++) {
    if (integer % divisor == 0) {
      divisors.push(divisor);
    }
  }

  if (divisors.length == 0) {
    console.log(`${integer} is prime`)
  } else {
    console.log(divisors);
  }
}

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


module.exports.solveEqualSidesArrayProblem = solveEqualSidesArrayProblem;
module.exports.solveBouncingBallProblem = solveBouncingBallProblem;
module.exports.solveCountDuplicateProblem = solveCountDuplicateProblem;
module.exports.solveIsIsogramProblem = solveIsIsogramProblem;
module.exports.solveSquaresProblem = solveSquaresProblem;
module.exports.solveDivisorsProblem = solveDivisorsProblem;
module.exports.solveJadenPuzzle = solveJadenPuzzle;
module.exports.solveLargerProductOrSumPuzzle = solveLargerProductOrSumPuzzle;
module.exports.solveShortestWordPuzzle = solveShortestWordPuzzle;
module.exports.solveSumOfOddsPuzzle = solveSumOfOddsPuzzle;
module.exports.solveSummationPuzzle = solveSummationPuzzle;

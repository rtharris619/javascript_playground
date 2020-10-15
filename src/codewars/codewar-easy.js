
/* Shortest word Puzzle
--------------------------------------------------------------------------------------------------------------------------- */

function solveShortestWordPuzzle () {
  let s = 'bitcoin take over the world maybe who knows perhaps';
  
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

module.exports.solveSumOfOddsPuzzle = solveSumOfOddsPuzzle;
module.exports.solveSummationPuzzle = solveSummationPuzzle;


function solveTemperaturesPuzzle () {
  let n = 5;
  let inputs = [-1, -2, -8, 1, 5];

  let result = 5527;

  if (inputs.length > 0 && n > 0) {
    for (let i = 0; i < n; i++) {
      const temp = parseInt(inputs[i]);

      if (Math.abs(temp) == Math.abs(result) && temp > 0) {
        result = temp;
      } else if (Math.abs(temp) < Math.abs(result)) {
        result = temp;
      }
    }
  } else {
    result = 0;
  }

  console.log(result);
}

function solveASCIIArtPuzzle () {

  const L = 4;
  const H = 5;
  const T = 'E';
  const ROW = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';

  for (let i = 0; i < H; i++) {

  }
}

function solveChuckNorrisPuzzle () {
  
}

module.exports.solveTemperaturesPuzzle = solveTemperaturesPuzzle;

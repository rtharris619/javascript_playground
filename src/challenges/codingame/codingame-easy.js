
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

// ChuckNorrisPuzzle

function textToBinary (string) {
  return string.split('').map(function (char) {
    return char.charCodeAt(0).toString(2);
  }).join('');
}

function solveChuckNorrisPuzzle () {
  const message = '%';
  let binaryMessage = textToBinary(message); // 100101
  console.log(binaryMessage);

  let answer = '';
  let lastBit = binaryMessage[0];
  let consecutiveBits = 1;

  for (let i = 1; i < binaryMessage.length; i++) {
    if (binaryMessage[i] == lastBit) {
      consecutiveBits++;
    } else {
      if (lastBit == '0') {
        answer += '00 ' + Array.from({length: consecutiveBits}, () => 0).join('') + ' ';
      } else if (lastBit == '1') {
        answer += '0 ' + Array.from({length: consecutiveBits}, () => 0).join('') + ' ';
      }
      lastBit = binaryMessage[i];
      consecutiveBits = 1;
    }
  }

  if (consecutiveBits > 1) {
    if (lastBit == '0') {
      answer += '00 ' + Array.from({length: consecutiveBits}, () => 0).join('') + ' ';
    } else if (lastBit == '1') {
      answer += '0 ' + Array.from({length: consecutiveBits}, () => 0).join('') + ' ';
    }
  }

  console.log(answer.trim());
}

module.exports.solveTemperaturesPuzzle = solveTemperaturesPuzzle;
module.exports.solveChuckNorrisPuzzle = solveChuckNorrisPuzzle;

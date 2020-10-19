

function countDecimals (number) {
  let numberText = number.toString();
  let index = numberText.indexOf(".");
  
  if (index == 0) {
    return -1;
  } else if (index > 0) {
    return numberText.length - index - 1;
  } 
  else {
    return 0;
  }
}

module.exports.countDecimals = countDecimals;

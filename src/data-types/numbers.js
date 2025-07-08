

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

function testNaN() {
  const number = Number("123");
  let result = isNaN(+number) ? 0 : +number;
  console.log(result);
}

const driver = () => {
  testNaN();
}

module.exports.driver = driver;


function binarySearch (array, target) {

  // Midpoint = L + (R - L) / 2;
  let L = 0, R = array.length - 1;
  while (L <= R) {
    let mid = L + (R - L) / 2;
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return -1;
}

function testCase1 () {
  let array = [2,3,5,6,8,10,12];
  let targetVal = 10;

  console.log(binarySearch(array, targetVal));
}

function testCase2 () {
  let array = [2,3,5,6,8,10,12];
  let targetVal = 3;

  console.log(binarySearch(array, targetVal));
}

function testCase3 () {
  let array = [2,3,5,6,8,10,12];
  let targetVal = 20;

  console.log(binarySearch(array, targetVal));
}

module.exports.testCase1 = testCase1;
module.exports.testCase2 = testCase2;
module.exports.testCase3 = testCase3;

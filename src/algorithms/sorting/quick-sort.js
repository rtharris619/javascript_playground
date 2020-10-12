
/* Quicksort Algorithm 1 */

function quickSort (array, L, R) {
  if (L >= R) {
    return;
  }
  let pivot = array[(L + R) / 2];
  let index = getPartitionPoint(array, L, R, pivot);
  quickSort(array, L, index - 1);
  quickSort(array, index, R);
}

function getPartitionPoint (array, L, R, pivot) {
  while (L <= R) {
    while (array[L] < pivot) {
      L++;
    }
    while (array[R] > pivot) {
      R--;
    }
    if (L <= R) {
      swap(array, L, R);
      L++;
      R--;
    }
  }
  return L;
}

function swap(array, L, R) {
  let temp = array[R];
  array[R] = array[L];
  array[L] = temp;
}

/* Quicksort Algorithm 2 */

function quickSort2 (array, L, R) {
  if (L >= R) {
    return;
  }
  let P = partition(array, L, R);
  quickSort2(array, L, P - 1);  
  quickSort2(array, P + 1, R);
  
  return array;
}

function partition (array, L, R) {
  let pivot = array[R];
  let i = L - 1;
  for (let j = L; j < R - 1; j++) {
    if (array[j] < pivot) {
      i = i + 1;
      //swap(array, i, j);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  //swap(array, i + 1, R);
  [array[i+1], array[R]] = [array[R], array[i+1]];
  return i + 1;
}

function testCase1() {
  let array = [2, 2, 1, 1, 0, 0, 4, 4, 2, 2, 2];
  quickSort2(array, 0, array.length - 1);
  console.log(array);
}

function testCase2() {
  let array = [2, 1, 3, 4];
  quickSort(array, 0, array.length - 1);
  console.log(array);
}

module.exports.testCase1 = testCase1;
module.exports.testCase2 = testCase2;
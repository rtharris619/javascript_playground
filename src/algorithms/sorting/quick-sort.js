
/* Quicksort Algorithm 1 */

function quickSort (array, L, R) {
  if (L >= R) {
    return;
  }
  let pivot = array[(L + R) / 2];
  let index = partition(array, L, R, pivot);
  quickSort(array, L, index - 1);
  quickSort(array, index, R);
}

function partition (array, L, R, pivot) {
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
  let P = partition2(array, L, R);
  quickSort2(array, L, P - 1);  
  quickSort2(array, P + 1, R);
  
  return array;
}

function partition2 (array, L, R) {
  let pivot = array[R];
  let i = L - 1;
  for (let j = L; j < R - 1; j++) {
    if (array[j] < pivot) {
      i = i + 1;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, R);
  return i + 1;
}

/* Quicksort Algorithm 3 */

function quickSort3 (array, L, R) {
  // left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
  L = L || 0;
  R = R || array.length - 1;

  let pivot = partition3(array, L, R);

  if (L < pivot - 1) {
    quickSort3(array, L, pivot - 1);
  }

  if (R > pivot) {
    quickSort3(array, pivot - 1, R);
  }
}

/* Two indices that start at the ends of the array being partitioned, then move toward each other, until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, that are in the wrong order relative to each other. The inverted elements are then swapped. 
Here the numerical values of left and right is continually getting updated with each inner while loop. But only if the while loop condition gets satisfied. That is, when the while loop condition is unsatisfied, e.g. for the first inner while loop, when array[left] > array[pivot] which means we have found a misplaced pair. 
That is, although the left <= right (which is being made sure by the outer while loop) the actual elements are not sorted. Meaning a left side element is larger in value than the right side element. So, the code execution then jumps out of the inner while loop and goes right in to execute the swap function.
*/

function partition3 (array, L, R) {
  let pivot = Math.floor((L + R) / 2);

  while (L < R) {
    while (array[L] < array[pivot]) {
      L++;
    }
    while (array[R] > array[pivot]) {
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

function testCase1() {
  let array = [2, 2, 1, 1, 0, 0, 4, 4, 2, 2, 2];
  quickSort2(array, 0, array.length - 1);
  console.log(array);
}

function testCase2() {
  let array = [2, 1, 3, 4];
  quickSort3(array, 0, array.length - 1);
  console.log(array);
}

module.exports.testCase1 = testCase1;
module.exports.testCase2 = testCase2;

// Find the second largest value in an array.

/**
 * Learning here is that array.sort() is used for string and gives bugs when when used with numbers
 * so we have to use a condition sort((a,b) => (a -b)) to properly sort with numbers
 * Why things happens, because .sort() converts elements to string and then sorts lexicographically.
 */

// let arr = [1, 10, 20, 30, 5, 8, 99, 45, 10, 9];
// let arr = [310, 1, 20, 31, 500, 89, 99, 5, 11, 99];
// let arr = [-310, 1, -20, 31, 500, -89, 99, 5, 11, -99];
// let arr = [-2, -5, -5, -10, -1];
// let arr = [20, 10, 10, 5, 20];
let arr = [];

function secondLargestWithSort(arr) {
  if (arr.length < 2 || arr.length == null) {
    return "Array's length is not sufficient to check.";
  }

  const arrSet = new Set(arr);
  const [...arrNew] = arrSet;
  const sortedNewArr = arrNew.sort((a, b) => a - b);
  const arrLen = sortedNewArr.length;
  console.log(sortedNewArr);
  return sortedNewArr[arrLen - 2];
}

function secondLargestWithoutSort(arr) {
  const newArr = arr;
  const newArrLen = newArr.length;
  let maxValue = -Infinity;
  let secondMaxVal = -Infinity;

  if (newArrLen < 2 || newArrLen == null) {
    return "Array's length is not sufficient to check.";
  }

  for (i = 0; i < newArrLen; i++) {
    if (newArr[i] > maxValue) {
      secondMaxVal = maxValue;
      maxValue = newArr[i];
    } else if (newArr[i] > secondMaxVal && newArr[i] != maxValue) {
      secondMaxVal = newArr[i];
    }
  }
  return secondMaxVal;
}

const withSort = secondLargestWithSort(arr);
const withoutSort = secondLargestWithoutSort(arr);

console.log(withSort);
console.log(withoutSort);

// Write a function that returns the index of the searched element.
// If the element is not present, return -1

let arrTest = [10, 20, 30, 40];
let elem = 0;

function findIndex(arr) {
  elem = Number(prompt("Enter vaue"));
  let arrayLen = arr.length;

  for (i = 0; i < arrayLen; i++) {
    if (elem === arr[i]) {
      return i;
    } else {
      return -1;
    }
  }
}
console.log(findIndex(arrTest));

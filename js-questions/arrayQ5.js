// Find the second largest value in an array. 

let arr = [1, 10, 20, 30, 5, 8, 99, 45, 10, 9];

function secondLargestWithSort(arr) {
    const arrSet = new Set(arr);
    const [...arrNew] = arrSet;
    const sortedNewArr = Array.sort(arrNew);
    const arrLen = sortedNewArr.length;
    console.log(sortedNewArr);
    return sortedNewArr[arrLen - 2];


}

const withSort = secondLargestWithSort(arr);
const withoutSort = '';

console.log(withSort);
console.log(withoutSort);
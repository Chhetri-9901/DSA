// Find the largest number in an array

let arr = [-9, -19, -3];
let largest = arr[0];

function findLargest(arr) {
    arr.forEach((ele, index) => {
        if( largest < arr[index]) {
            largest = arr[index];
        }
    });
    return largest
}

const finalAns = findLargest(arr);
console.log(finalAns);
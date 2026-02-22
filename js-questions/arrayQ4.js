// Find the smallest number in an array

let arr = [-9, -19, -3];
let smallest = arr[0];

function findSmallest(arr) {
    arr.forEach((ele, index) => {
        if( smallest > arr[index]) {
            smallest = arr[index];
        }
    });
    return smallest
}

const finalAns = findSmallest(arr);
console.log(finalAns);
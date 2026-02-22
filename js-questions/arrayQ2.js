// Write a code which returns the number of negative numebrs in an array. 

let arr = [10, -1, 4, -4, 8, -67, 9, 0, -1];
let count = 0;

function returnNegativeCount(arr) {
    arr.forEach(ele => {
        if(ele < 0) {
            count++;
        }
    });
    return count;
}

const finalAns = returnNegativeCount(arr);
console.log(finalAns);
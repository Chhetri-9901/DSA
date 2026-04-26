// Move all zeroes to the end of an array, so that all values more than 0 are at front of all the zeros in an array.

// let arr= [1, 0, 3, 0, 0, 2, 0, 5];
let arr= [0, 1, 0, 3, 12];

let arrLen = arr.length;
let p1 = 0;

for(let i=0; i<arrLen; i++) {
    if(i == p1 && arr[i] >0) {
        arr[p1]  == arr[i];
        p1++
    }
    else if (arr[i] > 0) {
        let val = arr[i];
        arr[p1] = val;
        arr[i] = 0;
        p1++;
    }
}
console.log(arr);
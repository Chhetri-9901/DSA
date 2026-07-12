// Move all zeroes to the end of an array, so that all values more than 0 are at front of all the zeros in an array.

let arr2= [1, 0, 3, 0, 0, 2, 0, 5];
let arr= [0, 1, 0, 3, 12];

let arrLen = arr.length;
let p1 = 0;

for(let i=0; i<arrLen; i++) {
    if(i == p1 && arr[i] > 0) {
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


//Video Solution
let arr2Len = arr2.length;
let replacePoint = 0;

for(let i=0; i<arr2Len; i++) {
    if(arr2[i] !== 0) {
        arr2[replacePoint] = arr2[i];
        replacePoint++;
    }
}
for(j=replacePoint; j<arr2Len; j++) {
    arr2[j] = 0;
}

console.log(arr2);
// Merge the given arrays in such a way that the final array is arr1 but with 
// all the elements of arr2 in a non-decreasring pattern

let arr1 = [1, 2, 3];
let arr2 = [2, 5, 6];

function mergeArrays(arr1, arr2) {
    let finalLen = arr1.length + arr2.length;
    let lenArr2 = arr2.length;
    console.log(finalLen);

    for(let i=0; i<lenArr2; i++) {
        arr1.push(arr2[i])
    }

    // arr1.sort()
    console.log(arr1);

    for(let j=0; j<finalLen; j++) {
        if(arr1[j] > arr1[j+1]) {
            let temp = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp;
        }
    }
    console.log(arr1);

    return "mergeArrays";
};

// video solution 1
function mergeArrays2(arr1, arr2) {
    let finalLen = arr1.length + arr2.length;
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let arr1Copy = arr1.slice(0, arr1Len);
    let p1 = 0, p2=0;

    for(let i=0; i<finalLen; i++) {
        if(p2 >= arr2Len || (p1 < arr1Len && arr1[p1] < arr2[p2])) {
            arr1Copy[i] = arr1[p1];
            p1++;
        }
        else {
            arr1Copy[i] = arr2[p2];
            p2++;
        }
    }

    console.log(arr1Copy)
    return "merge Arrays 2";
}

// video solution 2
function mergeArrays3(arr1, arr2) {

    let finalLen = arr1.length + arr2.length;
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let arr1Copy = arr1.slice(0, arr1Len);
    let p1 = arr1Len - 1, p2= arr2Len -1;

    for(let i=finalLen-1; i>0; i--) {

        if(p1 > 0 && arr1[p1] > arr2[p2]) {
            arr1[i] = arr1[p1];
            p1--;
        }
        else {
            arr1[i] = arr2[p2];
            p2--;
        }
        
    }

    console.log(arr1Copy)
    return "merge Arrays 3";

}



// const result = mergeArrays(arr1, arr2);
// console.log(result);
// const result2 = mergeArrays2(arr1, arr2);
// console.log(result2);
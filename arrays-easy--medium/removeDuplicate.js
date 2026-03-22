// Remove duplicate elements from a sorted array.

let arr = [1, 2, 2, 3, 3, 4, 4, 5, 6];
let arr2 = [1, 2, 2, 3, 3, 4, 4, 5, 6];

function removeDuplicatesUsingTwoForLoop(arr) {
    let lengthArr = arr.length;
    let newArr = [];
    let count = 0;

    for (let i = 0; i < lengthArr; i++) {
        count = 0;
        for (let j = i; j < lengthArr; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (count <= 1) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

function removeDuplicatesUsingOneForLoop(arr2) {
    let x = 0;
    for(let i=0; i<arr2.length; i++) {
        if(arr2[i] > arr2[x]) {
            x = x + 1;
            arr2[x] = arr2[i];
        }
    }
    return x + 1;
}

let result = removeDuplicatesUsingTwoForLoop(arr);
console.log("Using Two For loops "+result);
let result2 = removeDuplicatesUsingOneForLoop(arr2);
console.log("Using One For loop "+result2);

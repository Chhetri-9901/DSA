// Remove an element from the given array, without creating a new array. 

let arr = [1, 2, 3, 3, 4, 5, 1, 8, 1, 0, 2, 5];

function removeElemnt(arr, element) {
    // let x = 0;
    // for(let i=0; i< arr.length; i++) {
    //     console.log(arr);
    //     if(arr[i] != element) {
    //         arr[x] = arr[i];
    //         x = x + 1;
    //     }
    //     else {
    //         arr[i] = 'x';
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

const element = 1;
const result = removeElemnt(arr, element);
console.log(result);
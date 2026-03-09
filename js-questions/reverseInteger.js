//Reverse the given number.

function reverseNumber(num) {
    let reverseNum = 0;
    let copyNum = num;
    let finalNum = 0;

    while(copyNum >0) {
        reverseNum = Math.round(copyNum%10);
        finalNum = finalNum * 10 + reverseNum;
        copyNum = Math.round(copyNum/10);
    }

    return finalNum;
}

function getNumber(num) {
    if(num > 0) {
       return reverseNumber(num);
    }
    else {
        let absNum = Math.abs(num);
        return (-1 * reverseNumber(absNum));
    }
    
};
const finalAns = getNumber(123);
console.log(finalAns);
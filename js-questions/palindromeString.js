//Check if the string is palindrome or not. 

function checkPalindrome(val) {
    const length = val.length;
    const [...valArr] = val;
    const strArr = [];

    for(let i=0; i<length; i++) {
        strArr.push(valArr[length - 1 - i])
    }

    const finalVal = strArr.join('')

    if(val === finalVal) {
        return true;
    }
    return false;

}

const result = checkPalindrome("madam");
console.log(result);
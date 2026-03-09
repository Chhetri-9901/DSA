//Check if the number is palindrome or not. 

function checkPalindrome(num) {

    let newNum = num;
    let reverseNum = 1;
    let finalAnswer = 0;

    while (newNum > 0) {
        reverseNum = Math.round(newNum%10);
         finalAnswer = finalAnswer*10 + reverseNum;
        newNum = Math.round(newNum/10);
    }

    if(num  === finalAnswer) {
        return true;
    }
    return false;
}

const result = checkPalindrome(1213121);
console.log(result);
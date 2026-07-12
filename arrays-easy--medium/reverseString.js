// Reverse the given string

function reverseStringUsingMethods(word) {
    console.log(word);
    const [...reversedStr] = word;
    return reversedStr.reverse().join('');
};

function reverseStringWithoutUsingMethods(word) {
    console.log(word);
    const [...reversedStr] = word;
    let temp = '';
    let len = reversedStr.length;

    for(let i=0; i<len/2; i++) {
        temp = reversedStr[i];
        reversedStr[i] = reversedStr[len-1-i];
        reversedStr[len-1-i] = temp;
    }

    return reversedStr.join('');
};

const result = reverseStringUsingMethods("man, woman");
const result2 = reverseStringWithoutUsingMethods("man");
console.log(result);
console.log(result2);
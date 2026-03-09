// reverse a string

function reverseString(str) {
    let [...characters] = str;
    let len = characters.length;
    let reversedChar = [];
    console.log(len)

    //Method 1
    for(let i=0; i<len; i++) {
        reversedChar.push(characters[len-1-i]);
    }
    let finalAns = reversedChar.join('');
    console.log(finalAns);


    //Method 2
    let finalAns2 = characters.reverse().join("");
    console.log(finalAns2);
}

let str = "hello";
reverseString(str);
// Write a function that returns the number of digits in a number. 

function countDigits(val) {
    // let digit = val;
    // let eachVal = 0;
    // let count = 0;

    // while (digit > 0) {
    //     eachVal = digit%10
    //     digit = Math.round(digit/10);
    //     count++;
    // }
  
    // console.log(count);


    let digit = Math.abs(val);
    let count = 0;

    if(val == 0) {
        return 1;
    }

    while(digit >0 ) {
        digit = Math.round(digit/10);
        count++;
    }
    console.log(count);

};
countDigits(-123456789);

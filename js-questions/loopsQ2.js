/* Print this pattern 
    *****
    *****
    *****
    *****
    *****
    *****

    if n=5, there should be 5 rows and 5 coloumns and so on...
*/

for(let i=0; i<5; i++) {
    for(let j=0; j<5; j++) {
        console.log("*");
    }
    console.log('\n');
}

//Correct way
for(let i=0; i<5; i++) {
    let starsRow = '';
    for(let j=0; j<5; j++) {
        starsRow = starsRow + "*";
    }
    console.log(starsRow);
}

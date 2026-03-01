/* Print this pattern 
    1
    0   1
    0   1   0
    1   0   1   0   
    1   0   1   0   1
*/

count = 1;
for(let i=0; i<10; i++) {
    row = "";
    for(let j = 0; j<=i; j++) {
        if (count == 1) {
            row = row + 1+ " ";
            count--;
        }
        else {
            row = row + 0 + " ";
             count++;
        }
    }
    console.log(row);
}
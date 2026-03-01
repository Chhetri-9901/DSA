/* Print this pattern 
    1
    1   0
    1   0   1
    1   0   1   0
        
*/

for(let i=0; i<10; i++) {
    row = "";
    for(let j = 0; j<=i; j++) {
        if (j%2 == 0) {
            row = row + 1+ " ";
        }
        else {
            row = row + 0 + " ";
        }
    }
    console.log(row);
}
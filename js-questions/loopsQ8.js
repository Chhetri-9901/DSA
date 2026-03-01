/* Print this pattern 
                        *
                    *   *   
                *   *   *
            *   *   *   *
        *   *   *   *   *
        
n= 5
no. of starts = i+1
no. of spaces = n-(i+1)
        
*/

for(let i = 0; i<5; i++) {
    row = "";
    for(let j= 0; j<(5-(i+1)); j++) {
        row = row+"j";
    }
    for(let k=0; k<=i; k++) {
        row = row + "*";
    }
    console.log(row);
}
/* Print this pattern 
    * * * * *
    * * * *
    * * *
    * *
    * 
*/

for(let i=1; i<6; i++) {
    let row = "";
    for(let j=1; j<=(6-i); j++) {
        row = row +" "+ "*";
    }
    console.log(row);
}
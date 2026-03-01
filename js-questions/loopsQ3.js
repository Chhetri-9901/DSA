/* Print this pattern 
    *
    **
    ***
    ****
    *****

*/

for(let i=0; i<5; i++) {
    let stars = '';
    for (let j=0; j<=i; j++) {
        stars = stars + '*'
    }
    console.log(stars);
}
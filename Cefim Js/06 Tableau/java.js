let tablesize = parseInt(prompt("Enter how many number you're planning to add !"));
let myTable = [];

while (myTable.length != tablesize) {
    let newScore = parseInt(prompt("Add score"));
    myTable.push(newScore);
}
console.log(myTable)
let total= 0;

for(let i = 0; tablesize > 0; tablesize--)  {
    total+=myTable[i];
    i++;
}
document.write(total);
document.write(total/(tablesize));
// document.write(total/tablesize);

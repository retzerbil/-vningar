let firstName = "Andreas";
let x = 5;
let y = 10;
let personNumber = 000119375;

console.log(x+y);
console.log(firstName + x);
console.log(x*y);
console.log(++x);

function myFirstFunction(){
    let answer = confirm("whats up yolo gang??");
    console.log(answer);
}

function calcControlNumber(persNumber){
    let pnr = toString(persNumber);
    for (i in pnr) {
        console.log(parseInt(pnr[i]));
    }
    
    calcControlNumber(2000119375);
}
const num = document.getElementById("num");
const myButton = document.getElementById("myButton");
const textDiv = document.getElementById("text");

const arrayTest = [1,2,3,4];
console.log(arrayTest);
arrayTest.push(5);
console.log(arrayTest);
arrayTest.push("test");
console.log(arrayTest);
arrayTest.push(myButton);
console.log(arrayTest);
arrayTest.splice(5,2);
console.log(arrayTest);
arrayTest[4] = 400;
console.log(arrayTest);

const setTest = new Map();
setTest.set("0","hej");
setTest.set("69", "testing!!");

console.log(setTest); 


//badass lambda test B)
const bS = () => {
    if(num.value >100){
        console.log("stort");
        textDiv.innerText = "stort";
    }else if(num.value <100){
        console.log("litet");
        textDiv.innerText = "litet";
    }
}

//lambda med ? operator B) feettt coolt ju
const bs2 = () => {
    num.value>100 ? textDiv.innerText="stort":textDiv.innerText="litet";
}

myButton.addEventListener("click", bs2);


1+2==3 ? console.log("ja"):console.log("nej");

/* metod innan lambda test
function bigSmall(){
    if(num.value >100){
        console.log("stort");
        textDiv.innerText = "stort";
    }else if(num.value <100){
        console.log("litet");
        textDiv.innerText = "litet";
    }
}

*/
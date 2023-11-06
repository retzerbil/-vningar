const testingDiv = document.getElementById("testingDiv");
const nameTest = "Andreas";
const integers = [1,2,3,4,5,6,7,8,9,10];
const coolAnimals = ["Cats", "Birds", "Penguins", "Seagulls", "Hedgehogs"];

function myLoadFunction(){

    testingDiv.innerHTML =  nameTest.length;
}

for (let i = 0; i <= nameTest.length-1; i++) {
    console.log(nameTest[i]);
    if(i<nameTest.length-1){
        console.log(" ");
    }
}
let temp = 0;
for (let i = 0; i < integers.length; i++) {
    temp+=i;
}

console.log(temp);

const animalList = document.getElementById("animalOrder");
for (let i = 0; i <coolAnimals.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerText = coolAnimals[i];
    animalList.appendChild(newItem);
    //funkar också
    //animalList.innerHTML+=("<li>"+coolAnimals[i]+"</li>");
}
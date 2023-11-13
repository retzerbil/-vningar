//import { Cat } from "/models/Cat.js";
const inputBreed = document.getElementById("breed").value;
const inputAge = document.getElementById("age").value;
const inputEyeColor = document.getElementById("eyeColor").value;
const catCreator = document.getElementById("catCreator");

/* constructor och class declaration
function Cat(name, breed, age, eyeColor) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.eyeColor = eyeColor;
}
*/

class Cat {
    name;
    breed;
    age;
    eyeColor;
    constructor(name, breed, age, eyeColor) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.eyeColor = eyeColor;
    }
    toString(){
        return "This cat's name is " + this.name + " theyre the breed " + this.breed + ". They are " + this.age + " years old and has " + this.eyeColor + " colored eyes.";
    }
}

const cat1 = new Cat("Lizie", "Barncat", 11, "Yellow");

console.log(cat1);
console.log(cat1.name, cat1.breed, cat1.age, cat1.eyeColor);
console.log(cat1.toString());

catCreator.addEventListener("click", createCat);

function createCat() {
    const newCat = new Cat(inputName, inputBreed, inputAge, inputEyeColor);
    console.log(newCat.toString());
}

/*
class Dog {
    name;
    type;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

function Dog(name,type){
    this.name = name;
    this.type = type;
}


const dog1 = new Dog("wovve", "pug");

console.log(dog1);

console.log(dog1.name, dog1.type);
*/
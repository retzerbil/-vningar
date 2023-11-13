/*
class Cat{
    name;
    breed;
    age;
    eyeColor;
}
*/
function Cat(name, breed, age, eyeColor) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.eyeColor = eyeColor;
}

const cat1 = new Cat("Lizie", "Barncat", 11, "Yellow");

console.log(cat1);
console.log(cat1.name, cat1.breed, cat1.age, cat1.eyeColor);

/*
class Dog{
    name;
    type;
}
*/
function Dog(name,type){
    this.name = name;
    this.type = type;
}

const dog1 = new Dog("wovve", "pug");

console.log(dog1);

console.log(dog1.name,dog1.type);

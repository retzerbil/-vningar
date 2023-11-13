export class Cat {
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

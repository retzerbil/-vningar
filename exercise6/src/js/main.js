class Person{
 name;
 age;
 height;
 eyeColor;
 hairColor;

 constructor(name,age,height,eyeColor,hairColor){
    this.name = name;
    this.age = age;
    this.height = height;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
 }
}

window.onload = () => {
//const person1 = new Person("Andreas", 23, 1.94,"Blå","Brun");

const persons = [new Person("Andreas", 23, 1.94,"Blå","Brun"), new Person("Sebastian", 25, 1.97, "Blå", "Brun"), new Person("Erik", 23, 1.76, "Blå", "Brun")];


const personParagraph = document.createElement("p");
//document.body.appendChild(personParagraph);
//personParagraph.innerHTML= "Jag heter " + person1.name + ", jag är " + person1.age + " år gammal, jag är " + person1.height + " meter lång, har " + person1.eyeColor + " ögon och min hårfärg är " + person1.hairColor +".";
for (let i = 0; i < persons.length; i++) {
    const personParagraph = document.createElement("p");
    document.body.appendChild(personParagraph);
personParagraph.innerHTML= "Jag heter " + persons[i].name + ", jag är " + persons[i].age + " år gammal, jag är " + persons[i].height + " meter lång, har " + persons[i].eyeColor + " ögon och min hårfärg är " + persons[i].hairColor +".";
    
}

}



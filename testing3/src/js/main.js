const bodyTag = document.getElementById("body");
const Cat ={name:"meow",color:"black"};

localStorage.setItem("1","halo :))");

localStorage.setItem("coolestCat","Lizie");

localStorage.setItem("test",JSON.stringify(Cat));

console.log(localStorage.getItem("1"));

console.log(localStorage.getItem("coolestCat"));

console.log(localStorage.getItem("test"));

const lalala = localStorage.getItem("test");
const lalala2 = JSON.parse(lalala);
console.log(lalala2);

const container = document.createElement("section");

const button1 = document.createElement("button");
container.appendChild(button1);

button1.addEventListener("click", () => {
    console.log("alo :)))))");
});
bodyTag.appendChild(container);
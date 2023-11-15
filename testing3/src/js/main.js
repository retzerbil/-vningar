const Cat ={name:"meow",color:"black"};

localStorage.setItem("1","halo :))");

localStorage.setItem("coolestCat","Lizie");

localStorage.setItem("test",JSON.stringify(Cat));

console.log(localStorage.getItem("1"));

console.log(localStorage.getItem("coolestCat"));

console.log(localStorage.getItem("test"));
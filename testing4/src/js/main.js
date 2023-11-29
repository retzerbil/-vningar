window.onload = ()=>{
/*
let myPromise = new Promise((myResolve,myReject) =>{
setTimeout(()=>{console.log("ggghhkkh");;},3000)
    const test = 2;
if(test ===2){
myResolve("jaaa");
}else{
    myReject("neeejj");
}
});

myPromise.then((data)=>{
    //resolve
console.log(data);
},
()=>{
    //reject
console.log(data);
});*/


fetch("https://medieinstitutet-wie-products.azurewebsites.net/api/products")
.then((response)=> response.json())
.then((data) =>{console.log("Data:", data);
});


const createHTML = (movies) =>{
array.forEach(element => {
    console.log(movie);
});
}};

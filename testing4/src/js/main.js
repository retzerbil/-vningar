window.onload = ()=>{
let myPromise = new Promise((myResolve,myReject) =>{
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
});
}

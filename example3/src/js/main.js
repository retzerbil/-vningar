const paragraphText = document.getElementById("para");
paragraphText.setAttribute("class","red");
const divChange = document.getElementById("firstId");
divChange.setAttribute("id","newId");

function paragraphChange(){
    const paragraphTwo = document.getElementById("para2");
    paragraphTwo.innerText = "new text";
    
}
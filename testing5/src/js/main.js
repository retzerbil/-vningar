//await måste finnas i en "container" som är asyncron. den här funktionen får en egen tråd som körs medan resten av koden får köra vidare
window.addEventListener("load",(async ()=>{
    //detta tar tid och MÅSTE göras, och därför är funktionen asynkron så att resten av koden inte behöver stanna upp.
    const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6424148a&s=matrix");
    const data = await response.json();
    console.log(data);
}));

//eftersom ovanstående är async så kommer detta printas ut först eftersom det innuti tar tid och måste göras.
console.log("Jag borde komma först! Även fast jag är sist!");
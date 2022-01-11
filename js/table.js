async function render(){
    const reponse= await fetch("https://restcountries.com/v3.1/region/europe?fields=name,area,population,capital");
    const countries= await reponse.json();
    let content="";
    countries.forEach((country) => {
        content+=`<tr><td class="fw-bold">${country.name.official}</td><td>${Intl.NumberFormat("en-EN").format(country.area)}</td><td>${Intl.NumberFormat("en-EN").format(country.population)}</td><td>${country.capital}</td></tr>`;     
    });
    const tbody=document.querySelector("#tbody");
    tbody.innerHTML=content;
}
window.addEventListener("load",render);
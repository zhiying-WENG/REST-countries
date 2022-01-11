async function charger(){
    const reponse= await fetch("https://restcountries.com/v3.1/region/europe?fields=name");
    const countries= await reponse.json();
    let contenu="";
    countries.forEach((country) => {
        contenu+=`<li> ${country.name.official } </li>`;
        // contenu+="<li>"+ country.name.official + "</li>";
    });
    const ul=document.querySelector("#countries");
    ul.innerHTML=contenu;
}
window.addEventListener("load",charger);
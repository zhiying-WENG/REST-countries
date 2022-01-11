async function render(){
    const reponse= await fetch("https://restcountries.com/v3.1/region/europe?fields=name");
    const countries= await reponse.json();
    let content="";
    countries.forEach((country) => {
        content+=`<li> ${country.name.official} </li>`;
        // content+="<li>" + country.name.official + "</li>";
    });
    const ul=document.querySelector("#countries");
    ul.innerHTML=content;
}
window.addEventListener("load",render);
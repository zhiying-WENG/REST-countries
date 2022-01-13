const selectCountries=document.querySelector("#selectCountries");
const iframe=document.querySelector("#iframe");

async function map(code){
    const reponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code}&fields=capitalInfo`);
    const country=  await reponse.json();  
    iframe.innerHTML=`<iframe src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC-YkOjO03-cN1YGvkAMfv-4SJNlAutgDU&center=${country[0].capitalInfo.latlng[0]},${country[0].capitalInfo.latlng[1]}&zoom=10&language=en" title="google map"></iframe>`;
}

async function render(){
    const reponse= await fetch(`https://restcountries.com/v3.1/region/europe?fields=name,cca2`);
    const countries= await reponse.json();
    let content="";
    countries.forEach((country) => {
        content += `<option id=${country.cca2}>${country.name.official}</option>`;   
    });   
    selectCountries.innerHTML=content;  
    selectCountries.options.namedItem("FR").selected=true;
    map("FR");
}

function changeiframe(){
    const index=selectCountries.selectedIndex;
    const code=selectCountries.options[index].id;
    map(code);
}

window.addEventListener("load",render);
selectCountries.addEventListener("change",changeiframe);
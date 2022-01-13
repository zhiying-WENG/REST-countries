let reponse,countries;
const selectCountries=document.querySelector("#selectCountries");
const iframe=document.querySelector("#iframe");
async function render(){
    reponse= await fetch("https://restcountries.com/v3.1/region/europe?fields=name,capitalInfo,cca2");
    countries= await reponse.json();
    let content="";
    let iframecontent;
    countries.forEach((country) => {
        if (country.cca2=="FR"){
            content += `<option value="FR" selected>${country.name.official}</option>`;
            iframecontent=`<iframe src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC-YkOjO03-cN1YGvkAMfv-4SJNlAutgDU&center=${country.capitalInfo.latlng[0]},${country.capitalInfo.latlng[1]}&zoom=10&language=en" title="google map"></iframe>`;
        }else{
            content += `<option value=${country.cca2}>${country.name.official}</option>`;
        }    
    });   
    selectCountries.innerHTML=content;  
    iframe.innerHTML=iframecontent;
}
window.addEventListener("load",render);

function changeiframe(){
    const index=selectCountries.selectedIndex;
    let iframecontent=`<iframe src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC-YkOjO03-cN1YGvkAMfv-4SJNlAutgDU&center=${countries[index].capitalInfo.latlng[0]},${countries[index].capitalInfo.latlng[1]}&zoom=10&language=en" title="google map"></iframe>`
    iframe.innerHTML=iframecontent;
}
selectCountries.addEventListener("change",changeiframe)


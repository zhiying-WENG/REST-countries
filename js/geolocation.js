const selectCountries = document.querySelector("#selectCountries");
const iframe = document.querySelector("#iframe");

async function map(code) {
    const reponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code}&fields=capitalInfo`);
    const country = await reponse.json();
    const [lat, lng] = country[0].capitalInfo.latlng;
    iframe.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyC-YkOjO03-cN1YGvkAMfv-4SJNlAutgDU&center=${lat},${lng}&zoom=10&language=en`;
}

async function render() {
    const reponse = await fetch(`https://restcountries.com/v3.1/region/europe?fields=name,cca2`);
    const countries = await reponse.json();
    let content = "";
    countries.forEach((country) => {
        content += `<option value=${country.cca2}>${country.name.official}</option>`;
    });
    selectCountries.innerHTML = content;
    const params = (new URL(document.location)).searchParams;
    // const params = new URLSearchParams(document.location.search.substring(1));
    let code = params.get('cca2');
    code = code ? (code.trim().length != 0 ? code.toUpperCase() : "FR") : "FR";
    selectCountries.value = code;
    map(code);
}

function changeiframe() {
    const code = selectCountries.value;
    map(code);
}

window.addEventListener("load", render);
selectCountries.addEventListener("change", changeiframe);
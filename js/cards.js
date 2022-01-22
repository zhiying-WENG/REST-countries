async function render(){
    const reponse= await fetch("https://restcountries.com/v3.1/region/europe?fields=name,flags,capital,maps,cca2");
    const countries= await reponse.json();
    let content="";
    countries.forEach((country) => {
        content += `<div class="col">
                        <div class="card h-100">
                            <a href=${country.maps.openStreetMaps} target="_blank" rel="nofollow noopener noreferrer">
                                <img src=${country.flags.png} class="card-img-top"  alt="flag of ${country.name.official}">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${country.name.official}</h5>
                                <a href="geolocation.html?cca2=${country.cca2}" class="card-text">${country.capital[0]}</a>
                            </div>
                        </div>
                    </div>`;
    });
    const cards=document.querySelector("#cards");
    cards.innerHTML=content;
}
window.addEventListener("load",render);
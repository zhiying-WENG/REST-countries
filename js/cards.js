async function render(){
    const reponse= await fetch("https://restcountries.com/v3.1/region/europe?fields=name,flags,capital,maps");
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
                                <p class="card-text">${country.capital[0]}</p>
                            </div>
                        </div>
                    </div>`;
    });
    const cards=document.querySelector("#cards");
    cards.innerHTML=content;
}
window.addEventListener("load",render);
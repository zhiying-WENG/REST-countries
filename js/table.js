async function render(){
    const reponse = await fetch("https://restcountries.com/v3.1/region/europe?fields=name,area,population,capital,cca2");
    const countries = await reponse.json();
    let content = "";
    const intl = new Intl.NumberFormat("en");
    countries.forEach((country) => {
        content += `<tr>
                        <td class="fw-bold">${country.name.official}</td>
                        <td class="text-end">${intl.format(country.area)}</td>
                        <td class="text-end">${intl.format(country.population)}</td>
                        <td><a href="geolocation.html?${country.cca2}">${country.capital[0]}</a></td>
                    </tr>`;     
    });
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = content;
}
window.addEventListener("load",render);
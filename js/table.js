async function render(){
    const reponse= await fetch("https://restcountries.com/v3.1/region/europe?fields=name,area,population,capital");
    const countries= await reponse.json();
    let content="";
    countries.forEach((country) => {
        content += `<tr>
                        <td class="fw-bold">${country.name.official}</td>
                        <td class="text-end">${country.area.toLocaleString('en-UK')}</td>
                        <td class="text-end">${country.population.toLocaleString('en-UK')}</td>
                        <td>${country.capital[0]}</td>
                    </tr>`;     
    });
    const tbody=document.querySelector("#tbody");
    tbody.innerHTML=content;
}
window.addEventListener("load",render);
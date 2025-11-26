// const map = L.map('mapid').setView([51.919437, 19.145136], 5);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1Ijoia2FydG9mZWxlazAwNyIsImEiOiJjanRpazhyM2owbHUwNDluem40Ynljdm5hIn0.kYoJkNni5ksRyA0gy1yV7A'
// }).addTo(map);

var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*--------------------------------------------------------------------------------------------------------
 !!! powyzszego nie ruszaj, to mapa wstawiona za pomocą leafletjs
 wzorowana na tutorialu ze strony: https://leafletjs.com/examples/quick-start/
 Skrypt pisz poniżej
 --------------------------------------------------------------------------------------------------------*/

const countrySelect = document.querySelector('#countrySelect');
const countryData = document.querySelector('#countryData');
const countryFlag = document.querySelector('#countryFlag');

fetch('https://restcountries.com/v3.1/all?fields=name')
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = country.name.common;
            countrySelect.appendChild(option);
        });
        countrySelect.disabled = false;
    })
    .catch(err => console.error(err));

countrySelect.addEventListener('change', function() {
    const countryName = this.value;
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            const country = data[0];
            countryFlag.src = country.flags.svg;
            countryData.innerHTML = `
                <h3 class="country-name">${country.name.common}</h3>
                <div>Stolica: <strong>${country.capital ? country.capital[0] : '---'}</strong></div>
                <div>Region: <strong>${country.region}</strong></div>
                <div>Podregion: <strong>${country.subregion}</strong></div>
                <div>Liczba ludności: <strong>${country.population.toLocaleString()}</strong></div>
                <div>Strefa czasowa: <strong>${country.timezones.join(', ')}</strong></div>
            `;
            if (country.latlng) {
                map.setView([country.latlng[0], country.latlng[1]], 5);
            }
        })
        .catch(err => console.error(err));
});

const map = document.querySelector('.map');

cities.forEach(city => {
    const a = document.createElement('a');
    a.href = city.href;
    a.classList.add('map-marker');
    a.dataset.name = city.name;
    a.dataset.population = city.population;
    a.style.left = city.map_x + 'px';
    a.style.top = city.map_y + 'px';
    a.textContent = city.name;

    map.appendChild(a);
});

const tooltip = document.createElement('div');
tooltip.classList.add('map-tooltip');
tooltip.style.left = '-9999px';
tooltip.style.top = '-9999px';
map.appendChild(tooltip);

const markers = document.querySelectorAll('.map-marker');

markers.forEach(marker => {
    marker.addEventListener('mouseover', e => {
        tooltip.innerHTML = `
            <h2>${marker.dataset.name}</h2>
            <div>Population: <strong>${marker.dataset.population}</strong></div>
        `;
        tooltip.style.display = 'block';
        tooltip.style.left = e.pageX + 30 + 'px';
        tooltip.style.top = e.pageY + 30 + 'px';
    });

    marker.addEventListener('mousemove', e => {
        tooltip.style.left = e.pageX + 30 + 'px';
        tooltip.style.top = e.pageY + 30 + 'px';
    });

    marker.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
        tooltip.innerHTML = '';
    });
});

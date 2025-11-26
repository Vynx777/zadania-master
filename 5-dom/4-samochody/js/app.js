document.querySelectorAll('.car-toggle-detail').forEach(carToggle => {
    carToggle.addEventListener('click', function(e) {
        const car = e.target.closest('.car');
        const detail = car.querySelector('.car-detail');

        detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
        carToggle.innerHTML = detail.style.display === 'block' ? 'schowaj detale' : 'pokaż detale';

       car.classList.toggle('car-show-detail');
    });
});
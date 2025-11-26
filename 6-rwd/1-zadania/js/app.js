const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const screenWidth = window.innerWidth;

    if (screenWidth >= 600) {
        if (scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    } else {
        header.classList.remove('sticky');
    }
});

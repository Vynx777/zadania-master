const element = document.querySelector('.element');

function updateElement() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width >= 600) {
        element.textContent = `${width}x${height}`;
        element.style.backgroundColor = 'red';
    } else {
        element.textContent = '';
        element.style.backgroundColor = 'blue';
    }
}

updateElement();

window.addEventListener('resize', updateElement);

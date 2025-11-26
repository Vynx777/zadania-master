//zadanie 1

const ul = document.querySelector('ul');
ul.classList.add('menu');

ul.querySelector('li:first-child').classList.add('first');
ul.querySelector('li:last-child').classList.add('last');

const third = ul.querySelectorAll('li')[2];
third.classList.add('active');
third.style.color = '#fff';

const links = ul.querySelectorAll('a');
links.forEach(a => {
    a.setAttribute('title', `Przejdź na stronę ${a.textContent}`);
    a.setAttribute('href', '#');

    a.addEventListener('click', function () {
        alert(`Kliknięto ${this.textContent}`);
    });
});

const activeLink = ul.querySelector('li.active a');
activeLink.replaceWith(activeLink.cloneNode(true));

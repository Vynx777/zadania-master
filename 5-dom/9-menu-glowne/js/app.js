const menu = document.querySelector('#menu');
menu.classList.add('menu');

const menuItems = menu.querySelectorAll('li');
const menuLinks = menu.querySelectorAll('a');

menuItems.forEach(li => {
    li.addEventListener('mouseenter', () => {
        menuItems.forEach(item => item.classList.remove('active'));
        li.classList.add('active');
    });
});

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        menuItems.forEach(item => {
            if(item !== this.parentElement){
                item.classList.add('collapsed');
                item.classList.remove('expand');
            }
        });
        const li = this.parentElement;
        li.classList.remove('collapsed');
        li.classList.add('expand');
        li.addEventListener('transitionend', elementTransitionEnd);
    });
});

function elementTransitionEnd(e) {
    const li = e.currentTarget;
    li.removeEventListener('transitionend', elementTransitionEnd);
    const link = li.querySelector('a');
    console.log(link.getAttribute('href'));

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close');
    closeBtn.textContent = 'Zamknij';
    li.appendChild(closeBtn);

    closeBtn.addEventListener('click', function() {
        menuItems.forEach(item => {
            item.classList.remove('expand');
            item.classList.remove('collapsed');
        });
        this.remove();
    });
}

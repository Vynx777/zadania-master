//zadanie 1

document.querySelectorAll('.nav-el').forEach(el => {
    el.children[0].addEventListener('click', (e) => {
        e.preventDefault();
    });

    el.addEventListener('click', () => {
        document.querySelectorAll('.nav-el-active').forEach(activeEl => {
            activeEl.classList.remove('nav-el-active');
        });
        el.classList.add('nav-el-active');
    });
});
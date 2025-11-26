const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const currentActive = document.querySelector('.nav-el-active');
        if (currentActive) {
            currentActive.classList.remove('nav-el-active');
        }

        this.parentElement.classList.add('nav-el-active');

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

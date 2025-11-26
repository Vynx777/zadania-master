document.querySelectorAll('.tab-el').forEach(tabEl => {
    tabEl.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-el-active').forEach(tabActive => {
            tabActive.classList.remove('tab-el-active');
        });

        tabEl.classList.add('tab-el-active');

        document.querySelectorAll('.tab-content').forEach(tabContent => {
            const id = tabEl.children[0].getAttribute('href').substring(1);
            
            if (tabContent.getAttribute('id') !== id) {
                tabContent.classList.remove('tab-content-active');
            } else {
                tabContent.classList.add('tab-content-active');
            }
        });
    });
});
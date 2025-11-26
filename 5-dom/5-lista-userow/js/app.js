const form = document.querySelector('.form');
const userList = document.querySelector('.user-list');

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    if (!name || !phone) return;

    const li = document.createElement('li');
    li.className = 'user';

    li.innerHTML = `
        <div class="user-data">
            <div class="user-name">${name}</div>
            <div class="user-phone">${phone}</div>
        </div>
        <button type="button" class="btn user-delete">Usuń</button>
    `;

    userList.appendChild(li);

    form.reset();
});

userList.addEventListener('click', usr => {
    if (usr.target.classList.contains('user-delete')) {
        usr.target.closest('.user').remove();
    }
});
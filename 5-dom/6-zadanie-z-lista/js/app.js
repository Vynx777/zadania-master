const addButton = document.querySelector('#add');
const list = document.querySelector('.list');

let counter = Number(list.children.length);

addButton.addEventListener('click', () => {
    counter++;

    const newItemString = `<h3 class="element-title">Element numer <span class="nr">${counter}</span></h3>
                <button class="clone">Clone</button>
                <button class="delete">Delete</button>`;
                
    let newItem = document.createElement('div');
    newItem.classList.add('element');
    newItem.innerHTML = newItemString;

    list.appendChild(newItem);
});

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.closest('.element').remove();
    }
   if (e.target.classList.contains('clone')) {
    const itemToClone = e.target.closest('.element');
    const clonedItem = itemToClone.cloneNode(true);

    list.appendChild(clonedItem);
}
});
    
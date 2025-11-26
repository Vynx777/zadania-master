//zadanie 1

document.querySelectorAll('.first-attempt').forEach(el => {
    el.classList.add('active');
});

//zadanie 2

for (const el of document.querySelectorAll('[data-border]')) {
    el.dataset.elActive = '';
}

//zadanie 3

document.querySelectorAll('.hack').forEach(el => {
    el.setAttribute('title', 'hacking');
});

//zadanie 4

document.querySelectorAll('.hijack').forEach(el => {
    el.removeAttribute('title');
});

//zadanie 5

document.querySelectorAll('.st1.st2').forEach(el => {
    el.style.color = 'red';
    el.style.fontSize = '15px';
});

//zadanie 6

document.querySelectorAll('.attrib').forEach(el => {
    el.setAttribute('data-hack-active', '');
    el.removeAttribute('data-hack-inactive');
});

//zadanie 7

document.querySelectorAll('.last-attempt span').forEach(span => {
    span.style.display = 'none';
});

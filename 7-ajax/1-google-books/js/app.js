const form = document.querySelector('.search-form');

function XmlHttpRequest(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            data.items.forEach(item => console.log(item.volumeInfo.title));
        } else {
            console.error('Błąd: ' + xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Błąd połączenia');
    };

    xhr.send();
}

function Fetch(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => console.log(item.volumeInfo.title));
        })
        .catch(err => console.error(err));
}

function Axios(url) {
    axios.get(url)
        .then(response => {
            response.data.items.forEach(item => console.log(item.volumeInfo.title));
        })
        .catch(error => {
            console.error('Błąd zapytania:', error);
        });
}

function JQuery(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            data.items.forEach(item => console.log(item.volumeInfo.title));
        },
        error: function(err) {
            console.error('Błąd zapytania:', err);
        }
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const search = document.querySelector('#search');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search.value}`;

    Fetch(url);
    XmlHttpRequest(url);
    Axios(url);
    JQuery(url);
});
const API_KEY = '53426204-99a5cfd55bb8f2443ff3bbad1';
const API_URL = 'https://pixabay.com/api/';
const PER_PAGE = 10;

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;
let totalPages = 0;

const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const galleryList = document.querySelector('.gallery-list');
const galleryBottom = document.querySelector('.gallery-bootom');

function initializePagination() {
    if (!document.getElementById('prev') && !document.getElementById('next')) {
        galleryBottom.innerHTML = `
            <button class="gallery-bottom-btn" id="prev" disabled>Poprzednie</button>
            <button class="gallery-bottom-btn" id="next" disabled>Następne</button>
        `;

        document.getElementById('prev').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                fetchAndDisplayImages(currentQuery, currentPage);
            }
        });

        document.getElementById('next').addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                fetchAndDisplayImages(currentQuery, currentPage);
            }
        });
    }
}

function updatePaginationButtons() {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentPage <= 1;
        nextBtn.disabled = currentPage >= totalPages || totalPages === 0;
        galleryBottom.style.display = totalHits > 0 ? 'flex' : 'none';
    }
}

function clearGalleryAndShowLoading() {
    galleryList.innerHTML = '<p>Ładowanie zdjęć...</p>';
    galleryBottom.style.display = 'none';
}

async function fetchAndDisplayImages(query, page) {
    if (!query) return;

    clearGalleryAndShowLoading();

    const url = `${API_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Błąd HTTP: ${response.status}`);
        }
        const data = await response.json();

        totalHits = data.totalHits;
        totalPages = Math.ceil(totalHits / PER_PAGE);

        displayImages(data.hits);
        updatePaginationButtons();
        
    } catch (error) {
        console.error("Błąd podczas pobierania zdjęć z Pixabay:", error);
        galleryList.innerHTML = `<p class="error-message">Wystąpił błąd podczas ładowania zdjęć: ${error.message}</p>`;
    }
}

function displayImages(images) {
    galleryList.innerHTML = '';

    if (images.length === 0) {
        galleryList.innerHTML = '<p>Nie znaleziono zdjęć pasujących do Twojego zapytania.</p>';
        return;
    }

    images.forEach(image => {
        const altText = image.tags || image.user;
        const largeImageURL = image.largeImageURL;
        const webformatURL = image.webformatURL;

        const link = document.createElement('a');
        link.href = largeImageURL;
        link.className = 'gallery-element';
        link.dataset.fslightbox = 'gallery-set';

        const img = document.createElement('img');
        img.src = webformatURL;
        img.className = 'gallery-image is-loading';
        img.alt = altText;
        
        img.onload = () => {
            img.classList.remove('is-loading');
        };

        link.appendChild(img);
        galleryList.appendChild(link);
    });
    
    if (typeof refreshFsLightbox === 'function') {
        refreshFsLightbox();
    }
}

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (query && query !== currentQuery) {
        currentQuery = query;
        currentPage = 1;
        fetchAndDisplayImages(currentQuery, currentPage);
    } else if (query === currentQuery && totalHits > 0) {
        return;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initializePagination();
});
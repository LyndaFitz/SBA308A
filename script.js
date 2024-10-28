import { fetchCats, searchCats } from './api.js';
import { displayCats, clearGallery, showLoading, hideLoading } from './ui.js';

const loadMoreButton = document.getElementById('loadMoreButton');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const gallery = document.getElementById('gallery');

let currentPage = 1;

async function loadCats() {
    showLoading();
    const cats = await fetchCats(currentPage);
    displayCats(cats);
    hideLoading();
    currentPage++;
    loadMoreButton.style.display = 'block';
}

loadMoreButton.addEventListener('click', loadCats);

searchButton.addEventListener('click', async () => {
    clearGallery();
    currentPage = 1; // Reset to first page
    const searchTerm = searchInput.value.trim();
    const cats = await searchCats(searchTerm);
    displayCats(cats);
});

// Initial load
loadCats();

const apiKey = 'live_52cwP0wGS5YSawXroZqOLcAjuEx9IuvsnVlJ5UGYtEyoh01nrnujl6UcyIS8lKNx';
const baseUrl = 'https://api.thecatapi.com/v1/images';

export async function fetchCats(page) {
    const response = await fetch(`${baseUrl}/search?limit=5&page=${page}&breed_ids=ragdoll`, {
        headers: { 'x-api-key': apiKey }
    });
    return await response.json();
}

export async function searchCats(query) {
    const response = await fetch(`${baseUrl}/search?breed_ids=ragdoll&limit=5`, {
        headers: { 'x-api-key': apiKey }
    });
    const allCats = await response.json();
    return allCats.filter(cat => cat.breeds[0]?.name.toLowerCase().includes(query.toLowerCase()));
}

export function displayCats(cats) {
    const gallery = document.getElementById('gallery');
    cats.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url;
        img.alt = 'A cute cat';
        img.className = 'catImage';
        gallery.appendChild(img);
    });
}

export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
}

export function showLoading() {
    document.getElementById('loadingGif').style.display = 'block';
}

export function hideLoading() {
    document.getElementById('loadingGif').style.display = 'none';
}


import { fetchRandomCat } from './api.js';  // Import the new function for random cats
import { displayCats, clearGallery, showLoading, hideLoading } from './ui.js';

const searchButton = document.getElementById('searchButton');
const gallery = document.getElementById('gallery');

// Fetch a random cat and display it
searchButton.addEventListener('click', async () => {
    clearGallery();  // Clear the gallery before displaying the new image
    showLoading();  // Show the loading spinner

    try {
        const cat = await fetchRandomCat();  // Fetch a random cat image
        displayCats([cat]);  // Display the fetched cat image (wrap in array to match displayCats API)
    } catch (error) {
        console.error('Error fetching random cat:', error);
    } finally {
        hideLoading();  // Hide the loading spinner once done
    }
});


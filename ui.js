// Display the fetched cats
export function displayCats(cats) {
    const gallery = document.getElementById('gallery');

    // Display each cat image in the gallery
    cats.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url;
        img.alt = 'A cute cat';
        img.className = 'catImage';
        gallery.appendChild(img);
    });
}

// Clear the gallery before displaying new results
export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Clears the gallery
}

// Show loading spinner
export function showLoading() {
    document.getElementById('loadingGif').style.display = 'block';  // Show the loading gif
}

// Hide loading spinner
export function hideLoading() {
    document.getElementById('loadingGif').style.display = 'none';  // Hide the loading gif
}




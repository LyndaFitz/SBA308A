const apiKey = 'live_52cwP0wGS5YSawXroZqOLcAjuEx9IuvsnVlJ5UGYtEyoh01nrnujl6UcyIS8lKNx';  // Use the provided API key
const baseUrl = 'https://api.thecatapi.com/v1/images';

// Fetch a random cat image
export async function fetchRandomCat() {
    try {
        const response = await fetch(`${baseUrl}/search?limit=1`, {
            headers: { 'x-api-key': apiKey }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const cats = await response.json();
        return cats[0];  // Return the first (and only) cat in the array
    } catch (error) {
        console.error('Error fetching random cat:', error);
        return null;
    }
}


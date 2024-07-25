async function fetchUKCities() {
    const username = 'addahadi'; // Replace with your GeoNames username
    const url = `http://api.geonames.org/searchJSON?country=GB&featureClass=P&maxRows=10&username=${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Extract city names
        return data.geonames;
    } catch (error) {
        console.error('Error fetching UK cities:', error);
        return null;
    }
}
export default fetchUKCities
// Initialize Leaflet map
const map = L.map('map').setView([0, 0], 2); // Set the initial center and zoom level

// Add a map tile layer (you can choose a different tile provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Example: Add a marker for a humanitarian aid distribution point
const aidMarker = L.marker([10, 45]).addTo(map);
aidMarker.bindPopup('Medicine and Water station');

// Example: Add more markers for additional distribution points
// Replace the coordinates and popup content as needed
L.marker([10, 10]).addTo(map).bindPopup('Medicine and Water station for Nigeria');
L.marker([-10, 30]).addTo(map).bindPopup('Medicine and Water station');
L.marker([15, 45]).addTo(map).bindPopup('Medicine and Water station');
L.marker([50, 30]).addTo(map).bindPopup('Ukraine Shelter');
L.marker([20.8, -156.3]).addTo(map).bindPopup('Maui Center For Shelter and Food');
L.marker([25.7, -81.3]).addTo(map).bindPopup('Idalia Relief Center');



// wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", async () => {

    // Create a map object
    var map = L.map('map').setView([48.2106344,16.3649081], 5);

    // Add an OSM basemap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Create a custom button control
    var customControl = L.Control.extend({
                options: {
                    position: 'topright' // Position of the button
                },
    
                onAdd: function (map) {
                    var container = L.DomUtil.create('div', 'leaflet-bar custom-button');
                    container.innerHTML = 'Where am I?';
                    
                    // Add click event to the button
                    container.onclick = function () {
                        alert('Button clicked!');
                    };
                    
                    return container;
                }
            });

        // Add the button control to the map
        map.addControl(new customControl());



});

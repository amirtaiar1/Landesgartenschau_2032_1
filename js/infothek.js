"use stricts";
function initialize() {
    let map = L.map('map').setView([48.4716556, 7.944378], 9);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    center: map,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(map);
    L.marker([47.9960901, 7.8494005]).bindPopup('Landesgartenschau 1986 in Freiburg im Breisgau').addTo(map),
    L.marker([48.338896, 7.8710825]).bindPopup('Landesgartenschau 2018 in Lahr').addTo(map),
    L.marker([48.56852819515478, 7.799598296341603]).bindPopup('Landesgartenschau 2004 in Kehl').addTo(map),
    L.marker([48.57580707448527, 7.774736102911195]).bindPopup('Landesgartenschau 2004 in Straßburg').addTo(map);
    L.marker([48.7580777, 8.2415239]).bindPopup('Landesgartenschau 1981 in Baden-Baden').addTo(map);

}


/*Standortzulassung*/
/*
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccurancy: true
})

function successLocation(position){
    console.log(position)
}
function errorLocation(){}
}
*/

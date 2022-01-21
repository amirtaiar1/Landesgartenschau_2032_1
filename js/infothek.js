"use stricts";
function initialize() {
let map = L.map('map').setView([48.225478  , 8.3852168], 9.5);

/*Kehl: 48.5728929  7.8109768

VS: 48.06034469604492 8.458127975463867
Freiburg: 48.7580777 8.2415239
*/

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);



var popup = L.popup()
    .setLatLng([48.5728929, 8.2415239])
    .setContent("Landesgartenschau 2004")
    .openOn(map);

var popup = L.popup()
    .setLatLng([48.7580777, 7.8109768])
    .setContent("Landesgartenschau 1986")
    .openOn(map);
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

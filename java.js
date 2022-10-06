//Wait for page to load, then add map
document.addEventListener('DOMContentLoaded', function () {
    //define map options. Center and zoom level
    var options = {
        center: [50.00, 0.00],
        zoom: 2
    }
    // Create new map, Using leaflet application
    var map = L.map('map', options);
    //chosing tile for map. 
    L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', { attribution: 'OSM' }).addTo(map);
    // create new icon to represent location on map. Defines properties such as color, size and shadow
    var greenIcon = new L.Icon({
        iconUrl: './location-pin.png',
        iconSize: [40],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [0, 0]
    });
    // for each object in "myArr"- contains information on image name and location:
    for (i = 0; i < myArr.length; i++) {
        //creates a new marker on the map on the lat. and lon. retrived from the API
        var marker = new L.Marker([myArr[i]["coordLat"], myArr[i]["coordLong"]], { icon: greenIcon }).addTo(map);
        // creates new popUp when the marker is clicked. Inside display image, and the autor
        var popupContent = '<img src="Images\\' + myArr[i]["image"] + '" height=auto width=200px>'
        //binds popUp to marker
        marker.bindPopup(popupContent);
    }
});
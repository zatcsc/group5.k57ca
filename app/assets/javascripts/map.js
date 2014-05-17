/* Constants declaration*/
var HANOI_LONGITUDE = 105.85;
var HANOI_LATITUDE = 21.011111;
var GOOD_ZOOM_LEVEL = 17;
var MAP_ICON_SIZE = new google.maps.Size(71, 71);
var SCALED_MAP_ICON_SIZE = new google.maps.Size(35, 35);
var HANOI_CENTER = new google.maps.LatLng(HANOI_LATITUDE, HANOI_LONGITUDE);
var ROADMAP = google.maps.MapTypeId.ROADMAP;
var GOOD_MARKER_ANCHOR_POINT = new Point(0, -29);
/* End constants */

function MapIcon(url, size, origin, anchor, scaledSize) {
    this.url = url;
    this.size = size;
    this.origin = origin;
    this.anchor = anchor;
    this.scaledSize = scaledSize;
}

function MapOption(center, mapTypeId, zoom) {
    this.center = center;
    this.mapTypeId = mapTypeId;
    this.zoom = zoom;
}
function Point(x, y) {
    return new google.maps.Point(x, y);
}
function respondToPlaceChange(map, infoWindow, marker, autocomplete) {
    infoWindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
        return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
    } else {
        map.setCenter(place.geometry.location);
        map.setZoom(GOOD_ZOOM_LEVEL);
        console.log(place.geometry.location);
    }
    var placeIcon = new MapIcon(place.icon, MAP_ICON_SIZE, new Point(0, 0), new Point(17, 34), SCALED_MAP_ICON_SIZE);
    marker.setIcon(placeIcon);
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    var address = '';
    if (place.address_components) {
        address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
    }
    infoWindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infoWindow.open(map, marker);
}

var hanoiMap;
function initializeMap(whereToPlace, searchBox) {
    var mapOptions = new MapOption(HANOI_CENTER, ROADMAP, GOOD_ZOOM_LEVEL);
    hanoiMap = new google.maps.Map(document.getElementById(whereToPlace), mapOptions);

    var input = document.getElementById(searchBox);
    // var startInput = document.getElementById("start-place");
    // var endInput = document.getElementById("end-place");

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', hanoiMap);

    var infoWindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({ map: hanoiMap, anchorPoint: GOOD_MARKER_ANCHOR_POINT });

    google.maps.event.addListener(autocomplete, 'place_changed',
        function () {
            respondToPlaceChange(hanoiMap, infoWindow, marker, autocomplete);
        });
    // Autocomplete.
    autocomplete.setTypes([]);
}

var jamLat = [];
var jamLgn = [];
var jamReason = [];
var jamMarkerList = [];

function showJam() {
    jamMarkerList = [];
    for (var i = 0; i < jamLat.length; i++) {
        var JamMarker = new google.maps.Marker({
            position: new google.maps.LatLng(jamLat[i], jamLgn[i]),
            title: jamReason[i],
            icon: "/assets/traffic-information.png"
        });
        jamMarkerList.push(JamMarker);
        jamMarkerList[i].setMap(hanoiMap);
    }
}

function hideJam() {
    for (var i = 0; i < jamLat.length; i++) {
        jamMarkerList[i].setMap(null);
    }
    jamMarkerList = [];
}
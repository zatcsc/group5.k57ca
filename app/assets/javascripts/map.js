var map;
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(21.011111, 105.85),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var input = /** @type {HTMLInputElement} */(
		document.getElementById('pac-input'));
	var startInput = document.getElementById("start-place");
	var endInput = document.getElementById("end-place");

	var autocomplete = new google.maps.places.Autocomplete(input);

	autocomplete.bindTo('bounds', map);

	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({
		map : map,
		anchorPoint : new google.maps.Point(0, -29)
	});

	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		infowindow.close();
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
			map.setZoom(17);
			// Why 17? Because it looks good.
			console.log(place.geometry.location);
		}
		marker.setIcon(/** @type {google.maps.Icon} */( {
			url : place.icon,
			size : new google.maps.Size(71, 71),
			origin : new google.maps.Point(0, 0),
			anchor : new google.maps.Point(17, 34),
			scaledSize : new google.maps.Size(35, 35)
		}));
		marker.setPosition(place.geometry.location);
		marker.setVisible(true);

		var address = '';
		if (place.address_components) {
			address = [(place.address_components[0] && place.address_components[0].short_name || ''), (place.address_components[1] && place.address_components[1].short_name || ''), (place.address_components[2] && place.address_components[2].short_name || '')].join(' ');
		}

		infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
		infowindow.open(map, marker);
	});

	// Autocomplete.
	autocomplete.setTypes([]);

}

var jamLat = [];
var jamLgn = [];
var jamMarkerList = [];

function showJam() {
	jamMarkerList = [];
	for (var i = 0; i < jamLat.length; i++) {
		var JamMarker = new google.maps.Marker({
			position : new google.maps.LatLng(jamLat[i], jamLgn[i]),
			title : "Tắc ở đây :v",
			icon : "/assets/jam1.png"
		});
		jamMarkerList.push(JamMarker);
		jamMarkerList[i].setMap(map);
	}
}

function hideJam() {
	for (var i = 0; i < jamLat.length; i++) {
		jamMarkerList[i].setMap(null);
	}
	jamMarkerList = [];
}
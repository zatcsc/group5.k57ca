var markerArray = [];
var chosenVehicleType = 0;
var start;
var end;

function initializeRouteDirection() {
	var startInput = document.getElementById("start-place");
	var endInput = document.getElementById("end-place");
	var autocompleteStartInput = new google.maps.places.Autocomplete(startInput);
	var autocompleteEndInput = new google.maps.places.Autocomplete(endInput);
	google.maps.event.addListener(autocompleteStartInput, 'place_changed', function() {
		start = autocompleteStartInput.getPlace().geometry.location;
	});
	google.maps.event.addListener(autocompleteEndInput, 'place_changed', function() {
		end = autocompleteEndInput.getPlace().geometry.location;
	});
}

function attachInstructionText(marker, text) {
	google.maps.event.addListener(marker, 'click', function() {
		// Open an info window when the marker is clicked on,
		// containing the text of the step.
		stepDisplay.setContent(text);
		stepDisplay.open(hanoiMap);
	});
}

function showSteps(directionResult) {
	// For each step, place a marker, and add the text to the marker's
	// info window. Also attach the marker to an array so we
	// can keep track of it and remove it when calculating new
	// routes.
	var myRoute = directionResult.routes[0].legs[0];

	for (var i = 0; i < myRoute.steps.length; i++) {
		var marker = new google.maps.Marker({
			position : myRoute.steps[i].start_location,
			map : hanoiMap
		});
		attachInstructionText(marker, myRoute.steps[i].instructions);
		markerArray[i] = marker;
	}
}

function calcRoute() {
	// Instantiate a directions service.
	var directionsService = new google.maps.DirectionsService();
	// Create a renderer for directions and bind it to the map.
	var rendererOptions = {
		map : hanoiMap
	};
	var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

	// Instantiate an info window to hold step text.
	var stepDisplay = new google.maps.InfoWindow();

	// First, remove any existing markers from the map.
	for (var i = 0; i < markerArray.length; i++) {
		markerArray[i].setMap(null);
	}

	// Now, clear the array itself.
	markerArray = [];

	var request = {
		origin : start,
		destination : end,
		travelMode : google.maps.TravelMode[TRAVEL_MODES[chosenVehicleType]]
	};

	// Route the directions and pass the response to a
	// function to create markers for each step.
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			var warnings = document.getElementById('warnings_panel');
			warnings.innerHTML = '<b>' + response.routes[0].warnings + '</b>';
			directionsDisplay.setDirections(response);
			showSteps(response);
		}
	});
}

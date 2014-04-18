var chosenVehicleType=0;
var vehicleType= new Array("car","bus","bike","walk");
var travelMode = new Array("DRIVING","TRANSIT","BICYCLING","WALKING")	
var autocompleteStartInput;
var autocompleteEndInput;
$(document).ready(function(){
	
	$(".vehicle-type").click(function(){		
		var chosenClass = ".vehicle-"+vehicleType[chosenVehicleType];		
		var iconUrl = "url('../assets/"+vehicleType[chosenVehicleType]+"1.png')";
		$(chosenClass).css("background-image",iconUrl);
		if ( $(this).hasClass("vehicle-car") ){
			chosenVehicleType=0;
		} else 
		if ( $(this).hasClass("vehicle-bus") ){
			chosenVehicleType=1;
		} else 
		if ( $(this).hasClass("vehicle-bike") ){
			chosenVehicleType=2;
		} else 		
		if ( $(this).hasClass("vehicle-walk") ){
			chosenVehicleType=3;
		} 				
		var chosenClass = ".vehicle-"+vehicleType[chosenVehicleType];		
		var iconUrl = "url('../assets/"+vehicleType[chosenVehicleType]+"2.png')";		
		$(chosenClass).css("background-image",iconUrl);				
	});
  $(".findroute").click(function(){
    initializeRouteDirection();
  });
	$(".show-btn").click(function(){				
		calcRoute();
	});

});

var directionsDisplay;
var directionsService;
var stepDisplay;
var markerArray = [];

function initializeRouteDirection() {
  var startInput = document.getElementById("start-place");
  var endInput = document.getElementById("end-place");
  autocompleteStartInput = new google.maps.places.Autocomplete(startInput)
  autocompleteEndInput = new google.maps.places.Autocomplete(endInput)
  // Instantiate a directions service.
  directionsService = new google.maps.DirectionsService();

  // Create a renderer for directions and bind it to the map.
  var rendererOptions = {
    map: map
  }
  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)

  // Instantiate an info window to hold step text.
  stepDisplay = new google.maps.InfoWindow();
}

function calcRoute() {

  // First, remove any existing markers from the map.
  for (var i = 0; i < markerArray.length; i++) {
    markerArray[i].setMap(null);
  }

  // Now, clear the array itself.
  markerArray = [];

  // Retrieve the start and end locations and create
  var start = autocompleteStartInput.getPlace().geometry.location;
  var end = autocompleteEndInput.getPlace().geometry.location;    
  var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode[travelMode[chosenVehicleType]]
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

function showSteps(directionResult) {
  // For each step, place a marker, and add the text to the marker's
  // info window. Also attach the marker to an array so we
  // can keep track of it and remove it when calculating new
  // routes.
  var myRoute = directionResult.routes[0].legs[0];

  for (var i = 0; i < myRoute.steps.length; i++) {
    var marker = new google.maps.Marker({
      position: myRoute.steps[i].start_location,
      map: map
    });
    attachInstructionText(marker, myRoute.steps[i].instructions);
    markerArray[i] = marker;
  }
}

function attachInstructionText(marker, text) {
  google.maps.event.addListener(marker, 'click', function() {
    // Open an info window when the marker is clicked on,
    // containing the text of the step.
    stepDisplay.setContent(text);
    stepDisplay.open(map, marker);
  });
}


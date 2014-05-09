var ready = function(){
	for (var i=0; i<IMPLEMENTED_FEATURE; ++i){
		/*html element*/
		var currentClass = ".panel-heading."+FEATURES[i];		
		currentFeatureEl = $(currentClass);				
		var currentIconUrl ="url('../assets/"+FEATURES[i]+".png')";				
		currentFeatureEl.css("background-image",currentIconUrl);
		currentFeatureEl.css("background-repeat","no-repeat");		
		currentFeatureEl.css("background-position","10% 50%");		
		currentFeatureEl.css("background-size","45px 40px");									
	}	
	for (var i=0; i<VEHICLE_TYPES.length; i++){
		var currentClass = ".vehicle-type."+VEHICLE_TYPES[i];		
		var currentVehicleEl = $(currentClass);				
		var currentIconUrl ="url('../assets/"+VEHICLE_TYPES[i]+".png')";	
		currentVehicleEl.css("background-image",currentIconUrl);
		currentVehicleEl.css("background-size","50% 100%");
		currentVehicleEl.css("background-position","center");
		currentVehicleEl.css("background-repeat","no-repeat");		
		currentVehicleEl.css("width","25%");		
		currentVehicleEl.css("height","100%");						
	}


	$('.panel-heading').mouseenter(function(event) {		
		var oldBackgroundImage = $(this).css('background-image');
		var dividerIndex = oldBackgroundImage.lastIndexOf(".");		
		var newBackgroundImage = oldBackgroundImage.substring(0,dividerIndex)+"-expand.png)";		
		$(this).css('background-image',newBackgroundImage);
	});
	$('.panel-heading').mouseleave(function(event){
		var oldBackgroundImage = $(this).css('background-image');
		var dividerIndex = oldBackgroundImage.lastIndexOf("-");		
		var newBackgroundImage = oldBackgroundImage.substring(0,dividerIndex)+".png)";		
		$(this).css('background-image',newBackgroundImage);		
	});	
	$('.vehicle-type').on('click',function(event) {		
		var oldChoosenVehicle = $('.'+VEHICLE_TYPES[chosenVehicleType]);			
		oldChoosenVehicle.css('background-image',
			"url('../assets/"+VEHICLE_TYPES[chosenVehicleType]+".png')")				
		for (var i=0; i< VEHICLE_TYPES.length;++i)	
			if ( $(this).hasClass(VEHICLE_TYPES[i]) ){				
				chosenVehicleType=i;				
				$(this).css('background-image',"url('../assets/"+VEHICLE_TYPES[i]+"-clicked.png')")
				break;				
			}

	});
	$('.find-route').on('click',function(event){
		initializeRouteDirection();
	});
	$('.find-btn').on('click',function(event){
		calcRoute();
	});	
	$('.panel-title').css('margin-left','25%');
}
var IMPLEMENTED_FEATURE = 3;
$(document).ready(ready) ;
$(document).on('page:load',ready)

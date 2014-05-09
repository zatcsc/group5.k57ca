var weatherReady = function(){
	$(".weather-select-box").change(function(event) {
		/* Act on the event */
		var weather_value = $(".weather-select-box option:selected").val(); 		
		// alert(weather_value);
		$.ajax({
  			type: "POST",
  			url: "/weather",
  			data: { city_id: weather_value}
		})
		.done(function( html ) {
    		$('.current-weather').html("");
    		$('.current-weather').html(html);
  		});		
    });	
}
$(document).ready(weatherReady) ;
$(document).on('page:load',weatherReady);

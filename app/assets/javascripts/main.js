$(document).ready(function() {
	
	$(".panel-heading").mouseover(function() {
		$(this).addClass('mouseover');
	}).mouseout(function() {
		$(this).removeClass('mouseover');
	});

	$(".panel-heading").click(function(e) {
		e.preventDefault();
		//prevent the link from actually navigating somewhere
		$(this).toggleClass("clicked");
		$(".panel-heading").not(this).removeClass("clicked");
		//remove the clicked class from all other elements
	});
});

$(window).load(function() {
	$.asm = {};
	$.asm.panels = 2;

	function sidebar(panels) {
		$.asm.panels = panels;
		if (panels === 1) {
			$('#sidebar').hide();
			$('#map').removeClass('col-md-9');
			$('#map-canvas').width($('#map-canvas').parent().width());
			$('#map-canvas').height($(window).height() - 120);
		} else if (panels === 2) {
			$('#map').addClass('col-md-9');
			$('#sidebar').show();
			$('#map-canvas').width($('#map-canvas').parent().width());
			
			return google.maps.event.trigger($.asm.theMap, 'resize');
		}
	};

	$('#toggleSidebar').click(function() {
		if ($.asm.panels === 1) {
			$('#toggleSidebar i').addClass('glyphicon-chevron-left');
			$('#toggleSidebar i').removeClass('glyphicon-chevron-right');
			return sidebar(2);
		} else {
			$('#toggleSidebar i').removeClass('glyphicon-chevron-left');
			$('#toggleSidebar i').addClass('glyphicon-chevron-right');
			return sidebar(1);
		}
	});

	$(function() {
		$.asm.theMap = new google.maps.Map(document.getElementById('map-canvas'));
	});
});

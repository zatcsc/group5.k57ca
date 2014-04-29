$(document).ready(function() {
	$.asm = {};
	$.asm.status = 1;

	$('#traffic-button').click(function() {
		if ($.asm.status === 1) {
			document.getElementById('traffic-button').childNodes[0].nodeValue = "Show";
			$.asm.status = 0;
			return hideJam();

		} else {
			document.getElementById('traffic-button').childNodes[0].nodeValue = "Hide";
			$.asm.status = 1;
			return showJam();
		}
	});
});

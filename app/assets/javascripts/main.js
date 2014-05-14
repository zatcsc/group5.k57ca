$(window).load(function () {
    $.asm = {};
    $.asm.panels = 2;
    $.asm.status = 0;

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

        }
        return google.maps.event.trigger(hanoiMap, 'resize');
    };

    $('#toggleSidebar').click(function () {
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

    $('#traffic-button').click(function () {
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

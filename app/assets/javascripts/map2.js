var map;
function initialize2() {
  
  var myLatlng = new google.maps.LatLng(21.0382600, 105.7824130);
  var mapOptions = {
    zoom: 17,
    center: myLatlng
  };
  var map = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Đại học Công Nghệ - Đại học Quốc Gia Hà Nội"
  });

// To add the marker to the map, call setMap();
  marker.setMap(map);
}
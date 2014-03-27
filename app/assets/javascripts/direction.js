/**
 * Created by thanhpd on 3/19/14.
 */
var checkdebalinfor = 0;

inforwindow = new google.maps.InfoWindow();
markerselected = new google.maps.Marker({ map: map, animation: google.maps.Animation.DROP, icon: "images/ChamMarker.png" });

function kichhoatinforwindow() {
    if (checkdebalinfor == 0) {
        inforwindow.setMap(map);
        inforwindow.open(map);
        checkdebalinfor = 1;
    }
}

function searchmapbyaddress() {
    exit_menu();
    var address = $("#txtfindplace").val();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            addcontenttomarker(results[0].geometry.location);
        }
        else {
            alert("Không Tìm Thấy Bất Cứ Dữ Liệu Nào");

        }
    });
}

function addcontenttomarker(latlng) {
    inforwindow.setMap(map);
    markerselected.setMap(map);

    markerselected.setPosition(latlng);
    var str = "";

    kichhoatinforwindow();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //inforwindow.setContent('<div class="above_inforwindow"><b>' + results[0].formatted_address + '</b></div>');
            //            inforwindow.setContent('<div class="above_inforwindow"><b>' + results[0].formatted_address + '</b></div><div class="below_select"><a onclick="showdirectionto(markerselected)" class="infor_a"> Chỉ Đường </a><a onclick="showsearchnear(this,markerselected)" class="infor_a">Tìm Kiếm Lân Cận </a></div>');
            //            inforwindow.position = this.getPosition();
            //            inforwindow.open(map, markerselected);
            str = results[0].formatted_address;
            inforwindow.setContent('<div class="above_inforwindow"><b>' + str + '</b></div><div class="below_select"><a  class="infor_a" onclick="frompointrightclick(markerselected)"> Từ Đây </a><a  class="infor_a" onclick="topointrightclick(markerselected)"> Đến Đây </a><a onclick="showsearchnear(this,markerselected)" class="infor_a">Tìm Kiếm Lân Cận </a></div>');
            inforwindow.position = latlng;
            inforwindow.open(map);
        }
        else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
    google.maps.event.addListener(markerselected, 'click', function (e) {
        inforwindow.setContent('<div class="above_inforwindow"><b>' + str + '</b></div><div class="below_select"><a  class="infor_a" onclick="frompointrightclick(markerselected)"> Từ Đây </a><a  class="infor_a" onclick="topointrightclick(markerselected)"> Đến Đây </a><a onclick="showsearchnear(this,markerselected)" class="infor_a">Tìm Kiếm Lân Cận </a></div>');
        inforwindow.position = this.getPosition();
        inforwindow.open(map);

    });
}

/**
 * Created by aamir on 2016-11-29.
 */
var startlat;
var startlong;
var startlatlng;
var endlat;
var endlong;
var endlatlng;


var directionsService;
var directionsDisplay;
var geocoder;
function display() {
    
    directionsDisplay = new google.maps.DirectionsRenderer;
    directionsService = new google.maps.DirectionsService;

/*
    start = document.getElementById("start").value;
    end = document.getElementById("end").value;
*/
    geocoder = new google.maps.Geocoder();


    directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'WALKING'
    }, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: {lat: 41.85, lng: -87.65}
            });
            directionsDisplay.setMap(map);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

display();

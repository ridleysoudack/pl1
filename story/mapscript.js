function initMap() {
    const styledMapType = new google.maps.StyledMapType( //Styling based on: https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple
        [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#c9b2a6" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "geometry.stroke",
            stylers: [{ color: "#dcd2be" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ae9e90" }],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ "visibility": "off" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#a5b076" }],
        },
        {
            "featureType": "poi.attraction",
            "elementType": "labels",
            "stylers": [{ visibility: "on"}]
        },
        {
            "featureType": "poi.attraction",
            "elementType": "labels.icon",
            "stylers": [{ "color": "#CC5500"}]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#f5f1e6" }],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#fdfcf8" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#f8c967" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e9bc62" }],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{ color: "#e98d58" }],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [{ color: "#db8555" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#806b63" }],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "transit.line",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8f7d77" }],
        },
        {
            featureType: "transit.line",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ebe3cd" }],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#b9d3c2" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#92998d" }],
        },
        ],
        { name: "Map" }
    );
    
    const map = new google.maps.Map(document.getElementById("mapdiv"), {
        center: { lat: 34.685025, lng: 135.493161 },
        zoom: 14,
        mapTypeControlOptions: {
            mapTypeIds: ["styled_map", "satellite"]
        },
    });
    const legend = document.getElementById("legend");
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend) //Set up and align legend box on map, based on: https://developers.google.com/maps/documentation/javascript/adding-a-legend

    var directionsService = new google.maps.DirectionsService(); // Establish Directions service and renderer for direction generation.
    var directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: { //Set options for directions polyline
            strokeColor: "FireBrick",
            strokeWeight: 5
        },
        suppressMarkers: true,
    });
    directionsRenderer.setPanel(document.getElementById('directionsPanel')) //Set div to contain directions to each restaurant 
    map.mapTypes.set("styled_map", styledMapType); //Apply map styling
    map.setMapTypeId("styled_map");

    const locations = [
    { lat: 34.679607, lng: 135.513404}, // Yakiniku Rokko
    { lat: 34.695231, lng: 135.488685}, // La Pizza Napoletana Regalo
    { lat: 34.687181, lng: 135.465762}, // Hakata Daughter (Ramen)
    { lat: 34.673564, lng: 135.502885}, // Kani Kani Kani
    { lat: 34.668810, lng: 135.501491}, // Mizuno
    { lat: 34.696909, lng: 135.497403} // Monji Sushi
    ];
    const contentStrings = [
        '<div id="content">' +
        '<h3>Yakiniku Rokko</h3>' +
        '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>' +
        "<p><b>Yakiniku Rokko</b> offers premium Japanese all-you-can-eat barbecue," +
        "unmatched in downtown Osaka. If you go to one restaurant on this list, go here.</p>" +
        "</div>",

        '<div id="content">' +
        '<h3>La Pizza Napoletana Regalo</h3>' +
        '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>' +        
        "<p><b>Yakiniku Rokko</b> offers premium Japanese all-you-can-eat barbecue," +
        "unmatched in downtown Osaka. If you go to one restaurant on this list, go here.</p>" +
        "</div>",

        '<div id="content">' +
        "<h3>Hakata's Daughter</h3>" +
        '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i>' +
        "<p><b>Yakiniku Rokko</b> offers premium Japanese all-you-can-eat barbecue," +
        "unmatched in downtown Osaka. If you go to one restaurant on this list, go here.</p>" +
        "</div>",

        '<div id="content">' +
        '<h3>Mizuno</h3>' +
        '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i>' +
        "<p> unmatched in downtown Osaka. If you go to one restaurant on this list, go here.</p>" +
        "</div>",

        '<div id="content">' +
        '<h3>Kanibugyou Nanba</h3>' +
        '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i>' +
        "<p>unmatched in downtown Osaka. If you go to one restaurant on this list, go here.</p>" +
        "</div>",

        '<div id="content">' +
        '<h3>Monji Sushi</h3>' +
        '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i>' +
        "<p><b>Yakiniku Rokko</b> offers premium Japanese all-you-can-eat barbecue," +
        "unmatched in downtown Osaka. If you go to one restaurant on this list, go here.</p>" +
        "</div>",
    ];
    const mapicon = "images/staricon.png"; // Custom Marker image icon code based on: https://developers.google.com/maps/documentation/javascript/examples/icon-simple#maps_icon_simple-javascript
    const markers = locations.map((location) => {
        return new google.maps.Marker({
            position: location,
            map,
            icon: mapicon,
            animation: google.maps.Animation.DROP,
        });
    });
    const windows = contentStrings.map((contentString) =>{
        return new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 300,
        });
    });

    const origin = { lat: 34.702626, lng: 135.495950 }; //Set origin for generated path on map.
    for (let i = 0; i < markers.length; i++){
        markers[i].addListener("click", () => {
            windows.forEach(window => window.close()) // Closes all open windows when new marker is clicked.
            markers[i].setAnimation(google.maps.Animation.BOUNCE)
            windows[i].open({
                anchor: markers[i],
                map,
                shouldFocus: false,
            });
            setTimeout(() => {
                markers[i].setAnimation(null);
            }, 500);
            latLng = markers[i].getPosition(); //Gets marker position for use in route generation
            stationRoute(origin, latLng, directionsService, directionsRenderer);
        });
    };

};
function stationRoute(start, finish, dirServ, dirRend) { // This function generates a walking route from a start point to a finish point, based on: https://developers.google.com/maps/documentation/javascript/examples/directions-simple
    var request = {
        origin: start,
        destination: finish,
        travelMode: 'DRIVING', //I was really hoping to give transit directions but unfortunately this seems to be a long-standing ommision in the Directions API: https://developers.google.com/maps/faq#transit_directions_countries
    };
    dirServ.route(request, function(result, status) {
        if (status == 'OK') {
            dirRend.setDirections(result);
        };
    });
};
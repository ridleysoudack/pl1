function initMap() {
    const styledMapType = new google.maps.StyledMapType( //Styling tweaked from: https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple
        [
        { 
            elementType: "geometry", 
            stylers: [{ color: "#ebe3cd" }] 
        },
        {
            elementType: "labels.text.fill", 
            stylers: [{ color: "#523735" }] 
        },
        { 
            elementType: "labels.text.stroke", 
            stylers: [{ color: "#f5f1e6" }] 
        },
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
            featureType: "poi.attraction",
            elementType: "labels",
            stylers: [{ visibility: "on"}]
        },
        {
            featureType: "poi.attraction",
            elementType: "labels.icon",
            stylers: [{ "color": "#CC5500"}]
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
    var directionsRenderer = new google.maps.DirectionsRenderer({ //Directions code based on combination of examples from here & more from reference documents: https://developers.google.com/maps/documentation/javascript/directions
        map: map,
        polylineOptions: { //Set options for directions polyline
            strokeColor: "FireBrick",
            strokeWeight: 5
        },
        suppressMarkers: true,
    });
    directionsRenderer.setPanel(document.getElementById('directionsPanel')) //Set div to contain directions to each restaurant 

    map.mapTypes.set("styled_map", styledMapType); //Apply map styling (template linked above)
    map.setMapTypeId("styled_map");

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
        return new google.maps.InfoWindow({ //Info window code roughly based off of: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
            content: contentString,
            maxWidth: 300,
        });
    });

    const origin = { lat: 34.702626, lng: 135.495950 }; //Set origin for generated path on map to Osaka station.
    for (let i = 0; i < markers.length; i++){
        markers[i].addListener("click", () => { //This listener handles marker animation, info windows, and direction route generation
            windows.forEach(window => window.close()) // Closes all open windows when new marker is clicked.
            markers[i].setAnimation(google.maps.Animation.BOUNCE) //Animation code based on: https://developers.google.com/maps/documentation/javascript/examples/marker-animations
            windows[i].open({ //Open window when marker is clicked
                anchor: markers[i],
                map,
                shouldFocus: false,
            });
            setTimeout(() => { //Turn off marker animation after a single bounce
                markers[i].setAnimation(null);
            }, 500);
            latLng = markers[i].getPosition(); //Gets marker position for use in route generation
            stationRoute(origin, latLng, directionsService, directionsRenderer); //Generate direction line and text instructions when marker clicked
        });
    };

};

function stationRoute(start, finish, dirServ, dirRend) { // This function generates a driving route from a start point to a finish point, based on: https://developers.google.com/maps/documentation/javascript/examples/directions-simple
    var request = {
        origin: start,
        destination: finish,
        travelMode: 'DRIVING', //I was really hoping to give transit directions but unfortunately this seems to be a long-standing ommision in the Directions API for Japan: https://developers.google.com/maps/faq#transit_directions_countries
    };
    dirServ.route(request, function(result, status) {
        if (status == 'OK') {
            dirRend.setDirections(result);
        };
    });
};

const locations = [
    { lat: 34.679607, lng: 135.513404}, // Yakiniku Rokko
    { lat: 34.695231, lng: 135.488685}, // La Pizza Napoletana Regalo
    { lat: 34.692155, lng: 135.473997}, // Hakata Daughter (Ramen)
    { lat: 34.673564, lng: 135.502885}, // Kani Kani Kani
    { lat: 34.668810, lng: 135.501491}, // Mizuno
    { lat: 34.696909, lng: 135.497403} // Monji Sushi
];

const contentStrings = [
    '<div id="content">'+
    '<h3>Yakiniku Rokko</h3>'+
    '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>'+
    "<p><b>Yakiniku Rokko</b> offers premium Japanese all-you-can-eat barbecue,"+
    "unmatched in downtown Osaka. If you go to one restaurant on this list, go here.</p>"+
    "</div>",

    '<div id="content">'+
    '<h3>La Pizza Napoletana Regalo</h3>'+
    '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>'+        
    "<p><b>La Pizza Napoletana Regalo</b> is a one-man show that rivals the finest pizzerias in Naples. No, I am not exaggerating."+
    "Come on in, grab yourself a beer from the cooler and yell over to the chef to let him know what kind of pizza you would like. A one of a kind experience.</p>"+
    "</div>",

    '<div id="content">'+
    "<h3>Hakata's Daughter</h3>"+
    '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i>'+
    "<p>Tired from a day's work? You need ramen. Early morning grogginess? Get some ramen. Hungover? Definitely ramen."+ 
    "<b>Hakata's Daughter</b> is here for you in all situations, serving up truly authentic greasy spoon ramen all night and day. </p>"+
    "</div>",

    '<div id="content">' +
    '<h3>Mizuno</h3>' +
    '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i>'+
    "<p>In Osaka, okonomiyaki is king. These savoury pancakes are the ultimate West Japan comfort food,"+ 
    " and nobody does comfort like <b>Mizuno</b>. Just get here early or be prepared to wait in line!</p>"+
    "</div>",

    '<div id="content">' +
    '<h3>Kanibugyou Nanba</h3>' +
    '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i>'+
    "<p>Do you like crab? Can you really answer that question if you haven't eaten in a 4 story crab-restaurant complex"+
    " that, despte its size, still has lines down the street come dinner time? <b>Kanibugyou</b> will help you find that answer.</p>"+
    "</div>",

    '<div id="content">' +
    '<h3>Monji Sushi</h3>' +
    '<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i>'+
    "<p>Look, I'm sticking my neck out there on this one. Everyone has a favourite sushi place, and for me, that's <b>Monji Sushi</b>."+
    "Ultimately, not everyone will agree. But the staff at Monji is friendly, the fish is unbelievably fresh, and what more do you need?</p>"+
    "</div>",
];
/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.
   
   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

$(document).ready(function() {

  var mymap = L.map('map-container').setView([33.812142, -117.918625], 18);
  L.tileLayer(' https://api.mapbox.com/styles/v1/agent1red/ciuxhyam800972iphfaydyp1w/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.mapbox-streets-v7',
    accessToken: 'pk.eyJ1IjoiYWdlbnQxcmVkIiwiYSI6ImNpdXhnZzRoeDA0amYyeW4wcGpoaTBoOHQifQ.b_neNrsCyLsE5xtH4684TQ'
  }).addTo(mymap);

  var marker = L.marker([33.812142, -117.918625])
   .addTo(mymap);
  
    var marker1 = L.marker([33.812100, -117.918306])
   .addTo(mymap);
  
  var marker2 = L.marker([33.812100, -117.918969])
    .addTo(mymap)
    .bindPopup("<b>Disneyland</b><br>Disneyland Park")
    .openPopup();

 
});
/* Kevin Hudson WATS 3020 - 2016
*/

// Ready handler 
$(document).ready(function() {

  // default street layer leaflet
  var defaultLayer = L.tileLayer(' https://api.mapbox.com/styles/v1/agent1red/ciuxved1h00k42iqo6qa4j2hm/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,                         Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.mapbox-streets-v7',
      accessToken: 'pk.eyJ1IjoiYWdlbnQxcmVkIiwiYSI6ImNpdXhnZzRoeDA0amYyeW4wcGpoaTBoOHQifQ.b_neNrsCyLsE5xtH4684TQ'
    })
    // Satellite map layer leaflet
  var satLayer = L.tileLayer(' https://api.mapbox.com/styles/v1/agent1red/ciuxunchx00k02irrn1fugksv/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,                         Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.mapbox-terrain-v2',
    accessToken: 'pk.eyJ1IjoiYWdlbnQxcmVkIiwiYSI6ImNpdXhnZzRoeDA0amYyeW4wcGpoaTBoOHQifQ.b_neNrsCyLsE5xtH4684TQ'
  })

  // map layer object defined for control box bellow
  var mapLayers = {
      "Satellite": satLayer,
      "Street View": defaultLayer

    }
    // call to draw a map in map container
  var mymap = L.map('map-container').setView([33.812142, -117.918625], 18);
  // Little control box to switch between maps here
  L.control.layers(mapLayers).addTo(mymap);
  defaultLayer.addTo(mymap);
  satLayer.addTo(mymap);


  // Markers for the maps here 
  var marker = L.marker([33.812142, -117.918625])
    .addTo(mymap);
  marker.bindPopup("<b>Disneyland</b><br>Tomorrowland");
  marker.openPopup();

  var marker1 = L.marker([33.812100, -117.918306])
    .addTo(mymap);

  var marker2 = L.marker([33.812100, -117.918969])
    .addTo(mymap);
  marker2.bindPopup("<b>Disneyland</b><br>Disneyland Park");
  marker2.openPopup();

  // drawing a line here
  var line = [
    [33.812079, -117.916575],
    [33.811569, -117.920190]
  ];

  var style = {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
  }
  var polyline = L.polyline(line, style).addTo(mymap);



});
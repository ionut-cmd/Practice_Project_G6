var platform = new H.service.Platform({ 
    apikey: "vsYIf-nQ3V_jpR4N3YD2bhG80J1deg54EzWv5cP-CD0"    
}); 

const lat = 52.5; 
const lng = 13.4; 

// Obtain the default map types from the platform object: 
var defaultLayers = platform.createDefaultLayers(); 

// Your current position 
var myPosition = {lat: lat, lng: lng}; 

// Instantiate (and display) a map object: 
var map = new H.Map( 
    document.getElementById('mapContainer'), 
    defaultLayers.vector.normal.map, 
    { 
        zoom: 11, 
        center: myPosition 
    }); 

var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US'); 
var mapEvents = new H.mapevents.MapEvents(map); 
var behavior = new H.mapevents.Behavior(mapEvents); 

const marker = new H.map.Marker({lat: lat, lng: lng}); 

map.addObject(marker); 

marker.addEventListener('tap', function(evt) { 

// Create an info bubble object at a specific geographic location: 
var bubble = new H.ui.InfoBubble({ lng: lng, lat: lat }, { 
        content: '' 
     }); 
// Add info bubble to the UI: 
ui.addBubble(bubble); 

const marker = new H.map.Marker({lat: lat, lng: lng});
map.addObject(marker);
});
// 'map.js'
// nicolas roldos


mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb3dhdmVtb3VudGFpbiIsImEiOiJUNU4weWUwIn0.hCfIMb-MMJqmDjhoMKEpug'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-54.93518, -34.94012],
    zoom: 11
});


map.on('load', function() {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-54.95315, -34.97284]
                    },
                    "properties": {
                        "title": "",
                        "icon": "harbor"
                    }
                }]
            } 
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.4],
            "text-anchor": "top"
        }
    });
});

 var mapU = new mapboxgl.Map({

    container: 'mapU',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-56.227, -34.820],
    zoom: 7
});



mapU.on('load', function() {

    mapU.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-56.2267, -34.8203]
                    },
                    "properties": {
                        "title": "",
                        "icon": "pin"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.4],
            "text-anchor": "top"
        }
    });
});

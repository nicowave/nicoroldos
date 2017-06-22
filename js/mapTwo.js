mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb3dhdmVtb3VudGFpbiIsImEiOiJUNU4weWUwIn0.hCfIMb-MMJqmDjhoMKEpug'

// map of Southern California
var mapCa = new mapboxgl.Map({
    container: 'mapCa',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-118.6919205, 34.0201812],
    zoom: 7
});

mapCa.on('load', function() {

    mapCa.addLayer({
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
                        "coordinates": [-118.6919205, 34.0201812]
                    },
                    "properties": {
                        "title": "",
                        "icon": "marker"
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

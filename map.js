/* First, define what constitutes a small screen.
This will affect the zoom parameter for each chapter. */

var smallMedia = window.matchMedia("(max-width: 600px)").matches;

/* Next, create two variables that will hold:
1. The different types of layers available to Mapbox and their
respective opacity attributes.
2. The possible alignments which could be applied to the vignettes.*/

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

/* The next two functions help turn on and off individual
layers through their opacity attributes: The first one gets
the type of layer and the second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story', 'features' and 'header' elements
var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
features.setAttribute("id", "features");

// If the content exists, then assign it to the 'header' element
// Note how each one of these are assigning 'innerHTML'
if (config.topTitle) {
  var topTitle = document.createElement("div");
  topTitle.innerHTML = config.topTitle;
  header.appendChild(topTitle);
}
if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}
if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}
if (config.byline) {
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

// If after this, the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
  /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  // Adds a class to the vignette
  chapter.classList.add("br3");
  // Adds all the content to the vignette's div
  chapter.innerHTML = record.chapterDiv;
  // Sets the id for the vignette and adds the step css attribute
  container.setAttribute("id", record.id);
  container.classList.add("step");
  // If the chapter is the first one, set it to active
  if (idx === 0) {
    container.classList.add("active");
  }
  // Adds the overall theme to the chapter element
  chapter.classList.add(config.theme);
  /* Appends the chapter to the container element and the container
    element to the features element */
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement("div");

// This assigns all the content to the footer element
if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

// Creates a variable to hold the starting zoom value
var startingZoom;
// If the screen size is small, it uses the `zoomSmall` value
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

/* This section creates the map element with the
attributes from the main section of the config.js file */
var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
  // Add 3d terrain if necessary
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    // Add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    // Add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  }

  map.loadImage(
    'images/rec.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.

      map.addImage('red_circle', image);

      // Add a data source containing one point feature.
      map.addSource('Russia_point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [37.6, 55.7]
              }
            }]
        }
      });
      map.addSource('Ukraine_point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [30.509, 50.467]
              }
            }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'russia_circle',
        'type': 'symbol',
        'source': 'Russia_point', // reference the data source
        'layout': {
          'icon-image': 'red_circle', // reference the image
          'icon-size': 1
        }
      });
      map.addLayer({
        'id': 'ukraine_circle',
        'type': 'symbol',
        'source': 'Ukraine_point', // reference the data source
        'layout': {
          'icon-image': 'red_circle', // reference the image
          'icon-size': 1
        }
      });
    });


  map.loadImage(
    'images/russia_wheat.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.

      map.addImage('Russia_Wheat', image);

      // Add a data source containing one point feature.
      map.addSource('Russia_Wheat_point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [75, -15]
              }
            }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'Russia_label',
        'type': 'symbol',
        'source': 'Russia_Wheat_point', // reference the data source
        'layout': {
          'icon-image': 'Russia_Wheat', // reference the image
          'icon-size': 1
        }
      });
    });

  map.loadImage(
    'images/Ukraine_maize.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.

      map.addImage('Ukraine_maize', image);

      // Add a data source containing one point feature.
      map.addSource('Ukraine_maize_point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [60, 6]
              }
            }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'Ukraine_label',
        'type': 'symbol',
        'source': 'Ukraine_maize_point', // reference the data source
        'layout': {
          'icon-image': 'Ukraine_maize', // reference the image
          'icon-size': 1
        }
      });
    });

  map.loadImage(
    'images/dependency_legend.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.

      map.addImage('dependency_legend', image);

      // Add a data source containing one point feature.
      map.addSource('dependency_legend_point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [165, -20]
              }
            }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'dependency_legend_label',
        'type': 'symbol',
        'source': 'dependency_legend_point', // reference the data source
        'layout': {
          'icon-image': 'dependency_legend', // reference the image
          'icon-size': 0.5
        }
      });
    });

  map.loadImage(
    'images/hunger_legend.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.

      map.addImage('hunger_legend', image);

      // Add a data source containing one point feature.
      map.addSource('hunger_legend_point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-15, -20]
              }
            }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'hunger_legend_label',
        'type': 'symbol',
        'source': 'hunger_legend_point', // reference the data source
        'layout': {
          'icon-image': 'hunger_legend', // reference the image
          'icon-size': 0.5
        }
      });
    });

  map.addSource('boundary', {
    'type': 'geojson',
    'data': 'large_data/countries_Ukraine_Russia.geojson'
  });

  map.addSource('population', {
    'type': 'geojson',
    'data': 'large_data/countries_crop_longer.geojson'
  });

  map.addSource('hunger', {
    'type': 'geojson',
    'data': 'large_data/hunger_map_data.geojson'
  });

  map.addSource('label_points', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          "properties": { 'name': 'Moscow' },
          'geometry': {
            'type': 'Point',
            'coordinates': [37.6, 54.9]
          }
        },
        {
          'type': 'Feature',
          "properties": { 'name': 'Kyiv' },
          'geometry': {
            'type': 'Point',
            'coordinates': [30.509, 49.9]
          }
        }]
    }
  });


  map.addLayer({
    id: 'Capital_labels',
    type: 'symbol',
    source: 'label_points',
    layout: {
      'text-field': ['get', 'name'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'visibility': 'visible'
    },
    paint: {
      'text-color': 'rgba(0,0,0,0.5)',
      'text-opacity': 1
    },
  });

  map.addLayer(
    {
      'id': 'boundary_map',
      'source': 'boundary',
      'type': 'fill',
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': [
          'match',
          ['get', 'ADMIN'],
          'Russia',
          '#b7b7a4',
          'Ukraine',
          '#ffe8d6',
          '#ccc'
        ],
        'fill-opacity': 0.65
      }
    },
    'country-label'
  );

  map.addLayer(
    {
      'id': 'Ru_proportion_Wheat',
      'source': 'population',
      'type': 'fill',
      'layout': {
        'visibility': 'visible',
      },
      'filter': ["all", ['==', 'Reporter_Countries', 'Russian Federation'], ['==', 'variable', 'proportion'], ['==', 'Item', 'Wheat']],
      'paint': {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'value'],
          0,
          '#F2F12D',
          0.1,
          '#EED322',
          0.2,
          '#E6B71E',
          0.3,
          '#DA9C20',
          0.4,
          '#CA8323',
          0.5,
          '#B86B25',
          0.6,
          '#A25626',
          0.7,
          '#8B4225',
          1,
          '#723122'
        ],
        'fill-opacity': 0
      }
    },
    'country-label'
  );

  map.addLayer(
    {
      'id': 'Uk_proportion_Maize',
      'source': 'population',


      'type': 'fill',
      'layout': {
        'visibility': 'visible'
      },

      'filter': ["all", ['==', 'Reporter_Countries', 'Ukraine'], ['==', 'variable', 'proportion'], ['==', 'Item', 'Maize']],
      'paint': {

        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'value'],
          0,
          '#F2F12D',
          0.1,
          '#EED322',
          0.2,
          '#E6B71E',
          0.3,
          '#DA9C20',
          0.4,
          '#CA8323',
          0.5,
          '#B86B25',
          0.6,
          '#A25626',
          0.7,
          '#8B4225',
          1,
          '#723122'
        ],
        'fill-opacity': 0
      }
    },
    'country-label'
  );

  map.addLayer(
    {
      'id': 'hunger_map',
      'source': 'hunger',
      'type': 'fill',
      'layout': {
        'visibility': 'visible'
      },

      'paint': {
        'fill-color': [
          'match',
          ['get', 'cs_new'],
          88,
          '#FFFFFF',
          1,
          '#fce6e2',
          2,
          '#e99e8e',
          3,
          '#d66e5a',
          4,
          '#be3929',
          99,
          '#ccc',
          '#ccc'

        ],
        'fill-opacity': 0
      }
    },
    'country-label'
  );
  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {

      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      let thisZoom;
      if (smallMedia) {
        thisZoom = chapter.location.zoomSmall;
      } else {
        thisZoom = chapter.location.zoom;
      }
      thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || "flyTo"](thisLocation);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", function () {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener("resize", scroller.resize);
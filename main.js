import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { Tile as TileLayer } from 'ol/layer.js';
import OSM from 'ol/source/OSM.js';
import { MapboxVectorLayer } from 'ol-mapbox-style';

const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new MapboxVectorLayer({
    // The service does not require any access tokens _and_ does not support any other query parameters.
    // ol-mapbox-style guesses that `f=mbs` is the access token and incorrectly passes it in tile requests;
    // overriding the expected 'f=mvt' (see style json) for those requests.
    // Because the service does not support any other query parameters, we cannot add e.g. '&foo=' to disable the
    // default behavior.
    styleUrl: "https://demo.ldproxy.net/strassen/styles/default?f=mbs",
    //accessToken: null
  })
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [848890, 6793350],
    zoom: 10,
  }),
});

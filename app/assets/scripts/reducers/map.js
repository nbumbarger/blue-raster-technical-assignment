import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';

import { CREATE_MAP } from '../actions';
import { mapDefaults } from '../constants';

import { dcBoundary } from '../utils/layers';

export const initialState = {

};

export default (state = initialState, action) => {
  state = Object.assign({}, state);

  switch (action.type) {

    case CREATE_MAP:
      const mapCtrl = new MapView({
        container: action.domNode,
        map: new EsriMap({
          basemap: mapDefaults.basemap,
          layers: [ dcBoundary.layer ]
        }),
        center: mapDefaults.center,
        zoom: mapDefaults.zoom
      })
      mapCtrl.on('click', (event) => {
        mapCtrl.hitTest(event)
          .then((response) => response.results[0].graphic)
          .then((feature) => console.log(feature))
      });
      return {
        mapCtrl
      };

    default:
      return state;
  }
};

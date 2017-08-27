import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import { set } from 'object-path';

import { mapDefaults } from '../constants';
import { dcBoundary, parks, schools, police } from '../utils/layers';

import {
  CREATE_MAP,
  UPDATE_SELECTED_FEATURE } from '../actions';


export const initialState = {
  selectedFeature: {}
};

export default (state = initialState, action) => {
  state = Object.assign({}, state);

  switch (action.type) {
    case CREATE_MAP:
      const mapCtrl = new MapView({
        container: action.domNode,
        map: new EsriMap({
          basemap: mapDefaults.basemap,
          layers: [
            dcBoundary.layer,
            parks.layer,
            schools.layer,
            police.layer
          ]
        }),
        center: mapDefaults.center,
        zoom: mapDefaults.zoom
      })
      set(state, 'mapCtrl', mapCtrl)
      break

    case UPDATE_SELECTED_FEATURE:
      set(state, 'selectedFeature', action.selectedFeature)
      break

    default:
      return state
  }
  return state
};

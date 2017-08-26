'use strict';
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';

import { CREATE_MAP } from '../actions';

export const initialState = {

};

export default (state = initialState, action) => {
  state = Object.assign({}, state);

  switch (action.type) {
    case CREATE_MAP:
      return {
        mapCtrl: new MapView({
          container: action.domNode,
          map: new EsriMap({
            basemap: 'topo'
          }),
          center: [-98, 37],
          zoom: 5
        })
      };
  }

  return state;
};

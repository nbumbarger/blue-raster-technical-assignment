import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import { set } from 'object-path';
import _ from 'lodash';

import { mapDefaults } from '../constants';
import { dcBoundary, parks, schools, police } from '../utils/layers';

import {
  CREATE_MAP,
  POPULATE_FILTERS,
  UPDATE_ACTIVE_FILTERS,
  UPDATE_SELECTED_FEATURE } from '../actions';

export const initialState = {
  layers: {
    dcBoundary: dcBoundary.layer,
    parks: parks.layer,
    schools: schools.layer,
    police: police.layer
  },
  activeFilters: {},
  selectedFeature: {}
};

export default (state = initialState, action) => {
  state = Object.assign({}, state);

  switch (action.type) {
    case CREATE_MAP:
      let mapCtrl = new MapView({
        container: action.domNode,
        map: new EsriMap({
          basemap: mapDefaults.basemap,
          layers: [
            state.layers.dcBoundary,
            state.layers.parks,
            state.layers.schools,
            state.layers.police
          ]
        }),
        center: mapDefaults.center,
        zoom: mapDefaults.zoom
      });
      set(state, 'mapCtrl', mapCtrl);
      break;

    case POPULATE_FILTERS:
      const { parks, schools } = state.layers;
      Promise.all([
        parks.queryFeatures(parks.createQuery()),
        schools.queryFeatures(schools.createQuery())
      ])
      .then(([parksRes, schoolsRes]) => {
        const filters = {
          parks: _.uniq(parksRes.features.map((feature) => feature.attributes.USE_TYPE)),
          schools: _.uniq(schoolsRes.features.map((feature) => feature.attributes.FACUSE))
        };
        set(state, 'filters', filters);
        set(state, 'activeFilters', filters);
      });
      break;

    case UPDATE_ACTIVE_FILTERS:
      const queryForGeometries = (category) => {
        const query = state.layers[category].createQuery();
        return state.layers[category].queryFeatures(query)
          .then((res) => res.features.map((feature) => feature.geometry));
      };
      if (action.type) {
        const setDefinitionExpression = (newValues, category, queryField) => {
          newValues = newValues[category];
          const query = newValues.map((val) => `${queryField} = '${val}' OR `).join('').slice(0, -3);
          state.layers[category].definitionExpression = query;
          if (!state.layers[category].visible) {
            state.layers[category].visible = true;
          }
          return queryForGeometries(category);
        };
        const queryField = {parks: 'USE_TYPE', schools: 'FACUSE'}[action.category];
        setDefinitionExpression(action.filters, action.category, queryField);
      }

      set(state, 'activeFilters', action.filters);
      break;

    case UPDATE_SELECTED_FEATURE:
      set(state, 'selectedFeature', action.selectedFeature);
      break;

    default:
      return state;
  }

  return state;
};

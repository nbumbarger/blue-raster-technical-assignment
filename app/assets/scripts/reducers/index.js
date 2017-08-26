'use strict';

import { combineReducers } from 'redux';

import map from './map';

export const reducers = {
  map
};

export default combineReducers(Object.assign({}, reducers, {
}));

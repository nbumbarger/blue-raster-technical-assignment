export const CREATE_MAP = 'CREATE_MAP';
export const POPULATE_FILTERS = 'POPULATE_FILTERS';
export const UPDATE_ACTIVE_FILTERS = 'UPDATE_ACTIVE_FILTERS';
export const UPDATE_SELECTED_FEATURE = 'UPDATE_SELECTED_FEATURE';

export const createMap = (domNode) => {
  return {
    type: 'CREATE_MAP',
    domNode
  };
};

export const populateFilters = () => {
  return {
    type: 'POPULATE_FILTERS'
  };
};

export const updateActiveFilters = (filters) => {
  return {
    type: 'UPDATE_ACTIVE_FILTERS',
    filters
  };
};

export const updateSelectedFeature = (selectedFeature) => {
  return {
    type: 'UPDATE_SELECTED_FEATURE',
    selectedFeature
  };
};

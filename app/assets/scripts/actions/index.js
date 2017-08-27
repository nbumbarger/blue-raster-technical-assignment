export const CREATE_MAP = 'CREATE_MAP';
export const UPDATE_SELECTED_FEATURE = 'UPDATE_SELECTED_FEATURE';

export const createMap = (domNode) => {
  return {
    type: 'CREATE_MAP',
    domNode
  };
};

export const updateSelectedFeature = (selectedFeature) => {
  return {
    type: 'UPDATE_SELECTED_FEATURE',
    selectedFeature
  };
};

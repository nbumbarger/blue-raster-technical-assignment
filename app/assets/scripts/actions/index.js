'use strict';
export const CREATE_MAP = 'CREATE_MAP';

export const createMap = (domNode) => {
  return {
    type: 'CREATE_MAP',
    domNode
  };
};

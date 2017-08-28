import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { updateActiveFilters } from '../actions';

export const FilterControl = (props) => {

  const handleFilterSelection = (checked, filter, category) => {
    let { activeFilters, dispatch } = props;
    activeFilters = Object.assign({}, activeFilters);

    const newFilters = checked
      ? activeFilters[category].filter(opt => opt !== filter)
      : activeFilters[category].concat(filter);

    activeFilters[category] = newFilters;
    dispatch(updateActiveFilters(activeFilters));
  };

  return (
    <section className='filter-control'>
      <h2>Filters</h2>
      {_.map(props.filters, (filters, category) => {
        return (
          <div className='filters-inner' key={`filter-group-${category}`}>
            <h3>{category}</h3>
            {filters.sort().map((filter) => {
              if (!filter) filter = 'unclassified';
              const filterChecked = props.activeFilters[category].includes(filter);
              return (
                <div className='filters__check-group' key={filter + '-check-group'}>
                  <input
                    type='checkbox'
                    name={filter + '-check'}
                    value={filter}
                    checked={filterChecked}
                    onChange={handleFilterSelection.bind(this, filterChecked, filter, category)} />
                  <label>{filter}</label>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

FilterControl.propTypes = {
  filters: PropTypes.object,
  activeFilters: PropTypes.object,
  dispatch: PropTypes.func
};


export default FilterControl;

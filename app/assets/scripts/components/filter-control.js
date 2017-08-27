import React from 'react';

export const FilterControl = (props) => {
  console.log('control', props.filters)
  return (
    <section className='filter-control'>
      <h2>Filters</h2>
      <p>{JSON.stringify(props.filters)}</p>
    </section>
  );
};

export default FilterControl;

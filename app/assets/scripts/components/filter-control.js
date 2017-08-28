// import React from 'react';
// import _ from 'lodash';
//
// export const FilterControl = (props) => {
//   return (
//     <section className='filter-control'>
//       <h2>Filters</h2>
//       {_.map(props.filters, (filters, category) => {
//         return (
//           <div>
//             <h3>{category}</h3>
//             {filters.map((filter) => filter)}
//           </div>
//         )
//       })}
//     </section>
//   );
// };
//
// export default FilterControl;

import React from 'react';
import _ from 'lodash';

export const FilterControl = (props) => {
  return (
    <section className='filter-control'>
      <h2>Filters</h2>
      {_.map(props.filters, (filters, category) => {
        return (
          <div className='filters-inner'>
            <h3>{category}</h3>
            {filters.map((filter) => {
              return (
                <div className='filters__check-group' key={filter + '-check-group'}>
                  <input
                    type='checkbox'
                    name={filter + '-check'}
                    value={filter} />
                  <label>{filter}</label>
                </div>
              )
            })}
          </div>
        )
      })}
    </section>
  );
};

export default FilterControl;

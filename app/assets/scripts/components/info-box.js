import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export const InfoBox = (props) => {
  const { type, attributes } = props;
  let row = 0;
  return (
    <section className='info-box'>
      <h2 className={type}>{type} Feature</h2>
      <table><tbody>
      {_.map(attributes, (val, key) => {
        row++;
        if (key !== 'OBJECTID') {
          return (
            <tr key={`row-${key}`} className={row % 2 ? '' : 'alt'}>
              <td>{key}</td>
              <td>{val}</td>
            </tr>
          );
        }})}
      </tbody></table>
    </section>
  );
};

InfoBox.propTypes = {
  type: PropTypes.string,
  attributes: PropTypes.object
};

export default InfoBox;

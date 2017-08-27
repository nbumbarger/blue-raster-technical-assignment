import React from 'react';
import PropTypes from 'prop-types';

export const InfoBox = (props) => {
  return (
    <section className='info-box'>
      <h2>{props.title}</h2>
    </section>
  );
};

InfoBox.propTypes = {
  title: PropTypes.string
};

export default InfoBox;

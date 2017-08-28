import React from 'react';
import PropTypes from 'prop-types';

export const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
